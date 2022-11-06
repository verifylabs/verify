/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, cssObj } from "@fuel-ui/css";
import { Flex, Icon, Menu, Popover } from "@fuel-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useProfileQuery } from "~/generated/graphql";
import { useConnect } from "~/systems/Session";
import { Button } from "~/systems/UI";

import { truncate } from "../utils";

import { ClientSideOnly } from "./ClientSideOnly";

function useIsActiveLink() {
  const router = useRouter();
  return {
    addActiveClass: (path: string) =>
      router.asPath.startsWith(path) ? "active" : "",
  };
}

export function TopNav() {
  const router = useRouter();
  const { addActiveClass } = useIsActiveLink();
  const { address, isConnected, connect, disconnect } = useConnect();
  const { data } = useProfileQuery({ variables: { address: address as any } });
  const profile = data?.profile;

  function handleGoToProfile() {
    router.push("/profile");
  }

  function handleDisconnect() {
    disconnect();
  }

  return (
    <Flex as="nav" css={styles.root}>
      <Link href="/" passHref>
        <a>
          <Image
            src="/logo.svg"
            alt="Verify"
            width={96}
            height={25}
            className={styles.image()}
          />
        </a>
      </Link>
      <Flex as="ul" css={styles.menu}>
        <li className={addActiveClass("/links")}>
          <Link href="/links">My links</Link>
        </li>
      </Flex>
      <ClientSideOnly>
        <Flex css={styles.buttons} suppressHydrationWarning={true}>
          {isConnected && (
            <Button
              leftIcon="Plus"
              color="blue"
              onPress={() => router.push("/links")}
            >
              Create Link
            </Button>
          )}
          {!isConnected && (
            <Button color="black" onPress={() => connect()} leftIcon="Wallet">
              Connect Wallet
            </Button>
          )}
          {isConnected && (
            <Popover
              side="bottom"
              align="end"
              css={styles.userDropdown}
              sideOffset={5}
              content={
                <Menu
                  aria-label="Actions"
                  css={styles.userMenu}
                  onAction={(action) => {
                    if (action === "profile") {
                      handleGoToProfile();
                    }
                    if (action === "settings") {
                      handleDisconnect();
                    }
                  }}
                >
                  <Menu.Item key="profile" textValue="My Profile">
                    <Icon icon="User" css={{ color: "$gray8" }} />
                    My Profile
                  </Menu.Item>
                  <Menu.Item key="settings" textValue="Settings">
                    <Icon icon="SignOut" css={{ color: "$gray8" }} />
                    Sign Out
                  </Menu.Item>
                </Menu>
              }
            >
              <Button color="black" rightIcon="CaretDown">
                {profile && profile?.data.username
                  ? profile?.data.username
                  : `${truncate(4, address)}${address?.slice(-4)}`}
              </Button>
            </Popover>
          )}
        </Flex>
      </ClientSideOnly>
    </Flex>
  );
}

const styles = {
  root: cssObj({
    alignItems: "center",
    gap: "$14",
    py: "$4",
    px: "$24",
    backgroundColor: "$gray1",
    boxShadow: "$sm",
  }),
  menu: cssObj({
    flex: 1,
    listStyle: "none",
    px: "$0",
    alignItems: "center",
    gap: "$2",
    textTransform: "uppercase",
    fontSize: "$xs",
    fontWeight: "$bold",

    a: {
      px: "$3",
      py: "$2",
      color: "$gray10",
      textDecoration: "none",
      borderRadius: "$md",
    },
    "li.active a, a:hover": {
      color: "$gray12",
      background: "#EAEFF1",
    },
  }),
  buttons: cssObj({
    alignItems: "center",
    gap: "$2",
  }),
  image: css({
    cursor: "pointer",
  }),
  userDropdown: cssObj({
    padding: "0",
    background: "$gray12",
    borderRadius: "$lg",

    "&, .fuel_popover--arrow": {
      fill: "$gray12",
    },

    ".fuel_popover--arrow": {
      transform: "translateX(-30px)",
    },
  }),
  userMenu: cssObj({
    py: "$1",
    px: "$1",
  }),
  userMenuItem: cssObj({
    color: "$gray8",

    "&:focus": {
      color: "$gray1",
      background: "transparent",
      outline: "1px solid $whiteA7",
    },
    "& .fuel_icon": {
      color: "$gray11",
    },
    "&:focus .fuel_icon": {
      color: "$blue10",
    },
  }),
};
