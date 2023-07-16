import team from '../Assets/logo1.png'
function Who(){

    return(
        <div className='who'>
        <article className='who_art'>
            <div className='who_art_div1'>
                <h2 className='who_art_div1_title'>Qui somme nous ?</h2>
                <div className='who_art_div1_imgdiv'>
                    <img className="who_art_div1_imgdiv_img" src={team} alt='logo entreprise'/>
                 </div>
            </div>
            <div className='who_art_div2'>
                <p className='who_art_div2_texte'>Fort de plus de 10 ans d'expériences dans le domaine informatique, Notre technicien a évolué avec de grandes marques (Cisco, Dell, Alphalink, OVH, Google, Bosh, Cyberoam, Gigaset) Habilité aux outils fqWindows, Linux, VmWare et Promox.</p> 
                <p className='who_art_div2_texte'><strong>LB-informatique</strong> saura répondre au mieux à votre demande concernant votre architecture. L'informatique plus qu'un métier, une passion.</p>           
            </div>
        </article>                
    </div>
    )
            
}

export default Who
