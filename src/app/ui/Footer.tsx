import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer (): JSX.Element {
  return (
    <footer className="bg-gradient-to-r from-black to-lochmara-950 w-full flex items-center justify-center h-20 absolute bottom-0 top-[100%] p-5 mt-12 gap-7">
      <p className="text-lochmara-50 font-bold">&copy; Stefania Verónica Bruera</p>
      <div className='flex gap-4 text-lg'>
        <a href="">
          <FaGithub className="text-lochmara-50" />
        </a>
        <a href="">
          <FaTwitter className="text-lochmara-50" />
        </a>
        <a href="">
          <FaLinkedin className="text-lochmara-50" />
        </a>
      </div>
    </footer>
  )
}
