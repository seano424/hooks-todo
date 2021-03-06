import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, initialVal, reducer) {
  const [state, dispatch] = useReducer(reducer, initialVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export { useLocalStorageReducer };
