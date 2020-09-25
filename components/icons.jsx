import { Icon, FadeIn } from ".";

const Icons = ({ initialDelay = 0, iconsData }) => (
    <div className="icons">
        {iconsData.map((data, i) => (
            <FadeIn key={i} className="icon" delay={initialDelay + i * 100}>
                <Icon {...data} />
            </FadeIn>
        ))}
    </div>
);

export { Icons };
