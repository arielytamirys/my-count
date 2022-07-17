import style from './item.module.scss';
import { ITarefas } from '../../../types/task';

interface Props extends ITarefas {

     selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}


export default function item(
    {
        tarefa, 
        tempo, 
        selecionado,
         completado, 
         id, 
         selecionaTarefa 
    } : Props) {
   
    return(
        <li className={`${style.item} ${selecionado ? style.
        itemSelecionado : ''} `}
        onClick = {() => selecionaTarefa(
                {
        
            tarefa, 
            tempo, 
            selecionado,
            completado, 
            id

               }
          )}
         >


    <h3>{tarefa}</h3>
    <span>{tempo}</span>
    </li>
    )
}
