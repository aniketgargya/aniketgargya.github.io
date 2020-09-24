import { getGravatarAvatar } from "gravatar-utils";
import Head from "next/head";
import { FadeIn, Icon } from "../components";

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
            <div className="icons">
                {[
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
                        fileName: "mac",
                        iconName: "Mac",
                    },
                    {
                        fileName: "android",
                        iconName: "Android",
                    },
                    {
                        fileName: "vscode",
                        iconName: "VS Code",
                    },
                ].map((data, i) => (
                    <Icon key={i} delay={1000 + i * 100} {...data} />
                ))}
            </div>
        </header>
    </>
);

export default Index;
