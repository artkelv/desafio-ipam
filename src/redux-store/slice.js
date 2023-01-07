import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'ibge',
    initialState: {
        estadoSelect: "",
        estados: [],
        municipios: [],
        infoMunicipios: [],
        errorEstados: null,
        errorMunicipios: null,
        errorInfoMunicipios: null
    },
    reducers: {
        alteraSelect: (state, action) => {
          state.estadoSelect = action.payload
        },
        fetchSucessoEstados: (state, action) => {
          state.estados = action.payload;
          state.errorEstados = null;
        },
        fetchSucessoMunicipios: (state, action) => {
          state.municipios = action.payload;
          state.errorInfoMunicipios = null;
        },
        fetchSucessoInfoMunicipio: (state, action) => {
          state.infoMunicipios = action.payload;
          state.errorInfoMunicipios = null;
        },
        fetchErrorEstados: (state, action) => {
          state.errorStates = action.payload;
        },
        fetchErrorMunicipios: (state, action) => {
          state.errorTowns = action.payload;
        },
        fetchErrorInfoMunicipio: (state, action) => {
          state.errorInfoMunicipios = action.payload;
        },
      }
})
export const { 
  alteraSelect,
  fetchSucessoEstados, 
  fetchSucessoMunicipios, 
  fetchSucessoInfoMunicipio, 
  fetchErrorEstados, 
  fetchErrorMunicipios, 
  fetchErrorInfoMunicipio } = slice.actions;

export default slice.reducer;