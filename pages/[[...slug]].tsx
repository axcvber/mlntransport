import { GetServerSideProps } from 'next'
import React from 'react'
import client from '../graphql'
import { PAGE_QUERY } from '../graphql/page-query'
import { Page, PageQuery, PageQueryVariables } from '../generated'
import BlockManager from '../components/BlockManager'

interface IPage {
  pageData: Page
}

const Page: React.FC<IPage> = ({ pageData }) => {
  console.log('data', pageData)

  return <BlockManager blocks={pageData.blocks} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const { slug } = context.params as any
  console.log('context.params', context.params)
  console.log('context.query', context.query)

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

// export async function getServerSideProps(context) {
//   const { slug, locale } = getLocalizedParams(context.query);

//   try {
//     const data = getData(slug, locale);
//     const res = await fetch(delve(data, "data"));
//     const json = await res.json();

//     if (!json.length) {
//       return redirectToHomepage();
//     }

//     const pageData = await getDataDependencies(delve(json, "0"));
//     console.log(pageData);
//     return {
//       props: { pageData },
//     };
//   } catch (error) {
//     return redirectToHomepage();
//   }
// }

export default Page
