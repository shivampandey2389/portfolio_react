const Projects = () =>{
  const projects=[
    {
      projectSrc:"./projects/project-1.png",
      projectName:"project-1.png",
      projectLink:"https://portfolio-eigth-neon.vercel.app/"
    },{
       projectSrc:"./projects/project-2.png",
      projectName:"project-2.png",
      projectLink:"https://logex-umber.vercel.app/"
    },{
       projectSrc:"./projects/project-3.png",
      projectName:"project-3.png",
      projectLink:"https://portfolio-henna-chi-52.vercel.app/",
    },{
       projectSrc:"./projects/project-4.png",
      projectName:"project-4.png",
      projectLink:"https://e-commerce-two-inky-63.vercel.app/"
    }
  ]
  return(
   <div className="flex flex-col items-start justify-start w-[80%] my-[20px]">
    <h1 className="text-white text-[45px] tracking-wider">Projects</h1>

    <div className="flex  items-center justify-center w-[100%] my-5">
      <div className="flex flex-wrap justify-center gap-5.5 w-[min(100%,800px)]">
       
       {
        projects.map((project)=>{
          return(
            <div className="p-2.5 rounded-2xl hover:backdrop-blur-2xl" key={project.projectName}>
              <a href={project.projectLink} target="_blank">
              <img src={project.projectSrc} className="transition duration-300 rounded-2xl hover:scale-[1.1]" loading="lazy" alt={project.projectName}/>
              </a>
            </div>
          )
        })
        
       }
        

      </div>
      </div>

   </div>
  )
}
export default Projects