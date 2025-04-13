import { useGlobalContext } from "./context"
import React from "react"

const Button = () =>{
    const { isloading ,page, nbPages ,handlePage} = useGlobalContext()

    return (
        <div className="btn-container"> 
            <button disabled={isloading} onClick={() => handlePage('dec')}  > prev </button>
            <p>  {page +1 }   of  {nbPages} </p>
            <button disabled={isloading} onClick={() => handlePage('inc')} > next </button>

        </div> 
    )
}

export default Button