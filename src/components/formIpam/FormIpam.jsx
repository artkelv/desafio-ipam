import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import flecha from "../../assets/flecha.png";
import { returnDadosDoMunicipio } from "../../constants/constants";
import filtroParaMunicipio from "../../functions/FormatarStrings/formatarStrings";
import { alteraSelect ,fetchErrorInfoMunicipio, fetchSucessoInfoMunicipio } from "../../redux-store/slice";
import { MainContent, WelcomeSection, Title, Indication, SubTitle, FormIbge, BoxSelect, TitleSelect, ContentSelect, SelectData, BoxBtnSubtmit, BtnSubmit } from "./style"; 

function FormIpam(){

    const [selectState, setSelectStates] = useState("AM");
    const [selectMunicipio, setSelectMunicipio] = useState("");

    const dispatch = useDispatch();

    const { estados, municipios } = useSelector((state) => state)
    
    const fetchDadosMunicipio = async (e) => {
        e.preventDefault()
        const stringMunicipio = filtroParaMunicipio(selectMunicipio);
        const url = returnDadosDoMunicipio(stringMunicipio);

        axios
          .get(url)
          .then((response) => {
            const result = response.data;
            
            if (result.length > 1) {
              const municipioCorreto = result.find(
                (item) => item.microrregiao.mesorregiao.UF.sigla === selectState
              );
    
              const infoMunicipio = {
                nomeDoMunicipio: municipioCorreto.nome,
                idDoMunicipio: municipioCorreto.id,
                idMicrorregiao: municipioCorreto.microrregiao.id,
                nomeMicrorregiao: municipioCorreto.microrregiao.nome,
                idMesorregiao: municipioCorreto.microrregiao.mesorregiao.id,
                nomeMesorregiao: municipioCorreto.microrregiao.mesorregiao.nome,
                idUf: municipioCorreto.microrregiao.mesorregiao.UF.id,
                siglaUf: municipioCorreto.microrregiao.mesorregiao.UF.sigla,
                nomeUf: municipioCorreto.microrregiao.mesorregiao.UF.nome,
                idRegiao: municipioCorreto.microrregiao.mesorregiao.UF.regiao.id,
                siglaRegiao:
                  municipioCorreto.microrregiao.mesorregiao.UF.regiao.sigla,
              };

              dispatch(fetchSucessoInfoMunicipio(infoMunicipio));
            } else {
              const infoMunicipio = {
                nomeDoMunicipio: result.nome,
                idDoMunicipio: result.id,
                idMicrorregiao: result.microrregiao.id,
                nomeMicrorregiao: result.microrregiao.nome,
                idMesorregiao: result.microrregiao.mesorregiao.id,
                nomeMesorregiao: result.microrregiao.mesorregiao.nome,
                idUf: result.microrregiao.mesorregiao.UF.id,
                siglaUf: result.microrregiao.mesorregiao.UF.sigla,
                nomeUf: result.microrregiao.mesorregiao.UF.nome,
                idRegiao: result.microrregiao.mesorregiao.UF.regiao.id,
                siglaRegiao: result.microrregiao.mesorregiao.UF.regiao.sigla,
              };

              dispatch(fetchSucessoInfoMunicipio(infoMunicipio));
            }
          })
          .catch((error) => {
            const errorResponse = error.response;
            dispatch(fetchErrorInfoMunicipio(errorResponse))
          });
      };

      useEffect(() => {
        dispatch(alteraSelect(selectState))
      },[selectState])

    return(
        <MainContent>
            <WelcomeSection>
                <Title>Sejam Bem-Vindos</Title>
                <div>
                    <SubTitle><Indication>ao</Indication> Desafio <b>IPAM!</b></SubTitle>
                </div>
            </WelcomeSection>
            <FormIbge onSubmit={fetchDadosMunicipio}>
                <BoxSelect>
                    <TitleSelect htmlFor="">Selecione o Estado desejado:</TitleSelect>
                    <ContentSelect>
                        <img src={flecha} alt="Imagem indicando para que selecione o estado ao lado." width="45px"/>
                        <SelectData 
                            value={selectState}
                            onChange={(e) => setSelectStates(e.target.value)}>
                            {estados.map((item) => {
                                return (
                                    <option key={item.nome} value={item.sigla}>
                                      {item.nome}
                                    </option>
                                  );
                            })}
                        </SelectData>
                    </ContentSelect>
                </BoxSelect>
                <BoxSelect>
                    <TitleSelect htmlFor="">Selecione o municipio</TitleSelect>
                    <ContentSelect>
                        <img src={flecha} alt="Imagem indicando para que selecione o estado ao lado." width="45px"/>
                        <SelectData 
                            value={selectMunicipio} 
                            onChange={(e) => setSelectMunicipio(e.target.value)}>
                            {municipios.map((item) => {
                                return (
                                    <option key={item.nome} value={item.sigla}>
                                        {item.nome}
                                    </option>
                                )
                            })}
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
export default FormIpam;