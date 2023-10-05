import { useEffect } from "react";
import { Container, Card} from "./styles";
import { Button } from "../Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import { api } from '../../services/api'
import { useState } from "react";

export function SideScroller({category, isAdmin, isAbove, platesByCategory, userFavorites, updateUserFavorites, ...rest}){
  //Horizontal scroller - 
  const leftArrowContainerRef = useRef(null)
  const rightArrowContainerRef = useRef(null)
  const cardListRef = useRef(null)
  const [plateQuantities, setPlateQuantities] = useState(platesByCategory.map(() => "1"));

  async function handleHeart(index, id, name, avatar) {
    const isFavorite = userFavorites.some(favorite => favorite.plateId === id);
  
    if (isFavorite) {
      const favoriteData = userFavorites.find(favorite => favorite.plateId === id);
      // Remove the plate from favorites
      await api.delete(`/favorites/${favoriteData.favoriteId}`);
    } else {
      // Add the plate to favorites
      await api.post("/favorites", {
        id,
        name,
        avatar
      });
    }
    updateUserFavorites(); // Call the function to update userFavorites
  }

  function setPlateQuantity(index, quantity) {
      setPlateQuantities(prevQuantities => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = quantity;
        return newQuantities;
      });
  }

  const navigate = useNavigate()

  function handleLeftArrowClick(){
      cardListRef.current.scrollLeft -= 200;
  }

  function handleRightArrowClick(){
      cardListRef.current.scrollLeft += 200;
  }

  function handleDetails(id){
      navigate(`/preview/${id}`)
  }

  function handleEdit(id){
      navigate(`/edit/${id}`)
  }

  function manageIcons() {
      if (leftArrowContainerRef.current) {
        if (cardListRef.current.scrollLeft >= 20) {
          leftArrowContainerRef.current.classList.add("active");
        } else {
          leftArrowContainerRef.current.classList.remove("active");
        }
      }
    
      if (rightArrowContainerRef.current) {
        const hasOverflow =
          cardListRef.current.scrollWidth > cardListRef.current.clientWidth;
    
        if (hasOverflow) {
          let maxScrollValue =
            cardListRef.current.scrollWidth - cardListRef.current.clientWidth - 20;
    
          if (cardListRef.current.scrollLeft >= maxScrollValue) {
            rightArrowContainerRef.current.classList.remove("active");
          } else {
            rightArrowContainerRef.current.classList.add("active");
          }
        } else {
          // Hide the right arrow container if there is no overflow
          rightArrowContainerRef.current.classList.remove("active");
        }
      }
  }

  useEffect(() => {
      function handleScroll() {
          manageIcons();
      }
      window.addEventListener('resize', handleScroll)

        // Manually call manageIcons after a slight delay
      setTimeout(() => {
          manageIcons();
      }, 100);

      // Attach the scroll event listener to the cardListRef if it exists
      const cardListElement = cardListRef.current;
      if (cardListElement) {
        cardListElement.addEventListener('scroll', handleScroll);
      }
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleScroll)
        if (cardListElement) {
          cardListElement.removeEventListener('scroll', handleScroll);
        }
      };
  }, [])

  return(
    <Container>
            <p>{category}</p>
            <div className="sideScrollContainer">
                    {isAbove &&
                        <div className="svg" ref={leftArrowContainerRef}>
                            <FiChevronLeft size={40}
                            onClick={handleLeftArrowClick}/>
                        </div>
                    }
                <div className="sideScroll" ref={cardListRef}>
                    {
                      platesByCategory.map((plate, index) => {
                        const isFavorite = userFavorites.some(favorite => favorite.plateId === plate.id);
                        console.log(userFavorites)
                        debugger
                      return(
                      <Card key={String(plate.id)}>
                      <img src={`${api.defaults.baseURL}/files/${plate.avatar}`} alt="" onClick={() => handleDetails(plate.id)}/>
                      {isAdmin ? 
                          <PiPencilSimple size={26} onClick={() => handleEdit(plate.id)}/> :
                          <FiHeart
                            size={26}
                            onClick={() => handleHeart(index, plate.id, plate.name, plate.avatar)}
                            style={{
                              fill: isFavorite ? 'red' : 'none',
                              color: isFavorite ? 'red' : 'white',
                            }}
                          />
                      }
                      <dt>{plate.name}</dt>
                      {isAbove && 
                          <dd>{plate.description}</dd>
                      }
                      <h2>R$ {plate.price}</h2>
                      <div>
                        {!isAdmin && 
                          <div>
                          <FiMinus
                          size={24}
                          onClick={() => {
                              const newQuantity = parseInt(plateQuantities[index]) - 1;
                              if (newQuantity >= 0) {
                                setPlateQuantity(index, newQuantity); // Set quantity for specific plate
                              }
                          }}
                          />
                              <p>{plateQuantities[index].toString().padStart(2, '0')}</p>
                              <FiPlus size={24} onClick={() => setPlateQuantity(index, parseInt(plateQuantities[index]) + 1)} />
                          </div>
                          }
                          {!isAdmin && 
                          <Button title="incluir"/>
                          }
                      </div>
                  </Card>
                      )})
                  }
              </div>
                  {isAbove && 
                      <div className="svg" ref={rightArrowContainerRef}>
                          <FiChevronRight size={40}
                          onClick={handleRightArrowClick}/>
                      </div>
                  }
            </div>
        </Container>
  )
}