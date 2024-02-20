import { Link } from "react-router-dom"
import LikeButton from "../Components/LikeBut/LikeButton.jsx";

const ProductList = ({productListProps}) =>{
    return(
        <>
        {productListProps.map(product => {
            return(
                <>
                <li className="ShopPage__Product-card">
                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <img className='ShopPage__Product-card-img' src={'http://localhost:7000/' + product.img[0]} width={"292"} height={"292"}/>
                    </Link>
                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <p className='ShopPage__Product-card-price'>{product.price} руб.<div className=""></div></p>
                    <p className='ShopPage__Product-card-title'>{product.name}</p>
                    </Link>
                    <div className="likeBut" style={{marginTop: "10px"}}>
                    <LikeButton product={product}/>
                    </div>
                </li>
                </>
            )
        })}
        </>
    )
}

export default ProductList;