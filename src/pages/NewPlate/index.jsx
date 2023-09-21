import { Body, Container, Section } from "./styles";
import { FiUpload, FiChevronLeft } from "react-icons/fi"
import { RiArrowDownSLine } from "react-icons/ri"

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import CaretLeft from "../../assets/CaretLeft.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function NewPlate(){

    const [name, setName] = useState('')
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [category, setCategory] = useState("Refeições")
    const [avatarFile, setAvatarFile] = useState(null)

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const navigate = useNavigate()

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        if (file) {
            setAvatarFile(file);
        }
        console.log(avatarFile)
    }

    async function handleNewPlate(){
        if(!name){
            return alert("Enter a name")
        }

        if(!description){
            return alert("Enter a description")
        }

        if(isNaN(price)){
            return alert("Price must be a number")
        }

        if(newIngredient){
            return alert("You left a Ingredient in the add field but did not press the + button")
        }

        const response = await api.post("/plates", {
            name,
            description,
            price,
            category,
            ingredients
        })

        const createdPlateId = response.data.id

        if(avatarFile){
            const fileUploadForm = new FormData()
            fileUploadForm.append("avatar", avatarFile)

            await api.patch(`/plates/${createdPlateId}`, fileUploadForm)
        }

        alert("Plate was sucessfully created!")
        navigate(-1)
    }

    function handleBack(){
        navigate(-1)
    }
    return(
        <Container>
            <Header />
            <Body>
                <div onClick={handleBack}>
                    <FiChevronLeft size={32} />
                    <h2>voltar</h2>
                </div>
                <h1>Novo prato</h1>
                <div className="sectionContainer">  
                    <div className="firstRow">   
                        <Section className="img">
                            <label htmlFor="plateImg">Imagem do prato</label>
                            <Button
                                id="plateImg" 
                                icon={FiUpload}
                                title="Selecione a imagem"
                                type="file"
                                onChange={handleChangeAvatar}
                            />
                        </Section>
                        <Section className="name">
                            <label htmlFor="name">Nome</label>
                            <Input id="name"
                                placeholder="Ex: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
                            />
                        </Section>
                        <Section className="category">
                            <label htmlFor="categories">Categoria</label>
                            <div>
                                <select id="categories"
                                onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="fruit">Fruit</option>
                                    <option value="veg">Veg</option>
                                    <option value="meat">Meat</option>
                                </select>
                                <RiArrowDownSLine size={24} />
                            </div>
                        </Section>
                    </div> 
                    <div className="secondRow">                    
                        <Section className="ingredients">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className="dark">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => {handleRemoveIngredient(ingredient)}}
                                        />
                                    ))
                                }
                                <NoteItem 
                                    isNew 
                                    placeholder="Novo marcador"
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </Section>
                        <Section className="price">
                            <label htmlFor="price">Preço</label>
                            <Input id="price" 
                                placeholder="R$ 00,00"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Section>
                    </div>               
                    <Section className="description">
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Section>
                </div>
                <Button title="Salvar alterações" onClick={handleNewPlate}/>
            </Body>
            <Footer />
        </Container>
    )
}