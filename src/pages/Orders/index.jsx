import { Container, Body } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { BoxTab } from "../../components/BoxTab"

import { api } from '../../services/api'
import { useState } from "react"

export function Orders(){
    const mediaQuery = window.matchMedia('(min-width:768px')
    const isAbove768px = mediaQuery.matches
    const plateData = JSON.parse(localStorage.getItem('plateData')) || [];
    const [totalPlates, setTotalPlates] = useState(0);
    const [showBoxTab, setShowBoxTab] = useState(false);
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

    async function handleOrderClick(){
        const descriptions = plateData.map(item => `${item.quantity}x ${item.name}`).join(', ');

        // Assuming your API endpoint for this is "/orders"
        await api.post('/orders', { descriptions });

        // Clear local storage after successful submission
        localStorage.removeItem('plateData');
        updateTotalPlates([]);
    }

    return(
        <Container>
            <Header totalPlates={totalPlates} updateTotalPlates={updateTotalPlates}/>
            {plateData &&
            <Body>
                <div>
                    <h1>Meu pedido</h1>
                    {!showBoxTab &&(
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
                    </ul>)}
                    <p>Total: R$ {totalPrice.toFixed(2)}</p>
                </div>
                {!isAbove768px && !showBoxTab && (
                    <Button title="Avançar" onClick={() => setShowBoxTab(true)}/>
                )}
                {(isAbove768px || showBoxTab) && (
                    <BoxTab onClick={handleOrderClick}/>
                )}
            </Body>}
            <Footer />
        </Container>
    )
}
