import React, { useEffect, useState } from "react";

const Analysis = (props) => {
  const { aStats, bStats, pts, fgp, ftp, fg3m, reb, ast, st, blk, ftm, turnOver } = props
  const [betterTeam, setBetterTeam] = useState(null)
  const [complete, setComplete] = useState(false)
  const [aValue, setAValue] = useState(null)
  const [bValue, setBValue] = useState(null)

  const compareTeams = () => {
    let aPointsArr = aStats.map((ply) => {
      let plyTot= ((ply.pts/30.1) + (ply.reb/22.9) + (ply.blk/3.5) + (ply.stl/2.7) + (ply.fg3m/3.8) + (ply.ast/11.2) + (ply.fg_pct/0.674) + (ply.ft_pct/0.908) + (ply.ftm/7.8) - (ply.turnover/4.1))
      if (pts === 'false'){
        plyTot -= (ply.pts/30.1)
      }
      if (reb === 'false'){
        plyTot -= (ply.reb/22.9)
      }
      if (blk === 'false'){
        plyTot -= (ply.blk/3.5)
      }
      if (st === 'false'){
        plyTot -= (ply.stl/2.7)
      }
      if (fg3m === 'false'){
        plyTot -= (ply.fg3m/3.8)
      }
      if (ast === 'false'){
        plyTot -= (ply.ast/11.2)
      }
      if (fgp === 'false'){
        plyTot -= (ply.fg_pct/0.674)
      }
      if (ftp === 'false'){
        plyTot -= (ply.ft_pct/0.908)
      }
      if (ftm === 'false'){
        plyTot -= (ply.ftm/7.8)
      }
      if (turnOver === 'false'){
        plyTot += (ply.turnover/4.1)
      }
      return plyTot
    })

    console.log(aPointsArr)
    const aPoints = aPointsArr.reduce((num, acc) => {
      acc += num
      return acc
    }, 0)
    console.log(aPoints)
    
    let bPointsArr = bStats.map((ply) => {
      let plyTot= ((ply.pts/30.1) + (ply.reb/22.9) + (ply.blk/3.5) + (ply.stl/2.7) + (ply.fg3m/3.8) + (ply.ast/11.2) + (ply.fg_pct/0.674) + (ply.ft_pct/0.908) + (ply.ftm/7.8) - (ply.turnover/4.1))
      if (pts === 'false'){
        plyTot -= (ply.pts/30.1)
      }
      if (reb === 'false'){
        plyTot -= (ply.reb/22.9)
      }
      if (blk === 'false'){
        plyTot -= (ply.blk/3.5)
      }
      if (st === 'false'){
        plyTot -= (ply.stl/2.7)
      }
      if (fg3m === 'false'){
        plyTot -= (ply.fg3m/3.8)
      }
      if (ast === 'false'){
        plyTot -= (ply.ast/11.2)
      }
      if (fgp === 'false'){
        plyTot -= (ply.fg_pct/0.674)
      }
      if (ftp === 'false'){
        plyTot -= (ply.ft_pct/0.908)
      }
      if (ftm === 'false'){
        plyTot -= (ply.ftm/7.8)
      }
      if (turnOver === 'false'){
        plyTot += (ply.turnover/4.1)
      }
      return plyTot
    })
    const bPoints = bPointsArr.reduce((num, acc) => {
      acc += num
      return acc
    }, 0)
    console.log(bPoints)

    let netTeamLength = aStats.length - bStats.length
    let aVal = aPoints
    let bVal = bPoints
    if (netTeamLength !== 0){
      if (netTeamLength>0){
        aVal *= Math.pow(0.75, netTeamLength)
      } else {
        bVal *= Math.pow(0.75 , -1 * netTeamLength)
      }
    }
    console.log(aVal, bVal)
    aVal > bVal ? (setBetterTeam(props.teamA_name)) : (setBetterTeam(props.teamB_name))
    if (bVal !== 0){
      setComplete(true)
      setAValue(aVal*10)
      setBValue(bVal*10)
    }
  }

  useEffect(() => {
    compareTeams()
  }, [aStats, bStats, betterTeam])

  
  return (
    <div>
      {complete === true ? (
        <div>
          <h2>{betterTeam} is the better trade package </h2>
          <section className="pointsRow">
            <div>
              <h4>
                {props.teamA_name} Value:
              </h4>
              <div>
                {aValue.toFixed(1)}
              </div>
            </div>
            <div>
              <h4>
                {props.teamB_name} Value:
              </h4>
              <div>
                {bValue.toFixed(1)}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>calculating...</div>
      )}
    </div>
  )
}

export default Analysis