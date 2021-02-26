import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Posts = ({ data }) => {
    const post = data.mdx
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                {post.frontmatter.img &&(
                    <Img 
                    placeholderStyle = {{backgroundColor: `red`}}
                    fluid = {post.frontmatter.img.childImageSharp.fluid}
                    />
                )}
            </div>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <MDXRenderer>{post.body}</MDXRenderer>

            </div>
        </Layout>
    );
}

export const query = graphql`
query($slug: String!){
        mdx(fields: { slug: { eq: $slug } }){
            body
            frontmatter{
                title
                img {
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }

        }
}`
export default Posts