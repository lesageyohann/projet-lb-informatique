
function Contact() {

    return (
        <section className='contact'>
            <div className='contact_container'>
                <h2 className='contact_container_title'>Nous contacter</h2>
                <form className='contact_container_form' action="submit.php" method="post">

                    <h3 className='contact_container_form_stitle'>Informations générales</h3>
                    <span className='contact_container_form_border' />

                    <div className='contact_container_form_block'>
                        <label for="name">Nom *:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className='contact_container_form_block'>
                        <label for="tell">Téléphone :</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>

                    <div className='contact_container_form_block'>
                        <label for="email">Email *:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <h3 className='contact_container_form_stitle'>Votre message</h3>
                    <span className='contact_container_form_border'/>

                    <div className='contact_container_form_block'>
                        <label for="message">Message *:</label>
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