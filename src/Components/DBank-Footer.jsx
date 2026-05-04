const DBankFooter = ({footerLinks,social}) => {

return(
<footer className="h-auto border ">
  <section className="h-auto bg-PBlue950 flex flex-col items-center justify-center gap-6 font-PublicSans  lg:flex-row lg:justify-between ">

{/* holding picture and link */}
<div className="w-auto lg:flex lg:flex-row lg:gap-30 lg:ml-50 lg:items-start  border">


{/* picture of apps and log */}
<div className="flex flex-col gap-4 lg:gap-12 lg:mb-3">
    <picture>
        <img src="src/assets/images/logo-light.svg" alt="logo-light"  className="mt-12 "/>
    </picture>


  {/* social images */}
    <ul className="flex flex-row gap-5 mt-2">
    {social.map((item) => (
    <li key={item.id} >
    <img src={item.src} alt={item.alt} />
    
    </li>
    ))}
    </ul>

</div>

{/* link */}
    <ul className=" text-center
  flex flex-col gap-5 mt-5 text-xs *
  md:grid md:grid-cols-2 md:gap-4 md:text-left
  lg:grid-cols-2 lg:grid-rows-3 lg:grid-flow-col lg:gap-x-18 
  lg:text-sm lg:mt-12 lg:mb-10 lg:mr-20">
      {footerLinks.map((link,index) => (
      
      <li key={index} className=" text-NGray50/70">{link}</li>
      ))}
    
    </ul>
  
</div>

{/* button and allrightreserve */}

<div className="flex flex-col  gap-4 text-center  lg:text-right lg:gap-7 lg:mr-50 border lg:mt-10">

  <div >
    <button className="bg-linear-to-b from-PGreen500 to-PCyan400 text-NGray50 px-8 py-3 rounded-full text-xs font-PublicSans ">Request Invite</button>
  </div>
  
     <span className="text-xs tracking-wide text-gray-400 text-center -mt-1 mb-10">
  © Digitalbank. All Rights Reserved
</span>
  
</div>
  
    </section>


</footer>
)

}
export default DBankFooter