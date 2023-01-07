import { SubSectionInfo ,Title, SubTitle, ImportantText } from "./style";

export default function MyInfo(){
    return(
        <section>
            <SubSectionInfo>
                <hgroup>
                    <Title>Este desafio foi feito por</Title>
                    <h1><SubTitle>Arthur Kelvim.</SubTitle></h1>
                </hgroup>
                <ImportantText>“Um meio ambiente preservado, é um futuro assegurado.”</ImportantText>
            </SubSectionInfo>
        </section>
    )
}