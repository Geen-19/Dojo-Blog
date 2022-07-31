import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData]  = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    
    // custom hooks in react start with use
    useEffect(() => {
        fetch(url)
            .then(Res => {
                console.log(Res);
                if(!Res.ok){
                    throw Error('could not fetch data for that resource')
                }
                return Res.json();
            })
            .then(data => {
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, []);

    return { data, isPending, error }
}
export default useFetch;