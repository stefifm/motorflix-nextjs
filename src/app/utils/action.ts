import prisma from './db'

export const getData = async (): Promise<{
  id: number
  imageString: string
  title: string
  duration: number
  overview: string
  youtubeString: string
  videoSource: string
} | null> => {
  const data = await prisma.motor.findFirst({
    select: {
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      videoSource: true,
      duration: true,
      id: true
    }
  })

  return data
}

export const getVideos = async (): Promise<Array<{
  id: number
  imageString: string
  title: string
  duration: number
  overview: string
  youtubeString: string
  WatchLists: Array<{
    id: string
    userId: string
    motorId: number
  }>
}>> => {
  const data = await prisma.motor.findMany({
    select: {
      title: true,
      overview: true,
      imageString: true,
      youtubeString: true,
      duration: true,
      id: true,
      WatchLists: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 4
  })

  return data
}
