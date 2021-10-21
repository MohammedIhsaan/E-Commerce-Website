import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import paymentPng from '../images/payment.png'

const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1``
const Descriotion = styled.p`
padding: 20px 0;
`
const SocailIconContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: #${props=>props.bg};
display: flex;
align-items: center;
justify-content: center;
color: white;
margin: 5px;
`

const Center = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h1`
font-size: 20px;
padding-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
list-style: none;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`


const Right = styled.div`
flex:1;
padding: 20px;

`
const ContactItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
const Payment = styled.img`
width: 250px;
`

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>IHSAAN.</Logo>
                <Descriotion>Our Store have Latest collection, we Offer best Deal </Descriotion>
                <SocailIconContainer>
                    <Icon bg='3B5999'>
                    <Facebook/>
                    </Icon>
                    <Icon bg='E4405F'>
                    <Instagram/>
                    </Icon>
                    <Icon bg='55ACEE'>
                    <Twitter/>
                    </Icon>
                    <Icon bg='E60023'>
                    <Pinterest/>
                    </Icon>
                </SocailIconContainer>
            </Left>
            <Center>
                <Title>UseFul Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Home</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>Address</ContactItem>
                <ContactItem> <Phone style={{marginRight:"10px"}}/>Phone No</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>Email</ContactItem>
                <Payment src={paymentPng} alt="not availbe"/>
            </Right>           
        </Container>
    )
}
