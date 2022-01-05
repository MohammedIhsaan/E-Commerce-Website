import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import ProductImage from '../images/shirt.png'
import { Mobile } from '../Responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
/* ${Mobile({ display:'flex',flexDirection:'column' ,padding:'10px'})} */

`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
justify-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
font-weight: 600;
padding: 10px;
cursor: pointer;

border : ${(props)=>props.type === "filled" && "none"};
background-color : ${(props)=>props.type === "filled" ? "black" : "transparent"};
color : ${(props)=>props.type === "filled" && "white"};

`
const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
padding: 0px 10px;
${Mobile({display:'none'})}

`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${Mobile({flexDirection:'column' ,padding:'10px'})}

`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 50px;
${Mobile({flexDirection:'column',padding:'0px'})}

`
const ProductDtails = styled.div`
display: flex;
align-items: center;
`
const Image = styled.img`
width: 15%;
${Mobile({width:'45%'})}

`

const Details = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`
const ProductName = styled.span`
padding-bottom: 20px;
`
const ProductId = styled.span`
padding-bottom: 20px;


`
const ProductColor = styled.div`
background-color: blue;
width: 20px;
height: 20px;
border-radius: 50%;

`
const ProductSize = styled.span`
padding-bottom: 20px;
padding-top: 20px;

`

const PriceDtails = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountConatiner = styled.div`
display: flex;
align-items: center;
margin-bottom:10px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
`


const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 20px 0px;
display: flex;
justify-content: space-between;

font-weight: ${props => props.type==="total" && "500"};
font-size: ${props => props.type==="total" && "25px"};
`
const SummaryItemItem = styled.span``

const SummaryItemText = styled.span``
const SummaryButton = styled.button`
width: 100%;
background-color: black;
color: whitesmoke;
padding: 10px;
`

export default function Cart() {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton >CONTIBUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Bagg(2)</TopText>
                        <TopText>wishList(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDtails>
                                <Image src={ProductImage}/>
                                <Details>
                                    <ProductName><b>Product:</b> PETER ENGLAND SHIRT </ProductName>
                                    <ProductId><b>ID:</b> 00023 </ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDtails>
                            <PriceDtails>
                                <ProductAmountConatiner>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountConatiner>
                                <ProductPrice>900 RS</ProductPrice>
                            </PriceDtails>             
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDtails>
                                <Image src={ProductImage}/>
                                <Details>
                                    <ProductName><b>Product:</b> PETER ENGLAND SHIRT </ProductName>
                                    <ProductId><b>ID:</b> 00023 </ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDtails>
                            <PriceDtails>
                                <ProductAmountConatiner>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountConatiner>
                                <ProductPrice>900 RS</ProductPrice>
                            </PriceDtails>             
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMERY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemItem>400 RS</SummaryItemItem>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Charges</SummaryItemText>
                            <SummaryItemItem>40 RS</SummaryItemItem>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemItem>-40 RS</SummaryItemItem>
                        </SummaryItem>
                        <Hr/>
                        <SummaryItem type="total">
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemItem>400 RS</SummaryItemItem>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>

        </Container>
    )
}
