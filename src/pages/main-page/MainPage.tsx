import { TapBar } from "@features/tapbar";
import { blocks } from "@shared/model/data";
import { LayoutBlock } from "@shared/ui/LayoutBlock";

export const MainPage = () => {
  return (
    <div>
      {blocks.map((block) => (
        <LayoutBlock
          key={block.id}
          id={block.id}
          image={block.image}
          content={block.content}
        />
      ))}
      <TapBar />
    </div>
  );
};
