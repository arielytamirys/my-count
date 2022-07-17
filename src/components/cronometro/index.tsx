import Botao from '../botao/index';
import Relogio from './relogio';
import style  from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/date';

export default function cronometro(){

    console.log('conversao:', tempoParaSegundos('01:01:01'))

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e Inicie o Conometro</p>

                <div className={style.relogioWrapper}>
                    <Relogio/>
                </div>

            <Botao>
                Começar
            </Botao>
        </div>
    )
}