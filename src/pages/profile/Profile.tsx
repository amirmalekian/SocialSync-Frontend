import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profile from "../../assets/users/w3.jpg";
import bg from "../../assets/bg/bg3.jpg";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__images">
        <img src={bg} alt="" className="profile__images-cover" />
        <img src={profile} alt="" className="profile__images-profileImg" />
      </div>
      <div className="profile__container">
        <div className="profile__container__userInfo">
          <div className="profile__container__userInfo-left">
            <a href="https://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="profile__container__userInfo-center">
            <span>Jane Doe</span>
            <div className="profile__container__userInfo_center-info">
              <div className="profile__container__userInfo_center-item">
                <PlaceIcon />
                <span>IRI</span>
              </div>
              <div className="profile__container__userInfo_center-item">
                <LanguageIcon />
                <span>socialsync.ir</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="profile__container__userInfo-right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
