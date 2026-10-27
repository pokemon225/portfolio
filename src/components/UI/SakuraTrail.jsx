import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { StyledSakuraCanvas } from '../../styles/UI/StyledSakuraCanvas';
import { drawPetal, random, randomPetalColor } from '../../utils/sakura';

const MAX_PETALS = 90;
// Cursor distance (px) between spawned petals
const SPAWN_DISTANCE = 14;

const createPetal = (x, y, dx, dy) => ({
  x,
  y,
  // Inherit a little of the cursor's motion so petals trail behind it
  vx: random(-0.6, 0.6) + dx * 0.05,
  vy: random(0.3, 1.1) + dy * 0.03,
  size: random(5, 9),
  rotation: random(0, Math.PI * 2),
  spin: random(-0.06, 0.06),
  swayPhase: random(0, Math.PI * 2),
  // Squash factor gives the illusion of the petal tumbling in 3D
  flipSpeed: random(0.03, 0.08),
  color: randomPetalColor(),
  age: 0,
  lifespan: random(90, 150),
});

const SakuraTrail = () => {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Mouse/trackpad only: skip touch devices and reduced-motion users
    if (shouldReduceMotion || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const petals = [];
    let frameId = null;
    let lastX = null;
    let lastY = null;
    let travelled = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = petals.length - 1; i >= 0; i--) {
        const petal = petals[i];
        petal.age++;
        petal.vy += 0.012;
        petal.x += petal.vx + Math.sin(petal.age * 0.05 + petal.swayPhase) * 0.6;
        petal.y += petal.vy;
        petal.rotation += petal.spin;
        if (petal.age >= petal.lifespan) {
          petals.splice(i, 1);
        } else {
          drawPetal(
            ctx,
            petal,
            Math.abs(Math.cos(petal.age * petal.flipSpeed)),
            Math.max(0, 1 - petal.age / petal.lifespan) * 0.9
          );
        }
      }
      // Stop the loop once every petal has faded; mouse movement restarts it
      frameId = petals.length ? requestAnimationFrame(animate) : null;
    };

    const handleMouseMove = e => {
      if (lastX === null) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      travelled += Math.hypot(dx, dy);
      lastX = e.clientX;
      lastY = e.clientY;

      let spawned = 0;
      while (travelled >= SPAWN_DISTANCE && spawned < 3) {
        travelled -= SPAWN_DISTANCE;
        spawned++;
        if (petals.length >= MAX_PETALS) petals.shift();
        petals.push(
          createPetal(
            e.clientX + random(-6, 6),
            e.clientY + random(-6, 6),
            dx,
            dy
          )
        );
      }
      travelled = Math.min(travelled, SPAWN_DISTANCE);
      if (spawned && frameId === null) frameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;
  return <StyledSakuraCanvas ref={canvasRef} aria-hidden='true' />;
};

export default SakuraTrail;
