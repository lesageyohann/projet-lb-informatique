import { Link } from 'react-router-dom'

function Contact() {

    return (
        <section className='error'>
            
            <div className='error_number'>
                contact
            </div>
            
            <div className='error_text'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            
            <Link className="error_link" to="/">
                Retour à la page d'accueil
            </Link>

        </section>
        <main>
        <div className='Info'>
            <div className='textcontener'>
                Info
            </div>
            <div className='imagecontener'>
                carouselle
            </div>
        </div>
        <div className='particulier'>
            <div className='textcontener'>
                Particulier
            </div>
            <div className='imagecontener'>

            </div>
        </div>
        <div className='pro'>
            <div className='textcontener'>
                pro
            </div>
            <div className='imagecontener'>

            </div>
        </div>
        <div className='qui'>
            <div className='textcontener'>
                qui somme nous
            </div>
            <div className='imagecontener'>

            </div>
        </div>
        <div className='carte'>
            <div className='textcontener'>
                acces
            </div>
            <div className='imagecontener'>

            </div>
        </div>
    </main>

    )

}

export default Contact