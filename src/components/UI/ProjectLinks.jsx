import GithubSVG from '/src/assets/icons/github.svg';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';

// Renders only the links a project actually has (none for confidential work).
const ProjectLinks = ({ project }) => {
  if (!project.repository && !project.livelink) return null;

  return (
    <ul>
      {project.repository && (
        <li>
          <a
            href={project.repository}
            aria-label='Github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubSVG />
          </a>
        </li>
      )}
      {project.livelink && (
        <li>
          <a
            href={project.livelink}
            aria-label='Live website'
            target='_blank'
            rel='noreferrer noopener'
          >
            <ExternalLinkSVG />
          </a>
        </li>
      )}
    </ul>
  );
};

export default ProjectLinks;
