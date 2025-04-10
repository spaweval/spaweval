import Image, { StaticImageData } from "next/image";

type IconProps = {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: () => void;
    color?: string;
};

const Icon = ({src,width,height,alt,className,onClick, color}: IconProps) => {
    return (
        <Image
            src={src}
            alt={alt ?? "Logo"}
            width={width ?? 24}
            height={height ?? 24}
            className={className}
            onClick={onClick}
            color={color}
            style={{cursor: "pointer"}}
        />
    );
};

export default Icon;