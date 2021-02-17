import React from "react"
import classnames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'
import "./MdxTextImage.scss"


const MdxTextImage = ({ image, position, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
              presentationWidth
            }
          }
        }
      }
    }
  `)
  const fluid = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === image
  );  const cWidth = fluid.node.fluid.presentationWidth + 15
  return (
    <div className={classnames("MdxTextImage", { right: position === "right" })}>
      {fluid.node && (
        <span className="img" style={{ width: cWidth }}>
          <Img fluid={fluid.node.fluid} />
        </span>
      )}
      {children !== undefined && (
        <div className="text">
          {typeof children === 'string' ? (
            <ReactMarkdown>
              {children}
            </ReactMarkdown>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  )
}
MdxTextImage.defaultProps = {
  position: "left",
}
export default MdxTextImage