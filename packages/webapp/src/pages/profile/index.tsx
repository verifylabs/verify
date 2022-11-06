/* eslint-disable @typescript-eslint/no-explicit-any */
import { cssObj } from "@fuel-ui/css";
import { Card, Form, Heading, Icon, Input } from "@fuel-ui/react";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAccount, useEnsName } from "wagmi";
import { useProfileQuery } from "~/generated/graphql";
import { ClientSideOnly, Layout } from "~/systems/Core";
import { useUpsertProfile } from "~/systems/Profile/hooks";
import { withSessionProps } from "~/systems/Session";
import { Button } from "~/systems/UI";

const Profile = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const [username, setUsername] = useState<string | undefined | null>("");
  const [usingENS, setUsingENS] = useState(false);
  const router = useRouter();

  function handleUseENS() {
    setUsername(ensName);
    setUsingENS(true);
  }

  function handleCancel() {
    router.back();
  }

  const { upsert, loading } = useUpsertProfile();
  async function handleSubmit(e: any) {
    e.preventDefault();
    await upsert({ address, username });
  }

  useProfileQuery({
    variables: { address: address as any },
    onCompleted(data) {
      setUsername(data.profile?.data.username);
    },
  });

  return (
    <Layout.Content>
      <Card css={styles.root}>
        <Card.Header as="header">
          <Heading as="h2">My Profile</Heading>
        </Card.Header>
        <form onSubmit={handleSubmit}>
          <Card.Body>
            <Form.Control isRequired>
              <Form.Label htmlFor="username">
                Username
                <ClientSideOnly>
                  {ensName && username !== ensName && (
                    <Button variant="link" onPress={handleUseENS}>
                      Use your ENS
                    </Button>
                  )}
                </ClientSideOnly>
              </Form.Label>
              <Input isFullWidth isDisabled={usingENS}>
                <Input.ElementLeft
                  element={<Icon icon="User" label="Username" />}
                />
                <Input.Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Type you username"
                  value={username || ""}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Input>
            </Form.Control>
          </Card.Body>
          <Card.Footer gap="$3" direction="row-reverse">
            <Button type="submit" size="sm" color="blue" isLoading={loading}>
              Save
            </Button>
            <Button size="sm" color="gray" onPress={handleCancel}>
              Cancel
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </Layout.Content>
  );
};

Profile.getPageLayout = Layout.getLayout({
  title: "Profile",
});

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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return withSessionProps(ctx);
}

export default Profile;
