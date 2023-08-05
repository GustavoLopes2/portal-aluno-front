import './registerStyle.css';
import axios from "axios";
import { useState } from "react";

function RegisterScreen() {

    //autenticacao de login
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [birthDate, setbirthDate] = useState('');
    const [enrollmentCode, setEnrollmentCode] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/v1/auth/register/student',
            JSON.stringify({"name": name, 
            "email": email,
            "password": password,
            "cpf":  cpf, 
            "rg":  rg, 
            "birthDate":  birthDate, 
            "enrollmentCode":  enrollmentCode
            }),
            {
              headers: { 'Content-Type': 'application/json'}
            }
          );
          if(response.status == 200) {
            setError('Registrado com sucesso!'); 
            window.location.href = 'http://localhost:3000/'
          }
        } catch (error) {
            if (error.response) {
            setError('Insira os valores válidos');
          }  
            if (password != confirmedPassword | confirmedPassword != password) {
            setError('senhas incorretas'); 
          }
        }

    };
    return (
        <body>
            <div className="main-register">
                <div className="left-register">=
                    <img src="https://escolaxavier.com.br/wp-content/uploads/2022/04/parceiros-escola-xavier-unifatecie.png" className="left-register-image" alt="logo fatecie"></img>
                </div>
                <div className="right-register">
                    <div className="card-register">
                        <h1><b>REGISTRO</b></h1>
                        <div className="textfield">
                            <label for="usuario">Nome</label>
                            <input type="text" 
                            name="username" 
                            placeholder="Nome completo"
                            required
                            onChange = {(e) => setName(e.target.value)} //pega o valor do email
                            ></input>
                        </div>
                        <div className="textfield">
                            <label for="email">E-mail</label>
                            <input type="email" 
                            name="emailRegister" 
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
                            onChange = {(e) => setPassword(e.target.value)} //pega o valor do email                           
                            ></input>
                        </div>
                        <div className="textfield">
                            <label for="confirmarSenha">Confirmar senha</label>
                            <input type="password" 
                            name="confirmarSenha" 
                            placeholder="Confirmar senha"
                            required
                            onChange = {(e) => setConfirmedPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="textfield">
                            <label for="cpf">CPF</label>
                            <input type="number" 
                            name="userCPF" 
                            placeholder="CPF"
                            required
                            onChange = {(e) => setCpf(e.target.value)} //pega o valor do email
                            ></input>
                        </div>
                        <div className="textfield">
                            <label for="rg">Rg</label>
                            <input type="number" 
                            name="userRG" 
                            placeholder="RG"
                            required
                            onChange = {(e) => setRg(e.target.value)} //pega o valor do email
                            ></input>
                        </div>
                        <div className="textfield">
                            <label for="dataNascimento">Data de nascimento</label>
                            <input type="date" 
                            name="userBirthday"
                            required
                            onChange = {(e) => setbirthDate(e.target.value)} //pega o valor do email
                            ></input>
                        </div>
                        <div className="textfield">
                            <label for="enrollmentCode">Código da matricula</label>
                            <input type="number" 
                            name="enrollmentCode" 
                            placeholder="Codigo da matricula"
                            required
                            onChange = {(e) => setEnrollmentCode(e.target.value)} //pega o valor do email
                            ></input>
                        </div>
                        <p>{error}</p>
                        <button className="btn-enviar"
                        onClick={(e) => handleLogin(e)} id="enviar">Enviar</button>
                        <a className="referenceURL" href="loginScreen2.html">
                            <button className="btn-voltar" id="voltar">Voltar</button>
                        </a>
                    
                    </div>
                </div>
            </div>
        </body>
    );
}
export default RegisterScreen;