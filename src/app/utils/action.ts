'use server'
import { revalidatePath, unstable_noStore as noStore } from 'next/cache'
import prisma from './db'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'
import { type Motor, type MainVideo } from './definitions'

export const getData = async (): Promise< MainVideo | null> => {
  noStore()
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

export const getVideos = async (userId: string): Promise<Motor[]> => {
  noStore()
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

  return data as unknown as Motor[]
}
export const getOtherVideos = async (userId: string): Promise<Motor[]> => {
  noStore()
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
    take: -8
  })

  return data as unknown as Motor[]
}

export const getVideosCategory = async (category: string, userId: string): Promise<Motor[]> => {
  noStore()
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
      return data as unknown as Motor[]
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
      return data as unknown as Motor[]
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
      return data as unknown as Motor[]
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
      return data as unknown as Motor[]
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
      return data as unknown as Motor[]
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
  noStore()
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
  noStore()
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
  noStore()
  const watchListId = formData.get('watchListId') as string
  const pathname = formData.get('pathname') as string
  await prisma.watchList.delete({
    where: {
      id: watchListId
    }
  })

  revalidatePath(pathname)
}

export const searchVideos = async (search: string, userId: string): Promise<Motor[]> => {
  noStore()
  const data = await prisma.motor.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          category: {
            contains: search,
            mode: 'insensitive'
          }
        }
      ]
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

  return data as unknown as Motor[]
}
