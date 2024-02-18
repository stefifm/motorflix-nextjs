export function CategorySkeleton (): JSX.Element {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px5 sm:px-0 mt-10 gap-6'>
    {[1, 2, 3, 4].map((index) => (
      <div key={index} className='animate-pulse'>
        <div className='relative h-60'>
          <div className='rounded-sm bg-gray-300 w-full h-full'></div>
        </div>
      </div>
    ))}
  </section>
  )
}

export function VideoCardSkeleton (): JSX.Element {
  return (
    <div className='relative h-60'>
      <div className='rounded-sm bg-gray-300 w-full h-full'></div>
      <div className='p-5 absolute bottom-0 left-0'>
        <h1 className='font-bold text-lg line-clamp-1 bg-gray-300'></h1>
        <div className='flex gap-x-2 items-center'>
          <p className='font-normal text-sm bg-gray-300'></p>
        </div>
        <p className='line-clamp-1 text-sm text-lochmara-200 font-light bg-gray-300'></p>
      </div>
    </div>
  )
}
