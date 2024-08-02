import styles from './Botao.module.css';

function Botao ({ icone, children }) {
    return (
        <button className={styles.botao}>
            <img 
                src={icone} 
                alt={`Icone do botao ${children}`} 
            />
            <p>
                {children}
            </p>
        </button>
    )
}

export default Botao;