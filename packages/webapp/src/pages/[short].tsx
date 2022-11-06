import { cssObj } from "@fuel-ui/css";
import { Box, Button, Card, Flex, Icon, Link, Text } from "@fuel-ui/react";
import { useRouter } from "next/router";
import { Layout } from "~/systems/Core";
import { GeneratedImage } from "~/systems/Core/components/GeneratedImage";

type RedirectPageQuery = {
  short?: string;
};

const styles = {
  description: cssObj({
    padding: "$2",
  }),
  report: cssObj({
    marginTop: "$2",
    marginBottom: "$2",
    padding: "$2",
    border: "1px solid $gray7",
    borderLeft: 0,
    borderRight: 0,
  }),
  linkIcon: cssObj({
    position: "absolute",
    marginTop: 14,
    backgroundColor: "white",
    border: "1px solid $gray11",
    padding: 4,
    borderRadius: "$full",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
  images: cssObj({
    position: "relative",
  }),
  image: cssObj({
    padding: "$2",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }),
  title: cssObj({
    width: "100%",
    marginTop: "$1",
    marginBottom: "$1",
    paddingBottom: "$2",
  }),
  root: cssObj({
    margin: "0 auto",
    maxW: "360px",
    width: "360px",

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
      <Card css={styles.root}>
        <Flex css={styles.images}>
          <Box css={styles.image}>
            <Box css={styles.title}>
              <Text as="h2" fontSize="xs">
                Creator
              </Text>
            </Box>
            <GeneratedImage size="100%" value="Hello World" />
          </Box>
          <Box css={styles.linkIcon}>
            <Icon icon={Icon.is("Link")} size={26} />
          </Box>
          <Box css={styles.image}>
            <Box css={styles.title}>
              <Text as="h2" fontSize="xs">
                My verify
              </Text>
            </Box>
            <GeneratedImage size="100%" value="Hello World" />
          </Box>
        </Flex>
        <Flex css={styles.report} direction="row" align="center">
          {/* <Text fontSize="sm" color="gray12" as="h2">
            No reports on this link
          </Text>
          <Flex css={{ flex: 1 }} justify="end">
            <Icon
              icon={Icon.is("ShieldCheck")}
              size={36}
              color="blue10"
              css={{ paddingLeft: "$2" }}
            />
          </Flex> */}
          <Text
            fontSize="sm"
            as="h2"
            css={{
              color: "$red10 !important",
            }}
          >
            2 reports for this link
          </Text>
          <Flex css={{ flex: 1 }} justify="end">
            <Icon
              icon={Icon.is("ShieldWarning")}
              size={36}
              color="red10"
              css={{ paddingLeft: "$2" }}
            />
          </Flex>
        </Flex>
        <Flex css={styles.description} direction="column">
          <Text as="h2">Link owner</Text>
          <Text fontSize="sm" color="gray12">
            0x1fc982dcecf486bf8106029e04cd3033e895ff48
          </Text>
          <Text fontSize="sm" color="gray12">
            stacio.eth
          </Text>
          <Link
            css={{ fontSize: "$sm" }}
            target="_blank"
            href="https://etherscan.io/address/0xdc5a28885a1800b1435982954ee9b51d2a8d3bf0"
          >
            See transaction
          </Link>
        </Flex>
        <Flex css={styles.description} direction="column">
          <Text as="h2">Your info</Text>
          <Text fontSize="sm" color="gray12">
            address: 0x1fc982dcecf486bf8106029e04cd3033e895ff48
          </Text>
          <Text fontSize="sm" color="gray12">
            ens: stacio.eth
          </Text>
        </Flex>
        <Card.Footer css={{ padding: "$2", display: "flex" }}>
          <Button color="gray" css={{ flex: 1, marginRight: "$1" }}>
            REPORT
          </Button>
          <Button css={{ flex: 1, marginLeft: "$1" }}>GO (20s)</Button>
        </Card.Footer>
      </Card>
    </Layout.Content>
  );
}
