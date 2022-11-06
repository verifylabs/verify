import { cssObj } from "@fuel-ui/css";
import { Box, Card, Flex, Grid, Heading, Link, Text } from "@fuel-ui/react";
import type { LinkItemFragment } from "~/generated/graphql";
import { dayjs, truncate } from "~/systems/Core";
import { verifyUrl } from "~/systems/Core/utils/verifyUrl";

type SelectedLinkProps = {
  link: LinkItemFragment;
};
export function SelectedLink({ link }: SelectedLinkProps) {
  const title = link.openGraph?.title;
  const image = link.openGraph?.image.url;
  const url = verifyUrl(link.data.short);
  return (
    <Card css={styles.root}>
      <Flex as="header" gap="$8">
        <Box
          css={{
            ...styles.image,
            background: `url(${image}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        />
        <Grid css={styles.info}>
          <Heading as="h2">{truncate(25, title)}</Heading>
          <Text css={styles.date}>
            {dayjs(link.createdAt).format("MMM DD, YYYY • hh:mm A")}
          </Text>
          <Link href={url} isExternal>
            {truncate(24, url)}
          </Link>
          <Text
            as="div"
            css={styles.redirect}
            leftIcon="Link"
            leftIconAriaLabel="Destinatino Link"
          >
            <strong>Destination:</strong> {link.data?.redirect}
          </Text>
        </Grid>
      </Flex>
    </Card>
  );
}

const styles = {
  root: cssObj({
    px: "$8",
    py: "$8",
  }),
  image: cssObj({
    width: "162px",
    height: "125px",
    borderRadius: "$lg",
    border: "1px solid $gray5",
    boxShadow: "inset 0 0 0 1px white",
  }),
  info: cssObj({
    flex: 1,
    alignSelf: "center",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "repeat(3, auto)",
    gridGap: "$2",

    h2: {
      fontSize: "$3xl",
      fontWeight: "500",
      margin: 0,
    },

    a: {
      gridRow: "1 / 3",
      gridColumn: "2 / 3",
    },
  }),
  date: cssObj({
    margin: 0,
    color: "$gray9",
    fontSize: "$xs",
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1.4,
  }),
  redirect: cssObj({
    gridColumn: "1 / 3",
    py: "$2",
    mt: "$2",
    borderTop: "1px dashed $gray5",
    borderBottom: "1px dashed $gray5",
    fontSize: "$sm",
  }),
};
