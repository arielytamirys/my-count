
import style from './lista.module.scss';
import Item from './item';
import { ITarefas } from '../../types/task'; {/*importação da tarefas/taks*/}

interface Props{

    tarefa:ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

//forma de fazer uma lista com react renderizando.
function Lista({tarefa, selecionaTarefa} : Props){

    return(
        <aside className={style.listaTarefas}  >
    
    {/*introdução de estado */}     
    <h2> Estudos do Dia</h2>

<ul>
    {tarefa.map(item => (
    
    <Item
    selecionaTarefa={selecionaTarefa}
    key={item.id}
    {...item}

    />

    ))}

</ul>
        </aside>
    )
}

export default Lista;