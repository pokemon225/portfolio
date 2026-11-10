// Serves the static site from dist/ and logs page visits (IP + approximate
// location from Cloudflare) to a Google Sheet through an Apps Script web app.
// Logging runs after the response is sent and its errors are ignored, so it
// can never slow down or break the site. See README "Visitor log".

const BOT_PATTERN =
  /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|curl|wget|python/i;

// Only real page loads, not the JS/CSS/images/locale files that follow them
const isPageView = request => {
  if (request.method !== 'GET') return false;
  const dest = request.headers.get('Sec-Fetch-Dest');
  if (dest) return dest === 'document';
  return (request.headers.get('Accept') || '').includes('text/html');
};

const logVisit = (request, env) => {
  const cf = request.cf || {};
  const userAgent = request.headers.get('User-Agent') || '';
  return fetch(env.VISITOR_LOG_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Apps Script answers with a redirect we don't need to follow
    redirect: 'manual',
    body: JSON.stringify({
      token: env.VISITOR_LOG_TOKEN,
      time: new Date().toISOString(),
      ip: request.headers.get('CF-Connecting-IP'),
      city: cf.city,
      region: cf.region,
      country: cf.country,
      postalCode: cf.postalCode,
      latitude: cf.latitude,
      longitude: cf.longitude,
      timezone: cf.timezone,
      network: cf.asOrganization,
      page: new URL(request.url).pathname,
      referrer: request.headers.get('Referer'),
      bot: BOT_PATTERN.test(userAgent),
      userAgent,
    }),
  });
};

export default {
  async fetch(request, env, ctx) {
    const response = await env.ASSETS.fetch(request);
    if (isPageView(request)) {
      if (!env.VISITOR_LOG_URL || !env.VISITOR_LOG_TOKEN) {
        // Shows in Cloudflare → Workers & Pages → portfolio → Logs
        console.log('visitor log: VISITOR_LOG_URL / VISITOR_LOG_TOKEN not set');
      } else {
        ctx.waitUntil(
          logVisit(request, env)
            .then(res => {
              if (res.status >= 400) {
                console.log(`visitor log: sheet answered ${res.status}`);
              }
            })
            .catch(err => console.log(`visitor log failed: ${err.message}`))
        );
      }
    }
    return response;
  },
};
