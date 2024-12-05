import { useEffect } from 'react';

type UseKeyProps = {
  key: string;
  action: () => void;
}


const useKey = ({key, action}: UseKeyProps) => {
  useEffect(() => {

    const callback = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === key.toLowerCase()){
        action();
      }
    }

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  },[key,action]); 
}

export default useKey;
