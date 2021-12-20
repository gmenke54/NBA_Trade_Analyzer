import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import SeasonCard from "./SeasonCard";

const CareerStats = (props) => {

  return (
    <div>
      <h1>Career Stats</h1>
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
  )
}

export default CareerStats