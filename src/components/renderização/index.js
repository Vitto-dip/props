import { useState } from "react"



export default function Renderização() {
    const [texto, setTexto] = useState(false);
    const [cabaço, setCabaço] = useState('Sempre haverá pessoas melhores e piores em habilidades diferentes. Avance e ajude.')


    const [resposta, setResposta] = useState('');

    const [info, setInfo] = useState(false);

    const [cor, setCor] = useState(false);


    function alterartexto() {
        setTexto(true);
    }


    function mostrartexto() {
        setInfo(true);
    }

    function mostrartextoneg() {
        setInfo(false);
    }

    
    
    return (
        <section className="joao">
            <h1>Renderização</h1>

            <div>
                <h3>Biscoitinho da Sorte</h3>

                <button onClick={alterartexto} >Abrir</button>

                {texto === true && 
                    <p>{cabaço}</p>
                }

            </div>

            <div>
                <h1>
                    Friend's Poser?
                </h1>
                {resposta === 'One Piece' &&
                <img src="/assets/images/dinossuro.png" alt="" />
                }
                {resposta !== 'One Piece' &&
                <img src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-crying-green-dinosaur-illustration-png-image_4718857.jpg" alt="" />
                }
                <p>Qual o melhor anime?</p>
                <input type="text" placeholder="Responda Aqui" value={resposta} onChange={e => setResposta(e.target.value)}/>
            </div>

            <div>
                <div >
                    <p onClick={mostrartexto} >
                        Informações
                    </p>
                </div>
                
                <div>
                    <p onClick={mostrartextoneg}>
                        Qualificações
                    </p>
                </div>
                
                {info === true &&
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non .dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit.
                    </div>
                }
                {info === false &&
                    <div>
                    padeiro
                    </div>
                }
            </div>
        </section>
    )
}