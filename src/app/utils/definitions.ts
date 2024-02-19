export interface Video {
  id: number
  imageString: string
  title: string
  duration: number
  overview: string
  youtubeString: string
}

export interface MainVideo extends Video {
  videoSource: string
}

export interface WatchLists {
  id: string
  userId: string
  motorId: number
}

export interface Motor extends Video {
  WatchLists: WatchLists[]
}
