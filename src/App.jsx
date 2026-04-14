import { useState } from "react"
import DBankNav from "./Components/DBank-NavSection";
import DBankIntro from "./Components/DBank-IntroSection";

const DBLinks =["Home", "About" , "Contact", "Blog", "Careers"]
const App = () => {

const [showLinks,setShowLinks]=useState(false)

const handleShowLinks =() => {
setShowLinks(prev => !prev)
}


return(
<>
<DBankNav links={DBLinks} showLinks={showLinks} onOpen={handleShowLinks}/>
<DBankIntro showLinks={showLinks}/>


</>


)
}
export default App;