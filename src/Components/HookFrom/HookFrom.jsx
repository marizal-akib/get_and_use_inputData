import useInputState from "../../hooks/useInputState";

const HookFrom = () => {
    // const [name, onChange]= useInputState('akib');
    const emailSate = useInputState('md@all.co')

    const handleSubmit = e =>{
        console.log('form data', name);
        console.log('form data', emailSate.value);
        e.preventDefault();
    }
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit} >
                {/* <input value={name} onChange={onChange} type="text"  name="name" /> */}
                
                <br />
                <input {...emailSate} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
        </div>
    );
};

export default HookFrom;