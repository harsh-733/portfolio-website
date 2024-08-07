AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
   {
    langImage: "assets/images/techstack-page/Adobe Illustrator.png",
    langName: "Adobe Illustrator",
    langDesc: "<li>Adobe Illustrator is a vector graphics editor developed by Adobe Inc. that is used by designers and artists to create scalable graphics, such as logos, icons, illustrations, and typography, for print, web, video, and mobile</li>",
  },
   {
    langImage: "assets/images/techstack-page/Adobe InDesign.png",
    langName: "Adobe InDesign",
    langDesc: "<li>Adobe InDesign is a desktop publishing software developed by Adobe Inc. used to create and design layouts for print and digital media, including magazines, books, brochures, and interactive PDFs</li>",
  },
   {
    langImage: "assets/images/techstack-page/Adobe PhotoShop.png",
    langName: "Adobe PhotoShop",
    langDesc: "<li>Adobe Photoshop is a raster graphics editor developed by Adobe Inc. that is widely used for photo editing, image manipulation, and digital art creation</li>",
  },
  {
    langImage: "assets/images/techstack-page/figma.png",
    langName: "figma",
    langDesc: "<li>Figma is a cloud-based design tool used for interface design, prototyping, and collaborative design projects, enabling multiple users to work on the same design simultaneously</li>",
  },
  {
    langImage: "assets/images/techstack-page/Canva.webp",
    langName: "Canva",
    langDesc: "<li>Canva is an online graphic design tool that provides users with a wide range of templates, images, and a drag-and-drop interface to create professional-quality visuals for social media, presentations, posters, and more</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
