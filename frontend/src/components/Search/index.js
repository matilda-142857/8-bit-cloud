import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getSearchedSongs } from "../../store/search";
import SearchResults from "./searchpage";

const Search = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const search = useLocation().search
    const keyword = new URLSearchParams(search).get('q')

    const songQueries = useSelector(state => state?.search?.entries)
    const songsArr = Object.values(songQueries)

    useEffect(() => {
        dispatch(getSearchedSongs({keyword}))
    }, [dispatch, search])

    return (
        <div id='search-results-page'>
            <div className="search-title-div">
                <div className="search-title">
                    <h1 className="search-string">Search results for " {keyword} "</h1>
                </div>
            </div>
            <div className='search-results-yes'>
                {songsArr.length !== 0
                ? (songsArr && songsArr.map(song => (
                    <div key={song.id} className='search-content'>
                        <SearchResults song={song} />
                    </div>
                )))
                :
                <div className="search-results-no">
                    <div className='search-no-msg'>
                        <p>{`Sorry, we didn't find any results for “ ${keyword} ”.`}</p>
                        <p>Please try a different search.</p>
                    </div>
                </div>
            }
            </div>
        </div>
    )

}

export default Search