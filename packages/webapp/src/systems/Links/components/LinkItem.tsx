import { cssObj, cx } from "@fuel-ui/css";
import { Box, Flex, Heading, Text } from "@fuel-ui/react";
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
  const url = verifyUrl(link.data.short);
  const router = useRouter();
  const selected = router.query.selected;

  const { pressProps } = usePress({
    onPress: () => {
      router.push(`/links?selected=${link.id}`);
    },
  });

  return (
    <Flex
      {...pressProps}
      css={styles.root}
      tabIndex={0}
      className={cx({ selected: selected === link.id })}
    >
      <Box>
        <Text css={styles.date}>
          {dayjs(link.createdAt).format("MMM DD, YYYY • HH:mm")}
        </Text>
        <Heading as="h3" css={styles.title}>
          {truncate(35, title)}
        </Heading>
        <Flex css={styles.urls}>
          <Text as="span">{url}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

const styles = {
  root: cssObj({
    position: "relative",
    py: "$3",
    px: "$4",
    gap: "$4",
    borderRadius: "$xl",
    alignItems: "center",
    border: "1px solid transparent",
    overflow: "hidden",

    "&:nth-child(odd)": {
      background: "$gray3",
    },

    "&:hover": {
      cursor: "pointer",
    },

    "&.selected::after": {
      position: "absolute",
      display: "block",
      content: '""',
      top: 0,
      left: 0,
      height: "100%",
      width: "3px",
      background: "$blue10",
    },

    "&:focus": {
      outline: "2px solid $gray5",
    },

    "&:hover .fuel_heading": {
      color: "$blue10",
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

    ".selected &": {
      color: "$blue10",
    },
  }),
  urls: cssObj({
    marginTop: "2px",
    "span, a": {
      fontWeight: "bold",
      fontSize: "$xs",
      textTransform: "uppercase",
    },
  }),
};
