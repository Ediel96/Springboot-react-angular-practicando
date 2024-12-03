import PropTypes from 'prop-types';

export const CartView = ({items}) => {
    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map( items => {
                        return (
                            <tr key={items.product.id}>
                                <td>{items.product.name}</td>
                                <td>{items.product.price}</td>
                                <td>{items.quantity}</td>
                                <td>{items.quantity * items.product.price}</td>
                                <td>
                                    <button className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

CartView.propTypes = {
    items: PropTypes.array.isRequired
}