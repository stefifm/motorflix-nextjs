import Form from '@/components/ui/form'

export default function Loginpage (): JSX.Element {
  return (
    <Form
      action=''
      title='Iniciar Sesión'
      buttonText='Iniciar Sesión'
      question='¿Eres nuevo en MotorFlix?'
      link='/sign-up'
      message='¡Registrese!'
    />
  )
}
