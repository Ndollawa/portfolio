import React from 'react'
import { FaComments } from 'react-icons/fa';
import { RiAddLine, RiProjector2Fill, RiUser3Line } from 'react-icons/ri'


interface InsightProps{
    title:string;
    icon:string | JSX.Element;
    counter:number | string;
    progress: number;
    color?:string | undefined;
    timeAgo:string
   }

const Analytics = () => {
    const insightReports:InsightProps[] =[
        {
     title:"Total Projects",
     icon:<RiProjector2Fill/>,
     counter:103,
     progress:80,
     color:undefined,
     timeAgo:"This week"
     } ,
      {
     title:"Total Projects",
     icon:<FaComments/>,
     counter:103,
     color:"bg-cyan-600",
     progress:80,
     timeAgo:"This week"
     } ,
     {
     title:"Total Projects",
     icon:<RiUser3Line/>,
     counter:103,
     progress:80,
     color:"bg-red-600",
     timeAgo:"This week"
     } 
     ] 

  return (
    <div className="analytics">
    <h2>Impression Analytics</h2>
    {
          insightReports?.map(({title, icon, counter, color, progress, timeAgo},i)=>(
    <div className="item" key={i}>
        <div className={`icon ${color}`}>{icon}</div>
        <div className="item__description">
            <div className="item__description--content">
                <h3>{title}</h3>
                <small className='text__muted'>{timeAgo}</small>
            </div>
            <h5 className='success text-yellow-300'>+{progress}%</h5>
            <h3>{counter}</h3>
        </div>
    </div>
          )
          ) 
    }
   
  
    <div className="item add__project">
        <div>
            <RiAddLine/>
            <h3>Add Project</h3>
        </div>
    </div>
</div>
  )
}

export default Analytics
