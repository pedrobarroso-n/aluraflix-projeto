import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <div className={styles.container}>
            <img src='' />
            <nav>
                <ul>
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
        </div>
    )
}

export default NavBar