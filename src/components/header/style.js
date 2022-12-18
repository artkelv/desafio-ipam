import styled from "styled-components";

export const HeaderComponent = styled.header`
    font-family: 'Itim', cursive;
    display: flex;
    justify-content: space-between;
    background-color: #137B70;
    color: #fff;
`
export const TitleIpam = styled.h2`
    margin-left: 100px;
`
export const UnList = styled.ul`
    display: flex;
    align-items: center;
`
export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    li{
        list-style: none;
    }
`
export const AncorToMeet = styled.a`
    text-decoration: none;
    color: #fff;
    transition: 0.7s;
    &:hover{
        border-bottom: 2px solid #20252D;
    }
`
export const ListForHelp = styled.li`
    margin: 0 10px 0 70px;
    display: flex;
    justify-content: center;
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
`