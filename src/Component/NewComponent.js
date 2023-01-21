import React, {useState} from "react";
import Form from "./Form";

export default function NewComponent() {
    const [input, setinput] = useState('');
    const [valArry, setvalArry] = useState([]);
    const [filter, setfilter] = useState([]);

    const setValue = (inputValue) => {
        setinput(inputValue.target.value);
    }
    const clickHander = () => {
        setvalArry((previusValue) => {
            return [...previusValue, input];
        })
        setfilter((previusValue) => {
            return [...previusValue, input];
        })


    }
    console.log('render')
    // console.log(setfilter(setvalArry()));
    const deleteItem = (id)=>{

        setvalArry((previusValue)=>{
            return previusValue.filter((selectValue, index)=>{
                return index !== id
            })
        })
        setfilter((previusValue)=>{
            return previusValue.filter((selectValue, index)=>{
                return index !== id
            })
        })
    }
    const searchValue =(event)=>{
if(event.target.value == ''){
    setfilter(valArry)
}else{
    setfilter((previusValue) => {
        return previusValue.filter((selectValue, index) => {
            return  selectValue.includes(event.target.value)
        })
    })

}


        // console.log(
        //     valArry.filter( value => value.includes('v').map(filtername => ({filtername})));

    }

    return (
        <>
           <div className=" " style={{textAlign:"center"}}>
               <input type="text" value={input} onChange={setValue}/>
               <button type='button' onClick={clickHander}>add</button>
           </div>
            <div className="" style={{textAlign:"center"}}>
                <input type="search" onChange={searchValue}/>

            </div>
            {
                filter.map((value, index) => {

                    return <Form  id={index} itens={value} onSelect={deleteItem}/>
                })
            }


        </>
    )
}