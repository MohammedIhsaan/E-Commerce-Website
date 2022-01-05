import React from 'react'
import styled from 'styled-components'
import NavBar from '../component/NavBar'
import { Mobile } from '../Responsive'
const Container = styled.div`
width: 100wh;
height: 100vh;
background: linear-gradient(rgb(255,255,255, 0.7),rgb(0,0,0, 0.7)) ,url('https://source.unsplash.com/_3Q3tsJ01nc');
background-size:cover;
display: flex;
justify-content: center;
align-items :center ;

`
const Wrapper = styled.div` 
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white;
border-radius:30px;
`
const Title = styled.h1``
const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Input = styled.input`
flex:1;
margin: 20px 10px 0px 0px;
padding: 10px;
width: 100%;
text-align: center;
${Mobile({width:'70%'})}

`
const Button = styled.button`
font-weight: 500;
margin: 20px 10px 0px 0px;
padding: 10px;
width: 300px;
cursor: pointer;
${Mobile({width:'100%'})}

`

const Link = styled.a`
margin: 5px 0px;
cursor: pointer;
text-decoration: underline;

`

export default function Login() {
    return (
        <>
        <NavBar/>
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="EMAIL" />
                    <Input placeholder="Password" />    
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD</Link>
                    <Link>CREATE AN ACOOUNT</Link>
                </Form>
            </Wrapper>
            
        </Container>
        </>
    )
}

