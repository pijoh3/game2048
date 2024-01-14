const { useState, useEffect } = require("react");

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
      setValue(Number(valueStr));
    }
  }, [key]);

  useEffect(() => {
    const prev = window.localStorage.getItem(key);
    const next = String(value);
    if (prev !== next && next !== "0") {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
