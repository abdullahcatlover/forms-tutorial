import {useState} from 'react'

const ControlledInputs = () => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')



    const handleSubmit =(event)=> {
        event.preventDefault()
     
      console.log(name, job);
      setName('')
      setJob('')
    }

    return (
        <div className='--bg-primary --mh-100vh'>
            <h1 className='--text-light --text-center'>
                Controlled Inputs
            </h1>
            <div className="--flex-center">
                <div className="--card-1 --bg-light --width-500px --flex-center">
                    <form className="--form-control"  onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text"
                             name='name' 
                             value={name} 
                             onChange={(event)=> setName(event.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="job">Job: </label>
                            <input type="text" 
                            name='job' 
                            value={job} 
                            onChange={(event)=> setJob(event.target.value)}/>
                        </div>
                        <button type='submit' className='--btn --btn-danger --btn-block' 
                        >Submit User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ControlledInputs


