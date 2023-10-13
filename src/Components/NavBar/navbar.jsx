import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar(){
    const homeImage = '../../../Images/power.png';

    return(
        <div>
            <nav className="bg-white border-green-100 dark:bg-green-600 flex items-center py-4">
                <div className='ps-8'>
                    <Link to="/" class="flex justify-start w-1/6">
                        <img src={homeImage} class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Country Side Treasures</span>
                    </Link>
                </div>
                    <div class="pl-12 flex justify-end w-4/6 gap-x-8">
                        <Link to="/signup" class="block mr-6 text-sm text-white-600 dark:text-white-500 hover:underline">
                            <button type="submit" className="block border border-teal-400 bg-teal-400 hover:border-teal-800 hover:bg-teal-800 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Register</button>
                        </Link>
                        <Link to="/login" class="mr-6 text-sm text-white-600 dark:text-white-500 hover:underline">
                            <button type="submit" className="block border border-teal-400 bg-teal-400 hover:border-teal-800 hover:bg-teal-800 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">LogIn</button>
                        </Link>
                        <Link to="/aboutus" class="text-sm text-white-600 dark:text-white-500 hover:underline">
                            <button type="submit" className="block border border-teal-400 bg-teal-400 hover:border-teal-800 hover:bg-teal-800 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">About Us</button>
                        </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;