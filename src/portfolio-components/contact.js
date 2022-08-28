import React, {useRef} from "react";
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faMap, faPhone, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../css/contact.css"

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_s5tci3d', 'template_6cvxcsf', form.current, 'TDbMOHD71OF77lsdU')
          .then((result) => {
              console.log(result.text);
              alert("Email Sent!!")
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()

    };
    
    return(
        <div className = "global-container" id="contact">
            <div style={{color:"white", textAlign:"center", width:"100%"}}>
                <div>
                    <span style={{color:"#FFDB58"}}>CONTACT</span>
                    <h1 style={{fontSize:"3em"}}>Contact With Me</h1>
                </div>
                <div >
                    <div className = "form-layout" >
                        <div>
                            <div className = "form-layout-card" >
                                <FontAwesomeIcon icon={faMap} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>Hurstville, NSW, 2220</div>
                            </div>
                            <div className = "form-layout-card">
                                <FontAwesomeIcon icon={faEnvelope} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>roshan.khadka.u@gmail.com</div>
                            </div>
                            <div className = "form-layout-card">
                                <FontAwesomeIcon icon={faPhone} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>(+61) 452 642 153</div>
                            </div>
                            <div className = "form-layout-card">
                                <FontAwesomeIcon icon={faCheck} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>Freelance Available</div>
                            </div>
                        </div>
                            <div className = "form-layout-card">
                                <form className="form" ref={form} onSubmit={sendEmail}>
                                    <div className = "form-details" >
                                        <input className="inputfield" name = "from_name" placeholder="Name" required></input>
                                        <input className="inputfield" name = "from_phone" placeholder="Phone" ></input>
                                    </div>
                                    <div className="form-details">
                                        <input className="inputfield" name = "from_email" placeholder="Email" required></input>
                                        <input className="inputfield" name = "subject" placeholder="Subject" required></input>
                                    </div>
                                    <div >
                                        <textarea className = "form-textarea" name = "message" placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit" style={{backgroundColor:"black", fontSize:"1em", borderRadius:"10px", color:"white", padding:"5px 50px", maxWidth:"400px", margin:"0 auto"}}>Send <FontAwesomeIcon icon={faRocket} ></FontAwesomeIcon></button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;