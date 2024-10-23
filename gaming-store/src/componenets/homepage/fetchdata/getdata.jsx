import { useQuery } from "react-query";
import { fetchData } from "./fetchdata";
import HomePage from "../homepage";
import Consoles from "./consoles";

function ProductList () { 
    const {data: product , isLoading , error} = useQuery('product' , fetchData)
    if(isLoading) return <p>isLoading</p>
    if(error) return <p>Error</p>
    console.log(product)
    return(<>
        {
            product.map((consoles)=> (< Consoles details={consoles}/>))
        }
    </>)
}

export default ProductList