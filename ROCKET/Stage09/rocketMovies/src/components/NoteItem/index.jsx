
import { Container } from "./style"
import { FiPlus, FiX } from "react-icons/fi"

export function NoteItem({onClick, value, isNew , ...rest}){
    return(
        <Container $isnew={isNew.toString()}>
            <input type="text" value={value} readOnly={!isNew} {...rest}/>
            <button type="button" onClick={onClick} className= {isNew ? 'button-add' : 'button-delete'}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}