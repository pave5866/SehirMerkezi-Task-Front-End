import "./aboutUs.css";

export default function AboutUs() {
  const cards = [
    {
      number: 1,
      title: "Mission",
      description:
        "It makes people at ease and feel like they want to open up.",
    },
    {
      number: 2,
      title: "Motivaton",
      description: "The perfect mix of art that complements the room's style.",
    },
    {
      number: 3,
      title: "Vision",
      description:
        "Along with a healthy dose of negative space to give the eyes spots to rest.",
    },
    {
      number: 4,
      title: "Goal",
      description: "Art that has meaning to the people who live in the space,",
    },
  ];
  return (
    <div id="About" className="container">
      <div className="about">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Comfort is key and how you feel about your chair will affect how you{" "}
          <br />
          feel and your mood.
        </p>
      </div>
      <div className="contents">
        <div className="about-card-grid">
          {cards.map((card, i) => (
            <div key={i} className="about-card">
              <div className="card-number">{card.number}</div>
              <div className="card-title">{card.title}</div>
              <p className="card-description">{card.description} </p>
            </div>
          ))}
        </div>
        <div className="img-container-about">
          <div className="images">
            <img className="about-img-1" src="/img2.png" alt="" />
            <img className="about-img-2" src="/img3.png" alt="" />
          </div>

          <div>
            <img className="about-img-3" src="/img4.png" alt="" />
            <img className="about-img-4" src="/img5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
