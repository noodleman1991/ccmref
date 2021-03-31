import React from 'react'
import Link from '~components/Link'
import Tag from '~components/Tag'
import Image from '~components/Image'
import FallbackImage from '~components/FallbackImage'
import {
  Box,
  Button,
  Text,
  Flex,
  Divider,
  HStack,
  Circle,
  ButtonGroup,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { Place } from '~@types/place.d'
import { DisponibilityStatus } from '~@types/disponibility.d'
import useNbDisponibility from '~hooks/useNbDisponibility'
import useIsOccupied from '~hooks/useIsOccupied'
import { ROUTE_ACCOUNT_PLACE_DETAIL } from '~constants'
import { useTranslation } from 'next-i18next'
import UnpublishModal from '~components/Account/Place/UnpublishModal'
import PublishModal from '~components/Account/Place/PublishModal'
import DeletePlaceModal from '~components/Account/Place/DeletePlaceModal'
import NextLink from 'next/link'
import format from 'date-fns/format'

interface IPlaceListItem {
  place: Place
}

const PlaceListItem = ({ place }: IPlaceListItem) => {
  const { t } = useTranslation('place')

  const { available, past, booked, pending } = useNbDisponibility(
    place.disponibilities,
  )

  const isOccupied = useIsOccupied(booked)

  return (
    <LinkBox w="100%">
      <Flex
        py={8}
        w="100%"
        px={3}
        borderBottom="1px solid"
        borderColor="gray.100"
        _hover={{
          bgColor: '#fbfbfb',
        }}
      >
        <Flex
          w="210px"
          h="150px"
          pr={8}
          alignItems="center"
          {...(!place.published
            ? { filter: 'grayscale(1)', opacity: 0.5 }
            : {})}
        >
          {place.images.length > 0 ? (
            <Image src={place.images[0].url} />
          ) : (
            <FallbackImage />
          )}
        </Flex>
        <Flex direction="column" justifyContent="space-between" flex={1}>
          <Flex justifyContent="space-between">
            <Box>
              <NextLink
                href={{
                  pathname: ROUTE_ACCOUNT_PLACE_DETAIL,
                  query: { id: place.id },
                }}
                passHref
              >
                <LinkOverlay>
                  <Text fontSize="lg" fontFamily="mabry medium">
                    {place.name}
                  </Text>
                </LinkOverlay>
              </NextLink>
              <Flex>
                <Text>{place.address}</Text>
                {isOccupied && (
                  <Tag status={DisponibilityStatus.BOOKED} ml={2}>
                    <Circle size="6px" bgColor="green.500" ml={1} />
                    <Text ml={2}>{t('list.occupied')}</Text>
                  </Tag>
                )}
              </Flex>
            </Box>
            {place.published ? (
              <UnpublishModal placeId={place.id} />
            ) : (
              <ButtonGroup spacing={4} alignSelf="center">
                <PublishModal placeId={place.id} />
                <DeletePlaceModal placeId={place.id} />
              </ButtonGroup>
            )}
          </Flex>
          <Flex>
            <Box flex={1}>
              <Flex alignItems="center">
                <Text color="gray.500" pr={2}>
                  {t('list.disponibility')}
                </Text>
                <Button
                  as={Link}
                  href={{
                    pathname: ROUTE_ACCOUNT_PLACE_DETAIL,
                    query: { id: place.id, index: 2 },
                  }}
                  variant="line"
                >
                  {place?.disponibilities.length > 0
                    ? t('list.edit')
                    : t('list.add')}
                </Button>
              </Flex>
              <Box>
                {place?.disponibilities.length > 0 ? (
                  <Box>
                    <Text>
                      {t(
                        `list.available${
                          place?.disponibilities.length > 1 ? 's' : ''
                        }`,
                        { nb: available.length },
                      )}
                    </Text>
                    {/* TODO: handle filled until */}
                    <Text>
                      {t(`list.filledUntil`, {
                        date: format(new Date(place.filledUntil), 'dd/MM/yyyy'),
                      })}
                    </Text>
                  </Box>
                ) : (
                  <Text color="red.600" pt={2}>
                    {t('list.noDisponibility')}
                  </Text>
                )}
              </Box>
            </Box>
            <Divider orientation="vertical" mx={5} />
            <Box flex={1}>
              <Flex alignItems="center">
                <Text color="gray.500" pr={2}>
                  {t('list.requests')}
                </Text>
                {/* TODO: handle link */}
                <Button as={Link} href="#" variant="line">
                  {t('list.see')}
                </Button>
              </Flex>
              <Box pt={2}>
                {pending.length > 0 ? (
                  <Tag status={DisponibilityStatus.PENDING}>
                    {t('list.nbPending', { nb: pending.length })}
                  </Tag>
                ) : (
                  <Divider w="14px" />
                )}
              </Box>
            </Box>
            <Divider orientation="vertical" mx={5} />
            <Box flex={1}>
              <Flex alignItems="center">
                <Text color="gray.500" pr={2}>
                  {t('list.bookings')}
                </Text>
                {/* TODO: handle link */}
                <Button as={Link} href="#" variant="line">
                  {t('list.see')}
                </Button>
              </Flex>
              <Box pt={2}>
                {booked.length > 0 || past.length > 0 ? (
                  <HStack spacing={2.5}>
                    {booked.length > 0 && (
                      <Tag status={DisponibilityStatus.BOOKED}>
                        {t('list.nbBooking', { nb: booked.length })}
                      </Tag>
                    )}
                    {past.length && (
                      <Tag status={DisponibilityStatus.PAST}>
                        {t('list.nbPassed', { nb: past.length })}
                      </Tag>
                    )}
                  </HStack>
                ) : (
                  <Divider w="14px" />
                )}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  )
}

export default PlaceListItem
