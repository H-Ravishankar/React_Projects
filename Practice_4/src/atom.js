import axios from "axios"
import {atom, selector} from "recoil"
export const notifications = atom({
   key: "netwrorkAtom",
   default: selector({
    key: "networkAtomSelector",
    get:  fetch("https://sum-server.100xdevs.com/notifications").then((res)=>{return res.json()}).then((data)=>data)
   })
//   

// async ()=>{
//     const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//     return res.data
// }
})