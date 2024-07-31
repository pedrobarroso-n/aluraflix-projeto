import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';

function Cabecalho() {

    const clickLink = ()=> {
        const itens = document.querySelectorAll('li');
        itens.forEach(item => {
            item.className === '' ? item.className = styles.ativo : item.className = '';
        })
    } 

    return (
        <header className={styles.container}>
            <img src='/images/logo.png' alt='Logo do projeto react AluraFlix' />
            <nav>
                <ul className={styles.links}>
                    <li className={styles.ativo} onClick={clickLink}>  
                        <Link to='./'>
                            <img className={styles.icons}
                                src="/images/home.png"
                                alt='icone da aba Home do AluraFlix'
                            />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li onClick={clickLink}>
                        <Link to='./novovideo'>
                            <img className={styles.icons}
                                src="/images/novovideo.png"
                                alt='icone da aba Novo Vídeo do AluraFlix'
                            />
                             <p>Novo Vídeo</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}

export default Cabecalho;