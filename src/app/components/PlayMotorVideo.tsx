'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import ReactPlayer from 'react-player/youtube'

interface Props {
  title: string
  overview: string
  youtubeString: string
  state: boolean
  changeState: any
  duration: number
}

export default function PlayMotorVideo ({
  title,
  overview,
  youtubeString,
  state,
  changeState,
  duration
}: Props): JSX.Element {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className='sm:max-w-[425px] lg:max-w-[1024px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className='line-clamp-3'>{overview}</DialogDescription>
          <div className='flex gap-x-2 items-center'>
            <p className='font-normal text-sm'>Duración: {duration} minutos</p>
          </div>
        </DialogHeader>
        <div className='pt-[56.25%] relative'>
          <ReactPlayer
            url={youtubeString}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: 0, left: 0 }}
            controls
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
