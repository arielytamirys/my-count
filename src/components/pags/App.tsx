
import React, {useState} from 'react';
import Forms from '../forms'
import style from './app.module.scss';
import Cronometro from '../cronometro/index';
import Lista from '../lista';
import { ITarefas } from '../../types/task';

function App() {

  const[tarefa, setTarefa]= useState<ITarefas[] | [] >([]);
  
  const [selecionado, setSelecionado] = useState<ITarefas>();
  
  function selecionaTarefa(tarefaSelecionada:ITarefas)
{
  setSelecionado(tarefaSelecionada)
  setTarefa(tarefaAnteriores => tarefaAnteriores.map(tarefa => (
    
     {

      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false

      }
  )
   ));
}
  return (
    <div className={style.AppStyle}>
      <Forms setTarefa={setTarefa}/>
      <Lista 
      tarefa={tarefa} 
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>
  );
}

export default App;
