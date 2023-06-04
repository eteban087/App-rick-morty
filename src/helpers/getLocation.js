import axios from "axios"
import { getRamdomLocation } from "./getRamdomLocation"
export const getLocation = async ()=>{
    const URl = `https://rickandmortyapi.com/api/location/${getRamdomLocation()}`
    const {data} = await axios.get(URl)
    
    
    return data

}