
import { useEffect, useState } from "react";

const Datas={
    title:"",
    channelName:"",
    view:""
}

function Addvideo({addvideo,updatevideo,editableVideo}){

    let [newdata,setvideo]=useState(Datas);
    function handlesubmit(e){
        e.preventDefault();
        // e.stopPropagation();
        if(editableVideo){
            updatevideo(newdata);
        }
        else{
            addvideo(newdata);
        }
        setvideo(Datas)
    }
     
    function handlechange(e){
         setvideo({...newdata,
            [e.target.name]:e.target.value
         })
         console.log(newdata)
    }

    useEffect(()=>{
           if(editableVideo){
            setvideo(editableVideo)
           }
    },[editableVideo])

    return(
        <form>
        <div className="add">
        <div className="heading">Add New Video</div>
        <input type="text" name="title" className="addtitle" value={newdata.title} onChange={handlechange} placeholder="Title"></input>
        <input type="text" name="channelName"  className="addname" value={newdata.channelName}  onChange={handlechange}  placeholder="Channel Name"></input>
        <input type="text" name="view"  className="addview" value={newdata.view}  onChange={handlechange} placeholder=" View"></input>
        <button className="addbtn"  onClick={handlesubmit}>{editableVideo?'Edit':'Add'} Video</button>
        </div>
        </form>
    )
}

export default Addvideo;