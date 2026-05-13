// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "themes of work in lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-article-with-mark-edwards-debates-significance-of-clinical-phenotype-and-how-circuit-level-understanding-is-critical-to-optimise-treatment-strategies-in-patients-between-nothing-and-everything-phenomenology-in-movement-disorders",
          title: 'Article with Mark Edwards debates significance of clinical phenotype and how circuit-level understanding...',
          description: "",
          section: "News",},{id: "news-symposium-on-the-neuroscience-of-expert-performance-at-the-royal-college-of-music-co-organised-with-maria-herrojo-ruiz-and-katja-kornysheva-many-thanks-to-the-panel-rcm-colleagues-and-our-multidisciplinary-audience-the-event-was-made-possible-by-outreach-grants-from-the-guarantors-of-brain-and-goldsmiths-university-of-london",
          title: 'Symposium on the Neuroscience of Expert Performance at the Royal College of Music,...',
          description: "",
          section: "News",},{id: "news-paper-in-nature-scientific-reports-discussing-whether-sensitive-markers-of-dexterity-could-be-biomarkers-for-different-stages-of-task-specific-dystonia",
          title: 'Paper in Nature Scientific Reports discussing whether sensitive markers of dexterity could be...',
          description: "",
          section: "News",},{id: "news-a-hot-topic-article-for-movement-disorders-showcased-scientific-work-by-smoulder-et-al-revealing-a-neural-basis-for-choking-under-pressure-informative-for-neurological-disorders-such-as-task-specific-dystonia",
          title: 'A hot topic article for Movement Disorders showcased scientific work by Smoulder et...',
          description: "",
          section: "News",},{id: "news-fast-forward-ucl-research-capital-investment-fund-rcif-have-a-awarded-us-a-grant-for-further-equipment-in-the-lab",
          title: ':fast_forward: UCL Research Capital Investment Fund (RCIF) have a awarded us a grant...',
          description: "",
          section: "News",},{id: "news-fast-forward-we-have-received-an-innovation-fund-award-from-the-national-brain-appeal-to-develop-scalable-motion-capture-systems-in-collaboration-with-neurogears",
          title: ':fast_forward: We have received an Innovation Fund Award from the National Brain Appeal...',
          description: "",
          section: "News",},{id: "news-congratulations-to-kate-on-being-awarded-a-prestigious-nihr-predoctoral-fellowship-to-advance-research-into-the-mechanistic-basis-of-neurophysiotherapy-interventions-for-dystonia",
          title: 'Congratulations to Kate on being awarded a prestigious NIHR Predoctoral Fellowship to advance...',
          description: "",
          section: "News",},{id: "news-at-advances-in-motor-learning-ii-11-12-december-mireia-and-issi-presented-decoding-rating-scales-in-movement-disorders-and-marta-and-iván-summarised-ongoing-work-on-building-scalable-tech-for-human-behavioural-sampling-anna-delivered-a-keynote-on-task-specific-dystonia-and-took-part-in-a-panel-discussion-on-how-to-better-integrate-moderm-ml-methods-and-technologies-into-human-motor-science-in-halth-and-disease",
          title: 'At Advances in Motor Learning II (11–12 December). Mireia and Issi presented Decoding...',
          description: "",
          section: "News",},{id: "news-at-the-neurophysiological-bases-of-human-movement-16-17-december-king-s-college-london-anna-gave-a-talk-on-phenomenology-in-human-movement-disorders-and-took-part-in-a-panel-discussion-exploring-black-box-versus-mechanistic-modes-of-scientific-discovery",
          title: 'At the Neurophysiological Bases of Human Movement (16–17 December, King’s College London). Anna...',
          description: "",
          section: "News",},{id: "news-award-news-our-collaboration-with-neurogears-on-scalable-behavioural-acquisition-systems-has-been-recognised-with-the-meta-reality-labs-motor-learning-and-ethical-design-award-congratulations-to-iván-and-marta-for-showcasing-the-work-so-well",
          title: '🎉 Award news! Our collaboration with NeuroGEARS on scalable behavioural acquisition systems has...',
          description: "",
          section: "News",},{id: "news-anna-gave-a-talk-the-fragile-art-of-skill-at-the-ucl-centre-for-neurorehabilitation-monthly-seminar-this-work-brought-together-insights-into-how-skills-are-learned-how-they-break-down-in-disease-and-how-they-might-be-restored",
          title: 'Anna gave a talk The Fragile Art of Skill at the UCL Centre...',
          description: "",
          section: "News",},{id: "news-it-was-great-to-visit-the-champalimaud-centre-for-the-unknown-to-give-a-talk-during-cosyne-many-thanks-to-marcelo-mendonça-joaquim-alves-da-silva-and-colleagues-for-the-warm-welcome-an-outstanding-and-beautiful-centre-for-interdisciplinary-science-and-neurotechnology",
          title: 'It was great to visit the Champalimaud Centre for the Unknown to give...',
          description: "",
          section: "News",},{id: "news-a-busy-period-for-lab-presentations-anna-and-iván-presented-recent-work-at-the-swc-gcnu-symposium-issi-will-be-presenting-at-the-upcoming-association-of-british-neurologists-annual-meeting-mireia-kate-and-issi-will-also-be-presenting-at-the-european-academy-of-neurology-congress-in-geneva",
          title: 'A busy period for lab presentations: Anna and Iván presented recent work at...',
          description: "",
          section: "News",},{id: "news-anna-will-present-current-lab-work-at-the-ucl-queen-square-movement-disorders-centre-symposium-which-brings-together-researchers-and-clinicians-to-discuss-advances-in-understanding-and-treating-movement-disorders",
          title: 'Anna will present current lab work at the UCL Queen Square Movement Disorders...',
          description: "",
          section: "News",},{id: "news-anna-will-speak-at-the-international-congress-of-parkinson-s-disease-and-movement-disorders-in-seoul-korea-on-the-neural-bases-of-dystonia",
          title: 'Anna will speak at the International Congress of Parkinson’s Disease and Movement Disorders...',
          description: "",
          section: "News",},{id: "projects-computing-phenotype-in-movement-disorders",
          title: 'computing phenotype in movement disorders',
          description: "learning invariant features, characterising variability",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-bridging-pixel-precision-and-clinical-intuition",
          title: 'bridging pixel precision and clinical intuition',
          description: "quantification of movement disorders",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-units-of-rehabilitation",
          title: 'units of rehabilitation',
          description: "physiotherapy and dystonia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-generalised-dystonia",
          title: 'generalised dystonia',
          description: "reverse engineering causal features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-task-specific-dystonia",
          title: 'task-specific dystonia',
          description: "how motor control science informs management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
