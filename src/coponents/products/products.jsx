import { useState } from "react"
import Product from "../product/product"
export default function Products({transfer}){
    console.log(transfer)

    return(
        <div>
            <h>I am from products</h>
            {/* <button onClick={()=>transfer("service")}>Transfer</button> */}
            {/* <Product info={info}></Product> */}
        </div>
    )
} 