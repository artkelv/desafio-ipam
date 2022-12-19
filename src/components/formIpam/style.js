import styled from "styled-components";

export const MainContent = styled.main`
    width: 40vw;
    padding: 50px 0 50px 100px;
`
export const WelcomeSection = styled.section`

`
export const Title = styled.h4`
    color: #fff;
    letter-spacing: 1px;
    border-left: 1px solid #fff;
    padding-left: 10px;
`
export const Indication = styled.span`
    color: #fff;
    display: inline;
`
export const SubTitle = styled.h4`
    color: #00BFAA;
    margin-left: 50px;
    letter-spacing: 1px;
`
export const FormIbge = styled.form`
    border-right: 1px solid #fff;
    margin: 70px 0;
`
export const BoxSelect = styled.div`
    margin: 10px 0;
`
export const TitleSelect = styled.label`
    color: #00BFAA;
    font-size: 15px;
    letter-spacing: 1px;
`
export const ContentSelect = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 0 30px;
`
export const SelectData = styled.select`
    width: 300px;
    margin-left: 30px;
    height: 35px;
    border-radius: 10px;
`
export const BtnSubmit = styled.button`
    border: 1px solid #00BFAA;
    background-color: #20252D;
    color: #fff;
    height: 30px;
    font-size: 11px;
    margin-top: 25px;
    width: 150px;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        width: 160px;
    }
`