import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { ProductCardItems } from "./ProductCardItems";

export const CatalogView = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // setProducts([]);
        setProducts(getProducts()) ;
    },
    []);

  return (
    <>
        <div className="row">
        {products.map((product) => (
                <div  className="col-4 my-2"
                key={product.id}>
                        <ProductCardItems 
                            id={product.id}
                            name={product.name} 
                            description={product.description} 
                            price = {product.price}
                        />
                </div>
            ))}
        </div>
    </>
  )
}
