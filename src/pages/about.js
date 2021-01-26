import React from "react"
import Header from "../components/header"
import HookPosts from "../hooks/hookPosts"
import LayoutMargin from "../components/layouts"
import { Link } from "gatsby"

export default function About() {

	const data = HookPosts();
	const articles = data.allApiArticles.edges;

	return (

	<LayoutMargin>	
		<div style={{ color: `teal` }}>
		  <Header argText = "Ejemplo de conexion a un api"/>
		  <p>La informacion presente viene del siguiente link: 
		  		 <Link to="https://jsonplaceholder.typicode.com/posts"> https://jsonplaceholder.typicode.com/posts</Link>
		  </p>
		  
		</div>
		<div>
			<ul>
		        {articles.map((post) => (
		         
		        <li key={post.node.id}>{post.node.title}</li>
		          
		        )

		      )}
		    </ul>
		</div>
	</LayoutMargin>
	)
}