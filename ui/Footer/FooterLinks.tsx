import { Flex, Text, createStyles } from "@mantine/core"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
    footerLinks: {
        textDecoration: "none",
        color: "#ffffff63"
    },


}));

const FooterLinks = () => {
    const {classes} = useStyles();
    return (
        <>
            <Flex wrap="wrap" justify={"space-around"}>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        help,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        about us,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        privacy policy,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        Contact Us Accessibility,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        Security & Fraud,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        Returns policy,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        Terms & conditions,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        fedback,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        Terms,
                    </Text>
                </Link>
                <Link href="" className={classes.footerLinks}>
                    <Text>
                        Cookie
                    </Text>
                </Link>
            </Flex>
        </>
    )
}

export default FooterLinks