import React from 'react'
import './cart.css'
import { useCart } from '../../hooks/useCart'
import Title from '../../components/Title/Title'
import {Link} from 'react-router-dom'

export default function Cart() {
    const{cart, removeFromCart, changeQuantity} = useCart()

    console.log("Cart items:", cart.items);
    return (
        <div className='Cart'>
            <Title title="Cart" />

            {cart && cart.items.length > 0 &&
                <div className="container">
                    <ul className='cartList'>
                        {cart.items.map(item => <li key={item.food.id}>
                            <div className='foodInfo'>
                                {item.food.name}
                                {/* Modal for food item */}
                                <div>
                                    <select value={item.quantity}
                                    onChange={e => changeQuantity(item, Number(e.target.value))}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className='priceandbtn'>
                                    ${item.price}
                                    
                                </div>
                                
                                
                            </div>

                            <button className='deleteBtn' onClick={() => removeFromCart(item.food.id)}>Delete</button>
                            
                        </li>)}
                        
                    </ul>

                    <div className='checkout'>
                        <div className='totalPrice'>Total: ${cart.totalPrice}</div>
                        
                        <button>
                            <Link to='/checkout' /* style={{color:'white', textDecoration: 'none' }} */>Checkout</Link>
                        </button>
                    </div>
                    

                </div>
            }

        
        </div>
        
    )
}