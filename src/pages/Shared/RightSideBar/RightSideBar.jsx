import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="mt-3 mb-8 mx-3 font-bold text-2xl">Login With</h2>
        <button className="btn btn-outline w-full mb-3 hover:border-blue hover:bg-white hover:text-blue">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full hover:border-blue hover:bg-white hover:text-blue">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      <div className="p-4">
        <h2 className="my-8 text-2xl font-bold mx-3">Find Us On</h2>
        <a
          className="flex items-center p-4 text-lg border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-2"></FaFacebook>
          <span>Facebook</span>
        </a>

        <a className="p-4 flex items-center text-lg border-x" href="">
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>

        <a
          className="p-4 flex items-center text-lg border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      <div className="p-4 space-y-3 mt-8">
        <h2 className="text-2xl font-bold mx-3">Q Zone</h2>
        <img className="mx-aut0" src={qzone1} alt="" />

        <img className="mx-auto" src={qzone2} alt="" />

        <img className="mx-auto" src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;
