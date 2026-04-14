const DBankIntro =() => {

return(
<main className="h-auto">
<section className="h-screen">

{/* bg and phones */}
<div className="w-auto h-auto border overflow-hidden ">
<div className="h-80 scale-110 relative bg-[url('src/assets/images/bg-intro-mobile.svg')] md:bg-[url('src/assets/images/bg-intro-desktop.svg')] bg-no-repeat bg-cover bg-center ">
</div>

{/* phone image */} 
<picture>
<img src="src/assets/images/image-mockups.png" alt="phones" className="p-2 w-90 h-115 absolute -top-35 left-2" />
</picture> 

</div>

<div className="h-auto w-full border font-PublicSans text-center flex flex-col gap-4 mt-6 p-3">
<h2 className="text-5xl font-light tracking-tight text-PBlue950">Next generation digital banking</h2>
<p className="text-md p-2 tracking-tight leading-4">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.

  </p>
  <button className="bg-linear-to-b from-PGreen500 to-PCyan400 text-NGray50 text-md font-bold rounded-full py-3 flex-none w-44 place-self-center">Request Invite</button>
</div>


</section>

</main>
)}
export default DBankIntro;