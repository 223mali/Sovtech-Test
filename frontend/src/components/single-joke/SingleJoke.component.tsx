import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetRandomJokeAction } from '../../actions/GetRandomJoke.action';
// import { GET_RANDOM_JOKE } from '../../actions/GetRandomJoke.types';
import { LOAD_CATEGORIES, GET_RANDOM_JOKE } from '../../GraphQL/Queries';
import { RootStore } from '../../Store';


interface SingleJokeI {
    icon_url:string,
    value:string,

}
const style = {
    root: {
        width: '100%',
        maxWidth: '700px',
        maxHeight: '30em',
        height:'50vh',
        background: 'white',
        boxShadow: '0px 10px 14px black',
        borderRadius: '4px',
        display:'flex',
        // FlexDirection :'column',
        justifyContent:'center',
    
        alignItems:'center'
    },
    textWrapper: {
        width: '60%',
        // textAlign: 'center'
    }
}

const SingleJoke = ({icon_url,value}:SingleJokeI)=>{
    
    return (
        <div onClick={(e)=>e.stopPropagation()} style={style.root}>
            <img src={icon_url} alt='icon'/>
            <div style={style.textWrapper} className='joke-wrapper'>
                <h4>{value ? value: null}</h4>
            </div>
        </div>
    )
}


export default SingleJoke