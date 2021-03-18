import { graphql, useStaticQuery } from "gatsby";
import { IGetAboutResponse } from "../../contracts/about/iget-about-response";

export const GetAbout = () => {
  const about: IGetAboutResponse = useStaticQuery(
    graphql`
      query {
        sanityAbout {
          title
          description
          _rawContent
          mainImage {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
              source {
                  url
              }
            }
          }
        }
      }
    `
  )
  return about;
}