import login from './login.css';
function Login() {
    return (
        <div className='container'>
            <div className='grid-login'>
            <form className='card'>
                <h1>FAZER LOGIN</h1>
                <input type='text' placeholder='E-mail' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Fazer Login</button>
            </form>
            </div>
        </div>
    );
}

export default Login;