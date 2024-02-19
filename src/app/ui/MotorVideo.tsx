import { getData } from '../utils/action'
import VideoButtons from './VideoButtons'

export default async function MotorVideo (): Promise<JSX.Element> {
  const data = await getData()
  return (
    <section className='w-full h-[55vh] lg:h-[60vh] flex justify-start items-center'>
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className='w-full absolute top-0 left-0 object-cover h-[60vh] -z-20 brightness-[60%]'></video>

      <div className='absolute w-[90%] lg:w-[40%] mx-auto'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>{data?.title}</h1>
        <p className='text-white text-lg mt-5 line-clamp-3'>{data?.overview}</p>
        <div className='flex gap-x-3 mt-4'>
          <VideoButtons
            title={data?.title ?? ''}
            overview={data?.overview ?? ''}
            youtubeString={data?.youtubeString ?? ''}
            duration={data?.duration ?? 0}
            id={data?.id ?? 0}
            key={data?.id}
          />
        </div>
      </div>
    </section>
  )
}
