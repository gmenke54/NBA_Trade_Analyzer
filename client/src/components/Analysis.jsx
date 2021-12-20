import React, { useEffect, useState } from "react";

const Analysis = (props) => {
  const { aStats, bStats } = props
  const [betterTeam, setBetterTeam] = useState([])

  const compareTeams = () => {
    const aPointsArr = aStats.map((ply) => {
      return ply.pts
    })
    const aPoints = aPointsArr.reduce((num, acc) => {
      acc += num
      return acc
    }, 0)
    console.log(aPoints)
    const bPointsArr = bStats.map((ply) => {
      return ply.pts
    })
    const bPoints = bPointsArr.reduce((num, acc) => {
      acc += num
      return acc
    }, 0)
    console.log(bPoints)
    aPoints > bPoints ? (setBetterTeam('Team A')) : (setBetterTeam('Team B'))
  }

  useEffect(() => {
    compareTeams()
  }, [aStats, bStats])

  
  return (
    <div>
      <h1>Analysis</h1>
      {betterTeam ? (
        <h2>{betterTeam} is the better team </h2>
      ) : (
        null
      )}
    </div>
  )
}

export default Analysis