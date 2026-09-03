import Head from "next/head";
import SocialResponsibilityPage from "@/components/social-responsibility";

const SocialResponsibility = () => {
  return (
    <>
      <Head>
        <title>Social Responsibility | SimcoCart</title>
        <meta
          name="description"
          content="How SimcoCart gives back to communities, protects the environment, and holds sellers and partners to fair, ethical standards."
        />
      </Head>
      <SocialResponsibilityPage />
    </>
  );
};

export default SocialResponsibility;