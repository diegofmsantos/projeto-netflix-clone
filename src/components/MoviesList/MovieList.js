import { React } from "react"
import "./MovieList.css"

export const MovieList = ({ title, items }) => {

    return (
        <div className="movieList">
            <h2>{title}</h2>
            <div className="movie-listarea">
                <div className="movie-list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movie-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}