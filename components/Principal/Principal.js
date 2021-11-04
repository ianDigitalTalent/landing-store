import Image from "next/image";
import style from "./style.module.css"

export default function Principal(){
    return(
        <div className={style.imagenPrincipal}>
            <Image src="/principal.png" alt="Imagen" width={3500} height={1681} ></Image>
        </div>
    )
}