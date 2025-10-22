"use client";

import { useState, useEffect } from "react";

const useSession = (key) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const storedValue = sessionStorage.getItem(key);
    console.log("storedValue:", storedValue);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  const setSessionValue = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setSessionValue];
};

export default useSession;
