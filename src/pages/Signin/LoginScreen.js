import axios from "axios";
import { useState } from "react";
import './LoginStyle.css';
   
function LoginScreen() {

    //autenticacao de login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        console.log(email, password);
        
        try {
          const response = await axios.post('http://localhost:8080/v1/auth/authenticate',
            JSON.stringify({email, password}),
            {
              headers: { 'Content-Type': 'application/json'}
            }
          );
        } catch (error) {
          if (error.response) {
            setError('Usuario ou senha invalidos');
          } else if (error.response.status == 401) {
            setError('Erro ao conectar ao servidor'); 
          }
        }
    };
    
    return (
      <body>
        <div className="main-login">
          <div className="left-login">
            <img src='https://escolaxavier.com.br/wp-content/uploads/2022/04/parceiros-escola-xavier-unifatecie.png' class="left-login-image" alt="logo fatecie"></img>
          </div>
          <div className="right-login">
            <div className="card-login">
                <h1><b>LOGIN</b></h1>
                <div className="textfield">
                    <label for="usuario">Usuário</label>

                    <input type="email" 
                    name="email" 
                    placeholder="E-mail"
                    required
                    onChange = {(e) => setEmail(e.target.value)} //pega o valor do email
                    ></input>
                </div>
                <div className="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" 
                    name="senha" 
                    placeholder="Senha"
                    required
                    onChange = {(e) => setPassword(e.target.value)} //pega o valor da senha
                    ></input>
                </div>
                <p>{error}</p>
                <button type="submit" className="btn-login"
                onClick={(e) => handleLogin(e)} id="login">Login</button>
                <button type="submit" className="btn-register" id="register"
                >Registrar-se</button>
            </div>
          </div>
        </div>
        </body>
    );
  }

export default LoginScreen;

        
