import { getServerSession } from 'next-auth'
import { getVideos } from '../utils/action'
import VideoCard from './VideoCard'
import { authOptions } from '../utils/auth'

export default async function RecentlyAdded (): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  const data = await getVideos(session?.user?.email ?? '0')
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6'>
      {data.map((video) => (
        <div
          key={video.id}
          className='relative h-48'>
          <img
            src={video.imageString}
            alt='Video de Motorsport'
            className='rounded-sm absolute w-full h-full object-cover'
          />

          <div className='h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100'>
            <div className='bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border'>
              <img
                src={video.imageString}
                alt='Video de Motorsport'
                className='absolute w-full h-full object-cover -z-10 rounded-lg'
              />
              <VideoCard
                motorId={video?.id}
                title={video?.title}
                overview={video?.overview}
                youtubeString={video?.youtubeString}
                watchListId={video?.WatchLists[0]?.id}
                watchList={video?.WatchLists?.length > 0}
                key={video?.id}
                duration={video?.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
