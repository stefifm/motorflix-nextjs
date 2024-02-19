import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function NoDataCard (): JSX.Element {
  return (
    <Card className='bg-lochmara-700 w-96'>
      <CardHeader>
        <CardTitle className='text-3xl'>No hay elementos en su lista</CardTitle>
        <CardDescription className='text-lg text-lochmara-100'>Vea algún video que le guste y agréguelo</CardDescription>
      </CardHeader>
    </Card>
  )
}
