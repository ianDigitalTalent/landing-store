import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Empresas(){
    const empresas = [
        {
            nombre : "MAGNANI",
            url : "/empresa/magnani",
            foto : "/logoMag.png"
        },
        {
            nombre : "GIOVAGNOLI",
            url : "/empresa/giovagnoli",
            foto : "/logoGiov.png"
        },
        {
            nombre : "FERRETERA SAN LUIS",
            url : "/empresa/ferretera-san-luis",
            foto : "/logoFerr.png"
        }
    ]
    return(
        <div className={style.displayEmpresa}>
            {empresas.map((empresa,index)=>{
                return (
                    <div className={style.empresa} key={index}>
                        <Link href={empresa.url} passHref>
                            <a href={empresa.url}>
                                <Image src={empresa.foto} alt={empresa.nombre} width={200} height={200}></Image>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}