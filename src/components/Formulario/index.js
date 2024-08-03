import styles from './Formulario.module.css';

function Formulario () {
    return (
        <main>
            <div className={styles.titulo}>
                <h1>novo vídeo</h1>
                <h3>Complete o formulário para criar um novo card de vídeo.</h3>
            </div>
            <form className={styles.formulario}>
                <h1>Criar Card</h1>
            </form>
        </main>
    )
}

export default Formulario;