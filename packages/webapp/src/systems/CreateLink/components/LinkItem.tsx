import { cssObj } from "@fuel-ui/css";
import { Box, Flex, Heading, Icon, Link, Text } from "@fuel-ui/react";
import { useRouter } from "next/router";
import { usePress } from "react-aria";
import type { LinkItemFragment } from "~/generated/graphql";
import { dayjs, truncate } from "~/systems/Core";
import { verifyUrl } from "~/systems/Core/utils/verifyUrl";

type SimpleLinkItemProps = {
  link: LinkItemFragment;
};

export function LinkItem({ link }: SimpleLinkItemProps) {
  const title = link.openGraph?.title;
  const image = link.openGraph?.image.url;
  const url = verifyUrl(link.data.short);
  const router = useRouter();

  const { pressProps } = usePress({
    onPress: () => {
      router.push(`/links?selected=${link.id}`);
    },
  });

  return (
    <Flex css={styles.root} tabIndex={0} {...pressProps}>
      <Box
        css={{
          ...styles.image,
          background: `url(${image}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      />
      <Box>
        <Text css={styles.date}>
          {dayjs(link.createdAt).format("MMM DD, YYYY • hh:mm A")}
        </Text>
        <Heading as="h3" css={styles.title}>
          {truncate(35, title)}
        </Heading>
        <Flex css={styles.urls}>
          <Text as="span">{truncate(24, link.data.redirect)}</Text>
          <Icon icon="ArrowRight" />
          <Link href={url} isExternal>
            {truncate(24, url)}
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

const styles = {
  root: cssObj({
    py: "$2",
    px: "$2",
    gap: "$4",
    borderRadius: "$xl",
    alignItems: "center",
    border: "1px solid transparent",

    "&:nth-child(even)": {
      background: "$gray3",
    },

    "&:hover": {
      cursor: "pointer",
      borderColor: "$gray6",
    },
  }),
  image: cssObj({
    width: "104px",
    height: "77px",
    borderRadius: "$lg",
    border: "1px solid $gray5",
    boxShadow: "inset 0 0 0 1px white",
  }),
  date: cssObj({
    margin: 0,
    color: "$gray9",
    fontSize: "$xs",
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1.4,
  }),
  title: cssObj({
    margin: 0,
    textSize: "lg",
    color: "$gray12",
    lineHeight: 1.4,
    letterSpacing: "-0.02em",
  }),
  urls: cssObj({
    marginTop: "2px",
    gap: "$2",
    "span, a": {
      fontWeight: "bold",
      fontSize: "10px",
      lineHeight: 1.4,
      textTransform: "uppercase",
    },
  }),
};
