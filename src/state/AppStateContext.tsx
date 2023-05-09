import React, { createContext, useContext } from 'react'
import { AppState, List, Task, appStateReducer } from './appStateReducer'
import { Action } from './actions'
import { useImmerReducer } from 'use-immer'
import { DragItem } from '../DragItem'


const appData: AppState = {
    lists: [],
    draggedItem: null 
}

// AppStateContextProps

type AppStateContextProps = {
    lists: List[]
    draggedItem: DragItem | null
    getTasksByListId(id: string): Task[]
    dispatch: React.Dispatch<Action>
}

// AppStateContext

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

// AppStateProvider

export const AppStateProvider: React.FC<React.PropsWithChildren> = ({ children }) =>{

    const [state, dispatch] = useImmerReducer(appStateReducer, appData)

    const { lists, draggedItem } = state

    const getTasksByListId = (id: string) =>{
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{lists, draggedItem, getTasksByListId, dispatch}}>
            { children }
        </AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext)