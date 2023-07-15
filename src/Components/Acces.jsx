import fb from '../Assets/facebook.png'
import tell from '../Assets/tell.png'
import mail from '../Assets/mail.png'
import adress from '../Assets/adress.png'
import map from '../Assets/map.png'

function Acces(){

    return(
        <div className='acces'>
            <h2 className='acces_title'>Nous contacter</h2>
            <div className='acces_div'>
                <div className='acces_div_block'>
                    <div className='acces_div_block_card'>
                        <a href='https://www.facebook.com/LBinformatique87'><img className='acces_div_block_card_img'src={fb} alt='facebook de l entreprise' />
                        <p className='acces_div_block_card_text'>Facebook</p></a>
                    </div>
                    <div className='acces_div_block_card'>
                        <img className='acces_div_block_card_img' src={tell} alt='téléphone de l entreprise' />
                        <p className='acces_div_block_card_text'>05.55.69.30.00</p>
                    </div>
                </div>
                <div className='acces_div_block'>
                    <div className='acces_div_block_divimg'>
                        <img className='acces_div_block_divimg_img' src={map} alt='Rayon d action de l entreprise' />
                    </div>                                       
                </div>
                <div className='acces_div_block'>
                    <div className='acces_div_block_card'>
                        <img className='acces_div_block_card_img' src={adress} alt='Adresse de l entreprise' />
                        <p className='acces_div_block_card_text'>LB informatique 15 rue Gambetta 87800 Nexon</p>
                    </div>
                    <div className='acces_div_block_card'>
                        <img className='acces_div_block_card_img' src={mail} alt='mail de l entreprise' />
                        <p className='acces_div_block_card_text'>contact@lb-informatique.fr</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acces

/*<div className='acces'>
            <div className='access_div'>
                <img className="pro_div_img" src={map} alt='localisation'/>
            </div>
            <article className='acces_art'>
                <h2 className='acces_art_title'>Nous contacter</h2>
                <di className='acces_art_contact'>
                    <div className='acces_art_contact_div'><img className='acces_art_contact_div_img_1' src={fb} alt='Liens vers facebook'/><p className='acces_art_contact_div_texte_1'> Facebook</p></div>
                    <div className='acces_art_contact_div'><img className='acces_art_contact_div_img_2' src={tell} alt='téléphone 05.55.69.30.00'/><p className='acces_art_contact_div_texte_2'>05.55.69.30.00</p></div>
                    <div className='acces_art_contact_div'><img className='acces_art_contact_div_img_3' src={mail} alt='mail : contact@lb-informatique.fr'/><p className='acces_art_contact_div_texte_3'>contact@lb-informatique.fr</p></div>
                    <div className='acces_art_contact_div'><img className='acces_art_contact_div_img_4' src={adress} alt='adresse de l entreprise'/><p className='acces_art_contact_div_texte_4'>LB informatique 15 rue Gambetta 87800 Nexon</p></div>                            
                </di>
            </article>                
        </div>*/
