'use client'
import { Button } from '@/components/ui/button'
import { Heart, PlayCircle } from 'lucide-react'
import PlayMotorVideo from './PlayMotorVideo'
import { useState } from 'react'
import { addToWatchList, deleteFromWatchList } from '../utils/action'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  overview: string
  motorId: number
  watchList: boolean
  watchListId: string
  youtubeString: string
  duration: number
}

export default function VideoCard ({
  title,
  overview,
  motorId,
  watchList,
  watchListId,
  youtubeString,
  duration
}: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <button onClick={() => { setOpen(true) }} className='-mt-14'>
        <PlayCircle className='h-20 w-20' />
      </button>
      <div className='right-5 top-5 absolute z-10'>
        {watchList
          ? (
          <form action={deleteFromWatchList}>
            <input type="hidden" name='watchListId' value={watchListId} />
            <input type="hidden" name='pathname' value={pathname} />
            <Button
              variant='outline'
              size='icon'
              className='bg-red-200 hover:bg-red-300 transition-colors duration-300'
              >
              <Heart className='h-4 w-4 text-red-500' />
            </Button>
          </form>
            )
          : (
          <form action={addToWatchList}>
            <input type="hidden" name='motorId' value={motorId}/>
            <input type="hidden" name='pathname' value={pathname} />
            <Button
              variant='outline'
              size='icon'>
              <Heart className='h-4 w-4' />
            </Button>
          </form>
            )}
      </div>

      <div className='p-5 absolute bottom-0 left-0'>
        <h1 className='font-bold text-lg line-clamp-1'>{title}</h1>
        <div className='flex gap-x-2 items-center'>
          <p className='font-normal text-sm'>Duración: {duration} minutos</p>
        </div>
        <p className='line-clamp-1 text-sm text-lochmara-200 font-light'>{overview}</p>
      </div>

      <PlayMotorVideo
        title={title}
        overview={overview}
        youtubeString={youtubeString}
        state={open}
        changeState={setOpen}
        duration={duration}
      />
    </>
  )
}
