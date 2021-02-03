
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RegexTest= () => (
  <Layout>
    <SEO title="Page de test" />
    <h1>Page de Test</h1>
    
    <Link to="/">Go back to the homepage</Link>

  </Layout>

)

export default RegexTest