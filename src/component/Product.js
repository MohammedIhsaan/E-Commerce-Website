import React from 'react'
import { FavoriteBorder, Search,ShoppingCartOutlined} from '@material-ui/icons';
import styled from 'styled-components'
import { Mobile } from '../Responsive';
import { Link } from 'react-router-dom';

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition:all 1s ease ;
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
margin: 5px;
width: 280px;
height: 350px;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
position: absolute;
background-color: white;


`
const Image = styled.img`
height: 75%;
width: 250px;
z-index: 2;
${Mobile({width:'200px'})}

`



const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.2);
}
`

export default function Product({data}) {
    console.log('from product',data)
    return (
        <Container>
            <Circle/>
            <Image src={data.image}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            <Link to='productlist/1' style={{textDecoration:'none',color:'inherit' }}>
                <Icon>
                    <Search/>
                </Icon>
            </Link>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container>
    )
}