import { Container, Form } from "./styles";

export function Input({labelName,icon: Icon, minLength, ...rest}){
    return(
        <Container className="input">
            <p>{labelName}</p>
            <Form classname="inputfield">
                {Icon && <Icon size={20}/>}
                <input minLength={minLength} {...rest} />
            </Form>
        </Container>
    )
}