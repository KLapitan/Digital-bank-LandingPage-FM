
import DBankModal from "./DBank-LinkModal"
import DBankInviteButton from "./DBank-RequestButton"
const DBankNav = ({links ,showLinks ,onOpen}) => {


return(
<>
<nav className="h-auto relative z-50  ">
  <section className="h-16 flex items-center justify-between sm:justify-start sm:gap-9 lg:justify-evenly p-4 border">
  <div className="border shrink-0">
    <picture>
        <img src="src/assets/images/logo-dark.svg" alt="dbank logo" 
          className=" h-8 w-auto block"
        />
    </picture>
  </div>

      <ul className="hidden sm:flex sm:shrink min-w-0 overflow-hidden flex-row gap-3 border w-auto">
      {links.map((link) => (
      <li className="font-PublicSans text-NGray600">{link}</li>
      ))}
      
      </ul>

      <span className="hidden  sm:flex  ">
      <DBankInviteButton/>
      </span>



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