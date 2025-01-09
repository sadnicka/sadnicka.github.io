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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
          section: "News",},{id: "news-how-is-task-specific-dystonia-represented-in-the-brain-a-collaboration-with-jörn-diedrichsen-in-which-we-explored-a-range-of-traditional-spatial-analysis-and-state-of-the-art-multivariate-analyses-to-search-for-reliable-neural-correlates-within-sensorimotor-cortex-published-in-brain",
          title: 'How is task-specific dystonia represented in the brain? A collaboration with Jörn Diedrichsen...',
          description: "",
          section: "News",},{id: "news-dystonia-special-podcast-as-part-of-the-dystonia-special-series-for-the-movement-disorders-society-podcast-i-discussed-the-neural-underpinnings-of-dystonia-with-francesca-morgante",
          title: 'Dystonia Special Podcast! As part of the dystonia special series for the Movement...',
          description: "",
          section: "News",},{id: "news-a-huge-thank-you-to-all-authors-in-our-book-basic-and-translational-applications-of-the-network-theory-in-dystonia-just-published-with-springer-co-edited-with-asif-shaikh-it-was-fascinating-to-collate-this-range-of-experimental-papers-and-reflections-from-an-international-panel-of-experts-that-lead-research-on-this-important-topic",
          title: 'A huge thank you to all authors in our book Basic and Translational...',
          description: "",
          section: "News",},{id: "news-symposium-on-the-neuroscience-of-expert-performance-at-royal-college-of-music-co-organised-with-maria-herrojo-ruiz-and-katja-kornysheva-thank-you-to-the-panel-rcm-colleagues-and-multi-disciplinary-audience-made-possible-by-outreach-grants-from-the-guarantors-of-brain-and-goldsmiths-university-of-london",
          title: 'Symposium on the Neuroscience of Expert Performance at Royal College of Music co-organised...',
          description: "",
          section: "News",},{id: "news-new-article-with-mark-edwards-debating-significance-of-clinical-phenotype-and-how-circuit-level-understanding-is-critical-to-optimise-treatment-strategies-in-patients-between-nothing-and-everything-phenomenology-in-movement-disorders",
          title: 'New article with Mark Edwards debating significance of clinical phenotype and how circuit-level...',
          description: "",
          section: "News",},{id: "news-musicians-with-dystonia-are-less-able-to-individuate-single-finger-movements-than-healthy-musicians-in-a-new-paper-in-nature-scientific-reports-we-discuss-whether-sensitive-markers-of-dexterity-could-be-biomarkers-for-different-phases-of-the-disorder",
          title: 'Musicians with dystonia are less able to individuate single finger movements than healthy...',
          description: "",
          section: "News",},{id: "news-don-t-miss-our-session-the-neurology-of-visual-recognition-at-the-international-congress-of-parkinson-s-disease-and-movement-disorders-in-philadelphia-chaired-by-steven-frucht-and-marina-koning-tijssen",
          title: 'Don’t miss our session ‘The neurology of visual recognition’ at the International Congress...',
          description: "",
          section: "News",},{id: "news-if-you-are-a-person-living-with-dystonia-in-the-uk-please-complete-our-survey-exploring-experiences-of-physiotherapy-the-uk-currently-lags-behind-many-regions-of-the-world-in-terms-of-the-quality-and-scope-of-physiotherapy-and-we-need-your-perspectives-on-how-we-can-try-and-improve-this-survey-open-until-mid-jan-2025",
          title: 'If you are a person living with dystonia in the UK please complete...',
          description: "",
          section: "News",},{id: "projects-computing-phenotype-in-movement-disorders",
          title: 'computing phenotype in movement disorders',
          description: "learning invariant features",
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
          description: "reverse engineering generalised dystonia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-task-specific-dystonia",
          title: 'task-specific dystonia',
          description: "how motor control science informs management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61.%73%61%64%6E%69%63%6B%61@%75%63%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6132-2773", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Xn4FfSoAAAAJ", "_blank");
        },
      },{
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
