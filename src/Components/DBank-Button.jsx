

const DBankInviteButton = ({children , className =""}) => {


return(
<button className={`bg-linear-to-b from-PGreen500 to-PCyan400 text-NGray50 text-md font-bold rounded-full py-3 flex-none w-44 hover:cursor-pointer hover:bg-linear-to-b hover:from-PGreen500/80 hover:to-PCyan400/80  ${className}`}>{children}</button> 

)

}

export default DBankInviteButton