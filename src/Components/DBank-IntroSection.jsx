const DBankIntro =() => {

return(
<main className="h-auto">
<section className="hscreen">

{/* bg and phones */}
<div className="w-auto h-auto border overflow-hidden ">
<div className="h-80 scale-120 relative bg-[url('src/assets/images/bg-intro-mobile.svg')] md:bg-[url('src/assets/images/bg-intro-desktop.svg')] bg-no-repeat bg-cover bg-center ">
</div>

{/* phone image */} 
<picture>
<img src="src/assets/images/image-mockups.png" alt="phones" className="p-2 w-90 h-120 absolute -top-36 left-2" />
</picture> 

</div>


</section>

</main>
)}
export default DBankIntro;