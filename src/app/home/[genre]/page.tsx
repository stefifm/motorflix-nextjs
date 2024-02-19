import VideoCard from '@/app/ui/VideoCard'
import { VideoCardLoading } from '@/app/ui/loadings'
import { getVideosCategory } from '@/app/utils/action'
import { authOptions } from '@/app/utils/auth'
import { getServerSession } from 'next-auth'
import { Suspense } from 'react'

export default async function CategoryPage ({
  params
}: {
  params: { genre: string }
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  const data = await getVideosCategory(params.genre, session?.user?.email ?? '0')
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px5 sm:px-0 mt-10 gap-6'>
      {data.map((video) => (
        <div
          key={video.id}
          className='relative h-60'>
          <img
            src={video.imageString}
            alt={video.title}
            className='rounded-sm absolute w-full h-full object-cover'
          />

          <div className='h-60 relative z-10 w-full transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100'>
            <div className='bg-gradient-to-b from-transparent via-black/50 to-lochmara-950 z-10 w-full h-full rounded-lg flex items-center justify-center border'>
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
    </section>
  )
}
