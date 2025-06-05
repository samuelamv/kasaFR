import '../styles/BannerHome.scss';
import bannerImage from '../assets/4706e7dde270fc8fc902a1eb738458e7b29c1899.jpg' // remplace avec ton image

const BannerHome = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner_image" />
      <div className="banner_overlay" />
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default BannerHome
