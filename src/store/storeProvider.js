import {createContext, useReducer} from 'react'

function storeProvider({children, state}) {
    const storeContext = createContext(state)
    const store = useReducer(reducer, state)

    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    )
}

export default storeProvider
