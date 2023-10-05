import { Container, Body } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { api } from '../../services/api'
import { useState } from "react"
import { BoxTab } from "../../components/BoxTab"

export function Orders(){
    const mediaQuery = window.matchMedia('(min-width:768px')
    const isAbove768px = mediaQuery.matches
    const plateData = JSON.parse(localStorage.getItem('plateData')) || [];
    const [totalPlates, setTotalPlates] = useState(0);
    const totalPrice = plateData.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price) * parseInt(item.quantity);
        return acc + itemPrice;
    }, 0);

    const updateTotalPlates = (plateData) => {
      const total = plateData ? plateData.length : 0;
      setTotalPlates(total);
    };

    const handleRemovePlate = (index) => {
        // Create a copy of the plateData array
        const updatedPlateData = [...plateData];
      
        // Remove the plate at the specified index
        updatedPlateData.splice(index, 1);
      
        // Update the component state and local storage
        localStorage.setItem('plateData', JSON.stringify(updatedPlateData));

        // Update the total plates count
        updateTotalPlates(updatedPlateData);
    };


    return(
        <Container>
            <Header totalPlates={totalPlates} updateTotalPlates={updateTotalPlates}/>
            {plateData &&
            <Body>
                <h1>Meu pedido</h1>
                <ul>
                    {
                    plateData.map((item, index) =>(
                        <li key={index}>
                            <img src={`${api.defaults.baseURL}/files/${item.avatar}`} alt=""/>
                            <div>
                                <p>{item.quantity} x {item.name}</p>
                                <a href="#" onClick={() => handleRemovePlate(index)}>Remover dos pedidos</a>
                            </div>
                        </li>
                    ))
                    }  
                </ul>
                <p>Total: R$ {totalPrice.toFixed(2)}</p>
                {!isAbove768px && (
                    <Button title="Avançar"/>
                )}
                {isAbove768px && (
                    <BoxTab />
                )}
            </Body>}
            <Footer />
        </Container>
    )
}
