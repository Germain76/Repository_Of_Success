/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { node } = require("prop-types")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    console.log(node.internal.type);
    if (node.internal.type === `MarkdownRemark`|| node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `content` })
        createNodeField({
            node,
            name: `slug`,
            value: `${slug}`,
        })
    }

}
//async car on utilise une requête
//cette requête graphql permet de récupérer tous les pages Mardown pour récupérer le slug. 
//C'est le slug qui va nous permettre de créer la page

exports.createPages = async function ({ actions, graphql }) {
    // le const { data } permet de stocker les données de la requête query
    const { data } = await graphql(`
    query{
        allMdx{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
            totalCount
        }
        
    }
    `)
    data.allMdx.edges.forEach(edge => {
        const { slug } = edge.node.fields
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/posts.js`),
            context: { slug: slug },
            // le context ce sont des objets qu'on peut passer templates. Ici on lui passe le slug car la requête qui va être excécuté 
            // dans le template aura besoin du slug pour créer cette page unique
            // permet de récupérer les slug des pages qui sont stockés dans un tableau
        })

    })


    const perPage = 5;
    const nbPage = Math.ceil(data.allMdx.totalCount / perPage)

    for (let i = 0; i < nbPage; i++) {


        //Creation de la page Index des posts
        actions.createPage({
            // path: '/blog',
            path: i < 1 ? "/" : `/${i+1}`,
            component: require.resolve(`./src/templates/list.js`),
            context: {
                limit: perPage,
                skip: i*perPage,
            },
        })
    }
}
//limit c'est le nombre d'élément par pages
//le skip c'est à partir de quel élément il part

