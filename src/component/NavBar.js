import { Search,ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core'
import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
height: 60px;
background-color: #3d3d3d;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items: center;

`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;

`

const Langauge = styled.span`
font-size: 14px; 
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid ;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
background-color: #181818;
border-radius: 20px;


` 
const Input = styled.input`
border: none;
background-color: #181818;
`

const Center = styled.div`flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
color: #ffffff;

`

const Right = styled.div`flex:1;
display: flex;
align-items: center;
justify-content: flex-end ;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer; 
margin-left: 25px;
color: #ffffff;


`

export default function NavBar() {
    return (
        <Container>
            <Wrapper>
              <Left>
                <Langauge>Left</Langauge>
                <SearchContainer>
                <Input/>
                <Search style={{color:"gray",fontSize:20}}/>
                </SearchContainer>
              </Left>
              <Center>
                <Logo>IHSAAN.</Logo>
              </Center>
              <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
                <MenuItem>
                   <Badge badgeContent={4}>
                        <ShoppingCartOutlined />
                   </Badge>
                </MenuItem>
              </Right>
            </Wrapper>
        </Container>
    )
}
