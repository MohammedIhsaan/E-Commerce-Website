import { css } from "styled-components"

export const Mobile = (props)=>{
    return css`
            @media only screen and (max-width:420px){
            ${props}
         }  
        `
}
export const Tablet = (props)=>{
    return css`
            @media only screen and (max-width:1600px){
            ${props}
         }  
        `
}
export const Tablet2 = (props)=>{
    return css`
            @media only screen and (max-width:1250px){
            ${props}
         }  
        `
}