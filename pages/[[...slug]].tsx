import { GetServerSideProps } from 'next'
import React from 'react'
import client from '../graphql'
import { PAGE_QUERY } from '../graphql/page-query'
import { Page, PageQuery, PageQueryVariables } from '../generated'
import BlockManager from '../components/BlockManager'
import Seo from '../components/Seo'

interface IPage {
  pageData: Page
}

const Page: React.FC<IPage> = ({ pageData }) => {
  return (
    <>
      <Seo seo={pageData.seo} />
      <BlockManager blocks={pageData.blocks} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context
  res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=60')

  const { locale } = context
  const { slug } = context.params as any

  try {
    const { data } = await client.query<PageQuery, PageQueryVariables>({
      query: PAGE_QUERY,
      variables: {
        slug: slug ? `/${slug[0]}` : '/',
        locale,
      },
    })

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        pageData: data.pages?.data[0].attributes,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default Page
