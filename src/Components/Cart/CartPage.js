
import { Row , Col,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useEffect, useState } from 'react';
import './CartPage.css'
import Checkout from '../checkout/Checkout';
import { useNavigate } from "react-router-dom";


function CartPage(props){
    const [ cartdata, setCartData] = useState(props.cartdata)
    const [ TotalPrice, setTotalPrice] = useState(0)

    const navigate = useNavigate();

      const handleCheckout = () => {
        // 👇️ navigate programmatically
        // navigate('./checkout');
        navigate('../checkout/Checkout',{ state: { price: TotalPrice } });
      };

 

    useEffect(() => {
        setCartData(props.cartdata)
        TotalPriceFun()
    })
  
    const hanldeCount = (e,type) => {
        var title = e.target.closest(".card").querySelector(".title .title-text").innerText;
        var index = getIndex(e.target.closest(".card").querySelector(".title .title-text" ).innerText);
       
       
       
            if( type == 'minus'){
                cartdata[index].price = Number(cartdata[index].price) / Number(cartdata[index].quntity)
                cartdata[index].quntity = Number(cartdata[index].quntity) -1
                
            }else {
                cartdata[index].quntity = Number(cartdata[index].quntity) + 1
                cartdata[index].price = Number(cartdata[index].price) * Number(cartdata[index].quntity)
            }
            if(cartdata[index].quntity == 0){
                cartdata.splice(index , 1)
            }
            setCartData([...cartdata])
            
       
      
        
        console.log('minus')
    }
    function getIndex(name) {
        return cartdata.findIndex(obj => obj.name === name);
      }
      
    const TotalPriceFun = () => {
        let sum = 0;
        for (const key in cartdata) {
            sum += Number(cartdata[key].price);
          }
        // cartdata.map(x => TotalPrice =TotalPrice + Number(x.price))
        setTotalPrice(sum)
    }
    return(
        <div>
          
          {cartdata.length > 0 &&  
          <div>
            {cartdata.map(x => (
                    <div className='card Cartcard'>
                        <p className='title'><span>Product Name:</span> <span className='title-text'>{x.name}</span></p>
                        <p className='price'><span>Product Price:</span> <span className='price-text'>{x.price}</span></p>
                        <p className='quantity'><span>Quantity</span> <span className='quantity-text'>{x.quntity}</span></p>
                        <div className='buttonRow'>
                            <button className='cardbtns' onClick={e => hanldeCount(e,"minus")}>-</button>
                            <button className='cardbtns' onClick={e => hanldeCount(e,"plus")}>+</button>
                        </div>
                    </div>
                ))}
                <h2>Totl Price:{TotalPrice} </h2>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
            }
            {cartdata.length == 0 && 
            <div>
                <h3>No Product added</h3>
            </div>
            }
            {/* <Checkout TotalPrice={TotalPrice}/> */}
                
        </div>
    )
}
export default CartPage