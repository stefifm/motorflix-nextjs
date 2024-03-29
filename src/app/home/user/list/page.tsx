import NoDataCard from '@/app/ui/NoDataCard'
import VideoCard from '@/app/ui/VideoCard'
import { VideoCardLoading } from '@/app/ui/loadings'
import { getWatchList } from '@/app/utils/action'
import { authOptions } from '@/app/utils/auth'
import { getServerSession } from 'next-auth'
import { Suspense } from 'react'

export default async function WatchList (): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)
  const data = await getWatchList(session?.user?.email ?? '0')
  return (
    <>
      <h1 className='text-lochmara-50 text-4xl font-bold underline px-5 mt-10 sm:px-0'>
        Su Lista de Favoritos
      </h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px5 sm:px-0 mt-10 gap-6'>
        {data.length === 0
          ? (
          <NoDataCard title='No hay elementos en su lista' description='Vea algún video que le guste y agréguelo' />
            )
          : (
              data.map((video) => (
            <div
              key={video?.Motor?.id}
              className='relative h-60'>
              <img
                src={video?.Motor?.imageString}
                alt={video?.Motor?.title}
                className='rounded-sm absolute w-full h-full object-cover'
              />

              <div className='h-60 relative z-10 w-full transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100'>
                <div className='bg-gradient-to-b from-transparent via-black/50 to-lochmara-950 z-10 w-full h-full rounded-lg flex items-center justify-center border'>
                  <img
                    src={video?.Motor?.imageString}
                    alt='Video de Motorsport'
                    className='absolute w-full h-full object-cover -z-10 rounded-lg'
                  />
                  <Suspense fallback={<VideoCardLoading />}>
                    <VideoCard
                      motorId={video?.Motor?.id ?? 0}
                      title={video?.Motor?.title ?? ''}
                      overview={video?.Motor?.overview ?? ''}
                      youtubeString={video?.Motor?.youtubeString ?? ''}
                      watchListId={video?.Motor?.WatchLists[0]?.id ?? ''}
                      watchList={
                        video?.Motor?.WatchLists?.length !== undefined &&
                        video?.Motor?.WatchLists?.length > 0
                      }
                      key={video?.Motor?.id}
                      duration={video?.Motor?.duration ?? 0}
                    />
                  </Suspense>
                </div>
              </div>
            </div>
              ))
            )}
      </section>
    </>
  )
}
