import './Footer.css'

const Footer = () => {
  let date = (new Date().getFullYear())
  return (
          <footer className='footer'>
          <a
            href='https://github.com/OlehKobrynovych'
            className='link footer__link'
            >
            Created By Oleh Kobrynovych
          </a>
          <p>Copyright © {date}</p>
        </footer>
      )
}

export default Footer
