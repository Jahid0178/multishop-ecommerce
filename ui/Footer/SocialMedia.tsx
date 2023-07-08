import { ActionIcon, Group } from "@mantine/core";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <>
            <Group spacing={0} position="right" noWrap mx="auto" >
                <ActionIcon variant="transparent" size="lg">
                    <BsTwitter size={20} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="lg">
                    <BsYoutube size={20} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="lg">
                    <BiLogoInstagramAlt size={20} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="lg">
                    <BsFacebook size={20} />
                </ActionIcon>
            </Group>
        </>
    )
}

export default SocialMedia;