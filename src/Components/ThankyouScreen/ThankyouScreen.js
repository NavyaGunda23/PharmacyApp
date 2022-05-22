import { useLocation, useNavigate } from "react-router-dom";
import './ThankyouScreen.css'
function ThankyouScreen(){
    const navigate = useNavigate();
    const handleOrder = () => {
      // 👇️ navigate programmatically
      navigate('../UserPage/UserPage');
    };
    return (
        <div className="thankScreen">
            <h2>your order is placed</h2>
            <p>your order will recive in one week. Please continue Shoping</p>
            <button className="plcorder" onClick={handleOrder}>Place Another Order</button>
        </div>
    )
}
export default ThankyouScreen