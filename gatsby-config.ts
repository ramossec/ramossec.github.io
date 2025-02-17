import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ramos Sec`,
    description:'Sua privacidade em primeiro lugar',
    siteUrl: `https://www.ramossec.com.br`,
    author: `@ramossec`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
     "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap",'gatsby-transformer-remark','gatsby-plugin-typegen', 
     {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Ramos Sec',
      icon: "src/images/logo.png",
      short_name: 'Ramos Sec',
      start_url: '/',
      background_color: '#f7f0eb',
      theme_color: '#a2466c',
      display: 'standalone', 
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  {
    resolve: 'gatsby-plugin-module-resolver',
    options: {
      root: 'src', // <- will be used as a root dir
      aliases: {
        '@components': './components', // <- will become ./src/components
        '@parts':'./parts',
        '@services':'./services',
        '@images':'./images',
        helpers: './helpers', // <- will become ./src/helpers
        static: {
          root: './public', // <- will used as this alias' root dir
          alias: './static' // <- will become ./public/static
           }
        }
    }
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `red`,
      // Disable the loading spinner.
      showSpinner: false,
      


    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-2PNBDL402P", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "9925863891",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "ramossec.com.br",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/posts/blog`, // O caminho para os arquivos Markdown
      name: 'blog',
    },
  },
  
  // {
  //   resolve: `gatsby-source-supabase`,
  //   options: {
  //     supabaseUrl: "https://xyfqgpewpuooioljnmss.supabase.co",
  //     supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZnFncGV3cHVvb2lvbGpubXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2ODE0NzksImV4cCI6MjA0NDI1NzQ3OX0.LfSXOFRpa-PJw93KwSzaDxLe3iiORKk0vgtAIEvIu5Q-anon-key",
  //     types:[
  //       {
  //        type:"clients",
  //       }
  //     ]
  //     }
  //   }
  ]

      
};

export default config;
