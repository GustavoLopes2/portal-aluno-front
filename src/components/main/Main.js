import Chart from '../charts/Chart';
import unifatecielogo from '../../assets/unifatecieLogo.png';
import { FaMoneyBillWave, FaRegClock, FaUser } from 'react-icons/fa';

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
                    <i><FaMoneyBillWave size={20}/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Mensalidade (Direito):</p>
                        <span className="font-bold text-title">R$349.99</span>
                    </div>
                </div>

                <div className="card">
                    <i><FaMoneyBillWave size={20}/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Mensalidade (Engenharia):</p>
                        <span className="font-bold text-title">R$399.99</span>
                    </div>
                </div>
            </div>

            <div className="charts">
                <div className="charts__left">
                    <div className="chars__left__title">
                        <div>
                            <h1>Preços das Mensalidades</h1>
                            <p>Paranavaí, Paraná, BR</p>
                        </div>
                    </div>
                    <Chart />
                </div>
                

                <div className="charts__right">
                    <div className="chars__right__title">
                        <div>
                            <h1>Preços das Mensalidades</h1>
                            <p>Paranavaí, Paraná, BR</p>
                        </div>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Medicina</h1>
                            <p>R$1099.99</p>
                        </div>

                        <div className="card2">
                            <h1>Direito</h1>
                            <p>R$R$349.99</p>
                        </div>

                        <div className="card3">
                            <h1>Engenharia</h1>
                            <p>R$399.99</p>
                        </div>

                        <div className="card4">
                            <h1>Biologia</h1>
                            <p>R$349.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default Main;