import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Image} from "@nextui-org/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const image_url = "https://estaticos-cdn.prensaiberica.es/clip/ca127077-e8c8-4a61-9ef9-17f7ed7efd65_alta-libre-aspect-ratio_default_0.jpg"
  const titleMainPost = 'Luis de la fuente: "Lamine lo tiene todo para ser una leyenda del fútbol"'

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl justify-center">
        <Image
          src={image_url}
          alt="Hero Image"
        />
        {/* <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span> */}
        <div className={subtitle({ class: "mt-4" })}>
          {titleMainPost}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="relative w-full h-48">
          <Image
            src="https://via.placeholder.com/400x200?text=Web3+Thumb+2"
            alt="Web3 Thumbnail 1"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-48">
          <Image
            src="https://via.placeholder.com/400x200?text=Web3+Thumb+2"
            alt="Web3 Thumbnail 2"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-48">
          <Image
            src="https://via.placeholder.com/400x200?text=Web3+Thumb+3"
            alt="Web3 Thumbnail 3"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
