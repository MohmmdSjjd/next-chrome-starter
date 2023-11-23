import React, { useEffect, useState } from 'react';
import Index from '../components/Index';
import New from '../components/New';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';

export default function Home() {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      console.log("new from first")
      setActivePage("new")
    }
    else {
      console.log("index from first")
      setActivePage("index")
    }
  }, [])


  // const baseURL = "https://api.d.aiengines.ir"

  // const postData = async (url, { arg }) => {
  //   const res = await axios.post(baseURL + url, arg, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //   if (res.status == 200) {
  //     if (res.data?.token) {
  //       localStorage.setItem("token", JSON.stringify(res.data.token))
  //       console.log(res)
  //       navigateToPage("new")
  //       return
  //     }
  //     navigateToPage("index")
  //   }
  //   if (res.status == 422)
  //     console.log("it not proccessable")
  //   return res
  // }

  // const { trigger, isMutating } = useSWRMutation("/twitter_account/users/login", postData);


  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'index' && <Index navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />}
    </>
  );
}
