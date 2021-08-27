import { Link } from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className='nvg' style={{display:'flex',justifyContent:'center',justifyContent:'space-around'}}>
            <div className="logot">
            <img src="/logo.png" style={{width:'40px',height:'40px' }}/>
            <span >SoundWave</span>
            </div>
            <ul>
                <Link to="/Discover" ><li style={{textDecoration:'none'}}>Discover</li></Link>
                <Link to="/JoinUS" ><li style={{textDecoration:'none'}}>Join</li></Link>
            </ul>
            
        </div>
    
    )
}

export default NavigationBar
