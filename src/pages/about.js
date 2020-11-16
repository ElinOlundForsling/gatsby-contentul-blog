import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const About = () => (
  <StaticQuery
    query={graphql`
      query About {
        contentfulAbout {
          title
          body {
            body
          }
          image {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
      contentfulAbout: {
        title,
        body,
        image: {
          file: { url },
        },
      },
    }) => (
      <>
        <Layout>
          <div class="wrapper">
            <img alt="HeroImage" src={url} />
            <div>
              <h1 className="title">{title}</h1>
              <h3>{body.body}</h3>
            </div>
          </div>
        </Layout>
      </>
    )}
  />
)

export default About
