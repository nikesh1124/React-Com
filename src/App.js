
import "./App.css"
import Videodata from "./components/Videodata";
import Counter from "./components/Counter";
function App(){
    console.log("App render");
   
    return(
        <>
        <h1>Hey Nikesh</h1>
        <Counter></Counter>
        <div className="onevideo">
        <Videodata></Videodata>
        </div>
        </>
    )
}
export default App;