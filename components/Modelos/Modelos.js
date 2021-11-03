import style from './style.module.css';
import Image from 'next/image';

export default function Modelos(){
    return(
        <div className={style.display}>
            <div className={style.imagenFondo1}>
                <div className={style.containerTexto}>
                    <p className={style.titulo}>
                       STOCK IN COMPANY CENTRO LOGISTICO 
                    </p>
                    <div className={style.descripcion}>
                        <ul className={style.items}> 
                            <li className={style.item}> Administración de stock in Company. </li>
                            <li className={style.item}> Colocación de contenedores con stock en zonas de difícil acceso. </li>
                            <li className={style.item}> Logística coordinada de diversos rubros.</li>
                            <li className={style.item}> Visitas a planta para asistencia técnica y desarrollo comercial. </li>
                            <li className={style.item}> Capacitaciones. </li>
                            <li className={style.item}> Reducción de capital de trabajo.</li>
                            <li className={style.item}> Indicadores de gestión a Demanda. </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={style.imagenFondo2}>
                <div className={style.containerTexto}>
                    <p className={style.titulo}>
                      STOCK IN COMPANY CENTRO LOGISTICO
                    </p>
                    <div className={style.descripcion}>
                    <ul className={style.items}> 
                            <li className={style.item}> Portal de compra para clientes industriales. </li>
                            <li className={style.item}> Transparencia comercial. </li>
                            <li className={style.item}> Seguimiento de envíos.</li>
                            <li className={style.item}> Indicadores de gestión </li>
                            <li className={style.item}> Logística unificada.  </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={style.imagenFondo3}>
                <div className={style.containerTexto}>
                    <p className={style.titulo}>
                       STOCK IN COMPANY CENTRO LOGISTICO
                    </p>
                    <div className={style.descripcion}>
                    <ul className={style.items}> 
                            <li className={style.item}> Portal de compra para clientes general. </li>
                            <li className={style.item}> Seguimiento de envíos. </li>
                            <li className={style.item}> Logística unificada.</li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}