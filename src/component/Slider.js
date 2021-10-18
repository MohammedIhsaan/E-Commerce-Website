import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:whitesmoke;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction=== "left" && '10px'};
right: ${props=> props.direction=== "right" && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.5;
`
const Wrapper = styled.div`
height: 100%;
`

const Slide = styled.div`
height: 100vh;
width: 100vh;
display: flex;
align-items:center;
`


const ImageCotainer = styled.div`
flex: 1;
height: 100%;
`

const Image = styled.img`
height: 100%;`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`

`
const Desription = styled.p`

`
const Buuton = styled.button`

`

export default function Slider() {
    return (
        <Container>
            <Arrow direction="left">
                <KeyboardArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
              <Slide>
              <ImageCotainer>
                  <Image src="https://source.unsplash.com/_3Q3tsJ01nc"/>
              </ImageCotainer>
              <InfoContainer>

                  <Title> DIWALI BUMPPER OFFER  </Title>
                  <Desription> CELEBIRATE THIS DIWALI WITH STYLE GET FLAT 30% OFF ON OUR LATEST ARRIVALS </Desription>
                  <Buuton>SHOP NOW</Buuton>
              </InfoContainer>
              </Slide>
              </Wrapper>
            <Arrow direction="right">
                <KeyboardArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
