import styled from 'styled-components';

// Round portrait above the about text, framed like the template's photos
export const StyledAboutPortrait = styled.picture`
  display: block;
  width: 17rem;
  height: 17rem;
  margin-bottom: 1.6rem;
  border-radius: 50%;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0.4rem 0.8rem 2.2rem -0.9rem rgba(0, 0, 0, 0.75);
    outline: 0.6rem solid ${props => props.theme.neutrals.imageBorder};
  }

  @media ${props => props.theme.bp.desktopXS} {
    align-self: center;
  }
  @media ${props => props.theme.bp.mobileL} {
    width: 14rem;
    height: 14rem;
  }
`;
