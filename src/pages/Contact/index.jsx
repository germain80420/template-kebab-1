import React, { useState } from "react";

import Banner from "../../components/Banner"
import imgBanner from "../../assets/contact.jpg"
import "./contact.css"
import ReCAPTCHA from "react-google-recaptcha";

function Contact(){
    const [isVerified, setIsVerified] = useState(false);
    const handleRecaptchaChange = (value) => {
        console.log("reCAPTCHA value:", value);
        setIsVerified(true); // Mettre à jour l'état lorsque le reCAPTCHA est vérifié
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isVerified) {
          // Envoyer le formulaire si le reCAPTCHA est vérifié
          console.log("Formulaire soumis !");
        } else {
          // Afficher un message d'erreur si le reCAPTCHA n'est pas vérifié
          console.error("Veuillez cocher la case 'Je ne suis pas un robot'");
        }
      };
    return(
        <main className="main-contact">
        <Banner img = {imgBanner} title="Contactez-nous"/>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="nom" id="nom" placeholder="Votre nom... "/>
                <input type="mail" name="mail" id="mail" placeholder="Votre mail... "/>
                <div className="recaptcha">
                <ReCAPTCHA
        sitekey="6LfBW6kpAAAAADlfnYoOOgQnCto3MkN4ujMIve5I"
        onChange={handleRecaptchaChange}
        
      />
                </div>
                
      <textarea
        name="message"
        placeholder="Votre message..."
        
      ></textarea>
      <input type="submit" className="btn" value="envoyer"/>

            </form>
        </div>

        </main>
    )
}
export default Contact