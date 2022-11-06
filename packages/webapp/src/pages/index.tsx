import type { GetServerSidePropsContext } from "next";
import { Layout } from "~/systems/Core";
import { Hero } from "~/systems/Home";
import { withSessionProps } from "~/systems/Session";

function Home() {
  return <Hero />;
}

Home.getPageLayout = Layout.getLayout({
  title: "Home",
});

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return withSessionProps(ctx);
}

export default Home;
