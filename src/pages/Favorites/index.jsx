import { Container, Body } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { api } from '../../services/api'
import { useEffect, useState } from "react"

export function Favorites(){

    const [favPlates, setFavPlates] = useState(null)

    async function handleRemove(id){
        const confirm = window.confirm("Deseja realmente remover o prato?")
    
        if(confirm){
            await api.delete(`/favorites/${id}`);
            setFavPlates(prevFavPlates => prevFavPlates.filter(favPlate => favPlate.id !== id));
        }
    }

    useEffect(() => {
        async function fetchPlates(){
          const response = await api.get(`/favorites`)
          setFavPlates(response.data)
        }
        fetchPlates()
    }, []);

    return(
        <Container>
            <Header />
            {favPlates &&
            <Body>
                <h1>Meus favoritos</h1>
                <ul>
                    {
                    favPlates.map(favPlate => {
                        const plateData = JSON.parse(favPlate.plate);

                        return(
                        <li key={favPlate.id}>
                            <img src={`${api.defaults.baseURL}/files/${plateData.avatar}`} alt="" onClick={() => handleDetails(plateData.id)}/>
                            <div>
                                <p>{plateData.name}</p>
                                <a href="#" onClick={()=> handleRemove(favPlate.id)}>Remover dos favoritos</a>
                            </div>
                        </li>
                    )})
                    }  
                </ul>
            </Body>}
            <Footer />
        </Container>
    )
}
