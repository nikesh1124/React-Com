import "./App.css"
import Videodata from "./components/Videodata";
function App(){
    console.log("App render");

    return(
        <>
        <h1>Hey Nikesh</h1>
        <div className="onevideo">
        <Videodata></Videodata>
        </div>
        </>
    )
}
export default App;