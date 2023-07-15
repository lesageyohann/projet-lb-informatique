import fb from '../Assets/facebook.png'
import tell from '../Assets/tell.png'
import mail from '../Assets/mail.png'
import adress from '../Assets/adress.png'
import map from '../Assets/map.png'
import { Link } from 'react-router-dom'

function Acces(){

    return(
        <div className='acces'>
            <h2 className='acces_title'>Nous contacter</h2>
            <div className='acces_div'>
                <div className='acces_div_block'>
                    <a className='acces_div_block_card' href='https://www.facebook.com/LBinformatique87'>
                        <img className='acces_div_block_card_img' src={fb} alt='facebook de l entreprise' />
                        <p className='acces_div_block_card_text'>Facebook</p>
                    </a>
                    <div className='acces_div_block_card'>
                        <img className='acces_div_block_card_img' src={tell} alt='téléphone de l entreprise' />
                        <p className='acces_div_block_card_text'>05.55.69.30.00</p>
                    </div>
                </div>
                <div className='acces_div_block'>
                    <a className='acces_div_block_divimg' href='https://goo.gl/maps/ePKkcqCaYq5NPhwE6'>
                        <img className='acces_div_block_divimg_img' src={map} alt='Rayon d action de l entreprise' />
                    </a>                                       
                </div>
                <div className='acces_div_block'>
                    <a className='acces_div_block_card' href='https://goo.gl/maps/ePKkcqCaYq5NPhwE6'>
                        <img className='acces_div_block_card_img' src={adress} alt='Adresse de l entreprise' />
                        <p className='acces_div_block_card_text'>LB informatique 15 rue Gambetta 87800 Nexon</p>
                    </a>
                    <Link to="/Contact" className='acces_div_block_card'>
                        <img className='acces_div_block_card_img' src={mail} alt='mail de l entreprise' />
                        <p className='acces_div_block_card_text'>contact@lb-informatique.fr</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Acces
