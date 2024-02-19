import { Suspense } from 'react'
import MotorVideo from '../ui/MotorVideo'
import RecentlyAdded from '../ui/RecentlyAdded'
import { GeneralLoading } from '../ui/loadings'
import OtherVideos from '../ui/OtherVideos'

export default function HomePage (): JSX.Element {
  return (
    <section className='p-5 lg:p-0'>
      <MotorVideo />
      <h1 className='text-3xl font-bold'>
        Recientemente Agregados
      </h1>
      <Suspense fallback={<GeneralLoading />}>
        <RecentlyAdded />
      </Suspense>
      <h1 className='text-3xl font-bold mt-10'>
        Más Videos
      </h1>
      <Suspense fallback={<GeneralLoading />}>
        <OtherVideos />
      </Suspense>
    </section>
  )
}
