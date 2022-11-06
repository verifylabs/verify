import { cssObj } from "@fuel-ui/css";
import { Flex, Text } from "@fuel-ui/react";
import Image from "next/image";

export function EmptyState() {
  return (
    <Flex css={styles.root}>
      <Image
        src="/empty-links.svg"
        width={200}
        height={221}
        alt="Empty links"
      />
      <Text>You don&apos;t have any links created yet</Text>
    </Flex>
  );
}

const styles = {
  root: cssObj({
    gap: "$2",
    flexDirection: "column",
    alignItems: "center",

    ".fuel_text": {
      fontSize: "$sm",
      fontWeight: "bold",
    },
  }),
};
