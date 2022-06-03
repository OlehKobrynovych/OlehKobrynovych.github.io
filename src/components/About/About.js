import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, title, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

<div className='about__contact center'>
        {resume && (
          <a href={resume} title='Go to resume'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                title='Go to GitHub'
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                title='Go to Linkedin'
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            
            {social.upwork && (
              <a
                title='Go to Upwork'
                href={social.upwork}
                aria-label='upwork'
                className='link link--icon'
              >
                <WorkIcon />
              </a>
            )}
          </>
        )}
      </div>

      {title && <h2 className='about__title'>{title}</h2>}
      <p className='about__desc about__desc-desc'>{description && description}</p>

      <h2 className='about__title'>EDUCATION</h2>
      <p className='about__desc'>{about.education}</p>
      <p className='about__desc'>{about.specialist}</p>
    </div>
  )
}

export default About
