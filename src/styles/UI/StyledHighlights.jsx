import styled from 'styled-components';

// Doubled selector so it wins over the tech-tag "& ul" rules of the
// project card containers it sits inside.
export const StyledHighlights = styled.ul`
  && {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin: 1.4rem 0 0;
    padding: 0;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
  }

  && li {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.primary.p};
    font-weight: 500;
  }

  && li::before {
    content: '— ';
    color: ${props => props.theme.tertiary.projectBorder};
  }
`;
