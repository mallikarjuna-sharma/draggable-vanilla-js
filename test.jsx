import react, { useState } from 'react';

const App = () => {
    const [userName,setUsername] = useState("mallik");
    const [password,setPassword] = useState("HellO@123");

    return(
        <div>
            <div>
            <label>UserName</label>
            <input onChange={e => {setUsername(e.target.value)}} value={userName} />
            </div>
        <div>
            <label>Passwrod</label>
            <input onChange={e => {setPassword(e.target.value)}} value={password}/>
        </div>
        </div>
    )
}

const palindrome = "malayalam";

const checkLength = palindrome?.length;

for(let i = 0 ; i < palindrome.length;++i){

    if(palindrome[i] ===  palindrome[checkLength-i]){

    }

}

let a = "listen";
let b = "silent";

if(a?.length === b?.length && checkAnagram(a,b)){
    return true
}

const checkAnagram = (a,b) => {
let i =0;
let check = true;
    for(i = 0 ; i <  a?.length ; i++ ){
        if( b.indexOf(a[i])  > -1   ){

        }
        else{
            check=false;
            break;
        }
    }
    return check;
}



