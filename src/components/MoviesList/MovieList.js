import { React, useState } from "react"
import "./MovieList.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MovieList = ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-401)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if( x > 0) {
            x = 35
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 110
        }
        setScrollX(x)
    }

    return (
        <div className="movieList">
            <h2>{title}</h2>
            <div className="navigate-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 70}}/>
            </div>
            <div className="navigate-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 70}}/>
            </div>
            <div className="movie-listarea">
                <div className="movie-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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