import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from '../BurgerMenu/BurgerMenu'



export default function Header(){
    return(
        <>
            <div className={style.display}>
                <div className={style.left}>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/logoStore2.png" alt="logo" width={120} height={60}></Image>
                        </a>
                    </Link>
                </div>
                <div className={style.right}>
                    <div className={style.navItems}>
                        <ul className={style.itemsList}>
                            <Link href="#empresas" passHref>
                                <li className={style.items}>EMPRESAS</li> 
                            </Link>
                            <Link href="#clientes" passHref>
                                <li className={style.items}>CLIENTES</li> 
                            </Link>
                            <Link href="#nosotros" passHref>
                                <li className={style.items}>NOSOTROS</li>
                            </Link>
                            <Link href="#modelos" passHref>
                                <li className={style.items}>MODELOS</li> 
                            </Link>
                        </ul>
                    </div>
                    <BurgerMenu/>
                </div>
            </div>
        </>
    )
}