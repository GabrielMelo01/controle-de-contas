import login from './login.css';
function Login() {
    return (
        <div className='container'>
            <form className='card'>
                <h1>FAZER LOGIN</h1>
                <input type='text' placeholder='E-mail' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Fazer Login</button>
            </form>
        </div>
    );
}

export default Login;