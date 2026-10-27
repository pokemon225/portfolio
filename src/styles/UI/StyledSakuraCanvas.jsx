import styled from 'styled-components';

// Full-screen overlay for the cursor petal trail; never blocks clicks.
export const StyledSakuraCanvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10000003;
`;
