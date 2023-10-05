
import headerImage from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div>
         <div className='items-center space-y-3 mt-12 mb-8'>
            <img className='mx-auto ' src={headerImage} alt="" />
            <p className='text-center text-dark1 text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-dark2 text-center text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
        <div className='flex bg-gray h-20 justify-center items-center rounded-none'>
            <button className='btn bg-pink1 text-white ml-4 border-none'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className='mr-12 text-dark2 font-semibold' to="/">Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className='mr-12 text-dark2 font-semibold'  to="/">Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className='mr-12 text-dark2 font-semibold' to="/">Match Highlights: Germany vs Spain — as it happened   !</Link>
            </Marquee>

        </div>
       </div>

    );
};

export default Header;