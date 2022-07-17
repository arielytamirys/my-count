import React from "react";
import Botao from "../botao";
import  style from './forms.module.scss';
import { ITarefas } from '../../types/task';
import {v4 as uuidv4} from 'uuid'




class Forms extends React.Component<{
  setTarefa: React.Dispatch<React.SetStateAction<ITarefas[]>>
}>{

state= {
  tarefa: "",
  tempo: "00:00"
}
/*controlando formulario valor value e onchage tambem faz parte */
adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){
  evento.preventDefault();

  this.props.setTarefa(tarefasAntigas => 
    [
      ...tarefasAntigas,
      {
         ...this.state,
         selecionado:false,
         completado:false,
         id: uuidv4()

      }
    ]
      );
  this.setState({

    tarefa:"",
    tempo:"00:00"


  })
}

    render(){
        return(
        <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
          <div  className={style.inputContainer}>
              <label htmlFor="assigment">
                Adicione um novo Estudo
              </label>                
              <input type="text" 
              name="assignment" 
              value={this.state.tarefa}
              onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
              id="assigment" 
              placeholder="O que você quer estudar" 
              required/>
            </div>

            <div className={style.inputContainer}>
             <label htmlFor="tempo"  >
              Tempo
             </label>
              <input type="time" 
              step="1" 
              name="time" 
              /* controlando o tempo*/
              value={this.state.tempo}
              onChange={evento => this.setState({...this.state, tempo: evento.target.value })}
              id="tempo" 
              min="00:00:00" 
              max="01:30:00" required/>
            </div>

            <Botao type= "submit">
              Adicionar
              </Botao>
            
        
        </form>
         )
    }
}
 export default Forms;