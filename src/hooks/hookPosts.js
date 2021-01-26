import { useStaticQuery, graphql } from "gatsby"

 const HookPosts = () => {
  const  data  = useStaticQuery(
    graphql`
      query {
        allStrapiPost {
          nodes {
            id
            content
            url
          }
        }
        allApiArticles {
          edges {
              node {
              id
              title
              body
              }
          }
      	}
      }
    `
  )
  return data
}

export default HookPosts