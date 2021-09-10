
import styled from 'styled-components'
import { Html } from "@react-three/drei"
import ReactMarkdown from 'react-markdown'

const InfoTitle = styled(ReactMarkdown)`
    p{  
        color:#FFF; 
        font-family:Didot; 
        font-size:16px;
        text-align:center;
    }
`
const InfoDescription = styled(ReactMarkdown)`
    p, span { 
        text-align: left;
        color: #FFF;
        font-family:DIN2014;
        font-size:9px;
        margin-bottom: 0;
    }
`

const Info = styled(Html)`
    background-color:rgb(0 0 0 / 75%);
    height: auto;
    min-width: 170px;
    max-width: 400px;
    padding: 16px;
    position: relative;
    right: 0px;
    bottom: 0px;
`

const ButtonProduct = styled.div`
 svg{
     &:hover{
        cursor: pointer;
        .border{
            fill: #333;
        }
     }
 }
`
const ButtonWall = styled.div`
    display: flex;
    justify-content: center;
    min-height: 25px;
    max-height: 40px;
    min-width: 60px;
    max-width: 90px;
    border: none;
    height: auto;
    background-color: rgba(0,0,0,0.65);
    font-size: 6px;
    line-height: 1.4;
    font-family:Radnika-Regular;
    color: #E9E9E9;
    text-transform: uppercase;
    padding: 4px 8px;
    display: inline-flex;
    align-items: center;
    :focus,:hover {
        outline: none;
        background-color: #703540;
        cursor: pointer;
    }
`

export {
    InfoTitle,
    InfoDescription,
    Info,
    ButtonProduct,
    ButtonWall
}