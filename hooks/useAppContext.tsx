import { useContext } from 'react'
import GlobalContext from '../context/global-context'

const useAppContext = () => useContext(GlobalContext)

export default useAppContext
