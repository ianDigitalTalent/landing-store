
import Footer from "../../components/Footer/Footer"
import HeaderEmpresa from "../../components/HeaderEmpresa/HeaderEmpresa"
import Principal from "../../components/Principal/Principal"

export default function Giovagnoli(){
    return(
        <>        
            <HeaderEmpresa/>
            <Principal/>
            <h2 id="soluciones">Soluciones</h2>
            <h2 id="productos">Productos</h2>
            <h2 id="marcas">Marcas</h2>
            <Footer/>
        </>
    )
}