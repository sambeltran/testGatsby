import React from "react"
import HookPosts from "../hooks/hookPosts"
import LayoutMargin from "../components/layouts"

const Index = ({data})=> {

	data = HookPosts();
	const dataPost = data.allStrapiPost.nodes;

 return(
   
   
   <LayoutMargin>
    <div>
      <h1>Hi world, I'm using gatsby js</h1>
      {
        dataPost.map(post => (<h2 key={post.id}>{post.content}</h2>))

      }

    </div>
  </LayoutMargin>  
  
    
      )
}

export default Index