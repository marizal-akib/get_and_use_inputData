import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name,email,password);

    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit} >
                <input
                value={name}
                onChange={handleNameChange}
                 type="text"  name="name" />
                
                <br />
                <input 
                value={email }
                    onChange={handleEmailChange}
                
                type="email" name="email" />
                <br />
                <input
                onChange={handlePasswordChange}
                 type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;