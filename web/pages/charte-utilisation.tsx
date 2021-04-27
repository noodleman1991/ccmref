import React from 'react'
import { SSRConfig } from 'next-i18next'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Heading, Box } from '@chakra-ui/react'
import MarkdownRenderer from '~components/MarkdownRenderer'
import { ROUTE_USE_POLICY } from '~constants'
import { Page } from '~typings/api'
import { getPage } from '~utils/page'

interface ICharte {
  page: Page
}

const Charte = ({ page }: ICharte) => {
  return (
    <>
      <Heading
        as="h1"
        textStyle="h1"
        layerStyle="mainTitle"
        textAlign="center"
        maxW="container.sm"
        mx="auto"
      >
        {page.title}
      </Heading>
      <Box maxW="container.sm" mx="auto">
        <MarkdownRenderer>{page.text}</MarkdownRenderer>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  const page = await getPage(ROUTE_USE_POLICY)
  if (!page) return { redirect: { destination: '/', permanent: false } }

  return {
    props: {
      page,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Charte
