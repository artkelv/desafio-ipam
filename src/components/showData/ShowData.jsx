import { SectionShowData, TitleData, Info, FirstData, SecondData, Title, SubTitle, DataFetch, BoxBtn, BtnClose } from "./style";

export default function ShowData() {
  return (
    <SectionShowData>
        <TitleData>Aqui está suas <Info>informações:</Info></TitleData>
      <FirstData>
        <div>
          <Title>Município</Title>
          <SubTitle>Nome do Município:</SubTitle>
          <DataFetch>Angra dos Reis</DataFetch>
          <SubTitle>ID do Município:</SubTitle>
          <DataFetch>365</DataFetch>
        </div>
        <div>
          <Title>Microrregião</Title>
          <SubTitle>ID da Microrregião:</SubTitle>
          <DataFetch>98566</DataFetch>
          <SubTitle>Nome da Microrregião:</SubTitle>
          <DataFetch>Uberaba</DataFetch>
        </div>
        <div>
          <Title>Mesorregião</Title>
          <SubTitle>ID da mesorregiao:</SubTitle>
          <DataFetch>63485</DataFetch>
          <SubTitle>Nome da Messorregião:</SubTitle>
          <DataFetch>Angra</DataFetch>
        </div>
      </FirstData>
      <SecondData>
        <div>
          <Title>Mesorregião</Title>
          <SubTitle>ID da UF:</SubTitle>
          <DataFetch>3485</DataFetch>
          <SubTitle>Sigla da UF:</SubTitle>
          <DataFetch>RJ</DataFetch>
          <SubTitle>Sigla do UF:</SubTitle>
          <DataFetch>Angra dos Reis</DataFetch>
        </div>
        <div>
          <Title>Região</Title>
          <SubTitle>ID a Região:</SubTitle>
          <DataFetch>563451</DataFetch>
          <SubTitle>Sigla da Região:</SubTitle>
          <DataFetch>RJ</DataFetch>
        </div>
      </SecondData>
      <BoxBtn>
        <BtnClose>Apagar dados</BtnClose>
      </BoxBtn>
    </SectionShowData>
  );
}
