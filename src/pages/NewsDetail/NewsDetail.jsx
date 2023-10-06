import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useEffect, useState } from "react";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetail = () => {
  const [newsCard, setNewsCard] = useState({});
  const news = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findNews = news.find((news) => news._id === id);
    setNewsCard(findNews);
  }, [id, news]);

  // news.find(news._id === id)
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div>
          <img
            className=" md:h-[500px] md:w-[700px] lg:h-[700px] lg:w-[1380px] mx-auto py-10"
            src={newsCard.image_url}
            alt=""
          />
        </div>
        <h1 className="font-bold text-2xl">{newsCard.title}</h1>
        <p className="py-10">{newsCard.details}</p>
      </div>

      <div>
        <RightSideBar></RightSideBar>
      </div>
      </div>
    </div>
  );
};

export default NewsDetail;
