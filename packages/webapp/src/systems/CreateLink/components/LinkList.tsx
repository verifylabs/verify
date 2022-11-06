import { cssObj } from "@fuel-ui/css";
import { Card, Flex, Focus, Heading, Stack } from "@fuel-ui/react";
import type { LinkItemFragment } from "~/generated/graphql";
import { EmptyState } from "~/systems/Links";
import { Button } from "~/systems/UI";

import { LinkItem } from "./LinkItem";

type LinkListProps = {
  links?: LinkItemFragment[];
};

export function LinkList({ links }: LinkListProps) {
  if (!links?.length) {
    return (
      <Card css={styles.root}>
        <EmptyState />
      </Card>
    );
  }
  return (
    <Card css={styles.root}>
      <Flex as="header">
        <Heading as="h2" css={styles.heading}>
          Last created links
        </Heading>
        <Button leftIcon="Eye">See all</Button>
      </Flex>
      <Focus.ArrowNavigator>
        <Stack gap="$1" direction="column">
          {(links || []).slice(0, 3).map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </Stack>
      </Focus.ArrowNavigator>
    </Card>
  );
}

const styles = {
  root: cssObj({
    py: "$3",
    px: "$3",
    marginTop: "$10",
    borderRadius: "$xl",
    gap: "$3",

    header: {
      px: "$4",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
  heading: cssObj({
    margin: 0,
    fontSize: "$xl",
    color: "$gray12",
  }),
};
