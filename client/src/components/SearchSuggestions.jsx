import React, { useState, useEffect } from "react";
import axios from "axios";
import SugCard from "./SugCard";

const SearchSuggestions = (props) => {
  const [newPlayer, setNewPlayer] = useState({
    name:``
  })
  const [searchSug, setSearchSug] = useState(null)

  const searchPlayer = async () => {
    console.log('searching for players')
    const res = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${newPlayer.name}&per_page=100`)
    let unsortedArr = res.data.data
    unsortedArr.sort((a, b) => {
      return a.id - b.id
    })
    setSearchSug(unsortedArr)
  }
  const handleChange = (e) => {
    const newestPlayer = { ...newPlayer }
    newestPlayer[e.target.id] = e.target.value
    setNewPlayer(newestPlayer)
    console.log(newestPlayer)
    if (newPlayer.name.length>=3){
      searchPlayer()
    }
  }

  useEffect(() => {
  }, [searchSug])

  return (
    <div className="addPlayer">
        <input 
          type='text' 
          name='name' 
          value={newPlayer.name} 
          onChange={(e) => handleChange(e)}
          id='name'
          placeholder="find a player"
          autoComplete="off"
        />
      {newPlayer.name.length<4 ? (null) : (
        <div>
          {searchSug && searchSug !== [] ? (
            <div className="searchSugs">
              {searchSug.map((player, index) => {
                const plyName = `${player.first_name} ${player.last_name}`
                const plyID = player.id
                {
                  if (index<10){
                    return (
                      <SugCard 
                        key={player.id}
                        fName={player.first_name}
                        lName={player.last_name}
                        team={player.team.abbreviation}
                        onClick={() => window.location.href=`${window.location.origin}/players/details/${plyName}`}
                      />
                    )
                  }
                }
              })}
            </div>
        ) : (null) }
        </div>
      )}
    </div>
  )
}

export default SearchSuggestions