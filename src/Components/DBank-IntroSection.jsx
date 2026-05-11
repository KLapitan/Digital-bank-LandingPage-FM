import DBankInviteButton from "./DBank-Button";
const DBankIntro =() => {

return(
<main className="h-auto ">
    <section className="h-auto font-PublicSans ">   

    {/* container of hero image and hero detail */}
          <div className="h-screen   relative overflow-hidden lg:h-165  lg:bg-NGray100 z-40 ">
                {/* large view */}
                  <picture className="hidden lg:block z-50 absolute lg:-top-56 lg:-right-40 lg:scale-85">
                    <img src="src/assets/images/image-mockups.png" alt="mockup" className="phone" />
                  </picture>

                {/* small view */}
                <picture className="lg:hidden z-40 absolute -top-37  md:left-32  p-2 scale-100">
                    <img src="src/assets/images/image-mockups.png" className="w-full md:w-130 h-115" alt="mockup"  />
                  </picture>


                  {/* container of the phone to create the effect of phone passing through the section */}
              <div className="h-screen  flex flex-col lg:flex-row-reverse md:gap-2   w-full  bg-NGray50  lg:h-142  lg:overflow-hidden">
                   {/* bg-image of the phone  */}
                     <div className="lg:w-3xl h-80  lg:h-screen bg-size-[100%] bg-center bg-[url('src/assets/images/bg-intro-mobile.svg')] bg-no-repeat md:bg-size-[100%] md:bg-center lg:bg-[url('src/assets/images/bg-intro-desktop.svg')]  lg:bg-size-[190%] lg:bg-bottom-left  lg:overflow-hidden    "></div>

                      {/* details  */}
                      <div className="w-auto h-auto  flex flex-col   items-center gap-4 mt-5  lg:gap-6 lg:justify-center lg:items-start   lg:w-lg  2xl:w-xl  2xl:gap-5  lg:mr-2 ">
                            <h2 className=" text-4xl w-89  md:text-5xl   lg:text-5xl text-center font-light tracking-tight text-PBlue950 lg:text-left lg:w-100 lg:ml-6 2xl:-ml-10 ">Next generation digital banking</h2>

                            <p className="text-center w-90   text-md p-2 tracking-tight leading-6 text-NGray600 md:text-center  md:w-md md:h-32 lg:text-left lg:w-95 lg:ml-6 lg:mb-8 2xl:-ml-10 2xl:mb-8 2xl:leading-6 ">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
                              for spending, saving, budgeting, investing, ands much more.</p>  
                     <DBankInviteButton className="mt-2 lg:-mt-18 lg:ml-7 2xl:-ml-10  ">Request Invite</DBankInviteButton>
                      </div>
      
                </div>  

          </div>



    </section>

</main>
)}
export default DBankIntro;