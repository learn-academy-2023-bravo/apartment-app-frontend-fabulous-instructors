

const Login = () => {

  const handleSubmit = () => {
    console.log('something')
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" />
        <br/>
        <input type='submit' value="Login" />
      </form>
      <br />
      <div>Not registered yet, <a href="/signup">Signup</a> </div>
    </div>
  )
}
export default Login