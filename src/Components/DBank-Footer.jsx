const DBankFooter = ({footerLinks,social}) => {

return(
<footer className="h-auto border ">
  <section className="h-auto bg-PBlue950 flex flex-col items-center justify-center gap-6 font-PublicSans  p-2">

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


{/* link */}
    <ul className="text-center flex flex-col gap-2 font-light text-sm  ">
      {footerLinks.map((link,index) => (
      
      <li key={index} className=" text-NGray50">{link}</li>
      ))}
    
    </ul>
  
  <div >
    <button className="bg-linear-to-b from-PGreen500 to-PCyan400 text-NGray50 px-8 py-3 rounded-full text-xs font-PublicSans ">Request Invite</button>
  </div>
  
     <span className="text-xs tracking-wide text-gray-400 text-center -mt-1 mb-10">
  © Digitalbank. All Rights Reserved
</span>
  
  
    </section>


</footer>
)

}
export default DBankFooter