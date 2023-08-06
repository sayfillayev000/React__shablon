import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const useEffectData = (url) => {
  const [data, setData] = useState({
    isfetched: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    axios
      .get(url, {
        params: {
          api_key: "3e2c3530b8028036730a5496738ed0f4",
        },
      })
      .then((res) => {
        setData({
          isfetched: true,
          data: res,
          error: false,
        });
      })
      .catch((err) => {
        setData({
          isfetched: true,
          data: [],
          error: err.message,
        });
      });
  }, [url]);
  return data;
};

export default useEffectData;
