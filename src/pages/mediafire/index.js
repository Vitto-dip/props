import { useEffect, useState } from "react"

import verifSit from "../../services";

export default function mediocrie(){

    
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);

    const [media, setMedia] = useState(0)
    const [resul, setResul] = useState('---');

    function calcularMedia(){
        let m = (n1 + n2 + n3) / 3;
        setMedia(m);
    }

    function verificarSituacao(){
        let sit = verifSit(media)
        setMedia(sit) 
    }

    useEffect(() => {
        calcularMedia();
    
    }, [n1, n2, n3])


    useEffect(() =>{
        verificarSituacao();
    }, [media])

    useEffect(() => {
        setResul('<Situação do aluno>')
    }, [])

    return(
       <section>
            <div>
                Nota 1: <input type='Number' value={n1} onChange={e => setN1(Number(e.target.value))}/>
            </div>
            <div>
                Nota 2: <input type='Number' value={n2} onChange={e => setN2(Number(e.target.value))} />
            </div>
            <div>
                Nota 3: <input type='Number' value={n3} onChange={e => setN3(Number(e.target.value))} />
            </div>


            Média <input type='Number' value={media} onChange={e => setMedia(Number(e.target.value))}/>
       </section>
    )

}