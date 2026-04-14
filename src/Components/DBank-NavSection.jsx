
import DBankModal from "./DBank-LinkModal"



const DBankNav = ({links ,showLinks ,onOpen}) => {


return(
<>
<nav className="h-auto relative z-50  ">
  <section className="h-16 border flex flex-row justify-between items-center p-4">
    <picture>
        <img src="src/assets/images/logo-dark.svg" alt="dbank logo" 
          className=""
        />
    </picture>

<button onClick={onOpen}>
    <picture>
        <img src={`${showLinks ? "src/assets/images/icon-close.svg": "src/assets/images/icon-hamburger.svg"}`} alt="hamburger" />
    </picture>
</button>

  
  </section>

</nav>

{showLinks && <DBankModal links={links}/>}

</>

)

}
export default DBankNav