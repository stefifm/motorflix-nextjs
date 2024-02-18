import MotorVideo from '../ui/MotorVideo'
import RecentlyAdded from '../ui/RecentlyAdded'

export default function HomePage (): JSX.Element {
  return (
    <section className='p-5 lg:p-0'>
      <MotorVideo />
      <h1 className='text-3xl font-bold'>
        Recientemente Agregados
      </h1>
      <RecentlyAdded />
    </section>
  )
}
