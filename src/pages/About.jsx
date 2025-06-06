import BannerAbout from '../components/BannerAbout'
import AboutAccordion from '../components/Dropdown'

function About() {
  return (
    <div className="about">
      <BannerAbout />
      <AboutAccordion />
    </div>
  );
}

export default About;