import React from "react"
import style from "./relogio.module.scss";

export default function Relogio() {
    return(
 //react.fragment substitui o elemento o simbolo <></> tambem
        <React.Fragment>

        <span className={style.relogioNumero}>0</span>
       <span className={style.relogioNumero} >0</span>
       <span className={style.relogioDivisao} >:</span> 
       <span className={style.relogioNumero}>0</span>
       <span className={style.relogioNumero}>0</span> 

        </React.Fragment>
     
    )
}