import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    const linkedin = "../../../Images/linkedin.png"
    const github = "../../../Images/github.png";

    return(
        <div className="bg-white shadow dark:bg-green-600 w-full mx-auto footerPosition">
            <div className="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-white">© 2023 
                    <Link to="/"class="hover:underline">Country Side Treasures™</Link>. 
                    All Rights Reserved.
                </span>
                <div className="flex flex-wrap justify-end mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-x-4">
                    <Link to="https://www.linkedin.com/in/tom%C3%A1s-borda-de-%C3%A1gua-806473144/" className="mr-4 hover:underline md:mr-6" target="_blank">
                        <img src={linkedin} alt="LinkedIn Profile" />
                    </Link>
                    <Link to="https://github.com/Vayre047" className="mr-4 hover:underline md:mr-6" target="_blank">
                        <img src={github} alt="Github Profile" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;