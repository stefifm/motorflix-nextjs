'use client'

import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface Props {
  open: boolean
  changeOpen: (open: boolean) => void
}

export default function SearchInput ({ open, changeOpen }: Props): JSX.Element {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState<string | null>(
    searchParams.get('q') !== null ? searchParams.get('q') : ''
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)

    if (searchQuery !== null) {
      params.set('q', searchQuery)
    } else {
      params.delete('q')
    }

    router.replace(`/home/search?${params.toString()}`)
    changeOpen(false)
  }

  return (
    <form onSubmit={handleSubmit} className='absolute top-16 right-8 md:right-[10%]
      xl:right-24 rounded-lg z-10 bg-lochmara-900 p-2 flex flex-col gap-2 md:flex-row items-center'>
      <input
        type='text'
        placeholder='Buscar'
        className='w-60 h-10 rounded-lg border-2 border-gray-300 px-3
      focus:outline-none text-lochmara-900
      focus:border-lochmara-100 transition-all duration-300 ease-in-out'
      value={searchQuery ?? ''}
      onChange={(e) => { setSearchQuery(e.target.value) }}
      />
      <Button
        type='submit'
        className='w-full h-10 md:w-20  md:ml-2 bg-lochmara-600 text-white hover:bg-lochmara-700 transition-all duration-300 ease'
      >
        Buscar
      </Button>
    </form>
  )
}
