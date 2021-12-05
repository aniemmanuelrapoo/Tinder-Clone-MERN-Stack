import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TinderCard from 'react-tinder-card'
import axios from './axios'

const TinderContainer = styled.div`
    ${tw``}
`
const TinderCardContainer = styled.div`
    ${tw`flex justify-center`}
    margin-top:10vh;
`
const Card = styled.div`
    ${tw`relative bg-white bg-top p-7 bg-cover rounded-2xl`}
    width:600px;
    max-width: 85vw;
    height:50vh;
    box-shadow: 0px 18px 53px 8px rgba(0, 0, 0, 0.3);
    h3{
        ${tw`absolute bottom-0 m-2.5 text-white`}
    }
`

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }

        fetchData();
    }, [])
    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }
    return (
        <TinderContainer>
            <TinderCardContainer>
                {people.map(person => (
                    <TinderCard
                        className="absolute"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}

                    >
                        <Card style={{ backgroundImage: `url(${person.imgUrl})` }}>
                            <h3>{person.name}</h3>
                        </Card>
                    </TinderCard>
                ))}
            </TinderCardContainer>
        </TinderContainer>
    )
}

export default TinderCards
