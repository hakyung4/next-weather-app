import React from 'react'
import cities from '../../lib/city.list.json'

export async function getServerSideProps(context) {
    const city = getCity(context.params.city);
    
    if (!city) {
        return {
            notFound: true,
        }
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=minutely&appid=${process.env.API_KEY}&units=metric`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    const slug = context.params.city;

    return {
        props: {
            slug: slug,
            data: data,
        }
    }
}

const getCity = (param) => {
    const cityParam = param.trim();

    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];
    
    if (!id) {
        return null;
    }

    const city = cities.find(city => city.id.toString() == id);

    if (city) {
        return city;
    } else {
        return null;
    }
}

const City = ({ slug, data }) => {
    console.log(data);
    return (
        <div>
            <h2>{slug}</h2>
        </div>
    )
}

export default City
