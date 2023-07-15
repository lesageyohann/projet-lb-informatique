
import { Link } from 'react-router-dom'
import part from '../Assets/part.jpg'

function Part(){
    return (
            <div className='part'>
                <article className='part_art'>
                    <div className='part_art_div1'>
                        <h2 className='part_art_div1_title'>Un professionnel à votre porte</h2>
                        <div className='part_art_div1_imgdiv'>
                            <img className="part_art_div1_imgdiv_img" src={part} alt='logo entreprise'/>
                         </div>
                    </div>
                    <div className='part_art_div2'>
                        <p className='part_art_div2_texte'>Marre de payer trop chère? Ordinateur en panne ? Ralenti ? Bloqué ? <strong>LB-informatique</strong> propose des solutions pour tout les budgets. </p>
                        <p className='part_art_div2_texte'>L'équipe <strong>LB-informatique</strong> priviligie le recyclage et l'occasion quand cela est possible ainsi qu'une approche durable pour vos équipements et la relation client. </p>
                        <p className='part_art_div2_texte'>Du conseil à la mise en place, en passant par des formations, notre équipe saura vous accueillir et répondre à vos besoin et pourra aussi se déplacer chez vous sur rendez-vous. </p>
                        <p className='part_art_div2_texte'>N'hésitez pas à nous <Link className="part_art_div2_link" to="/Contact">contacter</Link>.</p>
                        
                    </div>
                </article>                
            </div>
            )
    }

    export default Part