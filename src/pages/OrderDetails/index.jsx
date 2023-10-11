import { Container, Body } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { api } from '../../services/api'
import { useEffect, useState } from "react"

export function OrderDetails(){
    const mediaQuery = window.matchMedia('(min-width:768px')
    const isAbove768px = mediaQuery.matches
    const [orders, setOrders] = useState(null)

    function formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
    
        return `${day}/${month} às ${hours}h${minutes}`;
    }

    const getStatusCircleColor = (status) => {
        switch (status) {
            case 'Pendente':
            return 'red';
            case 'Preparando':
            return 'yellow';
            case 'Entregue':
            return 'green';
            default:
            return 'black'; // Default color if status is unknown
        }
    };

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
                <h1>{isAbove768px ? 'Meus pedidos' : 'Pedidos'}</h1>
                {isAbove768px ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Codigo</th>
                                <th>Detalhamento</th>
                                <th>Data e hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="status">
                                        <span
                                            className="status-circle"
                                            style={{
                                            backgroundColor: getStatusCircleColor(order.status),
                                            }}
                                        ></span>
                                        <span className="status-text">{order.status}</span>
                                    </td>
                                    <td>{order.id.toString().padStart(6,'0')}</td>
                                    <td>{order.details}</td>
                                    <td>{formatDateTime(order.created_at)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <ul>
                        {orders.map(order =>(
                            <li key={order.id}>
                                <div>
                                    <div>
                                        <p>{order.id.toString().padStart(6,'0')}</p>
                                        <p className="status-text">
                                            <span
                                                className="status-circle"
                                                style={{
                                                backgroundColor: getStatusCircleColor(order.status),
                                                }}
                                            ></span>
                                            {order.status}
                                        </p>
                                        <p>{formatDateTime(order.created_at)}</p>
                                    </div>
                                    <p>{order.details}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </Body>}
            <Footer />
        </Container>
    )
}