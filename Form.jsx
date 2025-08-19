import React, { useEffect, useRef } from "react";
const Form=()=>
{
    let input=useRef();
    let btn=useRef();
    console.log(input);
    useEffect(()=>
    {
        btn.current.disabled=true;

    },[])
    
    function focusing()
    {
        input.current.focus();
    }
    return (
        <div>
            <form action="">
                <label onClick={focusing}>username</label>
                <input type="text" placeholder="characters" ref={input}/>
                <br/>
                <input type="email" placeholder="email" />
                <br/>
                <button ref={btn}></button>
            </form>
        </div>
    )
}