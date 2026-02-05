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
    },{id: "news-new-article-with-mark-edwards-debating-significance-of-clinical-phenotype-and-how-circuit-level-understanding-is-critical-to-optimise-treatment-strategies-in-patients-between-nothing-and-everything-phenomenology-in-movement-disorders",
          title: 'New article with Mark Edwards debating significance of clinical phenotype and how circuit-level...',
          description: "",
          section: "News",},{id: "news-symposium-on-the-neuroscience-of-expert-performance-at-the-royal-college-of-music-co-organised-with-maria-herrojo-ruiz-and-katja-kornysheva-many-thanks-to-the-panel-rcm-colleagues-and-our-multidisciplinary-audience-the-event-was-made-possible-by-outreach-grants-from-the-guarantors-of-brain-and-goldsmiths-university-of-london",
          title: 'Symposium on the Neuroscience of Expert Performance at the Royal College of Music,...',
          description: "",
          section: "News",},{id: "news-in-a-new-paper-in-nature-scientific-reports-we-discuss-whether-sensitive-markers-of-dexterity-could-be-biomarkers-for-different-stages-of-task-specific-dystonia",
          title: 'In a new paper in Nature Scientific Reports we discuss whether sensitive markers...',
          description: "",
          section: "News",},{id: "news-a-hot-topic-article-for-movement-disorders-showcasing-scientific-work-by-smoulder-et-al-revealing-a-neural-basis-for-choking-under-pressure-informative-for-neurological-disorders-such-as-task-specific-dystonia",
          title: 'A hot topic article for Movement Disorders showcasing scientific work by Smoulder et...',
          description: "",
          section: "News",},{id: "news-fast-forward-thank-you-to-ucl-research-capital-investment-fund-rcif-for-their-grant-for-further-equipment-in-the-lab",
          title: ':fast_forward: Thank you to UCL Research Capital Investment Fund (RCIF) for their grant...',
          description: "",
          section: "News",},{id: "news-fast-forward-thank-you-to-the-national-brain-appeal-for-awarding-us-an-innovation-fund-to-start-developing-scalable-motion-capture-systems-in-collaboration-with-neurogears",
          title: ':fast_forward: Thank you to the National Brain Appeal for awarding us an Innovation...',
          description: "",
          section: "News",},{id: "news-congratulations-to-kate-on-being-awarded-a-prestigious-nihr-predoctoral-fellowship-to-advance-research-into-the-mechanistic-basis-of-neurophysiotherapy-interventions-for-dystonia",
          title: 'Congratulations to Kate on being awarded a prestigious NIHR Predoctoral Fellowship to advance...',
          description: "",
          section: "News",},{id: "news-looking-forward-to-advances-in-motor-learning-ii-11-12-december-university-of-birmingham-mireia-and-marta-will-present-decoding-rating-scales-in-movement-disorders-marta-and-iván-will-update-on-building-scalable-tech-for-behavioural-sampling-anna-will-deliver-a-keynote-in-the-disorders-section-discussing-the-development-and-application-of-scalable-technologies-in-human-movement-science",
          title: 'Looking forward to Advances in Motor Learning II (11–12 December, University of Birmingham)....',
          description: "",
          section: "News",},{id: "news-upcoming-conference-neurophysiological-bases-of-human-movement-16-17-december-king-s-college-london-anna-giving-a-talk-on-phenomenology-in-human-movement-disorders-and-debating-black-box-versus-mechanistic-modes-of-scientific-discovery",
          title: 'Upcoming conference: Neurophysiological Bases of Human Movement (16–17 December, King’s College London). Anna...',
          description: "",
          section: "News",},{id: "news-award-win-our-work-on-scalable-behavioural-acquisition-systems-has-been-recognised-with-the-meta-reality-lab-motor-learning-and-ethical-design-award-in-collaboration-with-neurogears-congratulations-to-iván-and-marta-for-a-superb-poster-and-presentation-showcasing-this-work",
          title: '🎉 Award win! Our work on scalable behavioural acquisition systems has been recognised...',
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
