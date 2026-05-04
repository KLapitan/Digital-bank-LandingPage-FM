const DBankSerivces =() => {
return(
<section className="h-auto p-2 bg-NGray100 flex flex-col items-center justify-center font-PublicSans    ">

<div className="lg:flex  lg:items-start lg:-ml-154">
  <div className=" flex flex-col gap-3 items-center w-auto mt-10   lg:gap-3 lg:items-start ">
  <h2 className="text-3xl tracking-tight w-xs p-2 text-center lg:text-left lg:tracking-normal lg:w-auto">Why choose Digitalbank?</h2>
  <p className="text-center text-sm tracking-tight w-xs p-2 text-NGray600 leading-4 lg:text-left  lg:w-lg lg:tracking-normal"> We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
  
  </div>
</div>

{/* online banking */}
{/* large view row */}
<div className="lg:flex lg:flex-row   lg:gap-18 lg:mt-10">

    <div className=" flex flex-col gap-3 w-auto items-center mt-8 lg:items-start ">
      <picture>
        <img src="src/assets/images/icon-online.svg" alt="online bankng" className="mb-8 "  />
      </picture>

     <span className="text-center text-xl lg:ml-1">Online Banking</span>
  <p className="text-center w-xs p-1 text-sm text-NGray600 leading-4 lg:text-left lg:w-55 lg:leading-6">
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
  </p>

    </div>

{/* simple budegeting */}
    <div className=" flex flex-col items-center gap-3 mt-8 lg:items-start">
        <picture>
          <img src="src/assets/images/icon-budgeting.svg" alt="bugeting" className="mb-8"  />
 
        </picture>


     <span className="text-center text-xl">
     Simple Budgeting
     </span> 
  <p className="text-center w-xs  text-sm text-NGray600 leading-4 lg:text-left lg:w-55 lg:leading-6">
  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.
  </p>

    </div>


    {/* onboarding */}
    <div className=" flex flex-col items-center gap-3 mt-8 lg:items-start">
      <picture>
      <img src="src/assets/images/icon-onboarding.svg" alt="onboarding" className="mb-8" />
      </picture>

    <span className="text-center text-xl">
    Fast Onboarding
    </span>
  <p className="text-center w-xs  text-sm text-NGray600 leading-4 lg:w-58 lg:text-left lg:leading-6">
  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
  </p>
    </div>

    {/* open api */}
    <div  className="flex flex-col items-center gap-3 mt-8 mb-10 lg:items-start">

      <picture>
        <img src="src/assets/images/icon-api.svg" alt="api"
        className="mb-8"
         />
      </picture>


     <span className="text-center">
     Open API
     </span> 
  <p className="text-center w-xs  text-sm text-NGray600 leading-4 lg:text-left lg:w-58 lg:leading-6">
  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
    
  </p>
    </div>
</div>




</section>
)

}
export default DBankSerivces