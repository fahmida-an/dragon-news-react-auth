import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div>
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

export default LatestNews;