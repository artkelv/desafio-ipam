import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import FormIpam from '../components/formIpam/FormIpam';
import Header from '../components/header/Header';
import ShowData from '../components/showData/ShowData';
import { returnMunicipios, urlEstados } from '../constants/constants';
import RenderizaComp from '../functions/RenderizarComponentes/renderizarComponente';
import { fetchErrorEstados, fetchErrorMunicipios, fetchSucessoEstados, fetchSucessoMunicipios } from '../redux-store/slice';
import { BoxMain } from "../styles/globalStyle";

function Spa() {

    const dispatch = useDispatch();
    const { estadoSelect } = useSelector((state) => state)
    
    const fetchEstados = async () => {
        const url = urlEstados;

        axios
          .get(url)
          .then((response) => {
            const resposta = response.data.map((item) => {
              return {
                nome: item.nome,
                sigla: item.sigla,
              };
            });
            dispatch(fetchSucessoEstados(resposta));
          })
          .catch((error) => {
            const resposta = error.message;
            dispatch(fetchErrorEstados(resposta));
          });
      };
    
      const fetchMunicipios = async () => {
        const url = returnMunicipios(estadoSelect);
    
        axios
          .get(url)
          .then((response) => {
            const resposta = response.data.map((item) => {
              return {
                nome: item.nome,
              };
            });
            dispatch(fetchSucessoMunicipios(resposta));
          })
          .catch((error) => {
            const reposta = error.response;
            dispatch(fetchErrorMunicipios(reposta))
          });
      };
      
      useEffect(() => {
        fetchEstados();
      }, []);
    
      useEffect(() => {
        fetchMunicipios();
      }, [estadoSelect]);

  return (
    <div >
      <Header />
      <BoxMain>
        <FormIpam />
        {RenderizaComp()}
      </BoxMain>
      <Footer />
    </div>
  );
}

export default Spa;
