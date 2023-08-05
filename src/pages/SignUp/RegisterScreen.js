import './registerStyle.css';

function RegisterScreen() {
    return (
        <body>
            <div className="main-register">
                <div className="left-register">
                    <img src="https://escolaxavier.com.br/wp-content/uploads/2022/04/parceiros-escola-xavier-unifatecie.png" className="left-register-image" alt="logo fatecie"></img>
                </div>
                <div className="right-register">
                    <div className="card-register">
                        <h1><b>REGISTRO</b></h1>
                        <div className="textfield">
                            <label for="usuario">Nome</label>
                            <input type="text" name="username" placeholder="Nome completo"></input>
                        </div>
                        <div className="textfield">
                            <label for="senha">E-mail</label>
                            <input type="email" name="emailRegister" placeholder="E-mail"></input>
                        </div>
                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha"></input>
                        </div>
                        <div className="textfield">
                            <label for="confirmarSenha">Confirmar senha</label>
                            <input type="password" name="confirmarSenha" placeholder="Confirmar senha"></input>
                        </div>
                        <div className="textfield">
                            <label for="cpf">CPF</label>
                            <input type="number" name="userCPF" placeholder="CPF"></input>
                        </div>
                        <div className="textfield">
                            <label for="rg">Rg</label>
                            <input type="number" name="userRG" placeholder="RG"></input>
                        </div>
                        <div className="textfield">
                            <label for="dataNascimento">Data de nascimento</label>
                            <input type="date" name="userBirthday"></input>
                        </div>
                        <div className="textfield">
                            <label for="enrollmentCode">Código da matricula</label>
                            <input type="number" name="enrollmentCode" placeholder="Codigo da matricula"></input>
                        </div>
                        <button className="btn-enviar" id="enviar">Enviar</button>
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