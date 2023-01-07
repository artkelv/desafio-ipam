import styled from "styled-components";

export const FooterComp = styled.footer`
    background-color: #137B70;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
`
export const BoxDetails = styled.div`
    display: flex;
    align-items: center;
`
export const ChallengerDetais = styled.a`
    text-decoration: none;
    color: #111;
    padding-left: 5px;
    &:hover{
        color: #333;
    }
    @media screen and (min-width: 320px) and (max-width: 480px){
        font-size: 14px;
    }
`
export const Thanks = styled.span`
    @media screen and (min-width: 320px) and (max-width: 480px){
        display: none;
    }
`

export const AncorLinkedin = styled.a`
    margin: 0 10px;
`
export const SectionImgIcons = styled.section`
    @media screen and (min-width: 320px) and (max-width: 480px){
        display: flex;
    }
`
export const ImgIcons = styled.img`
    width: 50px;
    @media screen and (min-width: 320px) and (max-width: 480px){
        width: 25px;
    }
`