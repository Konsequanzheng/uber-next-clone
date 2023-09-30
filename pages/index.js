import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
import Map from './components/Map'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png' />
          <Profile>
            <Name>Quan Zheng</Name>
            <UserImage src='https://media.licdn.com/dms/image/D4D03AQFsasCWgt7nSw/profile-displayphoto-shrink_800_800/0/1670387506050?e=1701302400&v=beta&t=dFW_ogWNcPoFMMPaNfZSuo4xCrVxlhq8vUQ2aEOHoAU'/>
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <ActionButtonContainer>
            <Link href='search/'>
              <ActionButton>
                <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png'/>
                Ride
              </ActionButton>
            </Link>
          </ActionButtonContainer>
          
          <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png'/>
            Wheels
          </ActionButton>

          <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png'/>
            Reserve
          </ActionButton>

        </ActionButtons>
        <InputButton> Where to?</InputButton>
        {/* InputBUtton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`
const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UberLogo = tw.img`
  h-24 p-5
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`

const ActionButtonContainer = tw.div`
  flex-1
`