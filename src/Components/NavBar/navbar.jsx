import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar(){
    const homeImage = '../../../public/Images/power.png';

    return(
        <div>
            <nav className="bg-white border-green-200 dark:bg-green-400">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Country Side Treasures</span>
                    </Link>
                    <div class="max-w-screen-xl px-4 py-3 mx-auto">
                        <div class="flex items-center">
                            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <Link href="#" class="text-blue-600 dark:text-blue-500 hover:underline" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Company</Link>
                                </li>
                                <li>
                                    <Link href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Team</Link>
                                </li>
                                <li>
                                    <Link href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Features</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <Link to="/signup" class="mr-6 text-sm text-blue-600 dark:text-blue-500 hover:underline">Resgister</Link>
                        <Link to="/login" class="text-sm text-blue-600 dark:text-blue-500 hover:underline">LogIn</Link>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700">
                
            </nav>

        </div>
    );
}

export default NavBar;