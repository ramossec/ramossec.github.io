import React from "react"
import { graphql } from "gatsby"
import { GraphQLObjectType } from 'graphql';


import Footer from "@parts/footer"
import { Header } from '@components/Header';

interface BlogTemplateProps {
  data: {
    markdownRemark: any
  }
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data }) => {
  const post = data.markdownRemark
  return (<>
  
    <Header />
    <main className=" w-full min-h-screen container-lg mx-auto ">
    
      <div className="bg-white p-10 mx-auto max-w-4 container mt-10 ">
        <h1 className="text-5xl font-bold my-4">{post.frontmatter.title}</h1>
        <div className="mx-auto bg-black" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    
    </main>
    <Footer />
    
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogTemplate