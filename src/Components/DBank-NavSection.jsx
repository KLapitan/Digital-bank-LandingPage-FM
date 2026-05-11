
import DBankModal from "./DBank-LinkModal"
import DBankInviteButton from "./DBank-Button"
const DBankNav = ({links ,showLinks ,onOpen}) => {


return(
<>
<nav className="h-auto relative z-50  ">
  <section className="h-19 flex items-center justify-between sm:justify-between sm:gap-9  lg:justify-evenly p-4 ">
  <div className=" shrink-0">
    <picture>
        <img src="src/assets/images/logo-dark.svg" alt="dbank logo" 
          className=" h-8 w-auto block"
        />
    </picture>
  </div>

      <ul className="hidden lg:flex sm:shrink min-w-0 overflow-hidden  flex-row gap-3  lg:gap-8 w-auto">
      {links.map((link ,index ) => (
      <li key={index} className="font-PublicSans text-NGray600">
      <a href={ link === "Contact" || link=== "Careers" ? "#footer" : `#${link.toLowerCase()}`}>
      
      {link}
      
      </a>
      </li>
      ))}
      
      </ul>

      <span className="hidden  sm:flex   sm:-mr-60  lg:mr-0 ">
      <DBankInviteButton className="hover:bg-linear-to-b hover:from-PGreen500/80 hover:to-PCyan400/80 ">Request Invite</DBankInviteButton>
      </span>



<button onClick={onOpen} className=" lg:hidden">
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