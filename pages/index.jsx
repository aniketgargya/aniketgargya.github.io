import { getGravatarAvatar } from "gravatar-utils";
import Head from "next/head";
import { FadeIn, Icons } from "../components";

const Index = () => (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
            <title>Aniket Gargya</title>
        </Head>

        <header>
            <FadeIn className="profile-image-wrapper">
                <img className="profile-image" src={getGravatarAvatar("gargya.aniket@gmail.com", { size: 250 })} alt="Aniket Gargya" />
            </FadeIn>
            <FadeIn delay={500}>
                <h1>Hey, I'm Aniket!</h1>
            </FadeIn>
            <Icons
                initialDelay={1000}
                iconsData={[
                    {
                        fileName: "github",
                        iconName: "Github",
                        href: "http://github.com/aniketgargya"
                    },
                    {
                        fileName: "stackoverflow",
                        iconName: "Stack Overflow",
                        href: "https://stackoverflow.com/users/8403017/aniket-gargya"
                    },
                    {
                        fileName: "linkedin",
                        iconName: "Linkedin",
                        href: "https://www.linkedin.com/in/aniket-gargya-43277a141/"
                    },
                    {
                        fileName: "hacker-rank",
                        iconName: "Hacker Rank",
                        href: "https://www.hackerrank.com/gargya_aniket"
                    },
                    {
                        fileName: "mac",
                        iconName: "Mac"
                    },
                    {
                        fileName: "android",
                        iconName: "Android"
                    }
                ]}
            />
        </header>
    </>
);

export default Index;
