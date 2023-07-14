import pro from '../Assets/pro.png'
import part from '../Assets/part.jpg'
import team from '../Assets/team.png'
import fb from '../Assets/facebook.png'
import tell from '../Assets/tell.png'
import mail from '../Assets/mail.png'
import adress from '../Assets/adress.png'
import map from '../Assets/map.png'

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
                    <h2 className='home_part_art_title'>Un professionnel à votre porte</h2>
                    <p className='home_part_art_texte'>- Marre de payer trop cher ? LB-informatique pratique des tarifs pour tous budgets.

                        - Ordinateur en panne ? bloqué ? ralenti ? LB-informatique est là pour vous apporter une solution.

                        - Conseil et mise en place de votre box ou de vos équipements.

                        - Possibilité d'intervention à domicile sur RDV.

                        - Initiation de base à l'utilisation de votre matériel informatique et du pack Office (World, Excel, Powerpoint...).

                        - Optimisation ou création de votre poste informatique.

                        - Forfait prise en main à distance.

                        - Forfait nettoyage anti virus PC 30€ , ne payez pas pour l'inutile.

                        - Pourquoi changer votre poste informatique si nous pouvons le réparer?
                        (vente de pièces d'occasion dans la limite des stocks disponibles)

                        - Priviligions le recyclage quand cela est possible pour faire un geste pour la planète.

                        - N'hésitez pas à nous contacter</p>
                </article>
                <div className='home_part_div'>
                <img className="home_part_div_img" src={part} alt='logo entreprise'/>
                </div>
            </div>

            
            <div className='home_pro'>
                <div className='home_pro_div'>
                <img className="home_pro_div_img" src={pro} alt='professionel informatique'/>
                </div>
                <article className='home_pro_art'>
                    <h2 className='home_pro_article_art_title'>Des solutions pour votre parc informatique</h2>
                    <p className='home_pro_article_art_texte'>- Besoin de formation pour votre personnel ?
                        - Besoin de renouveller ou optimiser votre parc informatique,
                        - Vos équipements subissent des ralentissements ? Serveur en panne ?
                        - Vous avez un site web, nous vous proposons un pack complet (nom de domaine, hebergement web)
                        - Nous sommes là pour vous apporter des solutions.
                        - N'hésitez pas à nous contacter pour une demande de devis</p>
                </article>                
            </div>


            <div className='home_who'>
                <article className='home_who_art'>
                    <h2>Qui somme nous ?</h2>
                    <p>Fort de plus de 10 ans d'expériences dans le domaine informatique,

                        Notre technicien a évolué avec de grandes marques (Cisco, Dell, Alphalink, OVH, Google, Bosh, Cyberoam, Gigaset)

                        Habilité aux outils Windows, Linux, VmWare et Promox.

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