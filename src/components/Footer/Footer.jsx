import './footer.css'
import instagramIcon from './icons8-instagram-50.png'
import twitterIcon from './icons8-twitter-50.png'

export default function Nav () {
    return (
    <div className='Footer'>


        <h1 className='logo'>Smoky South BBQ</h1>
        <div className='links'>
            Links
            <p>Menu</p>
            <p>About</p>
        </div>
        <div className='hours'>
            Hours
            <p>Mon-Sat: 11:30am-7pm</p>
            <p>Sunday: 12:30pm-7pm</p>
        </div>

        <div className='socials'>
            <img src={instagramIcon} />
            <img src={twitterIcon} />
        </div>

        <p>Copyright @ Smoky South BBQ</p>

        
    </div>
    )
    
}