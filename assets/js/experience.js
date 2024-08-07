AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Joint Technical Coordinator",
    cardImage: "assets/images/experience-page/prakarsh24.png",
    place: "Prakarsh'24",
    time: "(Jan - Feb, 2024)",
    desp: "<li>Worked here as lead to manage and assign all the technical and non-technical events to different team of different department and feilds according to there skills. Had a team of 80 people working over 20 different events, which gave me a strong base to manage huge teams with different ideas.</li>",
  },
  {
    title: "Event Coordinator",
    cardImage: "assets/images/experience-page/openr.webp",
    place: "Open-R'24",
    time: "(Jan - Feb, 2024)",
    desp: "<li>Hosted an open event under Prakarsh’24 on the theme ”Rural Development” where the participants came up with different project ideas for rural development, and I got the sponsorship for this event from the SSIP Cell under GTU.</li>",
  },
  {
    title: "Tech Event Head",
    cardImage: "assets/images/experience-page/prakarsh23.png",
    place: "Prakarsh'23",
    time: "(Jan - April, 2023)",
    desp: "<li>Hosted a technical event named ”The Real Talk”, where the participants have to undergo allthe technical rounds that are held in an actual Placement Interview.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


