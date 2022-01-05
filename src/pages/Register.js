import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'
import NavBar from '../component/NavBar'
const Container = styled.div`
width: 100wh;
height: 100vh;
background-size:cover;
background:linear-gradient(rgb(255,255,255, 0.7),rgb(0,0,0, 0.7)) ,url('https://source.unsplash.com/mIqyYpSNq3o'), center;
display: flex;
justify-content: center;
align-items :center;

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
`
export default function Register() {
    return (
            <div>

            <NavBar/>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="First Name" />
                    <Input placeholder="User Name" />
                    <Input placeholder="EMAIL" />
                    <Input placeholder="Password" />
                    <Input placeholder="Comfirm Password" />
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
            
        </Container>
            </div>
    )
}
