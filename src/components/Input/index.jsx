import { Container, Form } from "./styles";

export function Input({labelName,icon: Icon, ...rest}){
    return(
        <Container className="input">
            <p>{labelName}</p>
            <Form>
                {Icon && <Icon size={20}/>}
                <input {...rest} />
            </Form>
        </Container>
    )
}