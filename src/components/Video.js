import "./Video.css"
function Video({id,title,channelName,view,DeleteVideo,editVideo}){
    return(
        <div className="video">
             <div className="pic">
                <button className="close" onClick={()=>DeleteVideo(id)}>X</button>
                <button className='edit' onClick={()=>editVideo(id)}>Edit</button>  
                <img src={`https://picsum.photos/id/${id}/160/90`}></img>
             </div>
             <div className="title">{title}</div>
             <div className="name">{channelName}</div>
             <div className="view"> {view}</div>
        </div>
    )
}
export default Video;