
import { Container } from "./style"
import { FiPlus, FiX } from "react-icons/fi"

export function NoteItem({onclick, value, isNew , ...rest}){
    return(
        <Container $isnew={isNew.toString()}>
            <input type="text" value={value} readOnly={!isNew} {...rest}/>
            <button type="button" onclick={onclick} className= {isNew ? 'button-add' : 'button-delete'}>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}