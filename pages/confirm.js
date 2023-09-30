import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("Pickup", pickup)
    console.log("Dropoff", dropoff)

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token:'pk.eyJ1IjoicXVhbnpoZW5nIiwiYSI6ImNsbjRocGU4aTAwbmMycnBmdHFsNjVncnoifQ.PG7CEnlbXOHlv7tIHuAMKg',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token:'pk.eyJ1IjoicXVhbnpoZW5nIiwiYSI6ImNsbjRocGU4aTAwbmMycnBmdHFsNjVncnoifQ.PG7CEnlbXOHlv7tIHuAMKg',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                Ride Selector
                Confirm Button
                {pickupCoordinates}
                {dropoffCoordinates}
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const RideContainer = tw.div`
    flex-1
`

const Wrapper = tw.div`
    flex h-screen flex-col
`