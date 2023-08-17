import { useState } from "react";
export async function useFetch(url) {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        if (response.ok) {
          setState((state) => ({
            ...state,
            data: responseData,
            isLoading: false,
          }));
        } else {
          setState((state) => ({ ...state, isLoading: false }));
        }
      } catch (error) {
        setState((state) => ({ ...state, isLoading: false }));
      }
    })();
  }, [state.isLoading]);
  return [state.data, state.isLoading];
}
