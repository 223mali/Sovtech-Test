import { useQuery, gql } from '@apollo/client';
import React, { Suspense, useEffect, useState } from 'react';
import { LOAD_CATEGORIES } from '../../GraphQL/Queries';
import CategoryItem from '../category-item/CategoryItem';
import CSS from 'csstype'
import { TogglePopup } from '../../actions/TogglePopup.action';
import { useDispatch, useSelector } from 'react-redux';
import {RootStore} from '../../Store'
// import PopupComponent from '../popup/Popup.component';
import SingleJoke from '../single-joke/SingleJoke.component';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';

const PopupComponent = React.lazy(()=>import("../popup/Popup.component"))

type Category = {
    name:string
}
const CategoriesDirectory = ()=>{
    const[category, setCategory] =  useState("")
    const popupState = useSelector((state: RootStore)=>state.popup)
    const dispatch = useDispatch();
    console.log(popupState)
    
    const {data, error, loading} =  useQuery(LOAD_CATEGORIES)

    useEffect(()=>{
        console.log(data)
    }, [data])


    async function toggle(){
        dispatch(TogglePopup(popupState.isOpen))
    }


    async function handleClick(e:any, category:string){
        if(category){
            setCategory(category)
        }
        await toggle()
        
        
    }
    popupState.isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
   

    return(
        
        <Suspense fallback={<Spinner />}>
            <div style={style.root} className="root">
            
            {popupState.isOpen ? <PopupComponent category= {category}  /> : null}
        {data? data.categories.map((elem:Category)=>(<CategoryItem handleClick={handleClick} name={elem.name} />)) : null}
        {/* <button onClick={toggle}></button> */}
        </div>
        </Suspense>
    )
}

const rootStyle: CSS.Properties = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
    
}

const style = {
    root:rootStyle
}


export default CategoriesDirectory
