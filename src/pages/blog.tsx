import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Header } from '@components/Header'
import Footer from '@parts/footer'
import { HeadFC } from 'gatsby';

interface BlogPost {
  id: string
  frontmatter: {
    title: string
    date: string
    description: string
    slug: string
  }
  excerpt: string
}

interface BlogPageData {
  allMarkdownRemark: {
    nodes: BlogPost[]
  }
}

const Blog: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  return (
    <>
    <Header/>
    <main className=" w-full min-h-screen container-lg mx-auto ">
    <div className="container mx-auto p-4 pt-8 md:p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Blog</h1>
      
      <div className="space-y-6">
        {data?.allMarkdownRemark?.nodes.map((post) => (
          <article 
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {post.frontmatter.title}
            </h2>
            
            <time className="text-sm text-gray-600 mb-4 block">
              {new Date(post.frontmatter.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </time>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.frontmatter.description || post.excerpt}
            </p>
            
            <a 
              href={`/blog/${post.frontmatter.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Ler mais
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </div>
    </main>
    <Footer />

    </>
  )
}

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          slug
        }
        excerpt
      }
    }
  }
`

export default Blog;

export const Head: HeadFC = ()=> <head>
  <title>RamosSec - Blog</title>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6481815227988488"></script>
</head>