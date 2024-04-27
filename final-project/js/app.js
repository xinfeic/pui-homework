class ProjectModalManager {
    constructor() {
        this.projectContent = {
          'box-112': {
            courseInfo: "15-112 <br> THE JUMPER MAZE",
            description: "The Jumper Maze is a dynamic 2.5D maze adventure game featuring a leaderboard for the top 10 players. It includes randomly generated mazes and an integrated hint system for navigational assistance.",
            hashtags: ["#PythonDevelopment", "#GameProgramming", "#AlgorithmDesign"]
          },
          'box-131': {
            courseInfo: "66-131 <br> Water or Cola",
            description: "Water and Cola is an engaging VR journey heightening awareness of health and sports commercialization. This immersive educational VR experience encourages users to delve into incidents such as Cristiano Ronaldo's notable removal of coke, providing an experience to understand the cultural implications from diverse perspectives.",
            hashtags: ["#VirtualReality", "#UXDesign"]
          },
          'box-279': {
            courseInfo: "82-279 <br> A peek of Anti-War Messages through Anime",
            description: "This thesis provides an in-depth analysis of Hayao Miyazaki's anime up to 2022, examining his distinctive anti-war and environmentalist messages in response to pressing social issues.",
            hashtags: ["#MediaStudies", "#CulturalStudies"]
          },
          'box-432': {
            courseInfo: "05-432 <br> Bayes Cognitive Tutor",
            description: "The Bayesian Theorem Cognitive Tutor aids novices in mastering probability-related symbolic representations through nine distinct question types and 40 comprehensive problems, enhancing understanding and application skills in the Bayesian Theorem efficiently.",
            hashtags: ["#FrontEndDevelopment", "#LearningScience"]
          },
          'box-410': {
            courseInfo: "05-410 <br> Bias Buster",
            description: "The Bias Buster is an innovative Instagram Badge System designed to empower everyday users in identifying and mitigating harmful algorithmic biases. This system enables proactive community participation in refining algorithm accuracy and fairness on social media platforms.",
            hashtags: ["#UXDesign", "#AlgorithmBias"]
          },
          'box-XHack': {
            courseInfo: "XHack <br> Mood Mate",
            description: "MoodMate is a future wearable technology designed for children, featuring a personalized virtual friend (an agent) that detects their negative emotions and facilitates communication during disputes, promoting healthier interactions and emotional understanding among young users.",
            hashtags: ["#UXDesign", "#WearableTech"]
          },
          'box-490': {
            courseInfo: "36-490 <br> Speech & Language Longitudinal Study",
            description: "This research utilizes data from the 2021 Wisconsin Longitudinal Study and 2010 audio samples from the Cookie Theft picture task, employing regression analysis and machine learning to predict individuals' future cognitive status—whether normal or impaired—based on their language samples from a decade prior.",
            hashtags: ["#StatisticalAnalysis", "#MachineLearning", "#CognitiveScience"]
          }
        };
      }
      
  
    openModal(projectClass) {
        const content = this.projectContent[projectClass];
        if (content) {
            document.querySelector('.course-info').innerHTML = content.courseInfo;
            document.querySelector('.project-description').innerHTML = content.description;
            const hashtagsHTML = content.hashtags.map(hashtag => `<span class="hashtag">${hashtag}</span>`).join('');
            document.querySelector('.hashtags').innerHTML = hashtagsHTML;
            document.getElementById('jumperMazeModal').style.display = 'block';
        }
    }
  
    closeModal() {
        document.getElementById('jumperMazeModal').style.display = 'none';
    }
}
  
const modalManager = new ProjectModalManager();
  
document.addEventListener('DOMContentLoaded', function () {
    
    var btns = document.querySelectorAll('.box');
    var close = document.querySelector('.modal .close');
  
    btns.forEach(btn => {
      btn.onclick = function() {
        modalManager.openModal(this.classList[1]);
      };
    });
  
    close.onclick = function() {
      modalManager.closeModal();
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modalManager.closeModal();
      }
    };
});


// Greeting

// var typed = new Typed('#greeting', {
//     strings: ["Hi, I'm Xinfei", "Hi, I'm daydreaming"],
//     typeSpeed: 30
//   });

var typed = new Typed("#greeting", {
    strings: ["Xinfei", "Coding", "Modeling", "daydreaming"],
    typeSpeed: 150, 
    backSpeed: 150, 
    loop: true
})
  

