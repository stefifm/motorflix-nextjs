import { getServerSession } from 'next-auth'
import { type ReactNode } from 'react'
import { authOptions } from '../utils/auth'
import { redirect } from 'next/navigation'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

export default async function HomeLayout ({
  children
}: {
  children: ReactNode
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  if (session === null) {
    return redirect('/login')
  }
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar session={session} />
      <main className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8'>{children}</main>
      <Footer />
    </div>
  )
}
