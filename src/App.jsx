import { useState } from "react"
import DBankNav from "./Components/DBank-NavSection";
import DBankIntro from "./Components/DBank-IntroSection";
import DBankSerivces from "./Components/DBank-Services";
import DBanksArticle from "./Components/DBank-ArticleSection";
import DBankFooter from "./Components/DBank-Footer";

const DBLinks =["Home", "About" , "Contact", "Blog", "Careers"]

const FooterLinks =["About Us", "Contact" , "Blog","Careers", "Support" , "Privacy Policy"]

const SocialLinks = [
{
id:0, 
src:"src/assets/images/icon-facebook.svg", alt:"facebook",
},
{
id:0, 
src:"src/assets/images/icon-youtube.svg", alt:"youtube",
},{
id:0, 
src:"src/assets/images/icon-twitter.svg", alt:"twitter",
},{
id:0, 
src:"src/assets/images/icon-pinterest.svg", alt:"pinterest",
},
{
id:0, 
src:"src/assets/images/icon-instagram.svg", alt:"instagram",
},

]

const App = () => {

const [showLinks,setShowLinks]=useState(false)

const handleShowLinks =() => {
setShowLinks(prev => !prev)
}


return(
<>
<DBankNav links={DBLinks} showLinks={showLinks} onOpen={handleShowLinks}/>
<DBankIntro showLinks={showLinks}/>

<DBankSerivces/>
<DBanksArticle/>
<DBankFooter social={SocialLinks} footerLinks={FooterLinks}/>
</>


)
}
export default App;