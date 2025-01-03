export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    // {
    //   id: 2,
    //   name: "Skills",
    //   href: "/skills",
    // },
    {
      id: 6,
      name: "Timeline",
      href: "/timeline",
    },
    // {
    //   id: 3,
    //   name: "Works",
    //   href: "/works",
    // },
    // {
    //   id: 4,
    //   name: "Projects",
    //   href: "/projects",
    // },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      name: "Blog",
      href: "https://velog.io/@cathx618/posts",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nextjs-original.svg",
      name: "NextJS",
      alt: "NextJs logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/shopify-liquid-logo.webp",
      name: "Liquid",
      alt: "Liquid logo",
      width: 321,
      height: 315,
    },
    {
      imgUrl: "/logos/shopify-b_w.webp",
      name: "Shopify",
      alt: "Shopify logo",
      width: 512,
      height: 512,
    },
    {
      imgUrl: "/logos/jquery-original.svg",
      name: "jQuery",
      alt: "jQuery logo",
      width: 150,
      height: 150,
    },
  ];
  const hobbies = [
    {
      title: "Drink tea",
      text: "Starting the morning with a cup of tea",
      classBg: "bg-tea",
    },
    {
      title: "Traveling and walking around",
      text: "Enjoying the exploration of new streets and alleys",
      classBg: "bg-journaling",
    },
    {
      title: "Learning new skills",
      text: "Exciting of discovering new techniques and knowledge",
      classBg: "bg-programming",
    },
    // {
    //   title: "Blog Writing",
    //   text: "To pen down my thoughts",
    //   classBg: "bg-blog",
    // },
    // {
    //   title: "Grocery Shopping",
    //   text: "Buy some of my favourite snacks",
    //   classBg: "bg-grocer",
    // },
    {
      title: "Taking pictures",
      text: "Having fun of capturing moments through photography",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "Personal Blog",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/blog-page.png",
      description:
        "A personal blog using NextJS and Notion API. It has code syntax highlight and image viewer.",
      techStack: [
        "NextJS",
        "TS",
        "TailwindCSS",
        "@notionhq/client",
        "highlight.js",
        "fslightbox-react",
      ],
      isUrl: true,
      urlLink: "https://blog.eazypau.com/",
      githubLink: "https://github.com/eazypau/my-blog",
    },
    {
      isReverse: true,
      title: "Order Management App",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/oms-order-page.png",
      description:
        "An order creation and management web app. It can be use to manage orders and prodcuts.",
      techStack: [
        "NextJS",
        "TS",
        "TailwindCSS",
        "daisyUI",
        "Firebase",
        "@tanstack/react-query",
        "@tanstack/react-table",
        "MomentJs",
        "formik",
        "lodash",
        "yup",
      ],
      isUrl: true,
      urlLink: "https://order-management-drab.vercel.app/",
      // urlLink: "https://order-creation-web-app.vercel.app/en",
      // githubLink: "https://github.com/eazypau/order-creation-web-app",
    },
    {
      isReverse: false,
      title: "Eazy Chat App",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/chatapp-ss.webp",
      description:
        "A scalable real-time chat app designed to send and receive messages from users.",
      techStack: [
        "Vue",
        "TS",
        "Vite",
        "TailwindCSS",
        "Firebase",
        "Pinia",
        "Vue-router",
      ],
      isUrl: true,
      urlLink: "https://eazy-chat-app.netlify.app/login",
      githubLink: "https://github.com/eazypau/chatApp",
    },
    {
      isReverse: true,
      title: "Spotify Clone",
      titleColor: "text-white",
      filterColor: "bg-slate-500 mix-blend-hard-light",
      imageUrl: "/project-ss/spotify-ss.webp",
      description:
        "A Spotify clone web app. Built to view your saved and created playlist. It also can control your Spotify app playback state.",
      techStack: [
        "Vue",
        "Vite",
        "TailwindCSS",
        "Vuex",
        "Vue-router",
        "Spotify Web API",
      ],
      isUrl: false,
      githubLink: "https://github.com/eazypau/spotify-clone-web",
    },
    {
      isReverse: false,
      title: "Shopping Cart",
      titleColor: "text-white",
      filterColor: "bg-slate-700 bg-opacity-60",
      imageUrl: "/project-ss/shopping-cart-ss.webp",
      description:
        "A static E-Commerce website to demonstrate the flow of a user purchase",
      techStack: ["React", "SASS", "React-router"],
      isUrl: true,
      urlLink: "https://eazypau.github.io/shopping-cart-react/#/",
      githubLink: "https://github.com/eazypau/shopping-cart-react",
    },
    {
      isReverse: true,
      title: "Kanban Board",
      titleColor: "text-white",
      filterColor: "bg-slate-800 bg-opacity-60",
      imageUrl: "/project-ss/kanban-board.webp",
      description: "A Kanban board to store the user's task list.",
      techStack: [
        "React",
        "SASS",
        "TailwindCSS",
        "Local Storage",
        "React-beautiful-dnd",
      ],
      isUrl: true,
      urlLink: "https://eazypau.github.io/kanban-board-react/",
      githubLink: "https://github.com/eazypau/kanban-board-react",
    },
    {
      isReverse: false,
      title: "Saloon Booking Web",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/saloonbooking-ss.webp",
      description:
        "A door-to-door saloon appointment booking website allows users to book their appointment at any time.",
      techStack: [
        "Vue",
        "TS",
        "Vite",
        "TailwindCSS",
        "Firebase",
        "Vuex",
        "Vue-router",
      ],
      isUrl: true,
      urlLink: "https://saloonbooking-95d49.web.app/",
      githubLink: "https://github.com/eazypau/saloonbooking",
    },
    {
      isReverse: true,
      title: "Tic Tac Toe",
      titleColor: "text-white",
      filterColor: "bg-zinc-700 mix-blend-hard-light",
      imageUrl: "/project-ss/tictactoe-ss.webp",
      description: "A game of tic tac toe in HTML, CSS, and JavaScript.",
      techStack: ["HTML", "CSS", "JavaScript"],
      isUrl: true,
      urlLink: "https://eazypau.github.io/tictactoe/",
      githubLink: "https://github.com/eazypau/tictactoe",
    },
  ];
  const workingProjects = [
    {
      image: {
        src: "/work/LVLY_logo.webp",
        alt: "LVLY",
        width: "410",
        height: "117",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Cart Page - Step 1",
          src: "/work/lvly-cart-s1.png",
          alt: "Cart Page - Step 1",
          width: "800",
          height: "446",
        },
        {
          title: "Cart Page - Step 2",
          src: "/work/lvly-cart-s2.png",
          alt: "Cart Page - Step 2",
          width: "800",
          height: "404",
        },
        {
          title: "Cart Page - Step 3",
          src: "/work/lvly-cart-s3.png",
          alt: "Cart Page - Step 3",
          width: "800",
          height: "637",
        },
        {
          title: "Cart Page - Step 4",
          src: "/work/lvly-cart-s4.png",
          alt: "Cart Page - Step 4",
          width: "800",
          height: "520",
        },
      ],
      heading: "LVLY",
      // description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
      // With its wide selection of blooms, LVLY is the perfect choice for those who are looking for a unique and special
      // way to show their love and appreciation. From classic roses to exotic orchids, LVLY has something for everyone.
      // Customers can choose from a variety of bouquets, vases and boxes to make sure that their gift is as special and
      // unique as they are. With same-day delivery options,  LVLY ensures that its customers can get the perfect
      // arrangement for any occasion.`,
      description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
      The aim was to work on the features for the cart page. Creating a step by step user interface to guide customer 
      to checkout page. It allows the customer to pick their desired delivery date based on the postcode and suburb 
      provided. Moreover, customer can also provide their card message, choose their desired jar message and greeting 
      cards.`,
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      highlights: "Cart page layout and functionality",
      urls: [
        {
          name: "LVLY AU",
          link: "https://www.lvly.com.au/",
        },
        {
          name: "LVLY MY",
          link: "https://www.lvly.my/",
        },
      ],
    },
    {
      image: {
        src: "/work/FC-MY.webp",
        alt: "Flowerchimp",
        width: "410",
        height: "205",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Product Page",
          src: "/work/fc-product-page.png",
          alt: "Product Page",
          width: "745",
          height: "432",
        },
        {
          title: "Product Page - Addon Product Modal",
          src: "/work/fc-product-addon-modal.png",
          alt: "Product Page - Addon Product Modal",
          width: "1000",
          height: "492",
        },
        {
          title: "Cart Page",
          src: "/work/fc-cart-page.png",
          alt: "Cart Page",
          width: "745",
          height: "476",
        },
        {
          title: "Cart Page - Empty Cart",
          src: "/work/fc-empty-cart.png",
          alt: "Cart Page - Empty Cart",
          width: "745",
          height: "351",
        },
      ],
      heading: "Flowerchimp",
      // description: `LVLY, Bloomeroo, and Flowerchimp are e-commerce websites for selling flower products.
      // This was created using Shopify Liquid, HTML, CSS, and Javascript. Customers can choose their desired
      // delivery date and timeslot for their order. It allows customers to select their desired flower products
      // , add-on products, and gifts for various occasions. The online stores are available mainly in Southeast
      // Asia and Australia.`,
      description: `Flowerchimp is an online flower shop that offers a wide selection of beautiful bouquets and
      arrangements to suit any occasion. Customers can choose from a variety of flowers, vases and boxes to make
      sure their gift is special and unique. The aim was to work on revamping the product page and cart page. 
      Making the user interface better and user friendly. The process also includes rewrite the functionality 
      to the website slightly faster, improving user experience and making the codebase easier to maintain.`,
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Shopify Liquid",
        "Splide",
        "Modaal",
      ],
      highlights: "Product Page Revamp & Cart Page Revamp",
      urls: [
        {
          name: "Flowerchimp MY",
          link: "https://www.flowerchimp.com/",
        },
      ],
    },
    {
      image: {
        src: "/work/BR_Logo.webp",
        alt: "Bloomeroo",
        width: "410",
        height: "82",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Cart Page",
          src: "/work/bl-cart.png",
          alt: "Cart Page",
          width: "800",
          height: "543",
        },
      ],
      heading: "Bloomeroo",
      // description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
      // delivery in Australia. The company strives to provide customers with the best selection of flowers, from traditional
      // roses to unique tropical and exotic blooms. Our same-day delivery service ensures that no matter where you are in
      // the country, you can get the perfect bouquet delivered to your door. `,
      description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
      delivery in Australia. The aim was to work on generating the date picker by postcode input for the cart page. This 
      requires user to provide postcode in order to choose their desired delivery date. Moreover, customer can also 
      provide their card message and choose addon products before going to checkout page.`,
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      highlights:
        "Render selectable dates based on postcode input, website maintenance",
      urls: [
        {
          name: "Bloomeroo",
          link: "https://www.bloomeroo.com.au/",
        },
      ],
    },
    {
      image: {
        src: "/work/cr-footer-logo.webp",
        alt: "Cakerush MY",
        width: "183",
        height: "42",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        // {
        //   title: "Home Page Top Part",
        //   src: "/work/cakerush-main.png",
        //   alt: "Home Page Top Part",
        //   width: "1918",
        //   height: "2368",
        // },
        // {
        //   title: "Home Page MultiTab Section",
        //   src: "/work/cakerush-tabs.png",
        //   alt: "Home Page MultiTab Section",
        //   width: "1898",
        //   height: "942",
        // },
        {
          title: "Home Page",
          src: "/work/cakerush-homepage-revamp.png",
          alt: "Home Page",
          width: "1920",
          height: "6199",
        },
        {
          title: "Explosion Box Product Template",
          src: "/work/cakerush-explosion-box-page.png",
          alt: "Explosion Box Product Template",
          width: "1920",
          height: "4847",
        },
      ],
      heading: "Cakerush MY",
      description: `Cakerush MY is an innovative online platform offering a wide selection of exquisite cakes and pastries. 
      With a user-friendly interface, customers can easily browse and customize their orders for any occasion. From classic 
      flavors to personalized designs, each cake is meticulously crafted using the finest ingredients. Cakerush MY ensures 
      timely delivery, bringing fresh and visually stunning cakes to your doorstep. Elevate your celebrations with their 
      exceptional creations and exceptional service.`,
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
      ],
      highlights: "Home Page Revamp & Explosion Box Product Template Page",
      urls: [
        {
          name: "Cakerush MY",
          link: "https://www.cakerush.my/",
        },
      ],
    },
    {
      image: {
        src: "/work/thc-logo.webp",
        alt: "The Hacker Collection Website",
        width: "62",
        height: "65",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Home Page",
          src: "/work/thc-home-full.png",
          alt: "Home Page",
          width: "874",
          height: "4796",
        },
        {
          title: "Fundraising Page",
          src: "/work/thc-fundraising.png",
          alt: "Fundraising Page",
          width: "805",
          height: "5208",
        },
      ],
      heading: "The Hacker Collection Website",
      description: `The Hacker Collection (THC) is an innovative landing page website that offers a comprehensive
      overview of a company's mission, products, and services. With a modern and user-friendly design, THC offers
      an intuitive way to showcase a company's offerings and provides visually appealing and easy-to-understand
      information. THC also offers a number of tools, such as a contact form, a blog, and registration forms, to
      help customers interact with the company in a meaningful way.`,
      techStack: ["Vue", "Nuxt3", "TailwindCSS", "HeadlessUI", "Heroicons"],
      teamMembers: [],
      highlights: "Manage and work with the team to create the entire website.",
      urls: [
        {
          name: "THC Website",
          link: "https://hackercollective.co/",
        },
      ],
    },
  ];

  const timeline = [
    {
      date: "2024.01 ~",
      title: "Researcher at HIKE Lab.",
      description: "Currently a Master’s student and researcher at HIKE Lab.",
      // icon: "",
      link: {
        text: "Visit HIKE Lab.",
        url: "http://hike.cau.ac.kr",
      },
    },
        {
      date: "2024.02",
      title: "Graduated University",
      description: "B.S Department Department of Library and Information Science, Data Science",
      // icon: "",
      // link: {
      //   text: "2022.04 ~ 2022.11",
      //   url: "https://limitless.my/",
      // },
    },
    {
      date: "2023.01 ~ 2023.12",
      title: "Intern Researcher at HIKE Lab.",
      // description: "Joined the Limitless Technologies (LTG) team",
      // icon: "",
      // link: {
      //   text: "",
      //   url: "",
      // },
    },
    {
      date: "2022.04 ~ 2022.11",
      title: "Intern Researcher at BMI Lab",
      description:
        "In Bio-Medical Informatics Lab (BMI Lab, Seoul National University Hospital), I worked on NLP team. I participated some projects such as developing a new NLP model for the extraction of medical information from clinical notes or diease detection model using clinical notes and EHRs (Electronic Health Records) data.",
      // icon: "",
      link: {
        text: "Visit BMI Lab",
        url: "https://sites.google.com/view/snuh-bmi-lab",
      },
    },
    // {
    //   date: "August 2019",
    //   title: "First Mechanical Engineer Role",
    //   description:
    //     "I participated in the Forest Welfare Data Visualization Contest hosted by Korea Forest Welfare Institute. We collected data related to forest welfare facilities and generated results that were effectively visualized.",
    //   // icon: "",
    //   // link: {
    //   //   text: "Visit Durianê Professional",
    //   //   url: "https://www.duriane.com/",
    //   // },
    // },
    {
      date: "2020.06 ~ 2023.02",
      title: "Staff of COSADAMA",
      description:
        "COSADAMA(2020-01-13 ~) is the programming community especially for non-majors by students of Chung-Ang university, Seoul, Korea. As a member and a staff of COSADAMA, I was in charge of managing the team and develoing the curriculum website.",
      // icon: "",
      link: {
        text: "Visit COSADAMA",
        url: "https://cosadama.com/"
      }
    },
    {
      date: "2020.03 ~ 2022.09",
      title: "Member of Team.Cayley",
      description: " Team.Cayley is made up of students from Chung-Ang University, majoring in Library and Information Science and COSADAMA. You can see our performance at the following links and GitHub. \
                    1. 'COVID-19: Our Memory' project: We archieve our society's changes due to the COVID-19 pandemic as data, and preserve the data for future reference. We donated our digital archieve to the National Library of Korea. (2022.02) \
                    2. 'Cultural Heritage Synapse: Linking National treasure data' project: We gathered scattered information in about 65 sources of online and offline to create one high-quality data and proposed a standard for national treasure data. Using the data we made some text analysis, a knowledge graph of the cultural heritage data of the National Treasure.",
      // icon: "",
        link: {
        text: "Visit Team.Cayley",
        url: "https://github.com/TeamCayley-official",
      },
    },
    {
      date: "June 2015",
      title: "Start University",
      description:
        "Chung-Ang University, Seoul, South Korea",
      // icon: "",
      link: {
        text: "Visit CAU",
        url: "https://www.cau.ac.kr",
      },
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}
