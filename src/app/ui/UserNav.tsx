'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { type Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { type LinkProps } from './Navbar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {
  session: Session
  links: LinkProps[]
}

export default function UserNav ({ session, links }: Props): JSX.Element {
  const pathname = usePathname()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='relative h-10 w-10 rounded-sm'>
          <Avatar className='h-10 w-10 rounded-sm'>
            <AvatarImage
              className='object-cover'
              src={
                session.user?.image ??
                'https://owtufeeddszaauctalqp.supabase.co/storage/v1/object/public/user%20image/profile-pic.jpg'
              }
            />
            <AvatarFallback className='rounded-sm'>
              {session?.user?.name
                ?.match(/(\b\S)?/g)
                ?.join('')
                .toUpperCase() ?? ''}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56'
        align='end'
        forceMount>
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{session.user?.name}</p>
            <p className='text-xs leading-none text-muted-foreground'>{session.user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='lg:hidden' />

        <DropdownMenuLabel className='lg:hidden flex flex-col gap-3'>
          <ul>
            {links.map((link, index) => (
              <div key={index}>
                {pathname === link.href
                  ? (
                  <DropdownMenuItem>
                    <li>
                      <Link
                        href={link.href}
                        className='text-lochmara-100 font-bold underline text-md'>
                        {link.name}
                      </Link>
                    </li>
                  </DropdownMenuItem>
                    )
                  : (
                  <DropdownMenuItem>
                    <li>
                      <Link
                        href={link.href}
                        className='text-lochmara-200/90 font-normal text-md'>
                        {link.name}
                      </Link>
                    </li>
                  </DropdownMenuItem>
                    )}
              </div>
            ))}
          </ul>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={async () => {
            await signOut()
          }}>
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
