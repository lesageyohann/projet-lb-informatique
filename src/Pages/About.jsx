import gerant from '../Assets/face.jpg'
import coms from '../Assets/pngegg.png'

function About() {

    return (
        <section className='about'>
            
            <div className='about_div'>
                <img className='about_div_img' src={gerant} alt="gérant de l'entreprise"/>
            </div>

            <article className='about_article'>
                <p className='about_article_texte'>Lorem ipsum dolor sit amet. Aut perspiciatis officia vel provident dolorem est quia voluptas ut exercitationem earum. Et omnis nobis est rerum alias eum nihil nemo qui consectetur amet vel soluta nihil sit voluptatibus alias est amet quae. Aut maxime beatae eos blanditiis aperiam et voluptate nihil aut nihil alias eos quasi minus ut sunt accusamus! Est distinctio eligendi non quod dolore ex impedit facere id tempora dolor. </p><p>Est quas consequatur a repudiandae architecto aut temporibus reiciendis eos quos enim eum perferendis perferendis ad excepturi officia quo accusantium officia. Non vero excepturi sit voluptatem neque qui iure dolor sed impedit quasi et dolor galisum nam nobis accusamus. </p><p>Qui esse ipsum rem minus aspernatur sit laboriosam ducimus sed voluptatem vitae. Nam voluptatum quaerat in similique nemo est eius consequatur non eaque esse quo exercitationem maiores 33 eius neque. Ut vitae culpa et provident nostrum rem aspernatur libero 33 quia rerum ut consequuntur autem aut quia dolor. </p>
            </article>

            <div className='about_coms'>
                <article className='about_coms_article'>
                    <img className='about_coms_article_img' src={coms} alt="guillemet"/>
                    <p className='about_coms_article_texte'>Personne à l'écoute qui prend rapidement les choses en main pour un dépannage efficace.  </p>              
                </article>

                <article className='about_coms_article'>
                    <img className='about_coms_article_img' src={coms} alt="guillemet"/>                    
                    <p className='about_coms_article_texte'>Service de proximité et prestations de qualité. Laurent ne force pas à la consommation au contraire permet de réutiliser et de réparer ses matériels : PC, smartphone et tablettes.
                        Il vous accueille dans une pièce aménagée et propose de bons conseils.
                        Je vous recommande vivement.</p>
                </article>
            </div>

        </section>

    )

}

export default About