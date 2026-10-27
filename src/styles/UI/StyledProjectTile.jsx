import styled from 'styled-components';

// Stand-in artwork for projects without screenshots: a red sun over
// seigaiha-style wave arcs. Sized by the picture rules of its container.
export const StyledProjectTile = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  height: 100%;
  width: 100%;
  padding: 2.4rem 2.8rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background-image: radial-gradient(
      circle at var(--sun-position, 72% 20%),
      ${props => props.theme.tertiary.projectBorder} 0 var(--sun-size, 4rem),
      transparent calc(var(--sun-size, 4rem) + 0.1rem)
    ),
    repeating-radial-gradient(
      circle at 50% 160%,
      transparent 0 1.4rem,
      ${props => props.theme.primary.h2}26 1.4rem 1.55rem
    ),
    linear-gradient(
      135deg,
      ${props => props.theme.primary.projectDescBg},
      ${props => props.theme.primary.body}
    );

  & small {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.primary.h2};
  }

  & strong {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: clamp(3rem, 5vw, 5.6rem);
    font-weight: 400;
    line-height: 1.1;
    color: ${props => props.theme.primary.h2};
  }

  @media ${props => props.theme.bp.mobileL} {
    padding: 1.8rem 2rem;
    & small {
      font-size: 1.1rem;
    }
  }
`;
