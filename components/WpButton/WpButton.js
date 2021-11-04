import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link"
import style from "./style.module.css";

export default function WpButton(){
    return(
        <Link href="https://api.whatsapp.com/send?phone=[+549][3416532536]"  passHref >
            <a target="_blank" >
                <button  className={style.whatsApp}><FaWhatsapp></FaWhatsapp></button>
            </a>
        </Link>
    )
}