import React from 'react'
import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'

const Container = styled.div``

export default function Cart() {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            Cart 
            <Footer/>

        </Container>
    )
}
