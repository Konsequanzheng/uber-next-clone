import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);

    const getRideDuration = () => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoicXVhbnpoZW5nIiwiYSI6ImNsbjRocGU4aTAwbmMycnBmdHFsNjVncnoifQ.PG7CEnlbXOHlv7tIHuAMKg`
        )
        .then(response => response.json())
        .then(data => {
            if(data.code=='Ok'){
                setRideDuration(data.routes[0].duration/100);
            }
        })
    }

    useEffect(() => {
        getRideDuration()
    }, [pickupCoordinates, dropoffCoordinates])

    //-118.491227,34.01947;-118.242766,34.053691
    //[-118.242766, 34.053691]


    return (
        <Wrapper>
            <Title> Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                )) }
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
    text-gray-500 text-center py-2 text-xs border-b
`

const CarList = tw.div`
    overflow-y-scroll
`

const Car = tw.div`
    flex items-center p-4
`

const CarImage = tw.img`
    h-14 mr-4
`