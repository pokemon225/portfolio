import { StyledProjectTile } from '../../styles/UI/StyledProjectTile';

// Shows the project screenshot when there is one, otherwise a generated tile.
const ProjectTile = ({ project, mobile = true }) => {
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
        <img src={project.imageUrl} alt={project.title} />
      </picture>
    );
  }

  return (
    <StyledProjectTile
      className='project-tile'
      role='img'
      aria-label={project.title}
    >
      <small>{project.category}</small>
      <strong>{project.label}</strong>
    </StyledProjectTile>
  );
};

export default ProjectTile;
