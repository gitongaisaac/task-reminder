import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) {
            setData(null);
            throw Error("Could not get the data :)");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setError(false);
          setIsPending(false);
        })
        .catch((err) => {
          if (err === "AbortError") {
            setError(false);
          } else {
            setError(err.message);
            setIsPending(false);
            setData(null);
          }
        });
    }, 1000);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
