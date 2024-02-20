import './ProductPage.scss'
import { observer } from "mobx-react-lite";
import {useEffect, useState } from "react";
import { getCurrentProducts } from "../../http/productApi";
import { useLocation } from "react-router-dom";
import LikeButton from "../Components/LikeBut/LikeButton";
import { Carousel } from 'react-bootstrap';
import Button from '../Components/BtnAddToBasket/Button';
import Dropdown from '../ShopPage/Dropdown';


const ProductPage = observer(() => {
    const location = useLocation()

    //Получаем состояние текущего товара
    const [deviceWatch, setDeviceWatch] = useState({
        name: "",
        price: 0,
        img: [],
        sizes: ''
    })

    const [selected, setSelected] = useState('Выберете размер')

    const getProduct = async(id) => {
        try{
            await getCurrentProducts(id)
            .then(response => {
                const res = {...response.data}
                setDeviceWatch(res)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        const productId = location.pathname.split('/')[2]
        getProduct(productId)
    }, [])


  

    return (
        <>
        <div className="Product__Page-Container">
            <div className="Product__Page-Wrapper">
              <div className="Product__Page-Info">
                <div className="Product__Page-Slider" >
                <Carousel style={{borderRadius: '15px'}}>
        <Carousel.Item>
                <img
                 style={{borderRadius: '15px'}}
                 src={'http://localhost:7000/' + deviceWatch.img[0]}
                 alt='StreetForce'
                 height='400'
                 width='400'
                />
        </Carousel.Item>

        <Carousel.Item>
                <img
                style={{borderRadius: '15px'}}
                src={'http://localhost:7000/' + deviceWatch.img[1]}
                 alt='StreetForce'
                 height='400'
                 width='400'
                />
        </Carousel.Item>

        <Carousel.Item>
                <img
                style={{borderRadius: '15px'}}
                src={'http://localhost:7000/' + deviceWatch.img[2]}
                 alt='StreetForce'
                 height='400'
                 width='400'
                />
        </Carousel.Item>

        <Carousel.Item>
                <img
                style={{borderRadius: '15px'}}
                src={'http://localhost:7000/' + deviceWatch.img[3]}
                 alt='StreetForce'
                 height='400'
                 width='400'
                />
        </Carousel.Item>
        </Carousel>
                </div>
                <div className='Product__Page-Size-Main-Wrapper'>
                        <div key={deviceWatch.id} className="Product__Page-Size-Main">
                                <div className="Product__Page-Size-Category">
                                    <h1 className="Product__Page-Size-Title">{deviceWatch.name}</h1>
                                    <p className="Product__Page-Size-Price">{deviceWatch.price} руб.</p>
                                </div>
                            <div className="Product__Page-Size">
                                <p className='Product__Page-Size-Choise' style={{marginRight: '20px'}}>Выберете размер</p>
                                <p className="Product__Page-Size-List">
                                    <span>EU</span>
                                    <span>US</span>
                                    <span>RUS</span>
                                    <span>СМ</span>
                                </p>
                           </div>
                            <div className="Product__Page-Size-Button">
                                <button className="button_size">39</button>
                                <button className="button_size">{deviceWatch.sizes}</button>
                                <button className="button_size">40</button>
                                <button className="button_size">41</button>
                                <button className="button_size">42</button>
                                <button className="button_size">43</button>
                                <button className="button_size">44</button>
                                <button className="button_size">45</button>
                            </div>

                            <div className="Product__Page-Size-Dropdown">
                                    <Dropdown
                                        selected={selected}
                                        setSelected={setSelected}
                                        device={deviceWatch.sizes}
                                    />
                            </div>
                            <div>
                                <p style={{marginTop: '20px'}}>
                                    Не нашли подходящего размера? Подберем его для вас!
                                </p>
                            </div>
                            <div className="Product__Page-Size-Btn-Block">
                                <Button
                                    product={deviceWatch}
                                />
                                {/* {inBasket ? <button className="Product__Page-Size-Btn" disabled = {true}>Товар в корзине</button> : <button className="Product__Page-Size-Btn" onClick={addCard}>Добавить в корзину</button> } */}
                                <button className="Product__Page-Size-Btn">Подобрать размер</button>
                                <div className='like__Btn-Product'>
                                    <LikeButton product={deviceWatch}/>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              {/* <div className="Product__Page-Info-Text-Bottom">
                <p>{deviceWatch.features}</p>
              </div> */}
            </div>    
                <div className='Product__Page-Info-Characteristick'>
                        <div className="Product__Page-Info-Title">
                            <h1 style={{borderBottom: '2px solid black', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '5px', cursor:'pointer'}}>О товаре</h1>
                            <h1  style={{borderBottom: '2px solid lightgrey', paddingLeft: '20px', paddingRight: '20px' , paddingBottom: '5px', cursor:'pointer'}}>Доставка и оплата</h1>
                        </div>
                        <div className="Product__Page-Info-Text-Top">
                            <h1 style={{marginTop: '30px',fontWeight: 'bold'}}>Описание товара</h1>
                        </div>
                </div> 
            </div>
        </>
    );
});

export default ProductPage;