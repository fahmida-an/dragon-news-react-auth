import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header'
import LeftSideBar from '../Shared/LeftSideBar/LeftSideBar';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideBar from '../Shared/RightSideBar/RightSideBar';
import LatestNews from './LatestNews';
import NewsCard from './NewsCard/NewsCard';
const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-4'>
                <div className>
                <LeftSideBar></LeftSideBar>
                </div>
                
                {/* News container */}
                <div className='col-span-2 p-4'>

                    <h2 className='mt-3 mb-8 font-bold text-2xl'>Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}>

                        </NewsCard>)
                    }
                    
                </div>

                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;