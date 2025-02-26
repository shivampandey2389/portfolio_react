import Projects from "./project.jsx";
import Skills from "./Skills.jsx";
const MainBody =() =>{
  return(
    <>
      <div className="flex flex-col items-center gap-5 w-[80%] mt-[100px] z-0">
      <div>
        <img src="./profile_picture.png" alt="profile" />
      </div>
      <div className="text-white flex flex-col items-center gap-3.5 leading-7.5">
      <p class="text-[40px] tracking-wider animate-bounce max-sm:text-[30px]">Shivam Pandey</p>
        <span className="text-white text-xl border-2 border-[#969696] px-3 py-2 rounded-3xl cursor-pointer hover:bg-[#5f5a5a]">Frontend developer</span> 
      </div>
      <div className="w-[min(800px,100%)]">
        <p className="break-word text-xl text-[#bcbcbc] text-center">I specialize in crafting beautiful, responsive, and user-friendly web experiences using HTML, CSS, JavaScript, and React. With a strong foundation in Tailwind CSS, Sass, and modern UI frameworks, I build sleek, high-performance websites that bring ideas to life.</p>
      </div>
      <button className="text-white text-2xl px-4 py-4 rounded-xl cursor-pointer bg-[#27b84d] hover:bg-[#77d073]">
        <a href="./Resume - Shivam Pandey.pdf" target="_blank" className="flex gap-2 items-center"><i class="fa-solid fa-file"></i>
        <span>View Resume</span></a>
      </button>
      </div>
      <Skills/>
      <Projects/>
    </>
    

  )
}
export default MainBody;