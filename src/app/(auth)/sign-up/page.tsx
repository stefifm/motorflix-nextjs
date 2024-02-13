import Form from '@/components/ui/form'

export default function SignUpPage (): JSX.Element {
  return (
    <Form
      action=''
      title='Registrarse'
      buttonText='Registrarse'
      question='¿Ya tienes una cuenta?'
      link='/login'
      message='¡Ingrese ahora!'
    />

  )
}
