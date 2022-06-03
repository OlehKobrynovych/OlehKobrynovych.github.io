import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
        <img className='project__foto' src={project.foto} />

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item, index) => (
          <li key={index} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className='project__btnWrap'>
      {project.sourceCode && (
        <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
        href={project.livePreview}
        aria-label='live preview'
        className='link--icon'
        >
          <div className='btn btn btn--outline project__demobtn'>DEMO</div>
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer
