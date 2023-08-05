import unifatecielogo from '../../assets/unifatecieLogo.png';
import { FaClock, FaRegClock } from 'react-icons/fa';

import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                <img src={unifatecielogo} alt="unifatecielogo"/>
                <div className="main__greeting">
                    <h1>Olá Aluno</h1>
                    <p>Bem-vindo ao Portal do Aluno!</p>
                </div>
            </div>

            <div className="main__cards">
                <div className="card">
                    <i><FaRegClock size={20}/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Horário inicial da aula:</p>
                        <span className="font-bold text-title">19:20</span>
                    </div>
                </div>

                <div className="card">
                    <i><FaRegClock size={20}/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Horário final da aula:</p>
                        <span className="font-bold text-title">22:50</span>
                    </div>
                </div>

                <div className="card">
                    <i><FaClock size={20}/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Horas Cumpridas:</p>
                        <span className="font-bold text-title">856h</span>
                    </div>
                </div>

                <div className="card">
                    <i><FaClock size={20}/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Horas Total do Curso:</p>
                        <span className="font-bold text-title">2345h</span>
                    </div>
                </div>
            </div>

            <div className="charts">
                <div className="charts__left">
                    <div className="chars__left__title">
                    <div className="chars__right__title">
                        <div>
                            <h1>Atividades próximas</h1>
                            <h1>(Engenharia de Software)</h1>
                            <p>Paranavaí, Paraná, BR</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="charts__right">
                    <div className="chars__right__title">
                        <div>
                            <h1>Aulas disponíveis do curso:</h1>
                            <h1>(Engenharia de Software)</h1>
                            <p>Paranavaí, Paraná, BR</p>
                        </div>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Cálculo I</h1>
                            <p>Segunda-feira</p>
                            <p>Horário: 19:20 até 21:00</p>
                        </div>
                        <div className="card2">
                            <h1>Banco de Dados II</h1>
                            <p>Segunda-feira</p>
                            <p>Horário: 21:00 até 22:50</p>
                        </div>
                        <div className="card3">
                            <h1>METEP</h1>
                            <p>Terça-feira</p>
                            <p>Horário: 19:20 até 21:00</p>
                        </div>
                        <div className="card4">
                            <h1>POO</h1>
                            <p>Terça-feira</p>
                            <p>Horário: 21:00 até 22:50</p>
                        </div>
                        <div className="card1">
                            <h1>Empreendedorismo</h1>
                            <p>Quarta-feira</p>
                            <p>Horário: 19:20 até 21:00</p>
                        </div>
                        <div className="card2">
                            <h1>Arquitetura de computadores</h1>
                            <p>Quarta-feira</p>
                            <p>Horário: 21:00 até 22:50</p>
                        </div>
                        <div className="card3">
                            <h1>Projeto Integrador I</h1>
                            <p>Quinta-feira</p>
                            <p>Horário: 19:20 até 21:00</p>
                        </div>
                        <div className="card4">
                            <h1>Algoritimos</h1>
                            <p>Quinta-feira</p>
                            <p>Horário: 21:00 até 22:50</p>
                        </div>
                        <div className="card1">
                            <h1>IHC</h1>
                            <p>Sexta-feira</p>
                            <p>Horário: 19:20 até 21:00</p>
                        </div>
                        <div className="card2">
                            <h1>APS</h1>
                            <p>Sexta-feira</p>
                            <p>Horário: 21:00 até 22:50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default Main;