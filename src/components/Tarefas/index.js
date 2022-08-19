import { useState } from "react";

import './index.scss'


export default function Tarefa() {
    const [tarefa, setTarefa] = useState('');

    const [lista, setLista] = useState([]);

    function AdicionarLista() {
        let novalista = [...lista, tarefa];
        setLista(novalista);
        setTarefa('');
    }

    function RemoverTarefa(t) {
        let novalista = lista.filter(item => item !== t);
        setLista(novalista);

    }

    return(
        <section className="Tarefas">
            <h1>Adicione suas Tarefas</h1>

            <div>
                <label>Adicionar Tarefa:</label> <input type="text" value={tarefa} onChange={e => setTarefa(e.target.value)} />

                <button onClick={AdicionarLista}>Adicionar</button>
            </div>

            <ul>
                {lista.map (item => 
                    <li> {item} <span onClick={e => RemoverTarefa(item)}> (x) </span> </li>                    
                )}
            </ul>

        </section>
    );
}