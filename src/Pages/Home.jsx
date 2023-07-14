import pro from '../Assets/pro.png'
import part from '../Assets/part.jpg'
import team from '../Assets/team.png'
import fb from '../Assets/facebook.png'
import tell from '../Assets/tell.png'
import mail from '../Assets/mail.png'
import adress from '../Assets/adress.png'
import map from '../Assets/map.png'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <main className="home">


            <div className='home_new'>
                <div className='home_new_carousel'>
                    <h1 className='_new_carousel_title'>Nouveautées</h1>
                    carouselle
                </div>
            </div>


            <div className='home_part'>
                <article className='home_part_art'>
                    <div className='home_part_art_div1'>
                        <h2 className='home_part_art_div1_title'>Un professionnel à votre porte</h2>
                        <div className='home_part_art_div1_imgdiv'>
                            <img className="home_part_art_div1_imgdiv_img" src={part} alt='logo entreprise'/>
                         </div>
                    </div>
                    <div className='home_part_art_div2'>
                        <p className='home_part_art_div2_texte'>Marre de payer trop chère? Ordinateur en panne ? Ralenti ? Bloqué ? <strong>LB-informatique</strong> propose des solutions pour tout les budgets. </p>
                        <p className='home_part_art_div2_texte'>L'équipe <strong>LB-informatique</strong> priviligie le recyclage et l'occasion quand cela est possible ainsi qu'une approche durable pour vos équipements et la relation client. </p>
                        <p className='home_part_art_div2_texte'>Du conseil à la mise en place, en passant par des formations, notre équipe saura vous accueillir et répondre à vos besoin et pourra aussi se déplacer chez vous sur rendez-vous. </p>
                        <p className='home_part_art_div2_texte'>N'hésitez pas à nous <Link className="home_part_art_div2_link" to="/Contact">contacter</Link>.</p>
                        
                    </div>
                </article>                
            </div>

            
            <div className='home_pro'>
                <h2 className='home_pro_title'>Professionnel ?</h2>
                <p className='home_pro_stitle'><strong>LB-informatique</strong> propose divers prestations :</p>
                <div className='home_pro_div'>

                    <article className='home_pro_div_art'>
                        <h3 className='home_pro_div_art_title'>Formations</h3>
                        <span className='home_pro_div_art_border'/>
                        <ul className='home_pro_div_art_list'>
                            <li className='home_pro_div_art_list_1'>- Matériels</li>
                            <li className='home_pro_div_art_list_2'>- Logiciels</li>
                            <li className='home_pro_div_art_list_3'>- Accompagnements</li>
                        </ul>
                        <span className='home_pro_div_art_border'/>
                        <p><Link className='home_pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>

                    <article className='home_pro_div_art'>
                        <h3 className='home_pro_div_art_title'>Matériels</h3>
                        <span className='home_pro_div_art_border'/>
                        <ul className='home_pro_div_art_list'>
                            <li className='home_pro_div_art_list_1'>- Matériels</li>
                            <li className='home_pro_div_art_list_2'>- Logiciels</li>
                            <li className='home_pro_div_art_list_3'>- Accompagnements</li>
                        </ul>
                        <span className='home_pro_div_art_border'/>
                        <p><Link className='home_pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>

                    <article className='home_pro_div_art'>
                        <h3 className='home_pro_div_art_title'>Optimisations</h3>
                        <span className='home_pro_div_art_border'/>
                        <ul className='home_pro_div_art_list'>
                            <li className='home_pro_div_art_list_1'>- Matériels</li>
                            <li className='home_pro_div_art_list_2'>- Logiciels</li>
                            <li className='home_pro_div_art_list_3'>- Accompagnements</li>
                        </ul>
                        <span className='home_pro_div_art_border'/>
                        <p><Link className='home_pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>

                    <article className='home_pro_div_art'>
                        <h3 className='home_pro_div_art_title'>Hébergements</h3>
                        <span className='home_pro_div_art_border'/>
                        <ul className='home_pro_div_art_list'>
                            <li className='home_pro_div_art_list_1'>- Matériels</li>
                            <li className='home_pro_div_art_list_2'>- Logiciels</li>
                            <li className='home_pro_div_art_list_3'>- Accompagnements</li>
                        </ul>
                        <span className='home_pro_div_art_border'/>
                        <p><Link className='home_pro_div_art_link' to="/Contact">Contactez nous</Link></p>
                    </article>
                </div>            
            </div>


            <div className='home_who'>
                <article className='home_who_art'>
                    <h2>Qui somme nous ?</h2>
                    <p>Fort de plus de 10 ans d'expériences dans le domaine informatique,

                        Notre technicien a évolué avec de grandes marques (Cisco, Dell, Alphalink, OVH, Google, Bosh, Cyberoam, Gigaset)

                        Habilité aux outils fqWindows, Linux, VmWare et Promox.

                        LB-informatique saura répondre au mieux à votre demande concernant votre architecture.
                        L'informatique plus qu'un métier, une passion.</p>
                </article>
                <div className='home_who_div'>
                <img className="home_who_div_img" src={team} alt='equipe professionnel'/>
                </div>
            </div>


            <div className='home_acces'>
                <div className='home_access_div'>
                <img className="home_pro_div_img" src={map} alt='localisation'/>
                </div>
                    <article className='home_acces_art'>
                        <h2 className='home_acces_art_title'>Nous contacter</h2>
                        <di className='home_acces_art_contact'>
                            <div className='home_acces_art_contact_div'><img className='home_acces_art_contact_div_img_1' src={fb} alt='Liens vers facebook'/><p className='home_acces_art_contact_div_texte_1'> Facebook</p></div>
                            <div className='home_acces_art_contact_div'><img className='home_acces_art_contact_div_img_2' src={tell} alt='téléphone 05.55.69.30.00'/><p className='home_acces_art_contact_div_texte_2'>05.55.69.30.00</p></div>
                            <div className='home_acces_art_contact_div'><img className='home_acces_art_contact_div_img_3' src={mail} alt='mail : contact@lb-informatique.fr'/><p className='home_acces_art_contact_div_texte_3'>contact@lb-informatique.fr</p></div>
                            <div className='home_acces_art_contact_div'><img className='home_acces_art_contact_div_img_4' src={adress} alt='adresse de l entreprise'/><p className='home_acces_art_contact_div_texte_4'>LB informatique 15 rue Gambetta 87800 Nexon</p></div>                            
                        </di>
                    </article>                
                </div>
    </main>
    )
}

export default Home