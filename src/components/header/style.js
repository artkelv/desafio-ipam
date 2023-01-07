import styled from "styled-components";

export const HeaderComponent = styled.header`
    font-family: 'Itim', cursive;
    display: flex;
    justify-content: space-between;
    background-color: #137B70;
    color: #fff;
    @media screen and (min-width: 320px) and (max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const TitleIpam = styled.h3`
    margin-left: 100px;
    font-family: 'Roboto', sans-serif;
    @media screen and (min-width: 320px) and (max-width: 480px){
        margin-left: 0;
        font-size: 13px;
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
    }
`
export const UnList = styled.ul`
    display: flex;
    align-items: center;
    @media screen and (min-width: 320px) and (max-width: 480px){
        padding: 0;
    }
`
export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    li{
        list-style: none;
    }
    @media screen and (min-width: 320px) and (max-width: 480px){
        
    }
`
export const AncorToMeet = styled.a`
    text-decoration: none;
    color: #fff;
    transition: 0.7s;
    &:hover{
        border-bottom: 2px solid #20252D;
    }
    @media screen and (min-width: 320px) and (max-width: 480px){
        font-size: 11px;
        &:hover{
            border-bottom: none;
        }
    }
`
export const ListForHelp = styled.li`
    margin: 0 10px 0 70px;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 320px) and (max-width: 480px){
        margin: 0px 10px 0 25px;
        font-size: 11px;
    }
`
export const AncorForHelp = styled.a`
    height: 25px;
    margin-right: 100px;
    background-color: #20252D;
    text-decoration: none;
    color: #fff;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 13px;
    text-transform: uppercase;
    transition: 0.7s;
    &:hover{
        padding: 8px 20px;
    }
    @media screen and (min-width: 320px) and (max-width: 480px){
        margin-right: 0;
        padding: 4px 8px;
        
    }
`