const DBanksArticle = () => {
return (
<section className="h-auto bg-NWhite font-PublicSans p-3 mb-8"> 

    <h2 className="text-center text-3xl font-light mt-10 mb-10">Latest Articles</h2>

{/* #1 */}
    <div className=" w-auto h-auto  shadow-lg rounded-lg mt-9"> 
        <div className="w-auto overflow-hidden h-60  rounded-t-lg">
        <picture>
          <img src="src/assets/images/image-currency.jpg" alt="money"  className=" w-full h-full object-cover"/>
        </picture>
        </div>
        <div className=" h-auto flex flex-col gap-2 p-3 m-0">
          <span className="text-left text-NGray600 text-sm mt-2 ml-5">By Claire Robinson</span>

          <p className="text-lg text-left tracking-normal ml-5">
          Receive money in any currency with no fees
  
          </p>
          <p className="text-sm text-NGray600 text-left ml-5 tracking-normal border w-68 mb-6"> The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
        </div>
    </div>

  {/* #2 */}
    <div  className="w-auto h-auto  shadow-lg rounded-lg mt-9">

      <div className="w-auto overflow-hidden h-60  rounded-t-lg">
        
         <picture>
          <img src="src/assets/images/image-restaurant.jpg" alt="resturant"  className=" w-full h-full object-cover"/>
        </picture>
      
      </div>
    
        <div className=" h-auto flex flex-col gap-2 p-3 m-0">
          <span className="text-left text-NGray600 text-sm mt-2 ml-5">By Wilson Hutton</span>

          <p className="text-lg text-left tracking-tight ml-5 ">
          Treat yourself without worrying about money
          </p>
          <p className="text-sm text-NGray600 text-left ml-5 tracking-normal border w-68 mb-6"> Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
</p>
        </div>
    
    
    
    </div>


{/* #3 */}
  <div  className="w-auto h-auto  shadow-lg rounded-lg mt-9">

      <div className="w-auto overflow-hidden h-60  rounded-t-lg">
       <picture>
          <img src="src/assets/images/image-plane.jpg" alt="plane"  className=" w-full h-full object-cover"/>
        </picture>
      
      </div>

      <div className=" h-auto flex flex-col gap-2 p-3 m-0">

       <span className="text-left text-NGray600 text-sm mt-2 ml-5 ">By Wilson Hutton</span>

          <p className="text-lg text-left tracking-tight ml-5  w-60">
          Take your Digitalbank card wherever you go
          </p>
          <p className="text-sm text-NGray600 text-left ml-5 tracking-normal border w-68 mb-6">   We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …

</p>
      
      
      </div>

  
  </div>

{/* #4 */}
    <div className="w-auto h-auto  shadow-lg rounded-lg mt-9">
             <div className="w-auto overflow-hidden h-60  rounded-t-lg">
       <picture>
          <img src="src/assets/images/image-confetti.jpg" alt="confetti"  className=" w-full h-full object-cover"/>
        </picture>
      
      </div>
    
       <div className=" h-auto flex flex-col gap-2 p-3 m-0">

       <span className="text-left text-NGray600 text-sm mt-2 ml-5 ">By Claire Robinson</span>

          <p className="text-lg text-left tracking-tight ml-5  w-72 ">
          Our invite-only Beta accounts are now live!
          </p>
          <p className="text-sm text-NGray600 text-left ml-5 tracking-normal border w-68 mb-6">   After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
      
      
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
 
