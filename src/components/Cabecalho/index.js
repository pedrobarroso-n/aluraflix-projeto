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
                            <img 
                                className={styles.icons}
                                src="/images/icons/home.png"
                                alt='icone da aba Home do AluraFlix'
                            />
                            <p>
                                Home
                            </p>
                        </Link></li>
                    <li>
                        <Link to='./novovideo'>
                            <img 
                                className={styles.icons}
                                src="/images/icons/novovideo.png"
                                alt='icone da aba Novo Vídeo do AluraFlix'
                            />
                            <p>
                                Novo Vídeo
                            </p>
                        </Link></li>
                </ul>
            </nav>
        </header> 
    )
}

export default Cabecalho;