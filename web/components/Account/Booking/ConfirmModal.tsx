import React, { useState } from 'react'
import Modal from '~components/Modal'
import { client } from '~api/client-api'
import { Booking } from '~typings/api'
import { Button, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useQueryClient } from 'react-query'
import Check from 'public/assets/img/check-circle.svg'

interface IConfirmModal {
  bookingId: string
  setSelected: (booking: Booking) => void
}

const ConfirmModal = ({ bookingId, setSelected }: IConfirmModal) => {
  const queryClient = useQueryClient()
  const [isLoading, setLoading] = useState(false)
  const { t } = useTranslation('booking')

  const onConfirm = () => {
    setLoading(true)
    return client.bookings
      .bookingsUpdate(bookingId, { status: 'accepted' })
      .then(() => {
        queryClient.refetchQueries('myRequests')
        setSelected(null)
      })
      .finally(() => setLoading(false))
  }

  return (
    <Modal
      w="100%"
      button={
        <Button
          w="100%"
          variant="confirm"
          leftIcon={<Check />}
          mt={2.5}
          isLoading={isLoading}
        >
          <Text ml={2}>{t(`confirm`)}</Text>
        </Button>
      }
      title={t('modal.confirm.title')}
      onConfirm={onConfirm}
      confirmText={t('modal.confirm.confirm')}
      closeText={t('modal.confirm.back')}
    >
      {t('modal.confirm.text')}
    </Modal>
  )
}

export default ConfirmModal
