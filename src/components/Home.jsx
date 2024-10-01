import "../styles/Home.css";
import "animate.css";

export default function Home() {
  return (
    <div>
      <div className="Home__Main">
      <div className="text__ad">
        <h3 className="animate__animated animate__backInUp">
          Ahmet Batuhan Tanrıöver
        </h3>
        <p className="animate__animated animate__backInUp animate__delay-1s">
          Front end developer
        </p>
      </div>
      <div className="img"></div>
    </div>
    <div className="slide">
      <h3>BİLİNEN TEKNOLOJİLER</h3>
      <div className="container">
          <div className="marquee">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JAVASCRİPT</span>
            <span>REACT</span>
            <span>NEXT.JS</span>
          </div>

      </div>
    </div>
    </div>
  
  );
}
