import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="blogpost">
        <h1>About</h1>
        <img
          alt="Team"
          src="https://minutes.co/wp-content/uploads/2019/04/shutterstock_1214730637.png"
        />
        <p className="body-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          eveniet, perspiciatis laborum odio illum maiores commodi at. Dolores
          iste fuga rerum omnis reiciendis labore veritatis, ex id neque illum
          odio?
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default About
