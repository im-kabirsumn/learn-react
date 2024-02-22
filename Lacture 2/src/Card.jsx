import openware from './assets/openware.jpg';

const Card = () => {
  return (
    <div className="card">
      <img src={openware} className="card-image" />
      <h2>Openware</h2>
      <p> The software engineering leader of Cryptocurrency Exchange & Blockchain infrastructure. Committed to providing innovative and reliable solutions to our clients since 2009.</p>
      <div className="site-link">
        <a href="https://www.openware.com/">Openware.com</a>
      </div>
    </div>
  );
};

export default Card;
