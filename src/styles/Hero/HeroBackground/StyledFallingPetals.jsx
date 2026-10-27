import styled from 'styled-components';

// Sits above Fuji and the branch (z-index 1000/100) but below the lantern and
// hero text (1499/1500), so petals never cover the content or block clicks.
export const StyledFallingPetals = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1450;
`;
