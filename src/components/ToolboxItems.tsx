import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex px-6 pb-6 md:px-10",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-wrap gap-3 py-0.5",
          itemsWrapperClassName,
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
