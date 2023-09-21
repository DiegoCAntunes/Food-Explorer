import { Container, Logo, Section, Card, Body } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import Macaron from "../../assets/macarons.svg"
import { PiPencilSimple } from "react-icons/pi"
import { FiMinus, FiPlus, FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi"

import { useEffect, useRef, useState } from "react";
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Home(){
    const mediaQuery = window.matchMedia('(min-width:768px')
    const isAbove768px = mediaQuery.matches
    const navigate = useNavigate()
    const { user, updateProfile } = useAuth()
    
    const [isAdmin, setIsAdmin] = useState(user.isAdmin)
    const [plates, setPlates] = useState([])
    const [search, setSearch] = useState("")
    const [ingredientsSelected, setIngredientsSelected] = useState([])
    const [plateQuantity, setPlateQuantity] = useState("1")
    const [isFavorite, setIsFavorite] = useState(false)
    const [isFilled, setIsFilled] = useState(false);

    //Horizontal scroller - 
    const leftArrowContainerRef = useRef(null)
    const rightArrowContainerRef = useRef(null)
    const cardListRef = useRef(null)

    useEffect(() => {
        function handleScroll() {
          manageIcons();
        }

        async function fetchPlates(){
            const response = await api.get(`/plates?name=${search}&ingredients=${ingredientsSelected}`)
            setPlates(response.data)
        }

        fetchPlates()
      
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
          if (cardListElement) {
            cardListElement.removeEventListener('scroll', handleScroll);
          }
        };
      }, [search]);
    
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

    function handleLeftArrowClick(){
        cardListRef.current.scrollLeft -= 200;
    }

    function handleRightArrowClick(){
        cardListRef.current.scrollLeft += 200;
    }

    function handleHeart() {
        setIsFilled(!isFilled);
    };

    function handleDetails(id){
        navigate(`/preview/${id}`)
    }

    function handleEdit(id){
        navigate(`/edit/${id}`)
    }

  return(
      <Container>
          <Header onChange={e => setSearch(e.target.value)}/>
          <Body>

            <Logo>
                <img src={Macaron} alt="macaron image"/>
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>    
                </div>
            </Logo>

            <Section>
                <p>Refeições</p>
                <div className="sideScrollContainer">
                        {isAbove768px &&
                            <div className="svg" ref={leftArrowContainerRef}>
                                <FiChevronLeft size={40}
                                onClick={handleLeftArrowClick}/>
                            </div>
                        }
                    <div className="sideScroll" ref={cardListRef}>
                        {
                            plates.map(plate => (
                            <Card key={String(plate.id)}>
                            <img src={`${api.defaults.baseURL}/files/${plate.avatar}`} alt="" onClick={() => handleDetails(plate.id)}/>
                            {isAdmin ? 
                                <PiPencilSimple size={26} onClick={() => handleEdit(plate.id)}/> :
                                <FiHeart
                                size={26}
                                onClick={handleHeart}
                                style={{
                                  fill: isFilled ? 'red' : 'none',
                                  color: isFilled ? 'red' : 'white',
                                }}
                              />
                            }
                            <dt>{plate.name}</dt>
                            {isAbove768px && 
                                <dd>{plate.description}</dd>
                            }
                            <h2>R$ {plate.price}</h2>
                            <div>
                              {!isAdmin && 
                                <div>
                                <FiMinus
                                size={24}
                                onClick={() => {
                                    const newQuantity = parseInt(plateQuantity) - 1;
                                    // Ensure the new quantity is not less than 0
                                    if (newQuantity >= 0) {
                                    setPlateQuantity(newQuantity);
                                    }
                                }}
                                />
                                    <p>{plateQuantity.toString().padStart(2, '0')}</p>
                                    <FiPlus size={24} onClick={() => setPlateQuantity(parseInt(plateQuantity) + 1)} />
                                </div>
                                }
                                {!isAdmin && 
                                <Button title="incluir"/>
                                }
                            </div>
                        </Card>
                            ))
                        }
                    </div>
                        {isAbove768px && 
                            <div className="svg" ref={rightArrowContainerRef}>
                                <FiChevronRight size={40}
                                onClick={handleRightArrowClick}/>
                            </div>
                        }
                </div>
            </Section>
          </Body>
          <Footer />
      </Container>
  )
}