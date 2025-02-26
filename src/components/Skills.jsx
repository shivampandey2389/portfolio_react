const Skills = () =>{
  const imageTitle = [
    {
      url:"./skills/html.png",
      name:"HTML"
    },
    {
      url:"./skills/css-3.png",
      name:"CSS"
    },
    {
      url:"./skills/js.png",
      name:"Javascript"
    },
    {
      url:"./skills/react.png",
      name:"React"
    },
    {
      url:"./skills/sass.png",
      name:"Sass"
    },
    {
      url:"./skills/git.png",
      name:"git"
    },
    {
      url:"./skills/Tailwind CSS.png",
      name:"Tailwind CSS"
    }
  ]
  return (
  <div className="flex flex-col items-start justify-start w-[80%] my-[20px] mt-[40px]">
    <h1 className="text-white text-[45px] tracking-wider max-sm:text-4xl">Skills</h1>
      <div className="flex  items-center justify-center w-[100%] my-5">
      <div className="flex flex-wrap justify-center gap-2.5 w-[min(100%,800px)]">
        {
          imageTitle.map((item)=>{
            return(
              <div className="flex items-center gap-2.5  p-1.5 px-4.5 rounded-4xl bg-linear-to-r from-[#121212] to-[#1E1E1E] hover:animate-none cursor-pointer" key={item.name}>
              <img src={item.url} alt={item.name} className={item.name =="React"?"h-15 spinIn max-sm:h-5":"h-15 max-sm:h-5"} />
              <span className="text-3xl text-[#E0E0E0] max-sm:text-xl ">{item.name}</span>
            </div>
            )
          })
        }
      </div>
      </div>
  </div>
);
}

export default Skills;