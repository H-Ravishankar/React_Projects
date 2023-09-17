// let number = true
// let character = true
// let length = 12
// let pass = ''

// const passwordGenetator = ()=>{
//     pass = ''
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

//     if(number) str += '0123456789'
//     if(character) str += '!@#%^&*()[]{}'

//     for(let i = 1; i < length; i++){
//         let char =  Math.floor(Math.random()*str.length)
//         pass += str.charAt(char)
//         console.log(pass);
//     }
// }
// passwordGenetator()

let number = true
let character = true
let length = 8

const passwordGenetator = ()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*(){}[]"

    for(let i = 1; i <= length; i++){
       let char =  Math.floor(Math.random() * str.length)
       
       console.log("char",char)
       
       pass += str.charAt(char)

       //console.log(pass)
    }
}

passwordGenetator()