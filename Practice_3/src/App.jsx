import './App.css'
import{useRecoilValue, useRecoilState} from 'recoil'
import{RecoilRoot} from 'recoil'
import { jobsAtom, messagingAtom, netwodkAtom, notificationAtom } from './atom'

function App() {
 return <RecoilRoot>
    <MainApp/>
 </RecoilRoot>
}

function MainApp(){
  const networknotification = useRecoilValue(netwodkAtom)
  const jobnotification = useRecoilValue(jobsAtom)
  const [messagingnotification ,setmessagingnotification] = useRecoilState(messagingAtom)
  const notificationsnotification = useRecoilValue(notificationAtom)
  return (
      <>
      <button>Home</button>
      <button>My Network({networknotification >= 100 ? "99+": networknotification})</button>
      <button>Jobs ({jobnotification})</button>
      <button>Messaging ({messagingnotification})</button>
      <button>Notifications ({notificationsnotification})</button>
      <button onClick={()=>{
        setmessagingnotification(c=>c+1)
      }}>Me</button>
    </>
  )
}

export default App
