import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = url => {
    const [data , setData] = useState([]);
    const [isPending , setIsPending] = useState(true);

    useEffect(() => {
        (async () => {
            await axios.get(url)
            .then(res => {
                setData(res.data.drinks);
                setIsPending(false);
            })
            .catch(err => {
                setData([]);
                setIsPending(true);
                throw new Error(err);
            })
        } )();
    } , [url])

    return {data , isPending};
}

export default useFetch;