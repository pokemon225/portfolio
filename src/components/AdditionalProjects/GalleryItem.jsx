import ExpandSVG from '/src/assets/icons/maximize-2.svg';
import ProjectTile from '../UI/ProjectTile';
import ProjectLinks from '../UI/ProjectLinks';
import { StyledHighlights } from '../../styles/UI/StyledHighlights';
import { StyledGalleryCard } from '../../styles/AdditionalProjects/GalleryCard/StyledGalleryCard';
import { StyledCardHeader } from '../../styles/AdditionalProjects/GalleryCard/StyledCardHeader';
import { StyledThumbnail } from '../../styles/AdditionalProjects/GalleryCard/StyledThumbnail';
import { StyledOpenCardBackground } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenCardBackground';
import { StyledOpenCardDescription } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenCardDescription';
import { StyledOpenContainer } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenContainer';
import { StyledOpenTitleContainer } from '../../styles/AdditionalProjects/ExpandedProjectCard/StyledOpenTitleContainer';
import { childProjectVariants } from '../../utils/animations';
import { useState } from 'react';
import { useRef } from 'react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const GalleryItem = ({ project, details }) => {
  const { t } = useTranslation();
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  // Prevents background scrolling while expanded card is visible
  const setNoScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  const setScroll = () => {
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      <StyledGalleryCard
        key={crypto.randomUUID()}
        variants={childProjectVariants}
        ///////////
        ref={card}
        isCardOpened={isCardOpened}
        layout
      >
        <StyledCardHeader isCardOpened={isCardOpened} layout='position'>
          <h4 title={project.title}>{project.title}</h4>
          <button
            onClick={() => {
              setIsCardOpened(true);
              setNoScroll();
              if (!isCardOpened) {
                setCardDimensions({
                  width: card.current.clientWidth,
                  height: card.current.clientHeight,
                });
              }
            }}
          >
            {t('learn-more')}
            <ExpandSVG />
          </button>
        </StyledCardHeader>
        <StyledThumbnail layout='scale' isCardOpened={isCardOpened}>
          <ProjectTile project={project} mobile={false} />
        </StyledThumbnail>
        {isCardOpened && (
          <StyledOpenContainer>
            <StyledOpenTitleContainer>
              <div>
                <span>{details.period}</span>
                <h3 title={project.title}>{project.title}</h3>
              </div>
              <ProjectLinks project={project} />
            </StyledOpenTitleContainer>
            <StyledOpenCardDescription
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>{details.description}</p>
              <StyledHighlights>
                {details.highlights?.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </StyledHighlights>
              <ul>
                {project.technologies.map(tech => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
            </StyledOpenCardDescription>
          </StyledOpenContainer>
        )}
      </StyledGalleryCard>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <StyledOpenCardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setIsCardOpened(false);
              setScroll();
            }}
          />
        </Fragment>
      )}
    </>
  );
};

export default GalleryItem;
