import Featured from "../../Featured/Featured";
import Chart from "../../Chart/Chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../WidgetLg/WidgetLg";
import WidgetSm from "../../WidgetSm/WidgetSm";
import Box from "@mui/material/Box";

export default function DashboardMain() {
  return (
    <>
      <Featured />
      <Chart data={userData} title="Usuarios registrados" grid dataKey="name" />
    </>
  );
}
