import { useRouter } from 'next/router'
import de from '../locales/de'
import en from '../locales/en'

const useLocale = () => {
  const router = useRouter()
  const t = router.locale === 'en' ? en : de
  return t
}

export default useLocale
