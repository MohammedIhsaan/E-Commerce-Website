import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'

const Container = styled.div`
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 60px;
margin: 10px;
${Mobile({textAlign:'center',fontSize:'40px'})}

`
const Description = styled.div`
  font-size:24px;
  margin-bottom: 20px;
  font-weight: 500;
  ${Mobile({textAlign:'center',fontSize:'18px'})}

  `
const InputContainer = styled.div`
height: 40px;
width: 50%;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${Mobile({width:'60%'})}

`
const Input = styled.input`
text-align: center;
flex:9;
`
const Button = styled.button`
flex:1;
background-color: gray;
border: none;
color: white;

`

export default function NewsLetter() {
    return (
        <Container>
            <Title>NEWS LETTER</Title>
            <Description>GET LATEST OFFER FROM YOUR FAVORITE PRODUCT</Description>
            <InputContainer>
                <Input  placeholder="your Email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}
