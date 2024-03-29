import { Box, Button, Heading, HStack, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../form/Field'
import { yupResolver } from '@hookform/resolvers/yup'
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
import getSocialIcon from '../../utils/getSocialIcon'
import { ContactFormSchema } from '../../schemas/contact-schema'

export interface IContactFormInputs {
  fullName: string
  email: string
  phone: number
  service: string
  message: string
}

const ContactForm = () => {
  const t = useLocale()
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<IContactFormInputs>({
    resolver: yupResolver(ContactFormSchema()),
  })
  const toast = useToast()
  const { initialData } = useAppContext()
  const contacts = initialData?.contact?.data?.attributes
  const servicesArr = initialData?.services?.data
  const icons = initialData?.contact?.data?.attributes?.socialNetworks

  const onSubmit: SubmitHandler<IContactFormInputs> = async (data) => {
    try {
      await axios.post(`${process.env.SERVER_API}/api/ezforms/submit`, { formData: data })
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
    <>
      <VStack textAlign={'center'} id='form'>
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
              '&:before, &:after': {
                content: '""',
                display: 'block',
                borderRadius: '50%',
                position: 'absolute',
                zIndex: -1,
              },
            }}
            _after={{
              width: '100px',
              height: '100px',
              bottom: '20px',
              right: '20px',
              bg: 'brand.300',
              opacity: 0.6,
            }}
            _before={{
              width: '200px',
              height: '200px',
              bottom: '-100px',
              right: '-100px',
              bg: 'brand.600',
            }}
          >
            <VStack mb={6} alignItems='flex-start'>
              <Heading size='lg' as='h3' wordBreak={'break-word'}>
                {t.form.info.title}
              </Heading>
              <Text fontSize={'sm'}>{t.form.info.subtitle}</Text>
            </VStack>

            <VStack spacing={3} alignItems='flex-start' flexWrap={'wrap'} as='ul'>
              {contacts &&
                contacts.phoneNumbers.map((item: any) => (
                  <li key={item.id}>
                    <ContactInfoButton link={`tel:${item?.phone}`} label={item.phone} icon={<FaPhoneAlt />} />
                  </li>
                ))}
              {contacts?.email && (
                <li>
                  <ContactInfoButton link={`mailto:${contacts.email}`} label={contacts.email} icon={<IoMail />} />
                </li>
              )}
              {contacts && contacts.address && (
                <li>
                  <ContactInfoButton
                    link={contacts?.address?.googleMapLink}
                    label={contacts?.address?.address}
                    icon={<IoLocationSharp />}
                  />
                </li>
              )}
            </VStack>
            <HStack mt={6} as='ul'>
              {icons?.map((item) => (
                <li key={item?.id}>
                  <a href={item?.link} target='_blank' rel='noopener noreferrer'>
                    <Box
                      sx={{
                        w: '35px',
                        h: '35px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        bg: 'brand.50',
                        '&:hover': {
                          bg: '#fff',
                          transform: 'translateY(-2px)',
                        },
                        'svg': {
                          color: 'brand.500',
                          fontSize: 18,
                        },
                      }}
                    >
                      {getSocialIcon(item?.icon)}
                    </Box>
                  </a>
                </li>
              ))}
            </HStack>
          </Box>

          <Box as='form' px={{ base: 2, md: 2, lg: 10 }} pt={2} flex={1} onSubmit={handleSubmit(onSubmit)}>
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
                  loadingText={t.form.submitting}
                  colorScheme='brand'
                  isLoading={isSubmitting}
                  type='submit'
                  rightIcon={<FiArrowUpRight fontSize={20} />}
                >
                  {t.button.sendForm}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default ContactForm
