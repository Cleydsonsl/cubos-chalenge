import { useEffect } from "react"
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { api } from "./services/api"

export function App() {

  // useEffect(() => {
  //   api.get('')
  //     .then((response)=> {console.log(response.data);
  //   })
  //   .catch((err)=> {console.error('deu merda: ' + err)})
  // })

  return (
    <>
      <GlobalStyle/>
      <Dashboard/>
    </>
  )
}