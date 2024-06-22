
import { useState } from "react";
import Video from "./Video";
import Datas from "./Videoapi";
import Addvideo from "./Addvideo";
function Videodata(){
    let [newdata,setvideo]=useState(Datas);
    let [editableVideo,seteditableVideo]=useState(null);
    function DeleteVideo(id){
       setvideo(newdata.filter(newdata=>newdata.id!==id))
       console.log("New Data", newdata)
    }
    function addvideo(video){
        setvideo([...newdata,
            {...video, id:newdata.length+1 }
        ])
        console.log(newdata);
    }
    function editVideo(id){
       seteditableVideo(newdata.find(video=>video.id===id));
       console.log(editableVideo);
    }

    function updatevideo(video){
        const index=newdata.findIndex(v=>v.id===video.id);
        const newVideo=[...newdata];
        newVideo.splice(index,1,video);
        setvideo(newVideo)
        seteditableVideo(null)
    }

    return(
        <div className="mainbox">
            <Addvideo addvideo={addvideo} updatevideo={updatevideo} editableVideo={editableVideo}></Addvideo>
           <div className="Videobox"> 
            {
            newdata.map(data=>
            <Video
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  view={data.view}
                  channelName={data.channelName}
                  DeleteVideo={DeleteVideo}
                  editVideo={editVideo}
                  updatevideo={updatevideo}
            ></Video>
            )}
            </div>
        </div>
    )
}
export default Videodata;