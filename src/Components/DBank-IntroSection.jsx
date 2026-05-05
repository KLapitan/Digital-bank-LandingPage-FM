const DBankIntro =({showLinks}) => {

return(
<main className="h-auto  lg:relative ]">
<section className="h-screen lg:flex lg:flex-row-reverse  border  lg:relative lg:overflow-x-visible">




{/* phone relative cointainer and with of the background photo */}
<div className=" lg:block lg:w-full  lg:h-screen lg:border lg:z-10 overflow-hidden h-80  relative lg:static">

{/* bg and phones */}

<div className="w-auto lg:w-full h-screen border-3    overflow-hidden lg:overflow-x-hidden   ">
<div className="h-80 lg:w-full lg:h-full scale-100 relative bg-[url('src/assets/images/bg-intro-mobile.svg')] md:bg-[url('src/assets/images/bg-intro-desktop.svg')] lg:bg-[url('src/assets/images/bg-intro-desktop.svg')] bg-no-repeat bg-cover bg-center lg:scale-180 lg:bg-contain lg:-mr-75 lg:ml-57  lg:-mt-20 z-20 ">
</div>

{/* phone image */} 
<picture>
<img src="src/assets/images/image-mockups.png" alt="phones" className={`p-2 w-90 h-115 absolute -top-35 left-2 z-70  lg:-top-5 lg:left-210 lg:shrink  lg:overflow-y-visible lg:scale-150  lg:h-full lg:w-120  
 lg:clip-path-[inset(calc(100%-90px)_0_0_0)]
 ${showLinks ? "hidden":"block"}`} />
</picture> 

</div>
</div>

<div className="h-auto w-full  font-PublicSans text-center flex flex-col gap-4 mt-3 p-3 lg:w-full ">
<h2 className="text-5xl font-light tracking-tight text-PBlue950">Next generation digital banking</h2>
<p className="text-md p-2 tracking-tight leading-4 text-NGray600">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.

  </p>
  <button className="bg-linear-to-b from-PGreen500 to-PCyan400 text-NGray50 text-md font-bold rounded-full py-3 flex-none w-44 place-self-center">Request Invite</button>
</div>


</section>

</main>
)}
export default DBankIntro;