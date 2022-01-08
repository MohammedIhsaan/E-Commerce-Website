import { Search,ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import { Mobile  } from '../Responsive';

const Container = styled.div`
height: 50px;
background-color: #3d3d3d;

${Mobile({height:'50px'})}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
${Mobile({padding:'10px 0px'})}


`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`

const Langauge = styled.span`
font-size: 14px; 
cursor: pointer;
${Mobile({display:'none'})}
`
const SearchContainer = styled.div`
border: 0.5px solid ;
display: flex;
align-items: center;
margin-left: 45px;
padding: 5px;
background-color: #181818;
border-radius: 20px;
${Mobile({marginLeft:'15px'})}
` 
const Input = styled.input`
border: none;
width: 300px;
text-align: center;
font-size: 18px;
background-color: #181818;
${Mobile({width:'100px'})}
`

const Logo = styled.h1`
font-weight: bold;
color: #ffffff;
${Mobile({fontSize:'24px'})}
`

const Right = styled.div`flex:1;
display: flex;
align-items: center;
justify-content: flex-end ;
${Mobile({justifyContent:'center',flex:'2'})}

`

const MenuItem = styled.div`
font-size: 20px;
cursor: pointer; 
margin-left: 25px;
color: #ffffff;
${Mobile({marginLeft:'8px',fontSize:'14px'})}


`

export default function NavBar() {
    return (
        <Container>
            <Wrapper>
              <Left>
                <Logo><Link style={{color:'inherit',textDecoration:'none'}} to= '/E-Commerce-Website'>IHSAAN.</Link></Logo>
                <SearchContainer>
                <Input placeholder='serach'/>
                <Search  style={{color:"gray",fontSize:20}}/>
                </SearchContainer>
              </Left>
              <Right>
                <MenuItem>
                <Link style={{color:'inherit',textDecoration:'none'}} to= '/E-Commerce-Website/register'>Register</Link>
                </MenuItem>
                <MenuItem>
                <Link style={{color:'inherit',textDecoration:'none'}} to= '/E-Commerce-Website/login'>Sign in</Link>          
                </MenuItem>
                <MenuItem>
                   <Badge badgeContent={4}>
                   <Link style={{color:'inherit',textDecoration:'none'}} to= '/E-Commerce-Website/cart'><ShoppingCartOutlined /></Link>
                        
                   </Badge>
                </MenuItem>
              </Right>
            </Wrapper>
        </Container>
    )
}
