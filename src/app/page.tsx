import { Button } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import { authOptions } from './utils/auth'

export default async function Home (): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <Button>Click me</Button>
      <h1>{session?.user?.name}</h1>
    </div>
  )
}
