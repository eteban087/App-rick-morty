import axios from "axios"

export const useGetData = async (url) => {
    const {data} = await axios.get(url)
   
    return{

        data
    }



}


   

