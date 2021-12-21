import React, { useEffect, useState } from "react";
import SeasonCard from "./SeasonCard";

const CareerStats = (props) => {
  const [renderStats, setRenderStats] = useState(false)
  const [renderCurStats, setRenderCurStats] = useState(false)
  const [renderRecStats, setRenderRecStats] = useState(false)

  const togRenderStats = () => {
    if (renderStats === true){
      setRenderStats(false)
    } else {
      setRenderRecStats(false)
      setRenderCurStats(false)
      setRenderStats(true)
    }
  }

  const togRenderCurStats = () => {
    if (renderCurStats === true){
      setRenderCurStats(false)
    } else {
      setRenderRecStats(false)
      setRenderStats(false)
      setRenderCurStats(true)
    }
  }

  const togRenderRecStats = () => {
    if (renderRecStats === true){
      setRenderRecStats(false)
    } else {
      setRenderStats(false)
      setRenderCurStats(false)
      setRenderRecStats(true)
    }
  }

  useEffect(() => {
  }, [renderStats])

  return (
    <div>
      <h3 className="vStats">View Stats</h3>
      <div className="statBtnBar">
        <button className="btn" onClick={togRenderCurStats}>Current</button>
        <button className="btn" onClick={togRenderRecStats}>Recent</button>
        <button className="btn" onClick={togRenderStats}>Career</button>
      </div>
      <div>
        {renderStats === true ? (
          <div>
            <div>
              <div className="statsLine statsHeader">
                <div>Season</div>
                <div>Gms</div>
                <div>Min</div>
                <div>FG%</div>
                <div>FT%</div>
                <div>3PTM</div>
                <div>PTS</div>
                <div>REB</div>
                <div>AST</div>
                <div>ST</div>
                <div>BLK</div>
                <div>TO</div>
              </div>
            </div>
              <div>
                <SeasonCard {...props} season={2021} id={props.id} />
                <SeasonCard {...props} season={2020} id={props.id} />
                <SeasonCard {...props} season={2019} id={props.id} />
                <SeasonCard {...props} season={2018} id={props.id} />
                <SeasonCard {...props} season={2017} id={props.id} />
                <SeasonCard {...props} season={2016} id={props.id} />
                <SeasonCard {...props} season={2015} id={props.id} />
                <SeasonCard {...props} season={2014} id={props.id} />
                <SeasonCard {...props} season={2013} id={props.id} />
                <SeasonCard {...props} season={2012} id={props.id} />
                <SeasonCard {...props} season={2011} id={props.id} />
                <SeasonCard {...props} season={2010} id={props.id} />
                <SeasonCard {...props} season={2009} id={props.id} />
                <SeasonCard {...props} season={2008} id={props.id} />
                <SeasonCard {...props} season={2007} id={props.id} />
                <SeasonCard {...props} season={2006} id={props.id} />
                <SeasonCard {...props} season={2005} id={props.id} />
                <SeasonCard {...props} season={2004} id={props.id} />
                <SeasonCard {...props} season={2003} id={props.id} />
              </div>
          </div>
        ) : (
          null
        )}
      </div>
      <div>
        {renderCurStats === true ? (
          <div>
            <div>
              <div className="statsLine statsHeader">
                <div>Season</div>
                <div>Gms</div>
                <div>Min</div>
                <div>FG%</div>
                <div>FT%</div>
                <div>3PTM</div>
                <div>PTS</div>
                <div>REB</div>
                <div>AST</div>
                <div>ST</div>
                <div>BLK</div>
                <div>TO</div>
              </div>
            </div>
              <div>
                <SeasonCard {...props} season={2021} id={props.id} />
              </div>
          </div>
        ) : (
          null
        )}
      </div>
      <div>
        {renderRecStats === true ? (
          <div>
            <div>
              <div className="statsLine statsHeader">
                <div>Season</div>
                <div>Gms</div>
                <div>Min</div>
                <div>FG%</div>
                <div>FT%</div>
                <div>3PTM</div>
                <div>PTS</div>
                <div>REB</div>
                <div>AST</div>
                <div>ST</div>
                <div>BLK</div>
                <div>TO</div>
              </div>
            </div>
              <div>
                <SeasonCard {...props} season={2021} id={props.id} />
                <SeasonCard {...props} season={2020} id={props.id} />
                <SeasonCard {...props} season={2019} id={props.id} />
              </div>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  )
}

export default CareerStats