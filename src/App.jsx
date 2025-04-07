import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './Component/Navbar'
import NewsCard from './Component/newsCard'
import Filter from './Component/filter'

function App() {
  const[category,setCategory]=useState("General")

  const[articles,setArticles] = useState([]);


  useEffect(()=>{
    const url = `https://newsapi.org/v2/everything?q=${category}&from=2025-04-04&sortBy=popularity&apiKey=6da35c262e644c95b773a967a4aab589`;

    const fetchNews = async()=>{
      try{
        const response = await axios.get(url);
        setArticles(response.data.articles);
      }
      catch(error)
      {
        console.log(`error detected${error}`)
      }
    }
    fetchNews();
  },[category]);

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <main>
    {/* <Filter /> */}
    <NewsCard articles={articles} category={category} />
    </main>
    </>
  )
}

export default App
