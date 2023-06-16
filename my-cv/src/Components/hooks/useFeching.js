import { useState } from "react"

 const useFeching = (callback) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    const fetching = async (...arg) =>{
        try{
setIsLoading(true);
await callback(...arg)
        } catch (e) {
setError(e.message);
        }finally{
setIsLoading(false)
        }
    }
    return [fetching,isLoading,error]
}

export default useFeching;