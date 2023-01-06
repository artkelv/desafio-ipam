function filtroParaMunicipio(string) {
    const filtroRetiraAcentos = string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const filtroSubstuiEspacos = filtroRetiraAcentos.replace(/ /g, "-");
    const stringFormatada = filtroSubstuiEspacos;
  
    return stringFormatada;
  }
  
  export default filtroParaMunicipio;