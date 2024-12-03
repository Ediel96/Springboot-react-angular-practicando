import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";;

const inititalCartItems = [
    {
        product: {
            id: 1,
            name: 'Product 1',
            price: 100,

        },
        quantity: 0,
        total: 0
    }
]

export const CartApp = () => {

    const [cartItems, setCartItems ] = useState(inititalCartItems);

    const handleAppProductProduct = (product) => {
        setCartItems([
            ...cartItems,
            {
                product,
                quantity: 1,
                total: product.price * product.quantity
            }
        ])
    }

    return (
        <>
            <div className="container">
                <h3>CartApp</h3>

                <CatalogView habler={ product=> handleAppProductProduct(product) }/>

                <div className="row">
                    <div className="col-12">
                        <hr />
                        <div className="my-4 w-50">
                            <CartView items={cartItems}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
