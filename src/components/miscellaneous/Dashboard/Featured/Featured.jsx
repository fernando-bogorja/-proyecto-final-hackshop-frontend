import "./Featured.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
export default function Featured(props) {
  return (
    <div className="featured-container">
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredTitle">Ventas</div>
          <div className="featuredMoneyContainer">
            <div className="featuredMoney">$4,415</div>
            <span className="featuredMoneyRate">
              -1.4{" "}
              <ArrowDownwardOutlinedIcon className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Comparado con el mes pasado</span>
        </div>
        <div className="featuredItem">
          <div className="featuredTitle">Costos</div>
          <div className="featuredMoneyContainer">
            <div className="featuredMoney">$2,415</div>
            <span className="featuredMoneyRate">
              +11.4 <ArrowUpwardOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Comparado con el mes pasado</span>
        </div>
        <div className="featuredItem">
          <div className="featuredTitle">Ingresos</div>
          <div className="featuredMoneyContainer">
            <div className="featuredMoney">$2,415</div>
            <span className="featuredMoneyRate">
              +11.4 <ArrowUpwardOutlinedIcon className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Comparado con el mes pasado</span>
        </div>
      </div>
    </div>
  );
}
