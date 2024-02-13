import React from 'react'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import GoogleSignInButton from './GoogleSignInButton'

interface Props {
  action: string
  title: string
  buttonText: string
  question: string
  link: string
  message: string
}

export default function Form ({ action, title, buttonText, question, link, message }: Props): JSX.Element {
  return (
    <section className='mt-24 rounded bg-lochmara-800/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-4'>
    <form method='post' action={action}>
      <h1 className='text-3xl font-semibold text-white text-center'>{title}</h1>
      <div className='space-y-4 mt-5'>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
        />
        <Button
          type='submit'
          className='w-full bg-lochmara-500/90 hover:bg-lochmara-700 text-lochmara-100 border border-lochmara-300'
        >
          {buttonText}
        </Button>
      </div>
    </form>

    <div className='text-gray-200 text-sm mt-2'>
      {question} <Link className='text-white hover:underline' href={link}>{message}</Link>
    </div>

    <div className='flex flex-col gap-y-3 w-full justify-center items-center gap-x-3 mt-6'>
      <GoogleSignInButton />
    </div>
  </section>
  )
}
