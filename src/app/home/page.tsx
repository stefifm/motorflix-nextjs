import MotorVideo from '../components/MotorVideo'
import RecentlyAdded from '../components/RecentlyAdded'

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
