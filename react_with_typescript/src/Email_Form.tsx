import type React from "react"
import { useState } from "react";
type EmailFormProps = {
  onSubmit: (email: string) => void
 
};




const Email_Form = ({ onSubmit }: EmailFormProps ) => {

      const [email, setEmail] = useState("");


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        onSubmit(email)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            placeholder="Enter email"
             />

             <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Email_Form