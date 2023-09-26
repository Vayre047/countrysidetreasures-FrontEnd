import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    const linkedin = "../../../public/Images/linkedin.png"
    const github = "../../../public/Images/github.png";

    return(
        <div className="bg-white shadow dark:bg-gray-800 w-full mx-auto footerPosition">
            <div className="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap justify-end mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="https://www.linkedin.com/in/tom%C3%A1s-borda-de-%C3%A1gua-806473144/" className="mr-4 hover:underline md:mr-6 ">
                            <img src={linkedin} alt="LinkedIn Profile" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Vayre047" className="mr-4 hover:underline md:mr-6">
                            <img src={github} alt="Github Profile" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;