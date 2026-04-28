
import DBankModal from "./DBank-LinkModal"
import DBankInviteButton from "./DBank-RequestButton"
const DBankNav = ({links ,showLinks ,onOpen}) => {


return(
<>
<nav className="h-auto relative z-50  ">
  <section className="h-16 border flex flex-row justify-between  sm:justify-start sm:gap-6 lg:justify-evenly items-center p-4">
    <picture>
        <img src="src/assets/images/logo-dark.svg" alt="dbank logo" 
          className=""
        />
    </picture>

      <ul className="hidden sm:flex flex-row gap-3">
      {links.map((link) => (
      <li className="font-PublicSans text-NGray600">{link}</li>
      ))}
      
      </ul>

      <span className="hidden sm:block ">
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