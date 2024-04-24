import './nav.css'
import { Link } from 'react-router-dom'
import cartIcon from './shopping-bag.png'
import { useCart } from '../../hooks/useCart'

export default function Nav () {


    const cart = useCart()
    return (
        <div className='Nav'>
        <Link to='/' className='logo' style={{textDecoration: 'none', color: 'inherit'}}>Smoky South BBQ</Link>
        <div className='nav-sub'>

            {/* <Link to='/menu'>
                <h3>Menu</h3>
            </Link> */}
            

            <Link to='/about'>
                <h3>About</h3>
            </Link>
            
            <Link to="/cart">
                <img src={cartIcon} style={{width: '25px', height: "25px"}}/>
                {cart.totalCount > 0 && <span>{cart.totalCount}</span>}
            </Link>
            
        </div>
    </div>
    )
    
}