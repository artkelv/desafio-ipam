import { useSelector } from "react-redux";
import MyInfo from "../../components/myInfo/MyInfo"
import ShowData from "../../components/showData/ShowData"

function RenderizaComp() {
  const { infoMunicipios } = useSelector((state) => state);

  if (infoMunicipios.length === 0) {
    return <MyInfo />;
  } else {
    return <ShowData/>;
  }
}

export default RenderizaComp;
