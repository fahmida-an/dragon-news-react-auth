import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, details, image_url, author, _id } = news;
  return (
    <div>
      <div className="card w-full p-5 bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure>
          <img className="mb-3"
            src={image_url}
            alt=""
          />
        </figure>
            {
                details.length > 200 ?
                <p>{details.slice(0,200)} 
                <Link className="text-blue ml-2" to={`/news/${_id}`}>Read More...</Link>
                </p> :
                <p>{details}</p>
            }

      </div>
    </div>
  );
};

export default NewsCard;
