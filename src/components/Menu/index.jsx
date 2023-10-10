import { FiX, FiSearch } from "react-icons/fi"
import { useState } from "react"

import { Header, Container, Body } from "./styles"
import { Footer } from "../Footer"
import { Input } from "../Input"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function Menu({ isOpen, setSearch, search, onClose }) {
  const { user, updateProfile } = useAuth()

  const navigation = useNavigate()
  const { signOut } = useAuth()

  function handleSearchChange(event) {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  }

  function handleNewPlate(){
    navigation(`/new`)
  }

  function handleFavorites(){
    navigation(`/favorites`)
  }

  function handleSignOut(){
    navigation("/")
    signOut()
}
    
  const [isAdmin, setIsAdmin] = useState(user.isAdmin)
  
  return (
    <Container data-menu-is-open={true} className={`menu ${isOpen ? 'open' : ''}`}>
      <Header>
          <FiX size={36} onClick={onClose}/>
        <h1>Menu</h1>
      </Header>
      <Body>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={handleSearchChange}
          value={search}
        />
        <ul>
          {isAdmin && <li onClick={handleNewPlate}>Novo prato</li>}
          {!isAdmin && <li onClick={handleFavorites}>Meus Favoritos</li>}
          <li onClick={handleSignOut}>Sair</li>
        </ul>
      </Body>
      <Footer />
    </Container>
  );
}