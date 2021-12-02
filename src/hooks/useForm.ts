import { useState } from 'react';

const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const clear = () => {
    setForm(initialState);
  };

  return [form, onChange, clear];
};

export default useForm;
