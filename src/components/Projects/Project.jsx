import { StyledProjectItem } from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import {
  StyledProjectImageContainer,
  StyledProjectImage,
} from '../../styles/Projects/ProjectImage/StyledProjectImage';
import {
  StyledProjectContent,
  StyledProjectContentBorder,
} from '../../styles/Projects/ProjectContent/StyledProjectContent';
import { StyledProjectDescriptionContainer } from '../../styles/Projects/ProjectContent/StyledProjectDescriptionContainer';
import { StyledHighlights } from '../../styles/UI/StyledHighlights';
import ProjectTile from '../UI/ProjectTile';
import ProjectLinks from '../UI/ProjectLinks';
import {
  projectSlideLeftVariants,
  projectSlideRightVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';
import { useTechName } from '../../utils/useTechName';

const Project = ({ project, details, alternate }) => {
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  const techName = useTechName();
  return (
    <StyledProjectItem
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      whileInView='visible'
      // 'amount' = when about half the component is visible animate
      viewport={{ once: true, amount: 0.4 }}
      variants={
        !alternate ? projectSlideLeftVariants : projectSlideRightVariants
      }
      alternate={alternate}
    >
      <StyledProjectImage pageTheme={theme} alternate={alternate}>
        <StyledProjectImageContainer>
          <ProjectTile project={project} details={details} />
        </StyledProjectImageContainer>
      </StyledProjectImage>
      <StyledProjectContent alternate={alternate}>
        <StyledProjectContentBorder alternate={alternate}>
          <span>{details.period}</span>
          <h3 title={details.title}>{details.title}</h3>
          <StyledProjectDescriptionContainer>
            <p>{details.description}</p>
            <StyledHighlights>
              {details.highlights?.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </StyledHighlights>
          </StyledProjectDescriptionContainer>
          <ul>
            {project.technologies.map(tech => {
              return <li key={tech}>{techName(tech)}</li>;
            })}
          </ul>
          <div>
            <ProjectLinks project={project} />
          </div>
        </StyledProjectContentBorder>
      </StyledProjectContent>
    </StyledProjectItem>
  );
};

export default Project;
