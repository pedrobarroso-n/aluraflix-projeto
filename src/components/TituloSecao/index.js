import './TituloSecao.module.css';

function TituloSecao({ backgroundColor, children, fontSize='32px', width='432px', height=' 70px', lineHeight='72px' }) {
    return (
        <h2 style={{ 
                backgroundColor: backgroundColor, 
                fontSize: fontSize, 
                width: width, 
                height: height, 
                lineHeight: lineHeight 
            }}
        >
            {children}
        </h2>
    )
}

export default TituloSecao;