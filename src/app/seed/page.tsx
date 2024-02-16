import { Button } from '@/components/ui/button'
import prisma from '../utils/db'
import { data } from '@/lib/data'

export default function SeedDatabase (): JSX.Element {
  const postData = async (): Promise<void> => {
    'use server'
    await prisma.motor.createMany({
      data
    })
  }
  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">
          Enviar
        </Button>
      </form>
    </div>
  )
}
