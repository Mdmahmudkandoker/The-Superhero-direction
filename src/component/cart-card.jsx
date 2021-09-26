import React from 'react'

const CartCard = ({title, image, Fan}) => {
    return (
        <div className='card'>
            <h4>Title : {title}</h4>
            <h6>Fan Members : {Fan}</h6>
            <img src={image} alt={title} />
        </div>
    )
}

export default CartCard
