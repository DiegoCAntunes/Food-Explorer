import { Container} from "./styles";

export function Button({title, loading, icon: IconComponent, type, onChange, ...rest}){

    return(
        <Container 
            type={type || "button"}
            className="button"
            disabled={loading}
            {...rest}
        >
            {IconComponent && <IconComponent size={24} />}
            {loading ? 'Carregando...' : title}
            {type === "file" && <input type="file" onChange={onChange} />}
        </Container>
    );
}