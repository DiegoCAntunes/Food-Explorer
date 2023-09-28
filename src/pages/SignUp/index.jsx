import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api.js"

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp(){
    const mediaQuery = window.matchMedia('(min-width:768px')
    const isAbove768px = mediaQuery.matches

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }
        if(password.length < 6){
            return alert("A senha deve ter no mínimo 6 caracteres.");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Sign up completo!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Error on sign up")
            }
        })
    }

    return(
        <Container >
            <Form>
                <div>
                    <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
                    </svg>
                    <h1>food explorer</h1>
                </div>
                <div>
                    {isAbove768px && (
                        <p>Crie sua conta</p>
                    )}
                    <Input 
                        labelName='Seu nome' 
                        type="text"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        labelName='Email' 
                        type="email"
                        placeholder="Exemplo: exemplo@email.com.br"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        labelName='Senha' 
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                        minLength={6}
                    />

                    <Button title="Criar conta" onClick={handleSignUp}/>

                    <Link to="/">Já tenho uma conta</Link>
                </div>
            </Form>

        </Container>
    )
}