
import './card.css'
import {Link} from 'react-router-dom'
import {useCart} from '../../hooks/useCart'
import { useState } from 'react'


export default function Card({foods}) {
    const [selectedFood, setSelectedFood] = useState({})
    const {addToCart} = useCart()

    

    const handleAddToCart= (food) => {
        setSelectedFood(food)
        addToCart(food) 
        window.alert(`${foods.name} added to cart!`)
    }

    return (
        <ul className='Card'>
            {
                foods.map(food => 
                <li key = {food.id}>
                    <Link to={`food/${food.id}`}>
                        <img className='foodImg'
                        src={`/food/${food.imageUrl}`}
                        alt={food.name} />
                    </Link>
                    <div className='foodContent'>
                        <h1 className= 'foodName'>{food.name}</h1>
                        <div className= 'foodDescription'>{food.description}</div>
                        <div id="priceandbtn">
                            <h3 className='foodPrice' style={{fontSize: "20px"}}>${food.price}</h3>
                            <button className="cartBtn" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                        
                    </div>
                </li>
                 
                
                
                )
            }
            

        </ul>
    )
}
