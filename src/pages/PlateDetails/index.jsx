import { Container,Body } from "./styles";

import { FiPlus, FiMinus, FiChevronLeft } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

export function PlateDetails(){
    const { user, updateProfile } = useAuth()
    
    const [isAdmin, setIsAdmin] = useState(user.isAdmin)
    const [data, setData] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    function handleEdit(){
        navigate(`/edit/${params.id}`)
    }

    useEffect(() => {
        async function fetchPlate(){
          const response = await api.get(`/plates/${params.id}`)
          setData(response.data)
        }
    
        fetchPlate()
    })

    return(
        <Container>
            <Header />
            {data &&
            <Body>
                <div onClick={handleBack}>
                    <FiChevronLeft size={32} />
                    <h2>voltar</h2>
                </div>
                <div className="centered">
                    <img src={`${api.defaults.baseURL}/files/${data.avatar}`} alt="" />
                    <div>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        {data.ingredients &&
                        <ul>
                            {
                                data.ingredients.map(ingredient => (
                                    <li key={ingredient.id}>{ingredient.name}</li>
                                ))
                            }                           
                        </ul>
                        }

                        {isAdmin ? 
                        <div><Button title="Editar prato" onClick={() => handleEdit()}/></div> :
                        <div>
                            <FiMinus size={24}/>
                            <p>01</p>
                            <FiPlus size={24}/>
                            <Button icon={PiReceipt} title={`pedir - R$ ${data.price}`} />
                        </div>
                        }
                    </div>
                </div>
            </Body>
            }
            <Footer />
        </Container>
    )
}