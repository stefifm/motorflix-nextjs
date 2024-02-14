'use client'
import Link from 'next/link'
import Logo from '../../../public/logo-motorflix.png'
import { usePathname } from 'next/navigation'
import { Bell, Search } from 'lucide-react'
import UserNav from './UserNav'

interface LinkProps {
  name: string
  href: string
}

const links: LinkProps[] = [
  {
    name: 'Inicio',
    href: '/home'
  },
  {
    name: 'WEC',
    href: '/home/wec'
  },
  {
    name: 'IndyCar',
    href: '/home/indycar'
  },
  {
    name: 'F1',
    href: '/home/f1'
  },
  {
    name: 'IMSA',
    href: '/home/imsa'
  },
  {
    name: 'Nuevos',
    href: '/home/recently'
  },
  {
    name: 'Mi Lista',
    href: '/home/user/list'
  }

]

export default function Navbar (): JSX.Element {
  const pathName = usePathname()
  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <section className="flex items-center">
        <Link href='/home' className="w-40">
          <img src={Logo.src} alt="MotorFlix Logo" />
        </Link>
        <ul className='lg:flex gap-x-4 ml-14 hidden'>
          {links.map((link, index) => (
            <div key={index}>
              {pathName === link.href
                ? (
                <li>
                  <Link href={link.href} className="text-lochmara-100 font-bold underline text-md">
                    {link.name}
                  </Link>
                </li>
                  )
                : (
                <li>
                  <Link href={link.href} className="text-lochmara-200/90 font-normal text-md">
                    {link.name}
                  </Link>
                </li>
                  )}
            </div>
          ))}
        </ul>
      </section>

      <section className='flex items-center gap-x-8'>
        <Search className='w-5 h-5 cursor-pointer text-lochmara-100' />
        <Bell className='w-5 h-5 cursor-pointer text-lochmara-100' />
        <UserNav />
      </section>
    </nav>
  )
}
