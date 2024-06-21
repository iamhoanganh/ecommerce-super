"use client"
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    sessionToken: "",
    setSessiontoken: (token: string) => {}
})
export const useAppContext = () => {
    const context = useContext(AppContext)
    return context
}
export default function AppProvider({children, initialSessionToken = ""}: {children: React.ReactNode, initialSessionToken?: string}) {
  const [sessionToken, setSessiontoken] = useState<string>(initialSessionToken)

  return (
    <AppContext.Provider value={{ sessionToken, setSessiontoken}}>
        {children}
    </AppContext.Provider>
  )
}
