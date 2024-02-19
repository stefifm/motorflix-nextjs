import { getServerSession } from 'next-auth'
import { getOtherVideos } from '../utils/action'
import VideoCard from './VideoCard'
import { authOptions } from '../utils/auth'
import { Suspense } from 'react'
import { VideoCardLoading } from './loadings'

export default async function OtherVideos (): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  const data = await getOtherVideos(session?.user?.email ?? '0')
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6'>
      {data.map((video) => (
        <div
          key={video.id}
          className='relative h-50'>
          <img
            src={video.imageString}
            alt='Video de Motorsport'
            className='rounded-sm absolute w-full h-full object-cover'
          />

          <div className='h-60 relative z-10 w-full transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100'>
            <div className='bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border'>
              <img
                src={video.imageString}
                alt='Video de Motorsport'
                className='absolute w-full h-full object-cover -z-10 rounded-lg'
              />
              <Suspense fallback={<VideoCardLoading />}>
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
              </Suspense>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
