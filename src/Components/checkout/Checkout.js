import { propTypes } from 'react-bootstrap/esm/Image'
import { useLocation, useNavigate } from "react-router-dom";

import './Checkout.css'
function Checkout(props){
    const location = useLocation();
    const navigate = useNavigate();
    const handleCancel = () => {
      // 👇️ navigate programmatically
      navigate('../UserPage/UserPage');
    };

    const handleplacorder = () => {
        navigate('/ThankyouScreen/ThankyouScreen');
    }


    return(
        <div className='checkoutDiv'>
            <h2>Checkout Form</h2>
            <div>
                <h4>Billing Address</h4>
                <div className="input-group">
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Address</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Address 2 (optional)</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Payment Mode Available:</label>
                    <span>Cash on Delivery</span>
                </div>
                <div>
                    <h3 className='mt-20'>Total Price: {location.state.price}</h3>
                </div>
            </div>
            <div className='buttonGroup'>

            <a onClick={handleCancel}>Cancel Order</a>
            <button onClick={handleplacorder}>Place order</button>
            </div>
        </div>
    )
}
export default Checkout