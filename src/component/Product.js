import React from 'react'
import { FavoriteBorder, Search,ShoppingCartOutlined} from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
`
const Circle = styled.div``
const Image = styled.div``
const Icon = styled.div``
const Info = styled.div``

export default function Product({data}) {
    return (
        <Container>
            <Circle/>
            <Image src={data.image}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container>
    )
}