import React, { useState, useEffect } from "react";
import axios from "axios";
import SugCard from "./SugCard";

const AddPlayer = (props) => {
  const { players, setPlayers } = props
  const [newPlayer, setNewPlayer] = useState({
    name:``,
    team_Id: props.team_Id
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

  const postPlayer = async (nameFromAPI, idFromAPI) => {
    let found = false
    players.map((player) => {
      if (player.api_Id === idFromAPI){
        found = true
      }
    })
    if (found === false){
      await axios.post(`http://localhost:3001/api/players`, {
      name: nameFromAPI,
      team_Id: props.team_Id,
      api_Id: idFromAPI
    })
    const res = await axios.get(`http://localhost:3001/api/players`)
    const allPlayers = res.data.players
    const teamPlayers = allPlayers.filter((player) => {
      return player.team_Id === props.team_Id
    })
    setPlayers(teamPlayers)
    }
    let anotherPlayer = {
      name: ``,
      team_Id: props.team_Id
    }
    setNewPlayer(anotherPlayer)
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
          placeholder="enter player name"
        />
      {newPlayer.name.length<4 ? (null) : (
        <div>
          {searchSug && searchSug !== [] ? (
        <div>
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
                    pos={player.team.abbreviation}
                    onClick={() => postPlayer(plyName, plyID)}
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

export default AddPlayer







// WORKING FILE:
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SugCard from "./SugCard";

// const AddPlayer = (props) => {
//   const { players, setPlayers } = props
//   const [newPlayer, setNewPlayer] = useState({
//     name:``,
//     team_Id: props.team_Id
//   })
//   const [searchSug, setSearchSug] = useState(null)

//   const searchPlayer = async () => {
//     console.log('searching for players')
//     const res = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${newPlayer.name}&per_page=100`)
//     let unsortedArr = res.data.data
//     unsortedArr.sort((a, b) => {
//       return a.id - b.id
//     })
//     setSearchSug(unsortedArr)
//   }
//   const handleChange = (e) => {
//     const newestPlayer = { ...newPlayer }
//     newestPlayer[e.target.id] = e.target.value
//     setNewPlayer(newestPlayer)
//     console.log(newestPlayer)
//     if (newPlayer.name.length>=3){
//       searchPlayer()
//     }
//   }

//   const postPlayer = async (nameFromAPI, idFromAPI) => {
//     await axios.post(`http://localhost:3001/api/players`, {
//       // _id: idFromAPI,
//       name: nameFromAPI,
//       team_Id: props.team_Id,
//     })

//     const res = await axios.get(`http://localhost:3001/api/players`)
//     const allPlayers = res.data.players
//     const teamPlayers = allPlayers.filter((player) => {
//       return player.team_Id === props.team_Id
//     })
//     setPlayers(teamPlayers)

//     let anotherPlayer = {
//       name: ``,
//       team_Id: props.team_Id
//     }
//     setNewPlayer(anotherPlayer)
//   }

//   useEffect(() => {
//   }, [searchSug])

//   return (
//     <div className="addPlayer">
//         <input 
//           type='text' 
//           name='name' 
//           value={newPlayer.name} 
//           onChange={(e) => handleChange(e)}
//           id='name'
//           placeholder="enter player name"
//         />
//       {newPlayer.name.length<4 ? (null) : (
//         <div>
//           {searchSug && searchSug !== [] ? (
//         <div>
//           {searchSug.map((player, index) => {
//             const plyName = `${player.first_name} ${player.last_name}`
//             const plyID = player.id
//             {
//               if (index<10){
//                 return (
//                   <SugCard 
//                     key={player.id}
//                     fName={player.first_name}
//                     lName={player.last_name}
//                     pos={player.team.abbreviation}
//                     onClick={() => postPlayer(plyName, plyID)}
//                   />
//                 )
//               }
//             }
//           })}
//         </div>
//         ) : (null) }
//         </div>
//       )}
//     </div>
//   )
// }

// export default AddPlayer