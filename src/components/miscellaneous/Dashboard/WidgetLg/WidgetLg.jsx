import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transacciones</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="th widgetLgTh">Cliente</th>
          <th className="th widgetLgTh">Fecha</th>
          <th className="th widgetLgTh">Monto</th>
          <th className="th widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Rejected" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>{" "}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Rejected" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Don Cristobal</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$150</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
