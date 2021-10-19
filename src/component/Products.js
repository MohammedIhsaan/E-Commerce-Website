import  axios  from 'axios'
import React , {useEffect,useState} from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
display: flex;
`

export default function Products() {


    const [data, setdata] = useState([])
    const fetchedData = async()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch(err=> console.log("Error",err))

        let gotdata = response.data
        setdata(gotdata)
    }
 
    console.log('form products',data)

   useEffect(() => {
       fetchedData()
   }, [])

    return (
        <Container>
            {data.map(item=> <Product data={item} key={item.id}/>)}
            
        </Container>
    )
}
