const DBankModal = ({links}) => {

return (
<div className="absolute top-16  left-0 bottom-0 right-0  z-40 bg-linear-to-b from-PBlue950 to-NGray100/10 ">
   <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-sm shadow-md shadow-PBlue950 z-50 w-[90%] max-w-sm border ">
  <ul className="flex flex-col gap-5 justify-center items-center mt-8 mb-8">
  {links.map((link,index) => (
  <li key={index} className="font-PublicSans text-PBlue950 text-lg">{link}</li>
  ))}
  </ul>

</div>
</div>


)
}
export default DBankModal