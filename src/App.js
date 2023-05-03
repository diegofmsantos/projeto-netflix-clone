import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import { MovieList } from "./components/MoviesList/MovieList";

const App = () => {

  const [moveList, setMoveList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMoveList(list)
    }

    loadAll()
  }, [])

  return (
    <div>
      <section className="lists">
        {moveList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}

export default App;