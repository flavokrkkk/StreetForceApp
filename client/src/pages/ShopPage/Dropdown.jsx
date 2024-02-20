import './Dropdown.scss'
import arrow from '../../static/img/arrow.svg'
import { useState } from 'react';

const Dropdown = ({selected, setSelected, device}) => {

    const [isActive, setIsActive] = useState(false)
    const options = [device]
    return (
        <div className='dropdown' style={{fontFamily: 'Helvetica-light'}}>
            <div className='dropdown-btn'  name="typeId" onClick={() => {
                setIsActive(!isActive)
            }}>
                {selected}
                <img src={arrow} height='20'/>
                </div>
               {isActive && (
            <div className='dropdown-content'>
                {options.map(op => 
                        <>
                            <div onClick={() => {
                                setSelected(op)
                                setIsActive(false)
                                }} className='dropdown-item' >{op}</div>
                        </>
                    )}
            </div>
               )}
         </div>
    );
};

export default Dropdown;