import PropTypes from 'prop-types';

export const ProductCardItems = ({id, name, description, price}) => {

  const onAddProduct = ( product ) => {
    console.log('Add product', product);
  }

  return (
    <>
        <div key={id} className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <button onClick={() => onAddProduct({id, name, description, price})} className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    
    </>
  )
}

ProductCardItems.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}