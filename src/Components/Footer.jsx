import { Link } from 'react-router-dom'
import P1 from '../Assets/logo-nouvelle-aquitaine.png'

function Footer() {


    return (
       <footer className='footer'>
        <div className='footer_partenair'>
            <div className='footer_partenair_title'>Ils nous font confiance :</div>
            <div className='footer_partenair_divimg'><a href='https://lesirque.com'><img className='footer_partenair_divimg_img' src={P1} alt='logo partenaire'/></a></div>
            <div className='footer_partenair_divimg'></div>
        </div>
        <div className='footer_link'>
            <ul className='footer_link_nav'>
                <li className='footer_link_nav_bar'>
                <Link className= 'footer_link_nav_bar_button' to="/">Accueil</Link>
                <Link className= 'footer_link_nav_bar_button' to="/Contact">Contact</Link>
                <Link className= 'footer_link_nav_bar_button' to="/ML">Mentions légales</Link>
                </li>
            </ul>
        </div>
        
       </footer>

    )

}

export default Footer