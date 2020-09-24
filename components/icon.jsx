import { FadeIn } from ".";
const Icon = ({ fileName, iconName, href, delay = 0 }) => (
    <>
        <FadeIn className="icon" delay={delay}>
            {!href ? <img src={`/icons/${fileName}.png`} alt={`${iconName} Icon`} className="image"/> : (
                <a href={href}><img src={`/icons/${fileName}.png`} alt={`${iconName} Icon`} className="image"/></a>
            )}
            {/* <span>{iconName}</span> */}
        </FadeIn>
    </>
);

export { Icon };
