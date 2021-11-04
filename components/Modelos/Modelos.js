import style from "./style.module.css";

export default function Modelos(){
    return(
        <div className={style.displayModelos}>
            <div className={style.imagenFondo1}>
                <div className={style.containerTextoModelos}>
                    <p className={style.tituloModelos}>
                       STOCK IN COMPANY CENTRO LOGISTICO 
                    </p>
                    <div className={style.descripcionModelos}>
                        <ul className={style.itemsModelos}> 
                            <li className={style.itemModelos}> Administración de stock in Company. </li>
                            <li className={style.itemModelos}> Colocación de contenedores con stock en zonas de difícil acceso. </li>
                            <li className={style.itemModelos}> Logística coordinada de diversos rubros.</li>
                            <li className={style.itemModelos}> Visitas a planta para asistencia técnica y desarrollo comercial. </li>
                            <li className={style.itemModelos}> Capacitaciones. </li>
                            <li className={style.itemModelos}> Reducción de capital de trabajo.</li>
                            <li className={style.itemModelos}> Indicadores de gestión a Demanda. </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={style.imagenFondo2}>
                <div className={style.containerTextoModelos}>
                    <p className={style.tituloModelos}>
                      STOCK IN COMPANY CENTRO LOGISTICO
                    </p>
                    <div className={style.descripcionModelos}>
                    <ul className={style.itemsModelos}> 
                            <li className={style.itemModelos}> Portal de compra para clientes industriales. </li>
                            <li className={style.itemModelos}> Transparencia comercial. </li>
                            <li className={style.itemModelos}> Seguimiento de envíos.</li>
                            <li className={style.itemModelos}> Indicadores de gestión </li>
                            <li className={style.itemModelos}> Logística unificada.  </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={style.imagenFondo3}>
                <div className={style.containerTextoModelos}>
                    <p className={style.tituloModelos}>
                       STOCK IN COMPANY CENTRO LOGISTICO
                    </p>
                    <div className={style.descripcionModelos}>
                    <ul className={style.itemsModelos}> 
                            <li className={style.itemModelos}> Portal de compra para clientes general. </li>
                            <li className={style.itemModelos}> Seguimiento de envíos. </li>
                            <li className={style.itemModelos}> Logística unificada.</li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}