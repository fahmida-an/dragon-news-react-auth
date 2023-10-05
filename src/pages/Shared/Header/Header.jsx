
import headerImage from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='items-center space-y-3 mt-12 mb-8'>
            <img className='mx-auto ' src={headerImage} alt="" />
            <p className='text-center text-dark1 text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-dark2 text-center text-xl'>{moment().format('dddd, MMMM D, YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;