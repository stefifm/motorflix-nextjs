'use server'
import { revalidatePath } from 'next/cache'
import prisma from './db'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'

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

export const getVideos = async (userId: string): Promise<Array<{
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
      WatchLists: {
        where: {
          userId
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 4
  })

  return data
}

export const getVideosCategory = async (category: string, userId: string): Promise<Array<{
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
  switch (category) {
    case 'wec': {
      const data = await prisma.motor.findMany({
        where: {
          category: 'wec'
        },
        select: {
          title: true,
          overview: true,
          imageString: true,
          youtubeString: true,
          duration: true,
          id: true,
          WatchLists: {
            where: {
              userId
            }
          }
        }
      })
      return data
    }
    case 'indycar': {
      const data = await prisma.motor.findMany({
        where: {
          category: 'indycar'
        },
        select: {
          title: true,
          overview: true,
          imageString: true,
          youtubeString: true,
          duration: true,
          id: true,
          WatchLists: {
            where: {
              userId
            }
          }
        }
      })
      return data
    }

    case 'f1': {
      const data = await prisma.motor.findMany({
        where: {
          category: 'f1'
        },
        select: {
          title: true,
          overview: true,
          imageString: true,
          youtubeString: true,
          duration: true,
          id: true,
          WatchLists: {
            where: {
              userId
            }
          }
        }
      })
      return data
    }
    case 'imsa': {
      const data = await prisma.motor.findMany({
        where: {
          category: 'imsa'
        },
        select: {
          title: true,
          overview: true,
          imageString: true,
          youtubeString: true,
          duration: true,
          id: true,
          WatchLists: {
            where: {
              userId
            }
          }
        }
      })
      return data
    }
    case 'recently': {
      const data = await prisma.motor.findMany({
        where: {
          category: 'recent'
        },
        select: {
          title: true,
          overview: true,
          imageString: true,
          youtubeString: true,
          duration: true,
          id: true,
          WatchLists: {
            where: {
              userId
            }
          }
        }
      })
      return data
    }

    default: {
      throw new Error('Category not found')
    }
  }
}

export const getWatchList = async (userId: string): Promise<Array<{
  Motor: {
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
    } | null>
  } | null
}>> => {
  const data = await prisma.watchList.findMany({
    where: {
      userId
    },
    select: {
      Motor: {
        select: {
          title: true,
          overview: true,
          imageString: true,
          youtubeString: true,
          duration: true,
          id: true,
          WatchLists: true
        }
      }
    }
  })

  return data
}

export const addToWatchList = async (formData: FormData): Promise<void> => {
  'use server'
  const motorId = formData.get('motorId')
  const pathname = formData.get('pathname') as string
  const session = await getServerSession(authOptions)
  await prisma.watchList.create({
    data: {
      userId: session?.user?.email ?? '0',
      motorId: Number(motorId)
    }
  })

  revalidatePath(pathname)
}

export const deleteFromWatchList = async (formData: FormData): Promise<void> => {
  'use server'
  const watchListId = formData.get('watchListId') as string
  const pathname = formData.get('pathname') as string
  await prisma.watchList.delete({
    where: {
      id: watchListId
    }
  })

  revalidatePath(pathname)
}
