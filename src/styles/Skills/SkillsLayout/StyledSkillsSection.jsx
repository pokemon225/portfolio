import styled, { css } from 'styled-components';

export const StyledSkillsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  place-items: center;
  padding: 12rem 0 14rem 0;
  background-image: linear-gradient(
      to top,
      rgb(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.05) 13%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.75) 90%
    ),
    url('/wisp.webp');

  ${props =>
    props.pageTheme === 'dark' &&
    css`
      background-image: linear-gradient(
          to bottom,
          rgba(40, 62, 81, 0.8) 20%,
          rgba(40, 62, 81, 0.5),
          rgba(40, 62, 81, 0.9)
        ),
        url('/wisp.webp');
    `}

  background-repeat: no-repeat;
  background-position: center;
  @media ${props => props.theme.bp.desktopXS} {
    padding-top: 8rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    padding-bottom: 4rem;
    padding-top: 0;
  }
`;

export const StyledSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  max-width: 100rem;
  padding: 0 2rem;
`;

export const StyledSkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

  & h3 {
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.primary.h2};
    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.3rem;
    }
  }
`;
