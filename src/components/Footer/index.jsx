import { Container } from "./styles"
import { FiHexagon } from "react-icons/fi"

export function Footer(){
    return(
        <Container>
            <div>
                <FiHexagon size={25}/>
                <h1>food explorer</h1>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}