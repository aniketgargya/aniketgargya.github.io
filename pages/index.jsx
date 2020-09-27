import { getGravatarAvatar } from "gravatar-utils";
import Head from "next/head";
import { FadeIn, Icons } from "../components";
import { aboutMeIcons, skills } from "../data";

const Index = () => (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
            <title>Aniket Gargya</title>
        </Head>

        <header>
            <FadeIn delay={1000} className="profile-image-wrapper">
                <img className="profile-image" src={getGravatarAvatar("gargya.aniket@gmail.com", { size: 250 })} alt="Aniket Gargya" />
            </FadeIn>
            <FadeIn delay={1500}>
                <h1>Hey, I'm Aniket!</h1>
            </FadeIn>
            <Icons
                initialDelay={2000}
                iconsData={aboutMeIcons}
            />
        </header>
        <section className="my-skills">
            <FadeIn>
                <h1>My Skills</h1>
            </FadeIn>
            {skills.map(({ category, icons }, i) => (
                <div key={i} className="skill">
                    <FadeIn>
                        <h2>{category}</h2>
                    </FadeIn>
                    <Icons iconsData={icons} />
                </div>
            ))}
        </section>
        <footer>

        </footer>
    </>
);

export default Index;
