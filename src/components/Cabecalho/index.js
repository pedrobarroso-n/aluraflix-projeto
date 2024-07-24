import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';

function Cabecalho() {
    return (
        <header className={styles.container}>
            <img src='/images/logo.png' alt='Logo do projeto react AluraFlix' />
            <nav>
                <ul className={styles.links}>
                    <li> 
                        <Link to='./'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='./novovideo'>
                            Novo Vídeo
                        </Link>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}

export default Cabecalho;