import logolight from "../assets/logo-light.png"
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
  return (
    <nav className="h-[70px] border-b border-b-[rgba(255,255,255,0.05)]  border-solid backdrop-blur-lg">
        <div className="Container lg:mx-[75px] px-[12px] md:mx-0 bg-transparent h-full">
            <div className="nav-row flex justify-between items-center h-full">
                <a href="#" className="logo w-[100px]"><img src={logolight} alt="" /></a>
                <div className="navlinks text-white">
                    <ul className="nav-list flex justify-center items-center">
                        <li><a href="" className="nav">Demos&nbsp;<i class="bi bi-caret-down-fill text-[8px]"></i></a></li>
                        <li><a href="" className="nav">Pages&nbsp;<i class="bi bi-caret-down-fill text-[8px]"></i></a></li>
                        <li><a href="" className="nav">Portfolio&nbsp;<i class="bi bi-caret-down-fill text-[8px]"></i></a></li>
                        <li><a href="" className="nav">Blogs&nbsp;<i class="bi bi-caret-down-fill text-[8px]"></i></a></li>
                        <li><a href="" className="nav">Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-btn text-white px-[18px] py-[8px] rounded-[5px]">
                    <a href="#"><span className="text">Let's contact</span></a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header