import { cssObj } from "@fuel-ui/css";
import { Card } from "@fuel-ui/react";
import { useRouter } from "next/router";
import { Layout } from "~/systems/Core";

type RedirectPageQuery = {
  short?: string;
};

const styles = {
  root: cssObj({
    margin: "0 auto",
    maxW: "$lg",

    "header, footer": {
      py: "$3",
    },
    h2: {
      margin: 0,
      fontSize: "$xl",
      color: "$gray12",
    },
    label: {
      position: "relative",
    },
    "label button": {
      position: "absolute",
      top: 0,
      right: 0,
    },
  }),
};

export default function LinkPreview() {
  const router = useRouter();
  const { short } = router.query as RedirectPageQuery;

  if (!short) return null;

  return (
    <Layout.Content>
      <Card css={styles.root}></Card>
    </Layout.Content>
  );
}
