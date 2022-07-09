import { Box, Button, Heading, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../form/Field'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Select from '../form/Select'
import PhoneField from '../form/PhoneField'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail, IoLocationSharp } from 'react-icons/io5'
import axios from 'axios'

import { FiArrowUpRight, FiMail, FiMessageSquare, FiPackage, FiPhone, FiUser } from 'react-icons/fi'
import useLocale from '../../hooks/useLocale'
import Textarea from '../form/Textarea'
import ContactInfoButton from '../form/components/ContactInfoButton'
import useAppContext from '../../hooks/useAppContext'

export interface IContactFormInputs {
  fullName: string
  email: string
  phone: number
  service: string
  message: string
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactForm: React.FC<{ servicesArr?: any }> = ({ servicesArr }) => {
  const t = useLocale()
  const ContactFormSchema = yup
    .object({
      email: yup.string().email(t.form.validation.email.email).required(t.form.validation.email.required),
      fullName: yup
        .string()
        .max(20, t.form.validation.fullName.max)
        .required(t.form.validation.fullName.required)
        .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.form.validation.fullName.matches)
        .trim(),
      phone: yup
        .string()
        .required(t.form.validation.phone.required)
        .matches(phoneRegExp, t.form.validation.phone.matches),
      service: yup.string().required(t.form.validation.service.required),
      message: yup.string().max(300, t.form.validation.message.max).trim(),
    })
    .required()

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<IContactFormInputs>({
    resolver: yupResolver(ContactFormSchema),
  })
  const toast = useToast()
  const { initialData } = useAppContext()
  const contacts = initialData?.contact?.data?.attributes as any

  const onSubmit: SubmitHandler<IContactFormInputs> = async (data) => {
    try {
      await axios.post(`${process.env.SERVER_URL}/api/ezforms/submit`, { formData: data })
      toast({
        description: t.form.notify.successFormSend,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      reset()
    } catch (error) {
      toast({
        description: t.form.notify.errorFormSend,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <div id='form'>
      <VStack textAlign={'center'}>
        <Heading>{t.section.contactUs.title}</Heading>
        <Text mt={4} maxW='md'>
          {t.section.contactUs.subtitle}
        </Text>
      </VStack>
      <Box
        mt={5}
        mb={10}
        borderRadius={20}
        sx={{
          p: 3,
          bg: '#FFF',
          boxShadow: '0px 2px 32px 2px rgba(0, 0, 0, 0.23)',
        }}
      >
        <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
          <Box
            bg='brand.500'
            color='#fff'
            borderRadius={20}
            w={{ base: '100%', md: '300px' }}
            p={4}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}
            _after={{
              content: '""',
              display: 'block',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              bg: 'brand.300',
              zIndex: -1,
              opacity: 0.6,
            }}
            _before={{
              content: '""',
              display: 'block',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '-100px',
              right: '-100px',
              bg: 'brand.600',
              zIndex: -1,
            }}
          >
            <VStack mb={8} alignItems='flex-start'>
              <Heading size='lg' as='h3' wordBreak={'break-word'}>
                {t.form.info.title}
              </Heading>
              <Text fontSize={'sm'}>{t.form.info.subtitle}</Text>
            </VStack>

            <VStack spacing={4} alignItems='flex-start' flexWrap={'wrap'}>
              {contacts.phoneNumbers.map((item: any) => (
                <ContactInfoButton key={item.id} link={`tel:${item?.phone}`} label={item.phone} icon={<FaPhoneAlt />} />
              ))}
              <ContactInfoButton link={`mailto:${contacts.email}`} label={contacts.email} icon={<IoMail />} />
              {contacts.address && (
                <ContactInfoButton
                  link={contacts?.address?.googleMapLink}
                  label={contacts?.address?.address}
                  icon={<IoLocationSharp />}
                />
              )}
            </VStack>
          </Box>

          <Box px={{ base: 2, md: 2, lg: 10 }} pt={2} flex={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <Stack direction={{ base: 'column', sm: 'row' }}>
                  <Field name='fullName' control={control} label={t.form.label.fullName} icon={<FiUser />} />
                  <Field name='email' control={control} label={t.form.label.email} type='email' icon={<FiMail />} />
                </Stack>
                <Stack direction={{ base: 'column', sm: 'row' }}>
                  <PhoneField control={control} name='phone' label={t.form.label.phone} icon={<FiPhone />} />
                  <Select
                    name='service'
                    control={control}
                    options={servicesArr || []}
                    placeholder={t.form.placeholder.service}
                    label={t.form.label.service}
                    icon={<FiPackage />}
                    setValue={setValue}
                    isSubmitSuccessful={isSubmitSuccessful}
                  />
                </Stack>
                <Textarea name='message' control={control} label={t.form.label.message} icon={<FiMessageSquare />} />
                <Box display={'flex'} justifyContent='flex-end'>
                  <Button
                    colorScheme='brand'
                    isLoading={isSubmitting}
                    type='submit'
                    rightIcon={<FiArrowUpRight fontSize={20} />}
                  >
                    {t.button.sendForm}
                  </Button>
                </Box>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
    </div>
  )
}

export default ContactForm
