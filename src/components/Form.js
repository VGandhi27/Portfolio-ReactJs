import "./FormStyle.css"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const Form = () => {
    const [state, handleSubmit] = useForm("mnqyjzrp");
    if (state.succeeded) {
        return <div className="resdiv"><h1 class="response">Your Message has been sent</h1></div> ;
    }
  
  return (
    <div className="form">
      <h1 style={{textAlign:'center', fontSize:"3rem",padding:"1rem 1rem"}}>Contact</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="email" id="email" name="email"/>
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea rows="5" id="message" name="message" placeholder="Type Your Message Here"/ >
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
             <button className="btn" disabled={state.submitting} type="submit"> Submit </button>
        </form>
    </div>
  )
}

export default Form