import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenressResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenressResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        else {
          setError(err.message);
          console.log(genres);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
