import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicXVhbnpoZW5nIiwiYSI6ImNsbjRocGU4aTAwbmMycnBmdHFsNjVncnoifQ.PG7CEnlbXOHlv7tIHuAMKg';

const Map = () => {
    // useEffect is only ran first time the appl gets loaded
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-99.29011, 39.39172],
        zoom: 3
        });
    });

    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`