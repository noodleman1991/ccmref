import React from 'react'
import { SSRConfig } from 'next-i18next'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InfoRequest from '~components/Account/Info/InfoRequest'
import BookingList from '~components/Account/Booking/BookingList'
import { UsersPermissionsUser } from '~typings/api'
import { requireAuth } from '~utils/auth'
import Loading from '~components/Loading'
import { useMyRequests } from '~hooks/useMyRequests'
interface Props {
  user: UsersPermissionsUser
}

const AccountRequest = ({ user }: Props) => {
  const { data: requests, isLoading } = useMyRequests()

  return (
    <Loading isLoading={isLoading} isCentered>
      {requests?.length === 0 ? (
        <InfoRequest />
      ) : (
        <BookingList bookings={requests} type="request" />
      )}
    </Loading>
  )
}

export const getServerSideProps: GetServerSideProps<SSRConfig> = requireAuth(
  async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['account', 'booking'])),
      },
    }
  },
)

export default AccountRequest
