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

const FooterColFor = () => {
    const { classes } = useStyles();
    return (
        <>
            <Title order={4}>Public</Title>
            <List listStyleType="none" mt={20}>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Tract Orders
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Recalls
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Accessibility
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Team Mamber Services
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Seller Centre
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        International Selling
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Seller Centre
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Blog
                    </Link>
                </List.Item>
            </List>
        </>
    )
}

export default FooterColFor;