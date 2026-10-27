import styled from 'styled-components';

export const StyledOpenTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  & span {
    display: block;
    margin-bottom: 0.8rem;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: ${props => props.theme.primary.span};
  }

  & > div {
    min-width: 0;
  }

  & h3 {
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media ${props => props.theme.bp.tabletS} {
      font-size: clamp(1.5rem, 4.4vw, 2.4rem);
    }
  }
  & ul {
    display: flex;
    gap: 2rem;
    line-height: 1;

    & svg {
      @media ${props => props.theme.bp.mobileL} {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
  }
`;
