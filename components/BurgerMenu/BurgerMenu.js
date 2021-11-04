import {FaBars} from "react-icons/fa";
import Link from "next/link"

export default function BurgerMenu(){
    return(
        <div className="burgerMenu1">
            <ul className="mainList">
                <li className="burgerBtn"><FaBars/>
                    <ul id="itemsListBurger">
                            <Link href="#empresas" passHref>
                                <li className="itemsBurger">EMPRESAS</li> 
                            </Link>
                            <Link href="#clientes" passHref>
                                <li className="itemsBurger">CLIENTES</li> 
                            </Link>
                            <Link href="#nosotros" passHref>
                                <li className="itemsBurger">NOSOTROS</li>
                            </Link>
                            <Link href="#modelos" passHref>
                                <li className="itemsBurger">MODELOS</li> 
                            </Link>
                    </ul>
                </li>
            </ul>
        </div> 
    )
}