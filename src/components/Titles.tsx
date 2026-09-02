interface HeroProps {
  title: string;
  spanTitle: string;
  nextTitle: string;
  description: string;
}

export const Titles = ({ title, spanTitle, nextTitle, description }: HeroProps) => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-black mb-6 leading-[1.15] font-normal">
        {title} <span className="text-brand-paragraph italic">{spanTitle}</span>
        <br />
        {nextTitle}
      </h1>
      <p className="text-sm md:text-base text-brand-paragraph max-w-xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};