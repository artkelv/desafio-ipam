import styled from "styled-components";

export const SubSectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 100px 50px 50px 0;
    @media screen and (min-width: 320px) and (max-width: 480px){
        align-items: center;
        margin: 0 0 50px 0;
    }
` 
export const Title = styled.h3`
    color: #fff;
    letter-spacing: 1px;
    @media screen and (min-width: 320px) and (max-width: 480px){
       font-size: 16px;
       border-top: 2px solid #fff;
       padding-top: 50px;
    }
`
export const SubTitle = styled.span`
    color: #137B70;
    letter-spacing: 1px;
    margin-left: -50px;
    border-bottom: 1px solid #137B70;
    @media screen and (min-width: 320px) and (max-width: 480px){
        margin-left: 0;
        font-size: 14px;
    }
`
export const ImportantText = styled.h2`
    color: #fff;
    width: 80%;
    letter-spacing: 1px;
    border: 2px solid #fff;
    padding: 25px;
    @media screen and (min-width: 320px) and (max-width: 480px){
        font-size: 17px;
        width: 60%;
    }
`