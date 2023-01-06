import {
  SectionShowData,
  TitleData,
  Info,
  FirstData,
  SecondData,
  Title,
  SubTitle,
  DataFetch
} from "./style";
import { useSelector } from "react-redux";

function ShowData() {
  const { infoMunicipios, errorInfoMunicipios } = useSelector((state) => state);

  const {
    nomeDoMunicipio,
    idDoMunicipio,
    idMicrorregiao,
    nomeMicrorregiao,
    idMesorregiao,
    nomeMesorregiao,
    idUf,
    siglaUf,
    nomeUf,
    idRegiao,
    siglaRegiao,
  } = infoMunicipios;

  return (
    <SectionShowData>
      <TitleData>
        Aqui está suas <Info>informações:</Info>
      </TitleData>
      <FirstData>
        <div>
          <Title>Município</Title>
          <SubTitle>Nome do Município:</SubTitle>
          <DataFetch>{nomeDoMunicipio}</DataFetch>
          <SubTitle>ID do Município:</SubTitle>
          <DataFetch>{idDoMunicipio}</DataFetch>
        </div>
        <div>
          <Title>Microrregião</Title>
          <SubTitle>ID da Microrregião:</SubTitle>
          <DataFetch>{idMicrorregiao}</DataFetch>
          <SubTitle>Nome da Microrregião:</SubTitle>
          <DataFetch>{nomeMicrorregiao}</DataFetch>
        </div>
        <div>
          <Title>Mesorregião</Title>
          <SubTitle>ID da mesorregiao:</SubTitle>
          <DataFetch>{idMesorregiao}</DataFetch>
          <SubTitle>Nome da Messorregião:</SubTitle>
          <DataFetch>{nomeMesorregiao}</DataFetch>
        </div>
      </FirstData>
      <SecondData>
        <div>
          <Title>Mesorregião</Title>
          <SubTitle>ID da UF:</SubTitle>
          <DataFetch>{idUf}</DataFetch>
          <SubTitle>Sigla da UF:</SubTitle>
          <DataFetch>{siglaUf}</DataFetch>
          <SubTitle>Nome da UF:</SubTitle>
          <DataFetch>{nomeUf}</DataFetch>
        </div>
        <div>
          <Title>Região</Title>
          <SubTitle>ID da Região:</SubTitle>
          <DataFetch>{idRegiao}</DataFetch>
          <SubTitle>Sigla da Região:</SubTitle>
          <DataFetch>{siglaRegiao}</DataFetch>
        </div>
      </SecondData>
    </SectionShowData>
  );
}
export default ShowData;
