import React from 'react'
import CartCard from './cart-card'

const Cart = ({anime, totalFans, closeBtn, animeInCart}) => {
    const animes = animeInCart.map((a, i)=>(<CartCard key={i} title={a.title} Fan={a.members} image={a.image} addBtn={null}/> ))
    return (
        <div className='cart-card'>
            <div className='cart'>
            <h2>Fan members:{anime ? anime[0].members : 0} </h2>
            <h2>Total Fans:{anime ? totalFans : 0} </h2>
            <h2>Carts Added : {animeInCart.length} </h2>
            </div>
         
            <div className="container">
            {animeInCart.length > 0 ? animes : null}
            </div>
            <button onClick={closeBtn}>Clear all</button>
        </div>
    )
}

export default Cart
