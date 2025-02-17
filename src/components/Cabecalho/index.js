import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import Botao from 'components/Botao';

function Cabecalho() {
    return (
        <header className={styles.container}>
            <img src='/images/logo.png' alt='Logo do projeto react AluraFlix' />
            <nav>
                <ul className={styles.links}>
                    <li>  
                        <Link to='./'>
                            <Botao>
                                Home
                            </Botao>
                        </Link>
                    </li>
                    <li>
                        <Link to='./novovideo'>
                            <Botao>
                                Novo Vídeo
                            </Botao>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}

export default Cabecalho;