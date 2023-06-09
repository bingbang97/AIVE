import { useCallback, useState } from "react";
import axios from "axios";

// 입력값 저장 및 유효성 검사 진행
export const DataInput = (regExp) => {
  const [inputData, setInputData] = useState("");
  const [dataError, setError] = useState(true);

  const handler = useCallback(
    (event) => {
      const data = event.target.value;
      setInputData(data);
      if (data === "") {
        setError(true);
      } else if (!regExp.test(data)) {
        setError(false);
      } else {
        setError(true);
      }
    },
    [regExp]
  );

  return [inputData, handler, dataError];
};

export const CheckPassword = (password) => {
  const [inputData, setInputData] = useState("");
  const [dataError, setError] = useState(true);

  const handler = useCallback(
    (event) => {
      const data = event.target.value;
      setInputData(data);
      if (data === "") {
        setError(true);
      } else if (data !== password) {
        setError(false);
      } else {
        setError(true);
      }
    },
    [password]
  );

  return [inputData, handler, dataError];
};

export const ValidCheck = (value) => {
  const [validError, setError] = useState(true);

  const handler = useCallback(
    (event) => {
      event.preventDefault();
      if (event.target.value !== "") {
        const url =
          "https://j8d102.p.ssafy.io/be/organization/valid/" +
          event.target.value;
        axios
          .get(url)
          .then((response) => {
            if (response.data.data.valid === false) {
              setError(true);
            } else {
              setError(false);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    []
  );
  return [validError, handler];
};
