import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<undefined | any>();
  const [error, setError] = useState<undefined | any>();
  function mutation() {
    // fetch("/api/users/enter", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  }
  return [mutation, { loading, data, error }];
}
