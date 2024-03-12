import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[25rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 z-30 relative h-96 rounded-xl group/bento bg-slate hover:shadow-xl transition duration-200 shadow-lg p-4  bg-slate-50/30 drop-shadow-md border border-slate-50 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="container max-h-40">{header}</div>

      <div className="pt-3 group-hover/bento:translate-x-2 transition duration-200">
        <div className="medium text-2xl mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-md line-clamp-2 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
