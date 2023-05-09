import React from 'react'
import { NewItemButton, NewItemFormContainer, NewItemInput } from './styles'
import { useFocus } from './hooks/useFocus'


type NewItemFormProps = {
    onAdd(text: string): void
}

const NewItemForm: React.FC<NewItemFormProps> = ( { onAdd }: NewItemFormProps ) =>{

    const [text, setText] = React.useState<string>('')
    const inputRef = useFocus()

    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === "Enter"){
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={(e)=> setText(e.target.value)} ref={inputRef} onKeyUp={handleAddText}/>
            <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    )
}

export default NewItemForm