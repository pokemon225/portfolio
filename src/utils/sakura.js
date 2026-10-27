// Shared sakura petal helpers for the cursor trail and the hero petal fall.
export const PETAL_COLORS = ['#f8c3d4', '#f4a7bf', '#fbd9e3', '#ee93b0'];

export const random = (min, max) => Math.random() * (max - min) + min;

export const randomPetalColor = () =>
  PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];

// Sakura petal: rounded body with the characteristic notch at the tip.
// `flip` (0-1) squashes it horizontally so it looks like it's tumbling in 3D.
// `outline` (optional) strokes the edge so petals read on pink backgrounds.
export const drawPetal = (
  ctx,
  { x, y, size, rotation, color },
  flip,
  alpha,
  outline
) => {
  const s = size;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(0.35 + flip * 0.65, 1);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.bezierCurveTo(-s * 0.9, s * 0.4, -s * 0.75, -s * 0.6, -s * 0.18, -s * 0.9);
  ctx.lineTo(0, -s * 0.62);
  ctx.lineTo(s * 0.18, -s * 0.9);
  ctx.bezierCurveTo(s * 0.75, -s * 0.6, s * 0.9, s * 0.4, 0, s);
  ctx.fill();
  if (outline) {
    ctx.strokeStyle = outline;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
  ctx.restore();
};
