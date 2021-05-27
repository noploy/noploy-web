import { IconButton } from '@chakra-ui/react';
import { RiTwitterFill, RiDiscordFill, RiGithubFill } from 'react-icons/ri';


export function SocialIcons() {
  return (
    <>
      <IconButton
        size="sm"
        fontSize="18px"
        aria-label="Twitter"
        icon={<RiTwitterFill />}
      />
      <IconButton
        size="sm"
        fontSize="18px"
        aria-label="Discord"
        icon={<RiDiscordFill />}
      />
      <IconButton
        size="sm"
        fontSize="18px"
        aria-label="Github"
        icon={<RiGithubFill />}
      />
    </>
  )
}