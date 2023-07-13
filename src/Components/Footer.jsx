import { Link } from 'react-router-dom'
import { useState } from 'react';

function Footer() {

    const [activeTab, setActiveTab] = useState('Accueil')

    const tabClick = (tab) => {
        setActiveTab(tab)}

    return (
       <footer className='footer'>
        <ul className='footer_nav'>
            <li className='footer_nav_bar'>
            <Link className= {`footer_nav_bar_button`} onClick={() => tabClick('Accueil')} to="/">Accueil</Link>
            <Link className= {`footer_nav_bar_button`} onClick={() => tabClick('Contact')} to="/">Contact</Link>
            <Link className= {`footer_nav_bar_button`} onClick={() => tabClick('Mentionlégales')} to="/">Mentions légales</Link>
            </li>
        </ul>
       </footer>

    )

}

export default Footer