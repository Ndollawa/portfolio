import React from 'react'

interface InsightProps{
   title:string;
   icon:string | JSX.Element;
   counter:number | string;
   progress: number;
   color?:string | undefined;
   timeAgo:string
  }

const Insight = ({title, icon, counter,color, progress, timeAgo}:InsightProps) => {
  return (
    <div className='insight__card'>
    <span className={color}>{icon}</span>
    <div className="insight__card--content">
    <div className="insight__card--content__metrics">
        <h3>{title}</h3>
        <h1>{counter}</h1>
    </div>
    <div className="insight__card--content__progress ">
        <svg>
           <circle cx='38' cy='38' r='36'></circle>
        </svg>
         <div className="number">
                <p>{progress}%</p>
            </div>
    </div>
</div>
<small className='text__muted'>{timeAgo}</small>
</div>

  )
}

export default Insight
