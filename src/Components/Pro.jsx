import { Link } from 'react-router-dom'
import form from '../Assets/form.png'
import opti from '../Assets/opti.png'
import equip from '../Assets/equip.png'
import server from '../Assets/server.png'

function Pro(){
    return(
        <div className='pro'>
                <h2 className='pro_title'>Professionnel ?</h2>
                <p className='pro_stitle'><strong>LB-informatique</strong> propose divers prestations :</p>
                <div className='pro_div'>

                <article className='pro_div_art'>                  
                        <h3 className='pro_div_art_title'>Formations</h3>
                        <div className='pro_div_art_divimg'>
                            <img className='pro_div_art_divimg_img'src={form} alt='un livre' />
                        </div>
                        <span className='pro_div_art_border'/>
                        <div className='pro_div_art_divlist'>
                            <ul className='pro_div_art_divlist_list'>
                                <li className='pro_div_art_divlist_list_element'>Matériels</li>
                                <li className='pro_div_art_divlist_list_element'>Logiciels</li>
                                <li className='pro_div_art_divlist_list_element'>Mise à niveau</li>
                            </ul>
                        </div>                        
                        <span className='pro_div_art_border'/>
                        <p><Link className='pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>

                    <article className='pro_div_art'>                  
                        <h3 className='pro_div_art_title'>Equipements</h3>
                        <div className='pro_div_art_divimg'>
                            <img className='pro_div_art_divimg_img'src={equip} alt='un livre' />
                        </div>
                        <span className='pro_div_art_border'/>
                        <div className='pro_div_art_divlist'>
                            <ul className='pro_div_art_divlist_list'>
                                <li className='pro_div_art_divlist_list_element'>Réseau</li>
                                <li className='pro_div_art_divlist_list_element'>Serveur</li>
                                <li className='pro_div_art_divlist_list_element'>Bureautique</li>
                            </ul>
                        </div>                        
                        <span className='pro_div_art_border'/>
                        <p><Link className='pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>

                    <article className='pro_div_art'>                  
                        <h3 className='pro_div_art_title'>Optimisations</h3>
                        <div className='pro_div_art_divimg'>
                            <img className='pro_div_art_divimg_img'src={opti} alt='un livre' />
                        </div>
                        <span className='pro_div_art_border'/>
                        <div className='pro_div_art_divlist'>
                            <ul className='pro_div_art_divlist_list'>
                                <li className='pro_div_art_divlist_list_element'>Réseau</li>
                                <li className='pro_div_art_divlist_list_element'>Matériels</li>
                                <li className='pro_div_art_divlist_list_element'>Personnel</li>
                            </ul>
                        </div>                        
                        <span className='pro_div_art_border'/>
                        <p><Link className='pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>

                    <article className='pro_div_art'>                  
                        <h3 className='pro_div_art_title'>Hébergements</h3>
                        <div className='pro_div_art_divimg'>
                            <img className='pro_div_art_divimg_img'src={server} alt='un livre' />
                        </div>
                        <span className='pro_div_art_border'/>
                        <div className='pro_div_art_divlist'>
                            <ul className='pro_div_art_divlist_list'>
                                <li className='pro_div_art_divlist_list_element'>Données</li>
                                <li className='pro_div_art_divlist_list_element'>Serveur</li>
                                <li className='pro_div_art_divlist_list_element'>Services</li>
                            </ul>
                        </div>                        
                        <span className='pro_div_art_border'/>
                        <p><Link className='pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>
                </div>            
            </div>
    )
}

export default Pro