import './index.scss'


export default function Cubiculos(props) {
    return(
        <div>
            <div className='info'>
                <h2 className={props.secao3titilo}>{props.titulo}</h2>
                <div className={props.alinhamento}>
                    <p>{props.texto}</p>
                    <img src={props.img} alt='' />
                </div>
            </div>
        </div>
    )
}