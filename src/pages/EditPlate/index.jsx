import { Body, Container, Section } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api'

import { FiUpload, FiChevronLeft } from "react-icons/fi"
import { RiArrowDownSLine } from "react-icons/ri"

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function EditPlate(){
    //Plate data
    const [data, setData] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [category, setCategory] = useState(null)

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState([])

    //avatar
    const [avatarFile, setAvatarFile] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    // Function to add a new ingredient
    function handleAddIngredient() {  
        const newIngredient = {
            id: null,
            name: newIngredients[0]?.name || '',
            plate_id: params.id // Add the plate_id
        };

        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredients([]);
    }

    // Function to remove an ingredient
    function handleRemoveIngredients(deleted) {  
        setIngredients(prevState => prevState.filter(Ingredient => Ingredient !== deleted))
    }

    // Function to navigate back
    function handleBack() {  
        navigate(-1)
    }

    // Function to handle plate removal
    async function handleRemove() {  
        const confirm = window.confirm("Deseja realmente remover o prato?")

        if (confirm) {
            await api.delete(`/plates/${params.id}`)
            handleBack()
        }
    }

    // Function to update plate details
    async function updatePlate({ plate, avatarFile }) {  
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch(`/plates/${params.id}`, fileUploadForm)
                plate.avatar = response.data.avatar
            }

            await api.put(`/plates/${params.id}`, plate)

            setData({ plate, token: data.token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Error")
            }
        }
    }

    // Function to handle plate modification
    async function handleModifyPlate() {  
        const ingredientNames = ingredients.map(ingredient => ingredient.name);
        const updated = {
            name,
            description,
            category,
            price,
            ingredients: ingredientNames
        }

        await updatePlate({ plate: updated, avatarFile })

        alert("Prato modificado!")
        navigate(-1)
    }

    // Function to handle avatar change
    function handleChangeAvatar(event) {  
        const file = event.target.files[0];
        if (file) {
            setAvatarFile(file);
        }
    }

    useEffect(() => {
        async function fetchPlate(){
            const response = await api.get(`/plates/${params.id}`);
            const data = response.data;
    
            setData(data);
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);
            setCategory(data.category);
            setIngredients(data.ingredients);
        }
    
        fetchPlate();
    }, []); 

    return(
        <Container>
            <Header />
            {data &&
            <Body>
                <div onClick={handleBack}>
                    <FiChevronLeft size={32} />
                    <h2>voltar</h2>
                </div>
                <h1>Editar prato</h1>
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
                                value={name}
                                onChange={e => setName(e.target.value)} 
                            />
                        </Section>
                        <Section className="category">
                            <label htmlFor="categories">Categoria</label>
                            <div>
                                <select id="categories" 
                                value={category} 
                                onChange={e => setCategory(e.target.value)}>
                                    <option value="Refeições">Refeições</option>
                                    <option value="Sobremesas">Sobremesas</option>
                                    <option value="Bebidas">Bebidas</option>
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
                                            value={ingredient.name}
                                            onClick={() => {handleRemoveIngredients(ingredient)}}
                                        />
                                    ))
                                }
                                <NoteItem 
                                    isNew 
                                    placeholder="Adicionar"
                                    onChange={e => setNewIngredients([{ name: e.target.value }])} // Wrap in an array
                                    value={newIngredients[0]?.name || ''} // Access the first element if it exists
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </Section>
                        <Section className="price">
                            <label htmlFor="price">Preço</label>
                            <Input id="price" 
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Section>
                    </div>               
                    <Section className="description">
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" 
                            placeholder={data.description}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Section>
                </div>
                <div>
                    <Button title="Excluir prato" onClick={handleRemove}/>
                    <Button title="Salvar alterações" onClick={handleModifyPlate}/>
                </div>
            </Body>
            }
            <Footer />
        </Container>
    )
}