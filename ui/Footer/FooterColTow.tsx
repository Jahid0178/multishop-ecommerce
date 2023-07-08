import { List, Title, createStyles } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    footerLink: {
        color: theme.colors.gray[6],
        textDecoration: "none",
        "&:hover": {
            color: theme.colors.green[6],
        },
    },
}));

const FooterColTow = () => {
    const {classes} = useStyles();
    return (
        <>
            <Title order={4}>Comapny</Title>
            <List listStyleType="none" mt={20}>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        About Us
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Career
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Store Location
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Our Blog
                    </Link>
                </List.Item>
                <List.Item>
                    <Link href="#" className={classes.footerLink}>
                        Reviews
                    </Link>
                </List.Item>
            </List>
        </>
    )
}

export default FooterColTow;