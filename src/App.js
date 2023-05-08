import React, { useEffect, useState } from "react";
import "./App.css"
import Tmdb from "./Tmdb";
import { MovieList } from "./components/MoviesList/MovieList";
import { FeaturedMovie } from "./components/FeaturedMovie/FeaturedMovie";
import { Header } from "./components/Header/Header";

const App = () => {

  const [moveList, setMoveList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMoveList(list)

        let originals = list.filter(i=>i.slug === 'originals')
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        let chosen = originals[0].items.results[randomChosen]
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }


    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('sroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {moveList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito durante aula de React pela B7Web <br/>
        Direitos de imagem para Netflix <br/>
        Dados do site Themoviedb.org
      </footer>
      {moveList.length <= 0 &&
      <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"></img>
      </div>}
    </div>
  )
}

export default App;