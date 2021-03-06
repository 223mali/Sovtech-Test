import React from 'react';
import logo from '../../assets/logo.png'

const Header = ()=>{
    return (
        <div style={style.root}>
            <div style={style.imageWrapper}>
                <img style={style.imgStyle} src={logo} alt=""/>
            </div>
        </div>
    )
}

const style = {
    root:{
        height: '100px',
        background: 'white',
        boxShadow: ' 0px 4px 6px #000',
        
    },
    imageWrapper:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    imgStyle:{
        width:'10%'
    }
}

export default Header