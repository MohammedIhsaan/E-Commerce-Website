import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem';
import { Mobile } from '../Responsive';

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-between;
${Mobile({padding:'0px',flexDirection:"column",width:'80%'})}
`
const Top = styled.div`
padding: 10px;
${Mobile({fontSize:'10px'})}

`
const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
${Mobile({padding:'0px',flexDirection:"column"})}
padding-bottom: 25px;
padding-top: 20px;
`
export default function Categories() {

    const [data ,setData]= useState([])
    
    const fetchProducst = async () => {
        const reponse = await axios
          .get('https://fakestoreapi.com/products')
          .catch(err => {
            console.log('Eror', err);
          });
        
        const fetchedData = reponse.data;
        setData(fetchedData)
      };

      
      let menCategory = data.filter(item=> item.category==="women's clothing")
      
    //   console.log('from filter' ,data,menCategory)
useEffect(() => {
    
    fetchProducst()
  

}, [])

    return (
        <Container>
          <Top>DEALS OF THE DAY : 50% OFF </Top>
          <hr></hr>
          <Bottom>
             {menCategory.map(item=> <CategoriesItem data={item} key={item.id}/>)}
          </Bottom>
          <hr></hr>
            
        </Container>
    )
}
