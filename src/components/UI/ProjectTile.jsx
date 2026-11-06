import { StyledProjectTile } from '../../styles/UI/StyledProjectTile';

// Shows the project screenshot when there is one, otherwise a generated tile.
// `details` is the translated project entry (title, label, category).
const ProjectTile = ({ project, details, mobile = true }) => {
  if (project.imageUrl) {
    return (
      <picture>
        <source
          srcSet={project.imageUrl}
          type='image/webp'
          media='(min-width: 768px)'
        />
        {mobile && (
          <source
            srcSet={project.mobileUrl ?? project.imageUrl}
            type='image/webp'
            media='(max-width: 768px)'
          />
        )}
        <img src={project.imageUrl} alt={details.title} />
      </picture>
    );
  }

  return (
    <StyledProjectTile
      className='project-tile'
      role='img'
      aria-label={details.title}
    >
      <small>{details.category}</small>
      <strong>{details.label}</strong>
    </StyledProjectTile>
  );
};

export default ProjectTile;
