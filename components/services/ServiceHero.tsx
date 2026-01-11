import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export default function ServiceHero({ title, subtitle, imageSrc }: ServiceHeroProps) {
  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover"
            priority
        /> */}
        <div className="absolute inset-0 bg-bjb-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-bjb-100 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}