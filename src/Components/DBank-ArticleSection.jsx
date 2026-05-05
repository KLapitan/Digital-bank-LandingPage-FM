const DBanksArticle = () => {
return (
<section className="h-auto bg-NWhite font-PublicSans p-2 mb-8  md:shrink lg:flex lg:flex-col lg:justify-center lg:items-center  "> 

<div className=" w-auto h-auto">
    <h2 className="w-full text-center text-3xl font-light mt-10 mb-10 lg:text-left   ">Latest Articles </h2>

{/* #1 */}
{/* large view row container */}

<div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 gap-4 ~">

  
<div className="w-auto h-auto rounded-lg shadow  mt-9 lg:w-68">

        <div className="w-full h-60  rounded-t-lg lg:rounded-t-md">
          <picture>
           <img src="src/assets/images/image-currency.jpg" alt="money"   className=" w-full h-full object-cover rounded-t-lg lg:rounded-t-md " />
          </picture>
        </div>
        <div className="flex flex-col gap-3 ml-6 p-2 lg:ml-2">
          <span className="mt-2 text-sm text-NGray600 text-left lg:mb-1 lg:mt-3 ">By Claire Robinson</span>
          <span className="text-lg w-64 lg:leading-5 "> Receive money in any currency with no fees</span>

          <span className="text-sm text-NGray600 text-left tracking-normal w-66 mb-6 lg:w-61 lg:tracking-tighter">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</span>
        
        
        </div>
        
        
        </div>






  {/* #2 */}
   <div className="w-auto h-auto rounded-lg shadow  mt-9 lg:w-68">

        <div className="w-full h-60  rounded-t-lg lg:rounded-t-md">
          <picture>
           <img src="src/assets/images/image-restaurant.jpg" alt="resturant"   className=" w-full h-full object-cover rounded-t-lg lg:rounded-t-md " />
          </picture>
        </div>
        <div className="flex flex-col gap-3 ml-6 p-2 lg:ml-2">
          <span className="mt-2 text-sm text-NGray600 text-left lg:mb-1 lg:mt-3 ">By Wilson Hutton</span>
          <span className="text-lg w-64 lg:leading-5 "> Treat yourself without worrying about money</span>

          <span className="text-sm text-NGray600 text-left tracking-normal w-66 mb-6 lg:w-61 lg:tracking-tighter"> Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …</span>
        
        
        </div>
        
        
        </div>






{/* #3 */}
  
<div className="w-auto h-auto rounded-lg shadow  mt-9 lg:w-68">
        <div className="w-full h-60  rounded-t-lg lg:rounded-t-md">
          <picture>
           <img src="src/assets/images/image-plane.jpg" alt="plane"  className=" w-full h-full object-cover rounded-t-lg lg:rounded-t-md " />
          </picture>
        </div>
        <div className="flex flex-col gap-3 ml-6 p-2 lg:ml-2">
          <span className="mt-2 text-sm text-NGray600 text-left lg:mb-1 lg:mt-3 ">By Wilson Hutton</span>
          <span className="text-lg w-64 lg:leading-5 ">Take your Digitalbank card wherever you go</span>

          <span className="text-sm text-NGray600 text-left tracking-normal w-66 mb-6 lg:w-61 lg:tracking-tighter"> We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</span>
        
        
        </div>
        
        
        </div>


{/* #4 */}
    <div className="w-auto h-auto rounded-lg shadow  mt-9 lg:w-68">
        <div className="w-full h-60  rounded-t-lg lg:rounded-t-md">
          <picture>
           <img src="src/assets/images/image-confetti.jpg" alt="confetti"  className=" w-full h-full object-cover rounded-t-lg lg:rounded-t-md " />
          </picture>
        </div>
        <div className="flex flex-col gap-3 ml-6 p-2 lg:ml-2">
          <span className="mt-2 text-sm text-NGray600 text-left lg:mb-1 lg:mt-3 ">By Claire Robinson</span>
          <span className="text-lg w-64 lg:leading-5 "> Our invite-only Beta accounts are now live!</span>

          <span className="text-sm text-NGray600 text-left tracking-normal w-66 mb-6 lg:w-61 lg:tracking-tighter">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</span>
        
        
        </div>
        
        
        </div>





</div>





</div>

</section>
)
}
export default DBanksArticle
 

 

  
  
 
  // 
  // 

  // 
  //
 
