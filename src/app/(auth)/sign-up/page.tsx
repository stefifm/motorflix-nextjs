import Form from '@/app/components/form'

export default function SignUpPage (): JSX.Element {
  return (
    <Form
      action='/api/auth/signin'
      title='Registrarse'
      buttonText='Registrarse'
      question='¿Ya tienes una cuenta?'
      link='/login'
      message='¡Ingrese ahora!'
    />

  )
}
