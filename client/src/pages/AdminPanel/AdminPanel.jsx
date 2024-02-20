import { useEffect, useState } from 'react';
import './AdminPanel.scss'
import { createNewProduct, deleteProduct } from '../../http/productApi';
import { addType, getType } from '../../http/typeApi';
import { addBrand, getBrand } from '../../http/brandApi';

const AdminPanel = () => {

    const [sortParams, setSortParams] = useState({
        name: "",
        price: 0,
        features: [],
        compositions: [],
        description: '',
        sizes: '',
        img: [],
        typeId: 0,
        brandId: 0,
        gender: '',
        brand: "",
        type: ''
    })

    const [features, setFeatures] = useState('')
    const [composition, setComposition] = useState('')
    const [types, setTypes] = useState([])
    const [brands, setBrands] = useState([])
    const [deleteId, setDeleteId] = useState('')


    const addNewType = async() => {
        try{
            await addType(sortParams.type)
            .then(response => {
                
            })

        }
        catch(e){
            console.log(e)
        }
    }

    //Брэнды
    const addNewBrand = async() => {
        try{
            await addBrand(sortParams.brand)
            .then(response => {
                setSortParams({...sortParams, brand: ''})
            })

        }
        catch(e){
            console.log(e)
        }
    }

    const getAllTypes = async() => {
        try{
            await getType()
            .then(response => {
                console.log(response.data)
                setTypes(response.data)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    const getAllBrand = async() => {
        try{
            await getBrand()
            .then(response => {
                setBrands(response.data)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    const delProduct = async() => {
        try{
            await deleteProduct(deleteId)
        }
        catch(e){
            console.log(e)
        }
    }



    const handleChangeFeatures = (e) => {
        setFeatures(e.target.value)
    }

    const handleChangeComposition = (e) => {
        setComposition(e.target.value)
    }


    const handleImage = (e) =>{
        setSortParams({...sortParams, img: [...sortParams.img, e.target.files[0]]})
    }

    const addFeatures = (e) => {
        e.preventDefault()
        setSortParams({
            ...sortParams, features: [...sortParams.features, features]
        })
        setFeatures('')
    }

    const addComposition = (e) => {
        e.preventDefault()
        setSortParams({
            ...sortParams, compositions: [...sortParams.compositions, composition]
        })
        setComposition('')
    }

   const  handleChangeParams = (e) => {
        setSortParams({...sortParams, [e.target.name]: e.target.value})
        console.log(sortParams)
   }

   const create = async(name, price, sizes, typeId, brandId, gender, description, compositions, features, img) => {
    try{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('sizes', sizes)
        formData.append('typeId', typeId)
        formData.append('brandId', brandId)
        formData.append('gender', gender)
        formData.append('description', description)
        formData.append('compositions', compositions)
        formData.append('features', features)
        for (let i = 0; i < 4; i++){
            formData.append('files', img[i])
        }
        await createNewProduct(formData)
    }
    catch(e){
        console.log(e)
    }}

    useEffect(()=>{
        getAllTypes()
        getAllBrand()
    },[])

    return (
        <>
            <div className="Admin__Container">
                <div className='Admin__Wrapper' style={{display: 'flex', gap: '79px'}}>
                    <div className="Admin__Left-Panel">
                        <div className="Admin__Title">
                            <h1>Загрузите изображение</h1>
                        </div>
                        <div className="Admin__imgUpload">
                            <input type="file" name='file' onChange={(e) => {handleImage(e)}} />
                                {sortParams.img.map((item) => {
                                    return(
                                        <>
                                        {item.name}
                                        </>
                                    )
                                })}
                        </div>

                        <div className="Admin__left-Panel-Price">
                            цена товара
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.price} name='price' className="Admin__Center-Input" placeholder='Цена товара'/>
                            размеры
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.sizes} name='sizes' className="Admin__Center-Input" placeholder='имеющиеся размеры'/>

                            <select name="typeId" className='ShopPage__sort-input' onChange={handleChangeParams}>
                                        <option name="typeId" disabled selected>Тип одежды</option>
                                        {types.map((type) => {
                                            return(
                                                <option name="typeId" value={type.id}>{type.name}</option>
                                            )
                                        })}
                            </select>
                            <select name="brandId" className='ShopPage__sort-input' onChange={handleChangeParams}>
                                    <option name="brandId" disabled selected>Бренд</option>
                                    {brands.map((brand) => {
                                            return(
                                                <option name="brandId" value={brand.id}>{brand.name}</option>
                                            )
                                        })}
                            </select>

                            <select name="gender" className='ShopPage__sort-input' onChange={handleChangeParams}>
                                    <option name="gender" disabled selected>Пол</option>
                                    <option name="gender" value='Мужчины'>Мужчины</option>
                                    <option name="gender" value='Женщины'>Женщины</option>
                                    <option name="gender" value='Унисекс'>Унисекс</option>
                            </select>
                        </div>
                    </div>

                    <div className="Admin__Center-Panel">
                        <div className="Admin__Center-Panel-Up">
                            <div className="Admin__Center-Panel-Up-Title">
                                <h1>Дайте название товару</h1>
                            </div>
                            <div className="Admin__Center-Panel-Up-Input">
                                <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.name} name='name' className="Admin__Center-Input" placeholder='Название товара...'/>
                            </div>
                        </div>

                        <div className="Admin__Center-Panel-Down">
                            <div className="Admin__Center-Panel-Up-Title">
                                <h1>Введите краткое описание</h1>
                            </div>
                            {/* <div className="Admin__Center-Panel-Up-Block">
                                <h1>Описание товара...</h1>
                            </div> */}
                            <input onChange={(e) => { handleChangeParams(e)}}  value={sortParams.description} name="description" type='text' className="Admin__Center-Panel-Up-Block" placeholder='Описание товара...'/>
                        <div style={{textAlign: 'center'}}>
                            <button className="Admin__Center-Button" onClick={() => {create(sortParams.name, sortParams.price, sortParams.sizes, sortParams.typeId, sortParams.brandId, sortParams.gender,  sortParams.description, sortParams.compositions, sortParams.features, sortParams.img)}}>
                                Добавить товар
                            </button>
                        </div>
                            
                        </div>
                    </div>

                    <div className="Admin__Right-Panel-Up-Block">
                        <div className="Admin__Right-Panel-Up-Title">
                            <h1>
                                Опишите особенности
                            </h1>
                        </div>
                            <div className="Admin__Right-Panel-Up-Input">
                                <input onChange={(e) => { handleChangeFeatures(e)}}  value={features} name='features' className="Admin__Right-Input" placeholder='Название товара...'/>
                                <button onClick={addFeatures}>add features</button>
                                {sortParams.features.map((item) => {
                                    return(
                                        <>
                                        {item}
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                    <div className="Admin__Right-Panel-Up-Block">
                        <div className="Admin__Right-Panel-Up-Title">
                            <h1>
                            Состав товара
                            </h1>
                        </div>
                            <div className="Admin__Right-Panel-Up-Input">
                                <input  onChange={(e) => { handleChangeComposition(e)}} value={composition} name='compositions' className="Admin__Right-Input" placeholder='Название товара...'/>
                                <button onClick={addComposition}>add features</button>
                                {sortParams.compositions.map((item) => {
                                    return(
                                        <>
                                        {item}
                                        </>
                                    )
                                })}
                            </div>
                    </div>
                    
                </div>
                <div className="Admin__addType">
                    добавьте тип
                        <input onChange={(e) => {handleChangeParams(e)}} name="type" value={sortParams.type} type="text" className="Admin__Right-Input"   placeholder='Добавить тип'/>
                        <button onClick={addNewType}>клик</button>
                </div>
                <div className="Admin__addBrand" style={{marginTop: '50px'}}>
                    добавьте брэнд
                        <input onChange={(e) => {handleChangeParams(e)}} name="brand" value={sortParams.brand} type="text" className="Admin__Right-Input"   placeholder='Добавить брэнд'/>
                        <button onClick={addNewBrand}>клик</button>
                </div>
                УДАЛИ ПРОДУКТ
                <input onChange={(e) => {setDeleteId(e.target.value)}} value={deleteId} className="Admin__Center-Input" placeholder='ВВЕДИ В МЕНЯ АЙДИ ПРОДУКТА'/>
                <button onClick={() => {delProduct()}}>click</button>
            </div>
        </>
    );
};

export default AdminPanel;