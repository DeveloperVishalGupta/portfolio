import React from "react";

export default function Form(props) {

    return (
        <>
            <li style={{textAlign:"center"}} onClick={()=>{props.onSelect(props.id)}}>{props.itens}</li>

        </>
    )
}