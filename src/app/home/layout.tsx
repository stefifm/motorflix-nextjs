import { getServerSession } from 'next-auth'
import { type ReactNode } from 'react'
import { authOptions } from '../utils/auth'
import { redirect } from 'next/navigation'
import Navbar from '../components/Navbar'

export default async function HomeLayout ({ children }: { children: ReactNode }): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  if (session === null) {
    return redirect('/login')
  }
  return (
    <>
    <Navbar />
      {children}
    </>
  )
}