const Icon = ({ fileName, iconName, href, delay = 0 }) => (
    <>
        {!href ? <img src={`/icons/${fileName}.png`} alt={`${iconName} Icon`} className="image" /> : (
            <a href={href}><img src={`/icons/${fileName}.png`} alt={`${iconName} Icon`} className="image" /></a>
        )}
        {/* <span>{iconName}</span> */}
    </>
);

export { Icon };
