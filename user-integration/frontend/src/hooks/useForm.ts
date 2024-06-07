import { useState } from "react";
import { User } from "../types";

export function useForm<K extends string>(initialValues: User | Record<K, string>) {
  const [state, setState] = useState(initialValues);

  const handleKey = (key: K) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState({ ...state, [key]: e.target.value });
    };
  };

  const setValues = (newValues: User | Record<string, string>) => {
    setState(newValues);
  };

  const setValue = (key: K, value: string) => {
    setState({ ...state, [key]: value });
  };

  return { values: state, handleKey, setValues, setValue };
}

export type Form<K extends string> = ReturnType<typeof useForm<K>>;