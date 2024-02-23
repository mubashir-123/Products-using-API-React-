
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import axios from "axios"

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios('https:fakestoreapi.com/products')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Navbar />
      <h2 className=" text-center mt-7 font-medium text-3xl">My products</h2>
      <div className="flex flex-wrap justify-center mt-5 gap-5">
        {data !== null && data.length > 0 ? data.map((item) => {
          return <Card key={item.id} title={item.title} desc={item.description} src={item.image} />
        }) : <h1>Loading ... </h1>
        }
      </div>
    </>
  )
}

export default App
