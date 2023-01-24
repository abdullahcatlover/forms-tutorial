import {useRef, useEffect} from 'react'

const UncontrolledInputs = () => {

    const nameInputRef = useRef(null)
    const jobInputRef = useRef(null)

    // you link these useRef hooks with input fields

    const handleSubmit =(e)=> {
        e.preventDefault()

        const enteredName = nameInputRef.current.value;
        const enteredJob = jobInputRef.current.value;
        console.log(enteredName, enteredJob );
    }

    /* console.log(nameInputRef); */
    //after this log, we have in console: {"current": null}
    //this is how we access the useRef:  const enteredName = nameInputRef.current
   useEffect(()=> {
        nameInputRef.current.focus()
   }, [])
    
    return (
        <div className='--bg-primary --mh-100vh'>
            <h1 className='--text-light --text-center'>
                Controlled Inputs
            </h1>
            <div className="--flex-center">
                <div className="--card-1 --bg-light --width-500px --flex-center">
                    <form className="--form-control" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text"
                             name='name' 
                             ref={nameInputRef}
                             />
                        </div>
                        <div>
                            <label htmlFor="job">Job: </label>
                            <input type="text" 
                            name='job' 
                            ref={jobInputRef}
                           />
                        </div>
                        <button type='submit' className='--btn --btn-danger --btn-block' 
                        >Submit User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UncontrolledInputs

/*
how does uncontrolled input work? 
1) to manipulate the input field inside of the form, we need to use hook "useRef"

what does useRef do? 
--it target DOM nodes/elements
Preserve values associated with input fields during re-render,
it is not only for targeting input but for any elements, like div, label or 
whatever,


so we use now useRef hook, to get ther value from input filed

one common thing that we do with useRef hook is we do an autoFocus, on an element,
input, for example
*/