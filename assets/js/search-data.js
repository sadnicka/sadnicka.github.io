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
    },{id: "news-a-commissioned-practice-pointer-on-dystonia-in-the-bmj-the-late-adam-kalinowski-skillfully-sculpted-content-we-hope-it-will-increase-awareness-of-dystonia-and-offer-a-clinical-roadmap-for-patient-management",
          title: 'A commissioned practice pointer on dystonia in the BMJ. The late Adam Kalinowski...',
          description: "",
          section: "News",},{id: "news-the-similarity-of-eyeblink-conditioning-behaviour-in-dystonia-and-controls-is-against-a-global-deficit-in-cerebellar-learning-published-in-movement-disorders-we-discuss-how-these-findings-inform-models-of-cerebellar-involvement-in-the-pathophysiology-of-dystonia-a-research-digest-also-available-in-dystonia-matters-written-for-dystonia-uk",
          title: 'The similarity of eyeblink conditioning behaviour in dystonia and controls is against a...',
          description: "",
          section: "News",},{id: "news-how-is-task-specific-dystonia-represented-in-the-brain-a-collaboration-with-jörn-diedrichsen-in-which-we-explored-a-range-of-traditional-spatial-analysis-and-state-of-the-art-multivariate-analyses-to-search-for-reliable-neural-correlates-within-sensorimotor-cortex",
          title: 'How is task-specific dystonia represented in the brain? A collaboration with Jörn Diedrichsen...',
          description: "",
          section: "News",},{id: "news-dystonia-special-podcast-as-part-of-the-dystonia-special-series-for-the-movement-disorders-society-podcast-i-discussed-the-neural-underpinnings-of-dystonia-with-francesca-morgante",
          title: 'Dystonia Special Podcast! As part of the dystonia special series for the Movement...',
          description: "",
          section: "News",},{id: "news-a-huge-thank-you-to-all-authors-in-our-book-basic-and-translational-applications-of-the-network-theory-in-dystonia-just-published-with-springer-co-edited-with-asif-shaikh-it-was-fascinating-to-collate-this-range-of-experimental-papers-and-reflections-from-an-international-panel-of-experts-that-lead-research-on-this-important-topic",
          title: 'A huge thank you to all authors in our book Basic and Translational...',
          description: "",
          section: "News",},{id: "news-new-article-with-mark-edwards-debating-significance-of-clinical-phenotype-and-how-circuit-level-understanding-is-critical-to-optimise-treatment-strategies-in-patients-between-nothing-and-everything-phenomenology-in-movement-disorders",
          title: 'New article with Mark Edwards debating significance of clinical phenotype and how circuit-level...',
          description: "",
          section: "News",},{id: "news-symposium-on-the-neuroscience-of-expert-performance-at-royal-college-of-music-co-organised-with-maria-herrojo-ruiz-and-katja-kornysheva-thank-you-to-the-panel-rcm-colleagues-and-multi-disciplinary-audience-made-possible-by-outreach-grants-from-the-guarantors-of-brain-and-goldsmiths-university-of-london",
          title: 'Symposium on the Neuroscience of Expert Performance at Royal College of Music co-organised...',
          description: "",
          section: "News",},{id: "news-in-a-new-paper-in-nature-scientific-reports-we-discuss-whether-sensitive-markers-of-dexterity-could-be-biomarkers-for-different-stages-of-task-specific-dystonia",
          title: 'In a new paper in Nature Scientific Reports we discuss whether sensitive markers...',
          description: "",
          section: "News",},{id: "news-at-the-international-congress-of-parkinson-s-disease-and-movement-disorders-in-philadelphia-anna-debating-the-modern-relevance-of-phenomenology-within-session-the-neurology-of-visual-recognition-chaired-by-steven-frucht-and-marina-koning-tijssen",
          title: 'At the International Congress of Parkinson’s Disease and Movement Disorders in Philadelphia! Anna...',
          description: "",
          section: "News",},{id: "news-a-hot-topic-article-for-movement-disorders-showcasing-scientific-work-by-smoulder-et-al-revealing-a-neural-basis-for-choking-under-pressure-informative-for-neurological-disorders-such-as-task-specific-dystonia",
          title: 'A hot topic article for Movement Disorders showcasing scientific work by Smoulder et...',
          description: "",
          section: "News",},{id: "news-check-out-our-review-of-metacognition-and-functional-neurological-disorder",
          title: 'Check out our review of metacognition and functional neurological disorder!',
          description: "",
          section: "News",},{id: "news-welcome-to-mireia-coll-who-joins-the-team-as-a-research-physiotherapist",
          title: 'Welcome to Mireia Coll who joins the team as a research physiotherapist!',
          description: "",
          section: "News",},{id: "news-congratulations-to-kate-on-the-birth-of-aleksander-kate-will-be-on-maternity-leave-for-one-year",
          title: 'Congratulations to Kate on the birth of Aleksander! Kate will be on maternity...',
          description: "",
          section: "News",},{id: "news-at-the-inaugural-ucl-dystonia-symposium-anna-part-of-panel-discussions-on-how-to-best-advance-dystonia-research-and-talking-about-task-specific-dystonia",
          title: 'At the inaugural UCL Dystonia Symposium! Anna part of panel discussions on how...',
          description: "",
          section: "News",},{id: "news-fast-forward-thank-you-to-ucl-research-capital-investment-fund-rcif-for-their-grant-for-further-equipment-in-the-lab",
          title: ':fast_forward: Thank you to UCL Research Capital Investment Fund (RCIF) for their grant...',
          description: "",
          section: "News",},{id: "news-fast-forward-thank-you-to-the-national-brain-appeal-for-awarding-us-an-innovation-fund-to-start-developing-motion-capture-systems-for-the-nhs-in-collaboration-with-neurogears",
          title: ':fast_forward: Thank you to the National Brain Appeal for awarding us an Innovation...',
          description: "",
          section: "News",},{id: "news-congratulations-to-issi-and-zoe-for-their-commission-within-the-ucl-trellis-arbor-art-programme",
          title: 'Congratulations to Issi and Zoe for their commission within the UCL Trellis Arbor...',
          description: "",
          section: "News",},{id: "news-at-the-european-academy-of-neurology-in-helsinki-iván-presenting-bridging-pixel-precision-and-clinical-intuition-with-2d-pose-estimation-and-kate-has-an-eposter-getting-the-right-care-physiotherapy-for-patients-with-dystonia-in-the-united-kingdom",
          title: 'At the European Academy of Neurology in Helsinki! Iván presenting ‘Bridging Pixel Precision...',
          description: "",
          section: "News",},{id: "news-anna-will-be-giving-a-keynote-talk-on-task-specific-dystonia-at-advances-in-motor-learning-ii-11-12-december-university-of-birmingham-she-will-also-present-the-lab-s-current-work-at-neurophysiological-bases-of-human-movement-14-15-december-king-s-college-london",
          title: 'Anna will be giving a keynote talk on task-specific dystonia at Advances in...',
          description: "",
          section: "News",},{id: "news-congratulations-to-kate-sampson-on-being-awarded-a-prestigious-nihr-predoctoral-fellowship-to-advance-her-work-developing-the-science-behind-neurophysiotherapy-treatments-in-dystonia",
          title: 'Congratulations to Kate Sampson on being awarded a prestigious NIHR Predoctoral Fellowship to...',
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
