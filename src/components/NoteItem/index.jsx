import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
    function handleKeyDown(event) {
        if (event.key === 'Enter' && isNew && value) {
            event.preventDefault();
            onClick(value);
        }
    }
    return (
        <Container isNew={isNew}>
            {isNew ? (
                <input
                    type="text"
                    value={value}
                    readOnly={!isNew}
                    onKeyDown={handleKeyDown}
                    {...rest}
                />
            ) : (
                <span>{value}</span>
            )}

            <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}