import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { getSongSearch } from "../../store/search"
import SearchResults from "./SearchResults"
import './Search.css'

const Search = () => {
    const history = useHistory()
    const dispatch = useDispatch()
}

export default Search
