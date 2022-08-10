
import './App.css';

import Cubiculos from '../../components/cubiculos/index.js'

function App() {
  return (
    <div className="App">
      <header> 
        <h1>Estudando ReactJS | Componentes</h1>
      </header>

      <main className='div-pt1'> 
        <Cubiculos alinhamento='secao1' titulo="Seção 01" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui." img="https://cdn.discordapp.com/attachments/929044199045726309/1006627219319304293/unknown.png"/>
      
        <Cubiculos alinhamento='secao2' titulo="Seção 02" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui." img="https://cdn.discordapp.com/attachments/929044199045726309/1006627219319304293/unknown.png"/>

        <Cubiculos alinhamento='secao3' secao3titilo='titulosec3' titulo="Seção 3" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non ." img="https://cdn.discordapp.com/attachments/929044199045726309/1006627219319304293/unknown.png"/>
        
      </main>
    </div> 
  );
}

export default App;
