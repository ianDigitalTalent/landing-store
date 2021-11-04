import style from "./style.module.css"
import Image from "next/image"
import Link from "next/link"
import BurgerMenu from "../BurgerMenu/BurgerMenu"



export default function HeaderEmpresa(){
    return(
        <>
            <div className={style.displayHeaderEmpresa}>
                <div className={style.leftHeaderEmpresa}>
                    <Link href="/#home" passHref>
                        <a>
                            <Image src="/logoStore2.png" alt="logo" width={120} height={60}></Image>
                        </a>
                    </Link>
                </div>
                <div className={style.rightHeaderEmpresa}>
                    <div className={style.navItemsHeaderEmpresa}>
                        <ul className={style.itemsListHeaderEmpresa}>
                            <Link href="#nosotrosEmpresa" passHref>
                                <li className={style.itemsHeaderEmpresa}>NOSOTROS</li>
                            </Link>
                            <Link href="#marcas" passHref>
                                <li className={style.itemsHeaderEmpresa}>MARCAS</li>
                            </Link>
                            <Link href="#soluciones" passHref>
                                <li className={style.itemsHeaderEmpresa}>SOLUCIONES</li> 
                            </Link>
                            <Link href="#productos" passHref>
                                <li className={style.itemsHeaderEmpresa}>PRODUCTOS</li> 
                            </Link>
                        </ul>
                    </div>
                    <BurgerMenu/>
                </div>
            </div>
        </>
    )
}