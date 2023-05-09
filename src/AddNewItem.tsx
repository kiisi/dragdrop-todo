import React from 'react'
import { AddItemButton } from './styles'
import NewItemForm from './NewItemForm'


type AddItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

const AddNewItem: React.FC<AddItemProps> = ( props: AddItemProps) => {

    const [showForm, setShowForm] = React.useState<boolean>(false)
    const { onAdd, toggleButtonText, dark } = props

    if(showForm){
        return (
            <NewItemForm onAdd={(text)=>{
                onAdd(text)
                setShowForm(false)
            }}/>
        )
    }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
        {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem