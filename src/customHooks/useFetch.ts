import { useEffect, useState } from "react";
import { Post } from "../interfaces/post";


const useFetch = (url: string) => {
    const [data, setData] = useState<Post[]>([]);
    const [isPending, setIsPending] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                }
                res.json().then(data => {
                    setData(data as Post[])
                    setIsPending(false)
                    setError(null)
                })
            })
            .catch(e => {
                setError(e)
                setIsPending(false)
            });
    }, [url])

    return { data, isPending, error }
}

export default useFetch;