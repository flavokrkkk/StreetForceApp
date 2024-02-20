import like from '../../../static/img/like.svg'
import { useContext, useEffect, useState } from "react";
import { Context } from '../../../main.jsx';
import ilikes from '../../../static/img/ilikes.svg' 
import './LikeButton.scss'

const LikeButton = ({product}) => { //input product {name: "", price: 0, img: [], descr: ""}
    const {liked} = useContext(Context)

    const [newLike, setNewLike] = useState(false)

    const addLike = (product) => {
        liked.setAddLiked(product)
        setNewLike(true)

        if(localStorage.getItem('likes') == null){
            localStorage.setItem('likes', JSON.stringify([product]))

        } else{
            let ger = []
            ger = JSON.parse(localStorage.getItem('likes')); 
            console.log(ger, 'ger')
            ger.push(product)
            localStorage.setItem('likes', JSON.stringify(ger))
        }
    }

    const removeLike = (product) => {
        let ger = []
        for (let i in liked.Liked){
            if (product.id != liked.Liked[i].id){
                ger.push(liked.Liked[i])
            }
        }
        liked.setLiked(ger)
        localStorage.removeItem('likes')
        localStorage.setItem('likes', JSON.stringify(ger))
        setNewLike(true)
    }

    const isLiked = (id) => {
        for (let i in liked.Liked){
            if (id == liked.Liked[i].id){
                return true
            }
        }
        return false
    }

    useEffect(() => {
        setNewLike(false)
    }, [newLike])
    return(
    <>
    {isLiked(product.id) ?
                    <img src={ilikes} alt="" className="ShopPage__like" onClick={() => {removeLike(product)}}/>
                    : 
                    <img src={like} alt="" className="ShopPage__like" onClick={() => {addLike(product)}} />
    }
    </>
    )
}

export default LikeButton;