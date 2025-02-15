// import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/home_ui/box-reveal";
import {ShinyButtonDemo} from "./internbutton";
export async function BoxRevealDemo() {
  return (
    <div
    className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 bg-cover bg-center"
    style={{ backgroundImage: "url('https://www.istockphoto.com/photo/professional-development-programmer-typing-on-a-laptop-computer-keyboard-screens-gm1455953950-491133889?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapi&utm_medium=affiliate&utm_source=unsplash&utm_term=api%3A%3A%3A')" }}
  >
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Our Internship<span className="text-[#d346e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <ShinyButtonDemo/>
      </BoxReveal>
    </div>
  );
}