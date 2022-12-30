import flecha from "../../assets/flecha.png";
import { MainContent, WelcomeSection, Title, Indication, SubTitle, FormIbge, BoxSelect, TitleSelect, ContentSelect, SelectData, BoxBtnSubtmit, BtnSubmit } from "./style"; 

export function FormIpam(){
    return(
        <MainContent>
            <WelcomeSection>
                <Title>Sejam Bem-Vindos</Title>
                <div>
                    <SubTitle><Indication>ao</Indication> Desafio <b>IPAM!</b></SubTitle>
                </div>
            </WelcomeSection>
            <FormIbge>
                <BoxSelect>
                    <TitleSelect htmlFor="">Selecione o Estado desejado:</TitleSelect>
                    <ContentSelect>
                        <img src={flecha} alt="Imagem indicando para que selecione o estado ao lado." width="45px"/>
                        <SelectData name="" id="">
                            {/* <option value="">Escolha o estado</option> */}
                        </SelectData>
                    </ContentSelect>
                </BoxSelect>
                <BoxSelect>
                    <TitleSelect htmlFor="">Selecione o municipio</TitleSelect>
                    <ContentSelect>
                        <img src={flecha} alt="Imagem indicando para que selecione o estado ao lado." width="45px"/>
                        <SelectData name="" id="">
                            {/* <option value="">teste 2</option> */}
                        </SelectData>
                    </ContentSelect>
                </BoxSelect>
                <BoxBtnSubtmit>
                    <BtnSubmit type="submit">Obter resultado</BtnSubmit>
                </BoxBtnSubtmit>
            </FormIbge>
        </MainContent>
    )
}