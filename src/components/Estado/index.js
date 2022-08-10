import './index.scss'

import { useState } from "react"


function Estado() {
    const [texto, setTexto] = useState('Olá, seja bem-vindo!');
    
    return (
        <section>
            <h1>{texto}</h1>

            <input type='text' onChange={e => setTexto(e.target.value)}/>
        </section>
    )
}

function EstadoCsharp() {
    const [texto, setTexto] = useState('Csharp');

    return(
        <main>
            <h1>{texto}</h1>

            <select name='' id='linguagem' onChange={e => setTexto(e.target.value)}>
                <option value='Csharp' key="linguagem">Csharp</option>
                <option value='Python' key="linguagem">Python</option>
                <option value='TypeScript' key="linguagem">TypeScript</option>
                <option value='JavaScript' key="linguagem">JavaScript</option>
            </select>
        </main>
    )
}


function Selecionado() {
    const [option, setOption] = useState(false);

    return(
        <section>
            <div>
                <h1>Selecionado?</h1>
                <h1> {option ? "Sim" : "Não"} </h1>
            </div>

            <input  type="checkbox" onChange={e => setOption(e.target.checked)} /> <label>Opção</label>
        </section>
    )
}

function MudarTexto() {
    const [texto, setTexto] = useState('Clique no botão para atualizar esse texto');
    const [guardar, setGuardar] = useState('')

    function MudarClick() {
        setTexto(guardar);
    }

    return(
        <main>
            <h1>{texto}</h1>
            <div>
                <input type="text" onChange={e => setGuardar(e.target.value)}/>
                <button onClick={MudarClick}>Atualizar</button>
            </div>
        </main>
    )
}

export { Estado, EstadoCsharp, Selecionado, MudarTexto}