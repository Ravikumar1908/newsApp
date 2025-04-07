import Swal from 'sweetalert2'
import './newsCard.jsx'
import { useState } from 'react'
import './newsCard.css'

export default function NewsCard({articles,category})
{
    const newsList = articles.map((article)=>{
        return(
            <div className="card">

                <h3>{article.title} </h3>
                <hr />
                <div className="photoDiv">
                <img className='photo' src={article.urlToImage} alt="" />
                </div>
                <p >{article.content}</p>
                <p className='colorText'>{article.source.name}</p>
                <div className="newsDetails colorText">
                <p>{article.publishedAt}</p>
                <a className='colorText' href={article.url}>Read More</a>
                </div>

            </div>

        )
    })    

    const[count,setCount]=useState(0)
    const increase =()=>{
        setCount(count=>count+=1)
    }

    const[name,setName] = useState("user");
    const [tasks,setTasks] = useState([]);


    return(
        <>
        <div className="cardDiv">
        <div className="categoryHeading">
        <h1 className='colorText '>{category} News.</h1>
        </div>
        <ul>
            {newsList}
        </ul>

        </div>
        
        </>
    )
}