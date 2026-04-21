
import DBankModal from "./DBank-LinkModal"

const DBankNav = ({links ,showLinks ,onOpen}) => {


return(
<>
<nav className="h-auto relative z-50  ">
  <section className="h-16 border flex flex-row justify-between  sm:justify-start sm:gap-6 items-center p-4">
    <picture>
        <img src="src/assets/images/logo-dark.svg" alt="dbank logo" 
          className=""
        />
    </picture>

      <ul className="hidden sm:flex flex-row gap-2">
      {links.map((link) => (
      <li>{link}</li>
      ))}
      
      </ul>


<button onClick={onOpen} className="sm:hidden md:hidden lg:hidden">
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