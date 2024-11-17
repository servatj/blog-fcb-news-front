import {Image} from "@nextui-org/image";

type TeamLogosProps = {
  logos: string[];
};

export const TeamLogos = ({ logos }: TeamLogosProps) => (
  <div className="team-logos">
    {logos.map((logo, index) => (
      <Image
        key={index}
        src={logo}
        alt={`Team ${index + 1}`}
      />
    ))}
  </div>
);
