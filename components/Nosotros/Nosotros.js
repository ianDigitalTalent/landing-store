import Image from 'next/image';
import style from './style.module.css';

export default function Nosotros(){
    return(
        <>
            <div className={style.displayContainer}>
                    <p className={style.texto}>
                        A través de un menú de productos y servicios, permítanos ayudarlo a mantener sus operaciones en funcionamiento, 
                        las personas seguras y los costos bajo control. ¿Necesita ayuda para administrar su inventario o desarrollar 
                        iniciativas comerciales estratégicas? <strong>Store in House</strong> está para ayudarlo.
                    </p>
                    <div className={style.horizontal}>
                        <Image src="/horizontal.png" alt="Imagen horizontal" width={2166} height={402}></Image>
                    </div>          
                <div className={style.displayImagenes}>
                    <div className={style.imagenes}>
                        <div className={style.imagen1}>
                            <div className={style.containerTexto}>
                                <p className={style.textoImagen}>
                                   <strong> La gestión de inventario: </strong> <br/>
                                    Desde soluciones de autoservicio hasta una compleja gestión de 
                                    inventario, podemos adaptar un sistema de inventario a sus necesidades. 

                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className={style.imagenes}>
                        <div className={style.imagen2}>
                            <div className={style.containerTexto}>
                                <p className={style.textoImagen}>
                                    <strong>Programas de seguridad:</strong><br/>
                                    Podemos ayudar a manejar el trabajo administrativo para 
                                    aliviar la carga de gestionar programas de seguridad, focalizando en EPP, Ergonomía, 
                                    Seguridad Eléctrica. Las personas obtienen la protección que necesitan mientras usted ahorra 
                                    tiempo y dinero.
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className={style.imagenes}>
                        <div className={style.imagen3}>
                            <div className={style.containerTexto}>
                                <p className={style.textoImagen}>
                                  <strong>Economía Circular:</strong><br/>
                                  Foco en el concepto de "reducir, reutilizar y reciclar". Es por ello que ofrecemos servicios 
                                  alineados a los objetivos de sostenibilidad y contribuir a seguir la cadena de la economía circular, 
                                  logrando que cada vez más clientes vean los beneficios de utilizar recursos y activos de una manera 
                                  más eficiente.
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className={style.imagenes}>
                        <div className={style.imagen4}>
                            <div className={style.containerTexto}>
                                <p className={style.textoImagen}>
                                    <strong>Servicios de consultoría:</strong><br/>
                                    Nos asociamos con usted para comprender mejor su negocio, identificar oportunidades de mejora y desarrollar 
                                    planes estratégicos de ahorro. 
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}