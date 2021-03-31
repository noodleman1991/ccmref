import { Box } from '@chakra-ui/react'
import React from 'react'
import { SSRConfig } from 'next-i18next'
import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PlaceOrCompany from '~components/Signup/PlaceOrCompany'
import SignupSteps from '~components/Signup/SignupSteps'
import { requireAuth } from '~utils/auth'

const Home: NextPage = () => {
  return (
    <Box>
      <SignupSteps step={1} />
      <PlaceOrCompany />
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps<SSRConfig> = requireAuth(
  async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['signup', 'common', 'yup'])),
      },
    }
  },
  true,
)

export default Home
