/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/with-cover'

export default ({ data }) => (
  <Layout cover={data.contentfulAsset.fluid}>
    <Styled.div sx={{ textAlign: `center`, pt: `10vh`, pb: `10vh` }}>
      <Styled.h1
        sx={{ fontSize: 48, padding: 2, mb: 0, textTransform: `uppercase` }}
      >
        Ceremony{' '}
        <em sx={{ fontFamily: `cursive`, fontWeight: 'body' }}>&amp;</em>{' '}
        Reception
      </Styled.h1>
      <Styled.h2 sx={{ fontFamily: `body`, fontSize: 40 }}>
        Renaissance Minneapolis Hotel, the Depot
      </Styled.h2>
      <Link
        to="/rsvp/"
        sx={{
          ':hover': {
            borderColor: `text`,
            backgroundColor: `background`,
            color: `text`,
          },
          borderWidth: 4,
          borderColor: `transparent`,
          borderStyle: `solid`,
          display: `inline-block`,
          fontSize: 32,
          textDecoration: `none`,
          backgroundColor: `text`,
          color: `background`,
          pt: 3,
          pb: 3,
          pr: 4,
          pl: 4,
          mt: 2,
          mb: 2,
        }}
      >
        TODO: Hotel reservation link
      </Link>
    </Styled.div>
  </Layout>
)

export const pageQuery = graphql`
  {
    contentfulAsset(title: { eq: "Hotel Depot" }) {
      fluid(maxWidth: 1200) {
        ...GatsbyContentfulFluid
      }
    }
  }
`
