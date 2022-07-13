import { BsWhatsapp } from "react-icons/bs"
import { FaInstagram, FaViber } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { TbBrandFacebook, TbBrandTelegram } from "react-icons/tb"

const getSocialIcon = (iconName?: string) => {
  let Icon
  switch (iconName) {
    case 'instagram':
      Icon = <FaInstagram />
      break
    case 'facebook':
      Icon = <TbBrandFacebook />
      break
    case 'twitter':
      Icon = <FiTwitter />
      break
    case 'whatsapp':
      Icon = <BsWhatsapp />
      break
    case 'telegram':
      Icon = <TbBrandTelegram />
      break
    case 'viber':
      Icon = <FaViber />
      break
  }
  return Icon
}
export default getSocialIcon