import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import champaignImage from '../public/images/champaign.jpg' 
import goyangImage from '../public/images/goyang.jpeg' 
import hochiminhImage from '../public/images/hochimin.jpeg' 
import seoulImage from '../public/images/seoul.jpeg' 

const places = [
    {
        name: "Goyang",
        image: goyangImage,
        url: "/location/goyang-si-1842485",
    },
    {
        name: "Champaign",
        image: champaignImage,
        url: "/location/champaign-4887158",
    },
    {
        name: "Ho Chi Minh",
        image: hochiminhImage,
        url: "/location/thanh-pho-ho-chi-minh-1566083",
    },
    {
        name: "Seoul",
        image: seoulImage,
        url: "/location/seoul-1835847",
    },
]

const FamousPlaces = () => {
    return (
        <div className="places">
            <div className="places__row">
                {places.length > 0 &&
                    places.map((place, index) =>(
                        <div className="places__box" key={index}>
                            <Link href={place.url}>
                                <a>
                                    <div className="places__image-wrapper">
                                        <Image
                                        src={place.image}
                                        alt={`${place.name} Image`}
                                        layout="fill"
                                        objectFit="cover"
                                        />
                                    </div>
                                    <span>{place.name}</span>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FamousPlaces
