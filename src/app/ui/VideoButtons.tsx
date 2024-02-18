'use client'

import { Button } from '@/components/ui/button'
import { InfoIcon, PlayCircle } from 'lucide-react'
import { useState } from 'react'
import PlayMotorVideo from './PlayMotorVideo'

interface Props {
  title: string
  overview: string
  youtubeString: string
  duration: number
  id: number
}

export default function VideoButtons ({ title, overview, youtubeString, duration, id }: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => { setOpen(true) }} className='text-lg font-medium'>
        <PlayCircle className='mr-2 h-6 w-6' />
        Ver
      </Button>

      <Button onClick={() => { setOpen(true) }} className='text-lg font-medium bg-lochmara-100/40 hover:bg-lochmara-100/30 text-white'>
        <InfoIcon className='mr-2 h-6 w-6' />
        Saber Más
      </Button>

      <PlayMotorVideo
        title={title}
        overview={overview}
        youtubeString={youtubeString}
        state={open}
        changeState={setOpen}
        duration={duration}
        key={id}
      />
    </>
  )
}
