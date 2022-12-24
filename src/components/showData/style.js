import styled from "styled-components";

export const SectionShowData = styled.section`
    *{
        padding: 0;
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
`
export const TitleData = styled.h3`
    margin-bottom: 40px;
    color: #fff;
`
export const Info = styled.span`
    color: #00BFAA;
`
export const FirstData = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
export const SecondData = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
`
export const Title = styled.h5`
    color: #FF0505;
    letter-spacing: 1px;
    margin: 10px 0;
`
export const SubTitle = styled.h6`
    color: #00BFAA;
    letter-spacing: 1px;
    margin: 12px 0;
`
export const DataFetch = styled.span`
    border: 1px solid #137B70;
    display: inline-block;
    width: 150px;
    padding: 2px 3px;
    font-size: 13px;
    color: #fff;
    border-radius: 15px;
    text-align: center;
`
export const BoxBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const BtnClose = styled.button`
    margin-right: 50px;
    border: none;
    background-color: #137B70;
    color: #fff;
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #086157;
    }
`