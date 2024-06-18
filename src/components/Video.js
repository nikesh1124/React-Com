import "./Video.css"
function Video({title,channelName="Phyics Wallah",view}){
    return(
        <div className="video">
             <div className="pic">
                <img src="https://picsum.photos/id/1/160/90"></img>
             </div>
             <div className="title">{title}</div>
             <div className="name">{channelName}</div>
             <div className="view"> {view}</div>
        </div>
    )
}
export default Video;