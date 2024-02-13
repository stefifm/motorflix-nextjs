'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'

export default function GoogleSignInButton (): JSX.Element {
  return (
    <Button
      variant='outline'
      className='flex gap-2 w-full justify-center bg-stone-700'
      // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
      onClick={() => signIn('google')}
    >
      <FaGoogle className='w-4 h-4' />
      Registrarse con Google
    </Button>
  )
}
