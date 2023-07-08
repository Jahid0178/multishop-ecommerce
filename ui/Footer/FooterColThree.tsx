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

const FooterColThree = () => {
    const { classes } = useStyles();
    return (
        <>
            <Title order={4}>Public Business</Title>
            <List listStyleType="none" mt={20}>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Customer Bill of Rights
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Gift Sards
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Track Orders
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Recalls
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Team Member Services
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Delivery
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Product Service
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        How to Buy
                    </Link>
                </List.Item>
                <List.Item mb={5}>
                    <Link href="#" className={classes.footerLink}>
                        Food Delivery
                    </Link>
                </List.Item>
                <List.Item>
                    <Link href="#" className={classes.footerLink}>
                        Donates
                    </Link>
                </List.Item>
            </List>
        </>
    )
}

export default FooterColThree;