import React from 'react';
import {Link} from 'react-router-dom'


const HomePage = (props)=>{
    return (<div>
         <h1 className="h1">Candidate Lists</h1>
           <ul>
        {
        props.candidate.map((c,id)=>(<Link key={id} to={`${c.id}`}><li >{c.name}</li></Link>))
        }
        </ul>
    </div>)
}

export default HomePage;