interface HomePageServiceCardProps {
    title: string;
    description: string;
    image: string;
    customStyle: string;
    route?: URL | string;
}

import Image from "next/image";
import Link from "next/link";

export default function HomePageServiceCard({ title, description, image, customStyle, route = "product-design" }: HomePageServiceCardProps) {
    return (
      <Link href={'/services/' + route} className="block group">
        <div
          className="relative rounded-2xl overflow-hidden h-[740px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Always-visible dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-teal-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Content pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h5 className="text-2xl font-semibold text-white tracking-tight mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
              {title}
            </h5>
            <p className="text-white/70 font-normal text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
              {description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              Learn more
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
}