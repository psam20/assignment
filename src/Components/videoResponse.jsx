import React from 'react';
import {useParams} from 'react-router-dom';
const VideoResponse = (props)=>{
    const {id} = useParams();
    console.log(id);
   

    const selectedVideo=props.videos.map( v => v.videos.find( v1=> v1.questionId.toString()===id))
    console.log(selectedVideo);
     console.log(props.videos);
    return (<div>

        <h1>Video Container</h1>

    </div>)
}

export default VideoResponse;