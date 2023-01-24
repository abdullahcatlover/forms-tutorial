import {useState} from 'react'

const MultipileControlledInputs = () => {
    const [person, setPerson] = useState({
        name: "",
        job: "",
        company: ""
    })



    

    const handleChange =(event)=>{
       const name = event.target.name;  //value is mistake if you type;
       const value =  event.target.value

       setPerson({...person, [name]: value})
    }


    const handleSubmit =(event)=> {
        event.preventDefault()
        const newUser = person;
        console.log(newUser);
        setPerson({
            name: '',
            job: '',
            company: '',
        })
    }
    return (
        <div className='--bg-primary --mh-100vh'>
            <h1 className='--text-light --text-center'>
               Multiple Controlled Inputs
            </h1>
            <div className="--flex-center">
                <div className="--card-1 --bg-light --width-500px --flex-center">
                    <form className="--form-control"  onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text"
                             name='name' 
                             value={person.name} 
                             onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="job">Job: </label>
                            <input type="text" 
                            name='job' 
                            value={person.job} 
                            onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="company">Company: </label>
                            <input type="text" 
                            name='company' 
                            value={person.company} 
                            onChange={handleChange}/>
                        </div>
                        <button type='submit' className='--btn --btn-danger --btn-block' 
                        >Submit User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MultipileControlledInputs;


/* there are two ways of submitting form on form input, 1st is onSubmit, in a <form></form>*/