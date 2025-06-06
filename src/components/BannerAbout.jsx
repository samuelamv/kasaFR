import '../styles/BannerAbout.scss';
import bannerImage from '../assets/56fae17eb9995860bb6384a77ca7dc9bf52da3be.jpg' // remplace avec ton image

const BannerAbout = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner_image" />
      <div className="banner_overlay" />
    </div>
  )
}

export default BannerAbout