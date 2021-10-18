import React from 'react'
import  styled from 'styled-components'

const Conatiner = styled.div`
height: 30px;
background-color: #ffffff;
color: white;
display: flex;
align-items: center;
justify-content: center;
color: #212121;
`

export default function Announcement() {
    return (
        <Conatiner>
            Super Deal ! Great Diwali Offer
        </Conatiner>
    )
}

