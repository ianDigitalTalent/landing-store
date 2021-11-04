import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function FooterMagnani(){
    return(
        <div className={style.displayFooter}>
            <div className={style.imagenFooter}>
                <Image src="/footerFerr.png" alt="Logo Footer" width={2944} height={1288}></Image>
            </div>
            <div className={style.redesFooter}>
                <Link href="https://www.facebook.com/storeinhouse112"  passHref >
                    <a target="_blank" >
                        <p  className={style.iconsFooter}><FaFacebookF></FaFacebookF></p>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/storeinhouse"  passHref >
                    <a target="_blank" >
                        <p  className={style.iconsFooter}><FaInstagram></FaInstagram></p>
                    </a>
                </Link>
                <Link href="https://twitter.com/storeinhouse"  passHref >
                    <a target="_blank" >
                        <p  className={style.iconsFooter}><FaTwitter></FaTwitter></p>
                    </a>
                </Link>
            </div>
        </div>
    )
}