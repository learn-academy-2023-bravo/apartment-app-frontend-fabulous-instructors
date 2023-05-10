import {useNavigate} from "react-router-dom"

const Signup = ({ signup }) => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        signup()
        e.target.reset()
        navigate("/apartmentindex")
    }
    return(
        <div>
        <form ronSubmit={handleSubmit}>
            Email: <input type="email" name='email' placeholder="email" />
            <br/>
            Password: <input type="password" name='password' placeholder="password" />
            <br/>
            <input type='submit' value="Submit" />
        </form>
        <br />
        <div>Already registered, <a href="/login" >Login</a> here.</div>
    </div>
    )
}
export default Signup