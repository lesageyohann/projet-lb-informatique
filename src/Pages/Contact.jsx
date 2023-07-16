import { Link } from 'react-router-dom'

function Contact() {

    return (
        <section className='contact'>
            <div className='contact_container'>
                <h2 className='contact_container_title'>Contactez-nous</h2>
                <form className='contact_container_form' action="submit.php" method="post">

                    <div className='contact_container_form_block'>
                        <label for="name">Nom :</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className='contact_container_form_block'>
                        <label for="tell">Téléphone :</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div className='contact_container_form_block'>
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className='contact_container_form_block'>
                        <label for="message">Message :</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div className='contact_container_form_block'>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </section>       

    )

}

export default Contact