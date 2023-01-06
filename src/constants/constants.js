export const urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export const returnMunicipios = (uf) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

export const returnDadosDoMunicipio = (municipio) => `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio}/`