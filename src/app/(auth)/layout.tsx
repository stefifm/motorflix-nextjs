import { type ReactNode } from 'react'
import Background from '../../../public/background-image.jpg'
import Logo from '../../../public/logo-motorflix.png'

export default function AuthLayout ({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <img
        src={Background.src}
        alt="background image"
        className='hidden sm:flex sm:object-cover -z-10 w-full h-full absolute brightness-50'
      />
      <img
        src={Logo.src}
        alt="MotorFlix Logo"
        className='absolute left-6 -top-10 object-contain w-52 h-52'
      />
      {children}
    </div>
  )
}
