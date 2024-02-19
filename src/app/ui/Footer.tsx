import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer (): JSX.Element {
  return (
    <footer className="bg-gradient-to-r from-black to-lochmara-950
    flex items-center justify-center h-16 px-6 py-6
     mt-auto gap-7">
      <p className="text-lochmara-50 font-bold">&copy; Stefania Verónica Bruera</p>
      <div className='flex gap-4 text-lg'>
        <a href="https://github.com/stefifm">
          <FaGithub className="text-lochmara-50" />
        </a>
        <a href="https://twitter.com/stefifm">
          <FaTwitter className="text-lochmara-50" />
        </a>
        <a href="https://www.linkedin.com/in/stefania-bruera">
          <FaLinkedin className="text-lochmara-50" />
        </a>
      </div>
    </footer>
  )
}
