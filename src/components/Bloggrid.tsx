import { cn } from "@/utils/cnblog";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="relative w-full mx-auto ">
      <div
        className="absolute -z-0 top-20 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-full"
        style={{
          background:
            // "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
            "linear-gradient(135.89deg, rgb(64, 162, 227) 35.91%, rgb(173, 136, 198) 35% )",
        }}
      ></div>

      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          href={item.href}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    href: "/contact",
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Image
        alt=""
        src="/coaching.jpg"
        height={1000}
        width={1000}
        className="h-60"
      />
    ),
  },
  {
    href: "/contact",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <Image
        alt=""
        src="/coaching2.jpg"
        height={1000}
        width={1000}
        className="h-60"
      />
    ),
  },
  {
    href: "/contact",
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        alt=""
        src="/ppl.jpeg"
        height={1000}
        width={1000}
        className="h-60 object-cover "
      />
    ),
  },
  {
    href: "/contact",
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Image
        alt=""
        src="/coaching.jpg"
        height={1000}
        width={1000}
        className="h-60 object-cover"
      />
    ),
  },
  {
    href: "/contact",
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <Image
        alt=""
        src="/coaching.jpg"
        height={1000}
        width={1000}
        className="h-60 "
      />
    ),
  },
  {
    href: "/contact",
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <Image
        alt=""
        src="/coaching.jpg"
        height={1000}
        width={1000}
        className="h-60 "
      />
    ),
  },
  {
    href: "/contact",
    title: "The Spirit of Adventure",
    description:
      " Embark on exciting journeys and thrilling discoveriesk on exciting journeys and thrilling discoveries. on exciting journeys and thrilling discoveries.EmbarkEmbark on exciting journeys and thrilling discoveries.EmbarkEmbark on exciting journeys and thrilling discoveries.EmbarkEmbark on exciting journeys and thrilling discoveries.EmbarkEmbark on exciting journeys and thrilling discoveries.Embark on exciting journeys and thrilling discoveries Embark on exciting journeys and thrilling discoveries Embark on exciting journeys and thrilling discoveries Embark on exciting journeys and thrilling discoveries Embark on exciting journeys and thrilling discoveries Embark on exciting journeys and thrilling discoveries",
    header: (
      <Image
        alt=""
        src="/coaching.jpg"
        height={1000}
        width={1000}
        className="h-60 object-cover"
      />
    ),
  },
];
