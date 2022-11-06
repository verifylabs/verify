import { cssObj } from "@fuel-ui/css";
import { Box, Heading, Text } from "@fuel-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "~/systems/Core";
import { Button, LinkInput } from "~/systems/UI";

export function Hero() {
  const [url, setURL] = useState("");
  const router = useRouter();

  return (
    <Layout.Content as="section" css={styles.root}>
      <Box>
        <Heading as="h1">
          Keep your community safe.
          <br /> Share verified links.
        </Heading>
        <Text fontSize="lg" css={{ maxW: "$lg", mb: "$6" }}>
          Create links that you can safely share with your community. Everything
          is verifiable on-chain.
        </Text>
        <Box css={{ maxW: "$lg" }}>
          <LinkInput value={url} onChange={setURL}>
            <Button
              color="blue"
              leftIcon="Plus"
              css={{ mr: "-8px" }}
              onPress={() => router.push(`/links`)}
              isDisabled={!url.length}
            >
              Create Link
            </Button>
          </LinkInput>
        </Box>
      </Box>
      <Image
        src="/hero-illustration.svg"
        width={606}
        height={440}
        alt="Verify Illustration"
      />
    </Layout.Content>
  );
}

const styles = {
  root: cssObj({
    display: "flex",
    alignItems: "center",
    background: `url(/hero-bg.png)`,
    backgroundSize: "cover",

    h1: {
      fontSize: "56px",
      lineHeight: "1",
      background: "linear-gradient(268.3deg, #3993C7 1.24%, #11181C 99.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
    },
  }),
};
