import React,{useState,useEffect} from 'react'

const usefetching = (url) => {
  const [dat, setDat] = useState([]);
  let sopno=100
  console.log(dat)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res1) => setDat(res1));
  }, []);
return dat
}



export default usefetching


