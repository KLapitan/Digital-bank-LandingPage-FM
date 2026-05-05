const DBankIntro =({showLinks}) => {

return(
<main className="h-auto ">
    <section className="h-screen font-PublicSans ">   

    {/* container of hero image and hero detail */}
          <div className="h-screen  relative overflow-hidden lg:h-165 lg:bg-NGray100 z-40 ">
                {/* large view */}
                  <picture className=" z-50 absolute lg:-top-56 lg:-right-40 lg:scale-85">
                    <img src="src/assets/images/image-mockups.png" alt="mockup" className="phone" />
                  </picture>

                {/* small view */}
                <picture className="lg:hidden z-40 absolute -top-38 ">
                    <img src="src/assets/images/image-mockups.png" className="w-full h-129" alt="mockup"  />
                  </picture>


                  {/* container of the phone to create the effect of phone passing through the section */}
              <div className="h-screen flex flex-col lg:flex-row-reverse w-full  bg-NGray50  lg:h-143   lg:overflow-hidden">
                   {/* bg-image of the phone  */}
                     <div className="lg:w-3xl h-86 lg:h-screen bg-[url('src/assets/images/bg-intro-mobile.svg')] bg-no-repeat bg-cover lg:bg-[url('src/assets/images/bg-intro-desktop.svg')]  lg:bg-size-[135%] lg:bg-bottom-left  lg:overflow-hidden  border"></div>

                      {/* details  */}
                      <div className="w-auto h-auto flex flex-col  items-center gap-4 mt-5 lg:gap-8 lg:justify-center   lg:w-xl lg:-mr-10">
                            <h2 className=" text-3xl w-75 border lg:text-5xl text-center font-light tracking-tight text-PBlue950 lg:text-left lg:w-100 lg:ml-10">Next generation digital banking</h2>

                            <p className="text-center   text-md p-2 tracking-tight leading-5 text-NGray600 lg:text-left lg:w-95 ">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
                              for spending, saving, budgeting, investing, ands much more.</p>  
                      </div>

                </div>  
                </div>  

          
    </section>

</main>
)}
export default DBankIntro;