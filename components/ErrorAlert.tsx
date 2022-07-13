import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'
import useLocale from '../hooks/useLocale'

const ErrorAlert = () => {
  const t = useLocale()
  return (
    <Alert status='error'>
      <AlertIcon />
      {t.error.fetchError}
    </Alert>
  )
}

export default ErrorAlert
