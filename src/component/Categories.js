import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
display: flex;
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
             {menCategory.map(item=> <CategoriesItem data={item} key={item.id}/>)}
            
        </Container>
    )
}
