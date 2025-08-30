import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  img: string;
};

export function ServiceCard({ title, desc, img }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 transform hover:shadow-lg hover:scale-[1.03] hover:rotate-2 hover:translate-y-[-5px]">
      {/* Image and Overlay Container */}
      <div className="relative overflow-hidden">
        {/* The Image */}
        <Image
          src={img}
          alt={title}
          width={400}
          height={250}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* The Color Overlay */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}