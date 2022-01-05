import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItem } from '../data'
import { Mobile } from '../Responsive'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${Mobile({display:'none'})}
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
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;

display: flex;
transition: all 1.5s ease;
transform: translateX(${((props)=>props.slideIndex * -100)}vw);
`

const Slide = styled.div`

height: 100vh;
width: 240vh;
display: flex;
align-items:center;
justify-content: center;
background-color: ${props=>props.bg};
`


const ImageCotainer = styled.div`
display: flex;
flex: 1;
height: 100%;
padding: 1px;
`

const Image = styled.img`
height: 90%;
`

const InfoContainer = styled.div`
flex: 1;
padding: 30px;
`

const Title = styled.h1`
font-size: 70px;
`
const Desription = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`
const Buuton = styled.button`
padding: 10px;
cursor: pointer;
background-color: transparent;
`

export default function Slider() {

    const [slideIndex,setSlideIndex] = useState(0)
  
    let HandelClick =(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1 : 3 )
        }else{
            setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0 )

        }
    }


    return (
        <Container>
            <Arrow direction="left" onClick={()=>HandelClick('left')}>
                <KeyboardArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            
             {sliderItem.map(item=>{
                 const {id,img,title,description,bg}=item
                 return(

                     <Slide bg={bg} key={id}>
                       <ImageCotainer>
                         <Image src={img}/>
                       </ImageCotainer>
                       <InfoContainer>
                         <Title> {title}  </Title>
                         <Desription>{description}</Desription>
                         <Buuton>SHOP NOW</Buuton>
                       </InfoContainer>
                     </Slide>
                     )
                 })}
                     </Wrapper>
                     <Arrow direction="right" onClick={()=>HandelClick('right')}>
                <KeyboardArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
