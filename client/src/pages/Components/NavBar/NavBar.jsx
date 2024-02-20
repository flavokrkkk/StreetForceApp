import {NavLink} from "react-router-dom"
import './NavBar.scss'
import OffCanvas from "../CanvasReg/OffCanvas"
import { useContext } from "react"
import { Context } from "../../../main"
import MenuBurger from "./MenuBurger"
import love from '../../../static/img/love.png'
import shopBag from '../../../static/img/shopBag.png'


const setIsActive = ({isActive}) => isActive ? "NavBar__link-item active-link" : "NavBar__link-item"

const NavBar = () =>{

    const {device} = useContext(Context)
    const {liked} = useContext(Context)

   const localStorageLive = () => {
        if(localStorage.getItem('device') !== null || localStorage.getItem('device') == '[]'){
            const basket = JSON.parse(localStorage.getItem('device'))
            device.setDevices(basket)
        } else{
          localStorage.setItem('device', JSON.stringify([]))
        }
    
        if(localStorage.getItem('likes') !== null || localStorage.getItem('likes') == '[]'){
          const likes = JSON.parse(localStorage.getItem('likes'))
          liked.setLiked(likes)
      } else {
        localStorage.setItem('likes', JSON.stringify([]))
      }
    
      if(localStorage.getItem('typebar') !== null ){
        JSON.parse(localStorage.getItem('typebar'))
        
    } else {
      localStorage.setItem('typebar', JSON.stringify([]))
    }
     }
    

    return(
        <>  
        <div className="NavBar">
        <div className="NavBar__content">
            <div className="NavBar__content-leftSide">
                <NavLink onClick={localStorageLive}>
                    <MenuBurger/>
                </NavLink>
                <NavLink to='/main' style={{textDecoration: 'none'}}>
                    <div className="NavBar-logo">StreetForce</div>
                </NavLink>
            </div>
            <div className="NavBar__content-center">
                    <NavLink to="/main" className={setIsActive} onClick={localStorageLive}>
                        Главная
                    </NavLink>
                    <NavLink to="/shop" className={setIsActive} onClick={localStorageLive}>
                        Товары
                    </NavLink>
                    <NavLink to="/profile" className={setIsActive} onClick={localStorageLive}>
                        Профиль
                    </NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} onClick={localStorageLive}>
                        <OffCanvas/>
                    </NavLink>
                    
            </div>
            <div className="NavBar__content-rightSide">
                <div className="NavBar__content-rightSide-content">
                    <NavLink to="/basket" onClick={localStorageLive}>
                        <img src={shopBag} height='22'/>
                    </NavLink>
                    <NavLink to="/likes" height='22' onClick={localStorageLive}>
                        <img src={love}/>
                    </NavLink>
                </div>
            </div>
        </div> 
        </div>
        </>
    )
}

export {NavBar}