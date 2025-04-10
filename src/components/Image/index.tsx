import Image from "next/image";

type StyledImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
};

const StyledImage = ({ src, alt, width, height, className }: StyledImageProps) => {
    return (
        <div className="flex items-center justify-center">
            <Image
                src={src}
                alt={alt ?? "Background"}
                width={width ?? 100}
                height={height ?? 100}
                className={className}
            />
        </div>
    );
}

export default StyledImage;