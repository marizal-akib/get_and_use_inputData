/* eslint-disable react/prop-types */


const ReuseableFrom = ({fromTile, submitBtnText , handleSubmit }) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value

        }
        handleSubmit(data)
    }

    
    return (
        <div>
            <form onSubmit={handleLocalSubmit} >
                <h2>{fromTile}</h2>
                <input type="text"  name="name" />
                
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableFrom;