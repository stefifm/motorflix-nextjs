import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  description: string
}

export default function NoDataCard ({ title, description }: Props): JSX.Element {
  return (
    <Card className='bg-lochmara-700 w-96'>
      <CardHeader>
        <CardTitle className='text-3xl'>{title}</CardTitle>
        <CardDescription className='text-lg text-lochmara-100'>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
