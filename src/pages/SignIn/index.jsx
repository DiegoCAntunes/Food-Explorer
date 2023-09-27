import { useState } from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function SignIn(){
    const mediaQuery = window.matchMedia('(min-width:768px')
    const isAbove768px = mediaQuery.matches

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({ email, password })
    }

    function handleEnterKeyPress(event) {
        if (event.key === 'Enter') {
            handleSignIn();
        }
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
                        <p>Faça login</p>
                    )}
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
                        onKeyPress={handleEnterKeyPress}
                    />

                    <Button title="Entrar" onClick={handleSignIn}/>

                    <Link to="/register">Criar uma conta</Link>
                </div>
            </Form>

        </Container>
    )
}