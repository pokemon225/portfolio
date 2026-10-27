import styled from 'styled-components';
import { motion } from 'framer-motion';

// Outermost container
export const StyledTimelineContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 5rem;
  position: relative;
  z-index: 100000;
  @media ${props => props.theme.bp.mobileM} {
    padding: 0 2rem;
  }
`;

export const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  max-width: 46rem;

  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    color: ${props => props.theme.primary.h2};
    margin-bottom: 1.6rem;
  }

  & ol {
    list-style: none;
    border-inline-start: 0.2rem solid
      ${props => props.theme.tertiary.projectBorder};
  }

  & li {
    position: relative;
    padding: 0 0 2rem 2.4rem;

    &:last-child {
      padding-bottom: 0;
    }

    /* Red dot on the timeline rail */
    &::before {
      content: '';
      position: absolute;
      left: -0.7rem;
      top: 0.5rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background-color: ${props => props.theme.tertiary.projectBorder};
    }
  }

  & h4 {
    font-size: 1.7rem;
    line-height: 1.3;
  }

  & p {
    font-size: 1.4rem;
    @media ${props => props.theme.bp.mobileM} {
      font-size: 1.2rem;
    }
  }

  & small {
    display: block;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.primary.span};
    opacity: 0.8;
  }
`;
