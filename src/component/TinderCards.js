import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TinderCard from 'react-tinder-card'

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
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://static.independent.co.uk/2021/11/10/06/GettyImages-1270403280.jpg?width=640&auto=webp&quality=75"
        },
        {
            name: 'Jeff Bezos',
            url: "https://image.cnbcfm.com/api/v1/image/105907143-1557513032836gettyimages-1142462855.jpeg?v=1625506871"
        },
    ])

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
                        <Card style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </Card>
                    </TinderCard>
                ))}
            </TinderCardContainer>
        </TinderContainer>
    )
}

export default TinderCards
