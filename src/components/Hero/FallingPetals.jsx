import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { StyledFallingPetals } from '../../styles/Hero/HeroBackground/StyledFallingPetals';
import { drawPetal, random, randomPetalColor } from '../../utils/sakura';

// One petal per this many px of hero width, within the limits below
const WIDTH_PER_PETAL = 45;
const MIN_PETALS = 10;
const MAX_PETALS = 36;
// Deeper pink edge so petals stand out against the pink light-mode sky
const PETAL_OUTLINE = 'rgba(214, 92, 134, 0.75)';

const createPetal = (width, height, scatter) => ({
  x: random(0, width),
  // On first paint scatter petals over the whole hero so it isn't empty;
  // afterwards new petals start just above the top edge.
  y: scatter ? random(-height * 0.1, height) : random(-60, -10),
  vx: random(0.15, 0.6),
  vy: random(0.45, 1.1),
  size: random(6, 12),
  rotation: random(0, Math.PI * 2),
  spin: random(-0.025, 0.025),
  swayPhase: random(0, Math.PI * 2),
  swaySpeed: random(0.012, 0.025),
  swayAmount: random(0.3, 0.9),
  flipSpeed: random(0.015, 0.04),
  color: randomPetalColor(),
  alpha: random(0.75, 1),
  age: random(0, 1000),
});

const FallingPetals = () => {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let petals = [];
    let width = 0;
    let height = 0;
    let frameId = null;
    let lastTime = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        MAX_PETALS,
        Math.max(MIN_PETALS, Math.round(width / WIDTH_PER_PETAL))
      );
      if (!petals.length) {
        petals = Array.from({ length: count }, () =>
          createPetal(width, height, true)
        );
      } else {
        petals = petals.slice(0, count);
        while (petals.length < count) petals.push(createPetal(width, height));
      }
    };

    const animate = time => {
      // Scale movement by elapsed time so speed is the same on 60Hz and 120Hz
      // screens; clamp so a long pause doesn't make petals jump.
      const step = lastTime === null ? 1 : Math.min((time - lastTime) / 16.7, 3);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      petals.forEach((petal, i) => {
        petal.age += step;
        petal.x +=
          (petal.vx +
            Math.sin(petal.age * petal.swaySpeed + petal.swayPhase) *
              petal.swayAmount) *
          step;
        petal.y += petal.vy * step;
        petal.rotation += petal.spin * step;

        if (petal.y > height + 20 || petal.x > width + 20) {
          petals[i] = createPetal(width, height);
          return;
        }
        drawPetal(
          ctx,
          petal,
          Math.abs(Math.cos(petal.age * petal.flipSpeed)),
          petal.alpha,
          PETAL_OUTLINE
        );
      });
      frameId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (frameId === null) {
        lastTime = null;
        frameId = requestAnimationFrame(animate);
      }
    };
    const stop = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };

    // Only animate while the hero is on screen
    const visibility = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    const sizeObserver = new ResizeObserver(resize);

    resize();
    visibility.observe(canvas);
    sizeObserver.observe(canvas);
    return () => {
      stop();
      visibility.disconnect();
      sizeObserver.disconnect();
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;
  return <StyledFallingPetals ref={canvasRef} aria-hidden='true' />;
};

export default FallingPetals;
