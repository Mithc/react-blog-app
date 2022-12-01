import { useEffect, useState } from "react";

const useFetch = <T>(url: string): { data: T | null, isPending: boolean, error: string | null } => {
    const abortController = new AbortController();

    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Data couldn\'t be fetched');
                }
                res.json().then(data => {
                    setData(data as T)
                    setIsPending(false)
                    setError(null)
                })
            })
            .catch(e => {
                if (e.name === 'AbortError') {
                    setIsPending(false)
                }
                setError(e)
            });
    }, [url])

    return { data, isPending, error }
}

export default useFetch;