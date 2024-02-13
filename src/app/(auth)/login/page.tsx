import Form from '@/app/components/form'

export default function Loginpage (): JSX.Element {
  return (
    <Form
      action='/api/auth/signin'
      title='Iniciar Sesión'
      buttonText='Iniciar Sesión'
      question='¿Eres nuevo en MotorFlix?'
      link='/sign-up'
      message='¡Registrese!'
    />
  )
}
