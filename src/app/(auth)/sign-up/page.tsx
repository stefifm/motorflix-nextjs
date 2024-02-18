import Form from '@/app/ui/form'
import { authOptions } from '@/app/utils/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SignUpPage (): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  if (session !== null) {
    return redirect('/home')
  }
  return (
    <Form
      action='/api/auth/signin'
      title='Registrarse'
      buttonText='Registrarse'
      question='¿Ya tienes una cuenta?'
      link='/login'
      message='¡Ingrese ahora!'
      googleButton='Registrarse con Google'
    />

  )
}
