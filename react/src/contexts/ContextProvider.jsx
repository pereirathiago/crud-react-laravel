import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
})

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [notification, _setNotification] = useState(null)
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
  // const [token, _setToken] = useState(123)

  const setNotification = (message) => {
    _setNotification(message)
    setTimeout(() => {
      _setNotification('')
    }, 3000)
  }

  const setToken = (token) => {
    _setToken(token)
    if(token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    } else {
      localStorage.removeItem('ACCESS_TOKEN')
    }
  }

  return (
    <StateContext.Provider value={{ 
      user,
      token,
      notification,
      setToken,
      setUser,
      setNotification,
      
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)