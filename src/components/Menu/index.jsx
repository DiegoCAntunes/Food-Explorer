import { FiX, FiSearch } from "react-icons/fi"
import { useState } from "react"

import { Header, Container, Body } from "./styles"
import { Footer } from "../Footer"
import { Input } from "../Input"

export function Menu({ isOpen, onClose }) {
    const [isAdmin, setIsAdmin] = useState(true);
  
    return (
      <Container className={`menu ${isOpen ? 'open' : ''}`}>
        <Header>
            <FiX size={36} onClick={onClose}/>
          <h1>Menu</h1>
        </Header>
        <Body>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
          />
          <ul>
            {isAdmin && <li>Novo prato</li>}
            <li>Sair</li>
          </ul>
        </Body>
        <Footer />
      </Container>
    );
}