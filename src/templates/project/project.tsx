import BlockContent from "@sanity/block-content-to-react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import IconGithub from "../../components/icons/icon-github"
import IconLink from "../../components/icons/icon-link"
import Layout from "../../components/layout/layout"
import ImgDefault from "../../components/projectImages/ImgDefault"
import ListGoGif from "../../components/projectImages/ListGoGif"
import MelodyRecordsGif from "../../components/projectImages/MelodyRecordsGif"
import Tag from "../../components/projects-section/tags/tag/tag"
import SEO from "../../components/seo"
import { IProject } from "../../contracts/projects/project/iproject"
import { ITag } from "../../contracts/tags/tag/itag"
import "./project.scss"

const Project: FunctionComponent<{ data: { sanityProject: IProject } }> = ({
  data,
}) => {
  return (
    <Layout>
      <SEO
        title={data.sanityProject.title}
        description={data.sanityProject.description}
      />
      <div className="project-container">
        <div className="imageWrapper">
          {(() => {
            switch (data.sanityProject.title) {
              case "ListGo":
                return <ListGoGif />
              case "Melody Records Dashboard":
                return <MelodyRecordsGif />
              default:
                return (
                  <ImgDefault
                    fluidImg={data.sanityProject.mainImage.asset.fluid}
                    imgAlt={data.sanityProject.title}
                  />
                )
            }
          })()}
        </div>
        <div className="project-content-container">
          <div className="project-heading-container">
            <h1 className="project-title">{data.sanityProject.title}</h1>
            {(data.sanityProject.githubUrl ||
              data.sanityProject.siteUrl ||
              data.sanityProject.title === "Melody Records Dashboard") && (
              <div className="icons-container">
                {data.sanityProject.title === "Melody Records Dashboard" && (
                  <div className="goGitIcons">
                    <a
                      href="https://github.com/al-abbas-nz/golang-dashboard-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGithub />
                      <span>Go Backend repo</span>
                    </a>
                    <a
                      href="https://github.com/al-abbas-nz/react-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGithub />
                      <span>React/Typescript Frontend repo</span>
                    </a>
                  </div>
                )}
                {data.sanityProject.githubUrl && (
                  <a href={data.sanityProject.githubUrl} target="_blank">
                    <IconGithub />
                    <span>Github Repo</span>
                  </a>
                )}

                {data.sanityProject.siteUrl && (
                  <a href={data.sanityProject.siteUrl} target="_blank">
                    <IconLink />
                    <span>Visit Site</span>
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="content-text">
            {data.sanityProject.tags.map((tag: ITag) => (
              <Tag key={tag._id} tag={tag} toggleTagState={null} />
            ))}
          </div>
          <div className="label-content-container">
            {/* <p className="label-text">Description</p> */}

            <p className="content-text">{data.sanityProject.description}</p>
          </div>
          <div className="label-content-container">
            {/* <p className="label-text">Tags</p> */}
          </div>
          <div className="label-content-container">
            {/* <p className="label-text">About</p> */}
            <div className="content-text">
              <BlockContent blocks={data.sanityProject._rawBody} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    sanityProject(id: { eq: $id }) {
      _id
      title
      description
      githubUrl
      siteUrl
      _rawBody
      slug {
        current
      }
      tags {
        _id
        title
      }
      mainImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
