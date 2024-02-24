import { RecoilRoot,useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { countAtom } from './Store/atoms/count';

function App() {
  
  return (
    <>
     <RecoilRoot>
     <Count/>
     </RecoilRoot>
     
     
    </>
  )
}

function Count(){
  return <div>
    <CountRenderer/>
    <Button></Button>
  </div>
}

function  CountRenderer(){
  const count = useRecoilValue(countAtom);
 return <div>
  <b>
    {count }
  </b>
 </div>
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
    setCount(count+1)
  }}>Increase</button>
    
  <button onClick={()=>{
    setCount(count-1)
  }}>Decrease</button>
  </div>
  
}

export default App


