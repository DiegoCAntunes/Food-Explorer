import { Container, Logo, Body } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideScroller } from "../../components/SideScroller";

import Macaron from "../../assets/macarons.svg"

import { useEffect, useState } from "react";
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

export function Home(){
  const mediaQuery = window.matchMedia('(min-width:768px')
  const isAbove768px = mediaQuery.matches
  const { user, updateProfile } = useAuth()
  
  const [isAdmin, setIsAdmin] = useState(user.isAdmin)
  const [plates, setPlates] = useState([])
  const [search, setSearch] = useState("")
  const categories = [];
  const [userFavorites, setUserFavorites] = useState([])
  const [totalPlates, setTotalPlates] = useState(0);

  const updateTotalPlates = (plateData) => {
    const total = plateData ? plateData.length : 0;
    setTotalPlates(total);
  };
  
  plates.forEach(plate => {
    const categoryExists = categories.some(cat => cat === plate.category);
    if (!categoryExists) {
      categories.push(plate.category);
    }
  });

  const platesByCategory = plates.reduce((acc, plate) => {
    if (!acc[plate.category]) {
      acc[plate.category] = [];
    }
    acc[plate.category].push(plate);
    return acc;
  }, {});
  
  const updateUserFavorites = async () => {
    try {
      const response = await api.get('/favorites');
      const favoriteIds = response.data.map(favorite => {
        const plateData = JSON.parse(favorite.plate);
        return { plateId: plateData.id, favoriteId: favorite.id };
      });
      setUserFavorites(favoriteIds);
      console.log(userFavorites);
    } catch (error) {
      console.error('Error fetching user favorites:', error);
    }
  };

  useEffect(() => {
    async function fetchPlates(){
      const response = await api.get(`/plates?name=${search}&ingredients=${search}`)
      setPlates(response.data)
    }
    async function fetchUserFavorites() {
      try {
        const response = await api.get('/favorites');
        const favoriteIds = response.data.map(favorite => {
          const plateData = JSON.parse(favorite.plate);
          return { plateId: plateData.id, favoriteId: favorite.id };
        });
        setUserFavorites(favoriteIds);
      } catch (error) {
        console.error('Error fetching user favorites:', error);
      }
    }
  
    fetchUserFavorites();
    fetchPlates()
  }, [search]);

return(
    <Container>
        <Header onChange={e => setSearch(e.target.value)} setSearch={setSearch} search={search} totalPlates={totalPlates} updateTotalPlates={updateTotalPlates}/>
        <Body>
          <Logo>
              <img src={Macaron} alt="macaron image"/>
              <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>    
              </div>
          </Logo>

          {Object.entries(platesByCategory).map(([category, platesInCategory]) => (
            <SideScroller
              key={category} // Assign a unique key for each SideScroller component
              category={category}
              isAdmin={isAdmin}
              isAbove={isAbove768px}
              platesByCategory={platesInCategory} // Pass the plates for this category
              userFavorites={userFavorites}
              updateUserFavorites={updateUserFavorites}
              updateTotalPlates={updateTotalPlates}
            />
          ))}
        </Body>
        <Footer />
    </Container>
  )
}