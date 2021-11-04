import style from "./style.module.css"
import Image from "next/image"
import Link from "next/link"
import BurgerMenu from "../BurgerMenu/BurgerMenu"



export default function Header(){
    return(
        <>
            <div className={style.displayHeader}>
                <div className={style.leftHeader}>
                    <Link href="/#home" passHref>
                        <a>
                            <Image src="/logoStore2.png" alt="logo" width={120} height={60}></Image>
                        </a>
                    </Link>
                </div>
                <div className={style.rightHeader}>
                    <div className={style.navItemsHeader}>
                        <ul className={style.itemsListHeader}>
                            <Link href="#empresas" passHref>
                                <li className={style.itemsHeader}>EMPRESAS</li> 
                            </Link>
                            <Link href="#clientes" passHref>
                                <li className={style.itemsHeader}>CLIENTES</li> 
                            </Link>
                            <Link href="#nosotros" passHref>
                                <li className={style.itemsHeader}>NOSOTROS</li>
                            </Link>
                            <Link href="#modelos" passHref>
                                <li className={style.itemsHeader}>MODELOS</li> 
                            </Link>
                        </ul>
                    </div>
                    <BurgerMenu/>
                </div>
            </div>
        </>
    )
}