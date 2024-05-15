import { BoxProps } from '@/types'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Box } from './Box'
import AboutMe from './AboutMe'
import Pics from './Pics'
import Imagee from './Imagee'
import Follow from './Follow'
import Iconss from './Iconss'
import Codee from './Codee'



export const BentoGrid = () => {
  return (
    <section className='mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense'>
        
        <Pics />
        <AboutMe  />
        <Imagee />
        <Follow />
        <Iconss />
        <Codee />
    </section>
  )
}



