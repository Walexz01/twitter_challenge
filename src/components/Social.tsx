import { socials } from "../data";

const Social = () => {
  return (
    <div className="social">
      {socials.map(({ Icon, link }, index) => (
        <a key={index} href={link}>
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Social;
