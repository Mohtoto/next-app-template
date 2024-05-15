import React from 'react'
import { Box } from './Box'
import { DiscordIcon, GithubIcon, Logo, TwitterIcon } from './icons'

const Iconss = () => {
  return (
    <Box className='flex gap-4 col-span-8'>
        <DiscordIcon  size={100}/>
        <TwitterIcon size={100}/>
        <GithubIcon size={100} />
        <Logo size={100} />
    </Box>
  )
}

export default Iconss