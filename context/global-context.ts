import { createContext } from 'react'
import { InitialDataQuery } from '../generated'

interface IGlobalContext {
  initialData: InitialDataQuery
}

const GlobalContext = createContext<Partial<IGlobalContext>>({})

export default GlobalContext
