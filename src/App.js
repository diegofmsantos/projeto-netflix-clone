import React, { useEffect, useState } from "react";
import "./App.css"
import Tmdb from "./Tmdb";
import { MovieList } from "./components/MoviesList/MovieList";
import { FeaturedMovie } from "./components/FeaturedMovie/FeaturedMovie";

const App = () => {

  const [moveList, setMoveList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

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

  return (
    <div className="page">

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {moveList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}

export default App;