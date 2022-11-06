import { cssObj } from "@fuel-ui/css";
import { BoxCentered, Card, Focus, Heading, Stack, Text } from "@fuel-ui/react";
import type { LinkItemFragment } from "~/generated/graphql";
import { EmptyState } from "~/systems/Links";

import { LinkItem } from "./LinkItem";

type LinkListProps = {
  links?: LinkItemFragment[];
};

export function LinkList({ links }: LinkListProps) {
  const header = (
    <Card.Header as="header" css={styles.header}>
      <Heading as="h2">My Links</Heading>
      {Boolean(links?.length) && (
        <Text as="span">Showing {links?.length} links</Text>
      )}
    </Card.Header>
  );

  if (!links?.length) {
    return (
      <Card css={styles.root}>
        {header}
        <BoxCentered css={{ minH: "$full" }}>
          <EmptyState />
        </BoxCentered>
      </Card>
    );
  }

  return (
    <Card css={styles.root}>
      {header}
      <Card.Body>
        <Focus.ArrowNavigator asChild>
          <Stack gap="$1" direction="column">
            {(links || []).slice(0, 3).map((link) => (
              <LinkItem key={link.id} link={link} />
            ))}
          </Stack>
        </Focus.ArrowNavigator>
      </Card.Body>
    </Card>
  );
}

const styles = {
  root: cssObj({
    display: "flex",
    flexDirection: "column",
    borderRadius: "$xl",
    gap: "$2",

    "& .fuel_card--body": {
      padding: "$3",
    },
    "& .fuel_card--header": {
      py: "$3",
      px: "$5",
    },
  }),
  header: cssObj({
    alignItems: "center",
    justifyContent: "space-between",

    h2: {
      margin: 0,
      fontSize: "$xl",
      color: "$gray12",
    },
    span: {
      fontSize: "$xs",
      fontWeight: "$semibold",
      color: "$gray9",
    },
  }),
};
