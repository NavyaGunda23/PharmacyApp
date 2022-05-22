import './Product.css'
import { Row, Col, Card, Button, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { stockData } from '../../data';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import ToastComp from '../Toast/ToastComp';
// import Cart from '../cart/Cart';
import CartPage from '../Cart/CartPage';

function Products() {

    const [data, setData] = useState(stockData);
    const [searchData, setSearchedData] = useState(stockData)

    const category = [
        {
            name: "headache",
            clsname: "tagbutton"
        },
        {
            name: "Fever",
            clsname: "tagbutton"
        },
        {
            name: "Bodypain",
            clsname: "tagbutton"
        }
    ]
    const [categoryList, setCategoryList] = useState(category)

    const SearchAction = (e) => {
        getIndex("", category, 'clsname')
        var srchVal = e.target.value;
        if (srchVal.length > 0) {
            var srchResults = searchData.filter((x) => x.name.includes(srchVal));
            setData(srchResults)
        } else {
            setData(stockData)
        }

    }
    const handleCtegory = (e) => {
        var catVal = e.target.innerText;


        if (!e.target.className.includes('active')) {
            getIndex(catVal, category, 'clsname')
            var srchResults = searchData.filter((x) => x.Category == catVal);
            setData(srchResults)
        } else {

            setData(stockData)
        }

    }
    function getIndex(value, arr, Category) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name === value) {
                arr[i][Category] = "tagbutton active"
            } else {
                arr[i][Category] = "tagbutton"
            }
        }
        setCategoryList(arr)
    }
    const handleClearAll = () => {
        setData(stockData)
        getIndex("", category, 'clsname')
    };
    const [cartList, setCartList] = useState([])
    const [prdName, setPrdName] = useState("")
    const handleClick = (e) => {
        var index = getIndexName(e.target.closest(".card").querySelector(".title").innerText)
        setPrdName(e.target.closest(".card").querySelector(".title").innerText)
        if (index > -1) {
            cartList[index].quntity = Number(cartList[index].quntity) + 1
        } else {
            cartList.push({
                name: e.target.closest(".card").querySelector(".title").innerText,
                price: e.target.closest(".card").querySelector(".price").innerText,
                quntity: 1
            })
        }
        setShow(true)
        setCartList([...cartList]);
        console.log(cartList)
    }

    function getIndexName(email) {
        return cartList.findIndex(obj => obj.name === email);
    }
    const [prdVisible, setPrdVisibilty] = useState(true)
    const handleCart = (type) => {
        if (type == "home") {
            setPrdVisibilty(true)
        } else {
            setPrdVisibilty(false)
        }
    }
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log("rendering")
    }, [cartList])
    return (
        <div>
            <Search
                type="text"
                onKeyUp={e => SearchAction(e)}
                placeholder="Enter the value"
            ></Search>
            <div>
                <div className='menu'>
                    <a className='home' onClick={e => handleCart("home")}>Home</a>
                    <a className='Cart' onClick={e => handleCart("cart")}>Cart</a>
                </div>


            </div>
            {prdVisible != true ?
                <CartPage cartdata={cartList} />
                :
                <>
                    <div className='p-20'>
                        <div>
                            <p className='float-left'>Filter using Category</p>
                            <div className='catDiv'>
                                {categoryList.map(x => (<button className={x.clsname} onClick={e => handleCtegory(e)}>{x.name}</button>))}
                            </div>
                            <a className='filter' onClick={handleClearAll}>Clear All Filters</a>
                        </div>
                        <div className='prdCard'>
                            <Row xs={2} md={5} className="g-4">
                                {data.map((data, key) => (
                                    <Col>
                                        <Card className='card'>
                                            <Card.Img variant="top" src={data.image} />
                                            <Card.Body>
                                                <Card.Title className='title'>{data.name}</Card.Title>
                                                <Card.Text className='price'>
                                                    {data.price}
                                                </Card.Text>
                                                <Button variant="primary" onClick={e => handleClick(e)}>Add To Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        <ToastComp onClose={() => setShow(false)} show={show} text={prdName} />
                    </div>
                </>
            }


        </div>
    )
}

export default Products