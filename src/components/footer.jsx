const Footer = () =>{
  return(
    <div className="w-[100%] flex flex-wrap items-center justify-between bg-[#1B1B1B]  h-50 p-[30px] max-sm:justify-center max-sm:gap-0">
      <div className="text-[#9C9C9C] flex items-center gap-3 text-3xl">
        <a href="https://www.instagram.com/_shivampandeyy__/" target="_blank" className="hover:text-[#e7e7e7]"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/shivam-pandey-0840462a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-[#e7e7e7]"><i class="fa-brands fa-linkedin"></i></a>
        
        <a href="https://github.com/shivampandey2389" target="_blank" className="hover:text-[#e7e7e7]"><i class="fa-brands fa-github"></i></a>
        <a href="https://x.com/shivampandey053" target="_blank" className="hover:text-[#e7e7e7]"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
      <div>
        <span className="text-[#9C9C9C] text-xl">© 2025 | Shivam Pandey</span>
      </div>
    </div>
  )
}
export default Footer