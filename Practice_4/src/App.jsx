import { RecoilRoot, useRecoilState } from 'recoil'
import { notifications } from './atom'
import './App.css'

function App() {
  

  return (
    <RecoilRoot>
     <MainComponent/>
    </RecoilRoot>
  )
}

function MainComponent(){
   const [netwrokCont, setNetworkCount] = useRecoilState(notifications)
    return (
      <>
      <button>Home</button>
      <button>My Network({netwrokCont.networks >= 100 ? "99+" : netwrokCont.networks})</button>
      <button>Jobs({netwrokCont.jobs})</button>
      <button>Messaging({netwrokCont.messaging})</button>
      <button>My Notification({netwrokCont.notifications})</button>
      <button>Me</button>

      </>
    )
}

export default App
