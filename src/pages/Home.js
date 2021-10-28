import React, { useState, useEffect } from 'react'
import {Container} from './Style'
import api from '../services/api'

const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        let url = ''
        api.get(url)
        .then(res => setData(res.data.results))
        .catch(err => console.log(err))
    }, [])

    console.log(data)
    return (
        <>
            {data? <Container>

                <section>
                    <div>
                        <img src={data[0].picture.large} alt=''/>
                        <p>{data[0].gender}</p>
                        <p>{data[0].name.title}. {data[0].name.first} {data[0].name.last}</p>
                        <p>From: {data[0].location.city} - {data[0].location.state} - {data[0].location.country}</p>
                    </div>

                    <div>
                        <img src={data[1].picture.large} alt=''/>
                        <p>{data[1].gender}</p>
                        <p>{data[1].name.title}. {data[1].name.first} {data[1].name.last}</p>
                        <p>From: {data[1].location.city} - {data[1].location.state} - {data[1].location.country}</p>
                    </div>
                    
                    <div>
                        <img src={data[2].picture.large} alt=''/>
                        <p>{data[2].gender}</p>
                        <p>{data[2].name.title}. {data[2].name.first} {data[2].name.last}</p>
                        <p>From: {data[2].location.city} - {data[2].location.state} - {data[2].location.country}</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={data[3].picture.large} alt=''/>
                        <p>{data[3].gender}</p>
                        <p>{data[3].name.title}. {data[3].name.first} {data[3].name.last}</p>
                        <p>From: {data[3].location.city} - {data[3].location.state} - {data[3].location.country}</p>
                    </div>

                    <div>
                        <img src={data[4].picture.large} alt=''/>
                        <p>{data[4].gender}</p>
                        <p>{data[4].name.title}. {data[4].name.first} {data[4].name.last}</p>
                        <p>From: {data[4].location.city} - {data[4].location.state} - {data[4].location.country}</p>
                    </div>

                    <div>
                        <img src={data[5].picture.large} alt=''/>
                        <p>{data[5].gender}</p>
                        <p>{data[5].name.title}. {data[5].name.first} {data[5].name.last}</p>
                        <p>From: {data[5].location.city} - {data[5].location.state} - {data[5].location.country}</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={data[6].picture.large} alt=''/>
                        <p>{data[6].gender}</p>
                        <p>{data[6].name.title}. {data[6].name.first} {data[6].name.last}</p>
                        <p>From: {data[6].location.city} - {data[6].location.state} - {data[6].location.country}</p>
                    </div>

                    <div>
                        <img src={data[7].picture.large} alt=''/>
                        <p>{data[7].gender}</p>
                        <p>{data[7].name.title}. {data[7].name.first} {data[7].name.last}</p>
                        <p>From: {data[7].location.city} - {data[7].location.state} - {data[7].location.country}</p>
                    </div>

                    <div>
                        <img src={data[8].picture.large} alt=''/>
                        <p>{data[8].gender}</p>
                        <p>{data[8].name.title}. {data[8].name.first} {data[8].name.last}</p>
                        <p>From: {data[8].location.city} - {data[8].location.state} - {data[8].location.country}</p>
                    </div>
                </section>

            </Container> : ''
            }
        </>
    )
}

export default Home