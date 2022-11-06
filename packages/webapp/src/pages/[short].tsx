import { cssObj } from "@fuel-ui/css";
import { Box, Button, Card, Flex, Icon, Text } from "@fuel-ui/react";
import { factories } from "@verify/contract";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { Layout } from "~/systems/Core";
import { GeneratedImage } from "~/systems/Core/components/GeneratedImage";
import { useReportLink } from "~/systems/CreateLink/hooks";
import { useConnect } from "~/systems/Session";

const styles = {
  layout: cssObj({
    display: "flex",
    height: "100vh",
    padding: 0,
  }),
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
    alignSelf: "center",
    margin: "0 auto",
    "header, footer": {
      py: "$3",
    },
    h2: {
      margin: 0,
      fontSize: "$xl",
      color: "$gray12",
    },
    "@media only screen and (max-width: 600px)": {
      width: "90vw",
    },
    "@media only screen and (min-width: 600px)": {
      maxW: "360px",
      width: "360px",
    },
  }),
};

function useCountDown(enable: boolean, final: () => void) {
  const [count, setCount] = useState(20);

  useEffect(() => {
    if (!enable) return;
    if (count <= 0) {
      final();
      return;
    }
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, enable]);

  return count;
}

export default function LinkPreview() {
  const { address } = useAccount();
  const { connect } = useConnect();
  const router = useRouter();
  const { short } = router.query as { short: string };
  const { data: contentData } = useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ID!,
    contractInterface: factories.Verify__factory.abi,
    functionName: "contents",
    enabled: !!short,
    args: [short],
  });
  const { data: resportData, refetch } = useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ID!,
    contractInterface: factories.Verify__factory.abi,
    functionName: "getReports",
    enabled: !!short,
    args: [short],
  });
  const content: any = contentData;
  const resports: BigNumber = resportData as any;
  const { reportLink, loading: reporting } = useReportLink({
    onCompleted: () => refetch(),
  });
  const hasReports = resports?.toNumber() === 0;
  const countDown = useCountDown(
    !!content && hasReports,
    () => (window.location.href = content.data)
  );

  if (!content) return null;

  if (!address) {
    return (
      <Layout.Content css={styles.layout}>
        <Card css={styles.root}>
          <Button onPress={() => connect()}>Connect your wallet</Button>
        </Card>
      </Layout.Content>
    );
  }

  return (
    <Layout.Content css={styles.layout}>
      <Card css={styles.root}>
        <Flex css={styles.images}>
          <Box css={styles.image}>
            <Box css={styles.title}>
              <Text as="h2" fontSize="xs">
                Creator
              </Text>
            </Box>
            <GeneratedImage size="100%" value={content.owner} />
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
            <GeneratedImage size="100%" value={address} />
          </Box>
        </Flex>
        <Flex css={styles.report} direction="row" align="center">
          {resports?.toNumber() > 0 ? (
            <>
              <Text
                fontSize="sm"
                as="h2"
                css={{
                  color: "$red10 !important",
                }}
              >
                {resports.toNumber()} reports for this link
              </Text>
              <Flex css={{ flex: 1 }} justify="end">
                <Icon
                  icon={Icon.is("ShieldWarning")}
                  size={36}
                  color="red10"
                  css={{ paddingLeft: "$2" }}
                />
              </Flex>
            </>
          ) : (
            <>
              <Text fontSize="sm" color="gray12" as="h2">
                No reports on this link
              </Text>
              <Flex css={{ flex: 1 }} justify="end">
                <Icon
                  icon={Icon.is("ShieldCheck")}
                  size={36}
                  color="blue10"
                  css={{ paddingLeft: "$2" }}
                />
              </Flex>
            </>
          )}
        </Flex>
        <Flex css={styles.description} direction="column">
          <Text as="h2">Creator info</Text>
          <Text css={{ fontSize: 12 }} color="gray12">
            {content.owner}
          </Text>
        </Flex>
        <Flex css={styles.description} direction="column">
          <Text as="h2">Your info</Text>
          <Text css={{ fontSize: 12 }} color="gray12">
            {address}
          </Text>
        </Flex>
        <Flex css={styles.description} direction="column">
          <Text as="h2">Redirecting to</Text>
          <Text css={{ fontSize: 14 }} color="gray12">
            {content.data}
          </Text>
        </Flex>
        <Card.Footer css={{ padding: "$2", display: "flex" }}>
          <Button
            color="gray"
            css={{ flex: 1, marginRight: "$1" }}
            isLoading={reporting}
            isDisabled={reporting}
            onPress={() => reportLink(short)}
          >
            REPORT
          </Button>
          <Button
            css={{ flex: 1, marginLeft: "$1" }}
            onPress={() => {
              window.location.href = content.data;
            }}
          >
            GO {!hasReports ? "" : `(${countDown}s)`}
          </Button>
        </Card.Footer>
      </Card>
    </Layout.Content>
  );
}
