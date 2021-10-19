import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 5px;
height: 40vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: goldenrod;
font-size: 20px;
margin-bottom:20px
`
const Button = styled.button`
border: none;
padding: 5px;
cursor: pointer;
font-weight:600;

`

export default function CategoriesItem({data}) {
    /* console.log("got data from parent",data) */
    return (
        <Container>
            <Image src={data.image}/>
            <Info>
                <Title> {data.title.split(' ')[0]}  {data.title.split(' ')[1]} </Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}
