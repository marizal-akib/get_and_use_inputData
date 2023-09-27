
import { useEffect, useRef } from "react";


const RefFrom = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    useEffect( () => {
        nameRef.current.focus()
    },[])


    const handleSubmit = e =>{
        e.preventDefault();
        const food = nameRef.current.value;
        return (food);
        
        
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit}  >
                <input ref={nameRef} type="text"  name="name" />
                
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passRef} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;