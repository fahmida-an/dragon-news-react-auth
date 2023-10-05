import Header from '../Shared/Header/Header'
import LeftSideBar from '../Shared/LeftSideBar/LeftSideBar';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideBar from '../Shared/RightSideBar/RightSideBar';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className='grid grid-cols-4'>
                <div className='border'>
                <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-span-2 border'>
                    <p>News coming soon</p>
                </div>

                <div className='border'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;