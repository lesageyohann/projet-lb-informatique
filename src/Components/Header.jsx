import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Header() {

    const [activeTab, setActiveTab] = useState('Accueil')

    const tabClick = (tab) => {
        setActiveTab(tab)}

    return (
        <header className="header">
            <div className="header_logodiv">
            <Link className="header_logodiv_img" to="/"><img className="header_logodiv_img" src={logo} alt='logo entreprise'/></Link>
            </div>
            <nav className='header_nav'>
                <ul className='header_nav_list'>
                    <li className='header_nav_list_bar'>
                    <Link className= {`header_nav_list_bar_button ${activeTab === 'Accueil' ? 'active' : '' }`} onClick={() => tabClick('Accueil')} to="/">Accueil</Link>
                    <Link className={`header_nav_list_bar_button ${activeTab === 'Contact' ? 'active' : '' }`} onClick={() => tabClick('Contact')} to="/Contact">Contact</Link>
                    <Link className={`header_nav_list_bar_button ${activeTab === 'Service' ? 'active' : '' }`} onClick={() => tabClick('Service')} to="/Services">Services</Link>
                    <Link className={`header_nav_list_bar_button ${activeTab === 'A Propos' ? 'active' : '' }`} onClick={() => tabClick('A Propos')} to="/About">A propos</Link>
                    </li>
                </ul>
            </nav>
            <span className='header_border'/>
        </header>

    )

}

export default Header