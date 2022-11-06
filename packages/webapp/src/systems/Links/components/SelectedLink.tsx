/* eslint-disable @typescript-eslint/no-explicit-any */
import { cssObj } from "@fuel-ui/css";
import { Card, Copyable, Flex, Grid, Text } from "@fuel-ui/react";
import { dayjs, truncate } from "~/systems/Core";
import { verifyUrl } from "~/systems/Core/utils/verifyUrl";

type SelectedLinkProps = {
  link: any;
};
export function SelectedLink({ link }: SelectedLinkProps) {
  const url = verifyUrl(link.id);
  return (
    <Card css={styles.root}>
      <Flex as="header" gap="$8">
        <Grid css={styles.info}>
          <Text css={styles.date}>
            {dayjs(link.timestamp.toNumber()).format("MMM DD, YYYY • hh:mm A")}
          </Text>
          <Copyable value={url}>{truncate(24, url)}</Copyable>
          <Text
            as="div"
            css={styles.redirect}
            leftIcon="Link"
            leftIconAriaLabel="Destinatino Link"
          >
            <strong>Destination:</strong> {link.data}
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
