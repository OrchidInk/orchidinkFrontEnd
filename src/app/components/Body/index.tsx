import { Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Body = () => {

  const t = useTranslations('Index')
  return (
    <Text>
        {t('Title')}
    </Text>
)
}

export default Body
