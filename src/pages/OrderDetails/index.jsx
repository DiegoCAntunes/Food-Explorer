import { Container, Body } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { api } from '../../services/api'
import { useEffect, useState } from "react"

export function OrderDetails(){

    const [orders, setOrders] = useState(null)

    useEffect(() => {
        async function fetchOrders(){
          const response = await api.get(`/orders`)
          setOrders(response.data)
        }
        fetchOrders()
    }, []);

    return(
        <Container>
            <Header />
            {orders &&
            <Body>
                <h1>Histórico de pedidos</h1>
                <ul>
                    {
                    orders.map(order =>(
                        <li key={order.id}>
                            <div>
                                <div>
                                    <p>{order.id}</p>
                                    <p>{order.status}</p>
                                    <p>{order.created_at}</p>
                                </div>
                                <p>{order.details}</p>
                            </div>
                        </li>
                    ))
                    }  
                </ul>
            </Body>}
            <Footer />
        </Container>
    )
}
