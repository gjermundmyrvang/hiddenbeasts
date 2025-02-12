import { TextGenerateEffect } from "./ui/text-generate-effect";


export const Header = () => {

    const headerText = "SKJULTE BEIST"
  
  return (
    <div className="flex justify-center items-center min-h-[30vh] mx-auto">
        <TextGenerateEffect words={headerText} className="font-extrabold"/>
    </div>
  );
}