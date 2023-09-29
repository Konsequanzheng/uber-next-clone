import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
import Map from './components/Map'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const ActionItems = tw.div`
  flex-1
`