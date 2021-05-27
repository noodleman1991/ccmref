import React from 'react'
import Modal from '~components/Modal'
import { client } from '~api/client-api'
import useToast from '~hooks/useToast'
import { Flex, Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useQueryClient } from 'react-query'
import { Espace } from '~typings/api'

interface Props {
  place: Espace
}

const UnpublishModal = ({ place }: Props) => {
  const queryClient = useQueryClient()
  const { t } = useTranslation('place')
  const { errorToast, successToast } = useToast()

  const onConfirm = (): Promise<any> => {
    return client.espaces
      .espacesUpdate(place.id, { published: false })
      .then(() => {
        queryClient.refetchQueries(['myPlaces'])
        successToast(t('list.successUnpublish'))
      })
      .catch(() => errorToast(t('list.errorUnpublish')))
  }

  return (
    <Flex
      alignItems="center"
      alignSelf="center"
      w={{ base: '100%', lg: 'auto' }}
    >
      <Modal
        w={{ base: '100%', lg: 'auto' }}
        button={
          <Button
            variant="line"
            display="flex"
            px={{ base: 3, lg: 0 }}
            py={{ base: 1.5, lg: 0 }}
            w="100%"
            justifyContent={{ base: 'flex-start', lg: 'center' }}
            _hover={{ borderColor: { base: 'transparent', lg: 'black' } }}
            borderColor={{ base: 'transparent', lg: 'black' }}
          >
            {t('list.unpublish')}
          </Button>
        }
        title={t('list.unpublish')}
        onConfirm={onConfirm}
      >
        {t('list.unpublishModal')}
      </Modal>
    </Flex>
  )
}

export default UnpublishModal
