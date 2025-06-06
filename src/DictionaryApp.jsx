import { useState } from "react"
import sampleData from "./SampleData.json"

export const DictionaryApp=()=>{
    const [word, setWord] = useState("");
    const [defintion,setDefintion]=useState("");
    const [notFound,setNotFound]=useState(false);

    const handleChange=(e)=>{
        setWord(e.target.value)
    }

    const handleButton=()=>{
        if(!word){
            return
        }
        const wordFound=sampleData.find((data)=>{
            return data.word.toLowerCase()==word.trim().toLowerCase()
           
        })
        if(wordFound){
            setDefintion(wordFound.meaning)
            setNotFound(false);
            
        }
        else{
            setNotFound(true)
                 
        }
        
        
    }


    return(
        <>
            <h1>Dictionary App</h1>
            <input type="text" placeholder="Search for a word..." value={word} required onChange={handleChange}/>
            <button type="button" onClick={handleButton}>Search</button><br/>
            <h3>Definition:</h3>
            <p>{defintion}</p>
            {
                notFound && <p>Word not found in the dictionary.</p>
            }
            
        </>
    )
}