import React from 'react';

const person = (props)=>{

    let style = {
        // borderLeftStyle: " 5px solid",
        display: "block",
        align: "center",
        margin: "20px",
        border: "1px solid #eee",
        boxShadow: "0 2px 2px #ccc",
        // width: "200px",
        padding: "20px"
    };
    return (
        <div onClick ={()=>props.clickHandler()} style={style}>
        <h1>My name is {props.name}</h1>
        <p >{props.children}</p>
    </div>
    );
}

export default person;