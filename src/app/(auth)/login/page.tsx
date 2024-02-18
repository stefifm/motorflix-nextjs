import Form from '@/app/ui/form'
import { authOptions } from '@/app/utils/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Loginpage (): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  if (session !== null) {
    return redirect('/home')
  }
  return (
    <Form
      action='/api/auth/signin'
      title='Iniciar Sesión'
      buttonText='Iniciar Sesión'
      question='¿Eres nuevo en MotorFlix?'
      link='/sign-up'
      message='¡Registrese!'
      googleButton='Iniciar Sesión con Google'
    />
  )
}
