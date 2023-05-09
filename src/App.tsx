import React from 'react'
import './App.css'
import Column from './Column'
import { AppContainer } from './styles'
import AddNewItem from './AddNewItem'
import { useAppState } from './state/AppStateContext'
import { addList } from './state/actions'
import { CustomDragLayer } from './CustomDragLayer'

const App: React.FC = () =>{

  const { lists, dispatch } = useAppState()
  console.log(lists)

  return (
    <AppContainer>
      <CustomDragLayer/>
      {
        lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id}/>
        ))
      }
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))}/>
        
    </AppContainer>
  )
}

export default App
