import TituloSecao from 'components/TituloSecao';
import styles from './Banner.module.css';
import fundo from './fundo.png';

function Banner() {
    return ( 
        <section className={styles.container}>
            <div className={styles.card}>
                <div className={styles.texto}>
                    <TituloSecao
                        backgroundColor='#6BD1FF'
                        fontSize='48px'
                        width='296.82px'
                        height='92px'
                        lineHeight='96px'
                    >
                        FRONT END
                    </TituloSecao>
                    <h1>
                        SEO com React
                    </h1>
                    <p>
                        Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
                    </p>
                </div>
                <div className={styles.video}>
                    <img
                        src={fundo}
                        alt='captura de video ao fundo'
                    />
                </div>
            </div>
            <div className={styles.banner}>
                <span></span>
                <img 
                    src={fundo} 
                    alt='captura de video ao fundo' 
                />
            </div>
        </section>
    )
}

export default Banner;