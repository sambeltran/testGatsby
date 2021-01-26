module.exports = {
  siteMetadata: {
    title: "prueba",
  },
  plugins: [
  	{
	    resolve: `gatsby-source-strapi`,
	    options: {
	      apiURL: `http://localhost:1337`,
	      queryLimit: 1000, // Default to 100
	      contentTypes: [`post`],

	    },
	  },
   	{
      resolve: 'gatsby-source-apiserver',
      options: {
        name: 'Articles',
        typePrefix: 'api',
        data: {
          ns: 'posts',
          method: 'articles',
        },
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        auth: false,
        headers: {
          'Content-Type': 'application/json',
        },
        verboseOutput: process.env.NODE_ENV !== 'production',
      },
    },

  ],
};
