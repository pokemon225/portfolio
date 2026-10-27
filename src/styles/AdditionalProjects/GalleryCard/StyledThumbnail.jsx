import styled, { css } from 'styled-components';

export const StyledThumbnail = styled.div`
  border-radius: 0.2rem;
  /* Smaller sun, tucked bottom-right so it clears the category label */
  --sun-size: 2.6rem;
  --sun-position: 86% 68%;

  & .project-tile strong {
    font-size: 3.6rem;
    white-space: nowrap;
    padding-right: 6rem;
  }

  & picture,
  & .project-tile {
    border-radius: 0.2rem;
    box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 20%);
    width: auto;
    height: 16.5rem;
    height: 19rem;
    height: 18.5rem;

    ${props =>
      props.isCardOpened &&
      css`
        height: 35rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        & img {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        @media ${props => props.theme.bp.tabletS} {
          height: 25rem;
        }
        @media ${props => props.theme.bp.mobileM} {
          height: 20rem;
        }
      `}
  }
  & img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-fit: fill;
    border-radius: 0.2rem;
  }
`;
