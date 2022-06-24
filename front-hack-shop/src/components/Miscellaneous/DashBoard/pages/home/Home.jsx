import Featuredinf from "../../featuredinfo/Featuredinf";
import "./Home.css";
import Chart from "../../chart/Chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";
const Home = () => {
  return (
    <div className="home">
      <Featuredinf />
      <Chart data={userData} title="Analisis de Usuarios" grid dataKey="name" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
