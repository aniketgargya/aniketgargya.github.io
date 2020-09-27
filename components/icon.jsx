const Icon = ({ fileName, iconName, href }) => (
    <>
        <img src={`/icons/${fileName}.png`} alt={`${iconName} Icon`} className="image" />

        <span className="caption">

            <a href={href}>
                {iconName}
            </a>
        </span>
    </>
);

export { Icon };
