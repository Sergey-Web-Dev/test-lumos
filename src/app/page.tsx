"use client";
import Button from "@/shared/ui/button";
import SectionBlock from "@/widgets/blockLocation";
import Header from "@/widgets/header";
import NameSelectionForm from "@/widgets/nameSelectionForm";
import SectionText from "@/widgets/section";
import SectionIterate from "@/widgets/sectionIterate";
import TwoSections from "@/widgets/twoSections";
import { useRef } from "react";

export default function Home() {
  const chooseNameRef = useRef<HTMLDivElement>(null);
  const firstScreenRef = useRef<HTMLDivElement>(null);

  const scrollToChooseName = () => {
    chooseNameRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFirstScreen = () => {
    firstScreenRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onLogoClick={scrollToFirstScreen}
        cartBlock={
          <Button onClick={scrollToChooseName} variant="primary">
            Get VPN
          </Button>
        }
      />
      <main className="container mx-auto mt-40">
        <div ref={firstScreenRef}>
          <SectionText className="flex-col gap-8">
            <>
              <h2 className="font-bold text-3xl leading-10 mb:w-auto w-1/4 text-center mx-auto">
                Access{" "}
                <span className="text-[#3177F2]">everything securely </span>
                with VPN
              </h2>
              <img src="/main_Image.png" alt="main_Image.png" />
              <Button
                onClick={scrollToChooseName}
                variant="secondary"
                className="font-bold text-2xl mb:w-full mb:px-0"
              >
                Get VPN
              </Button>
              <img src="/30m+.png" alt="30m+.png" />
            </>
          </SectionText>
        </div>
        <TwoSections
          border
          sectionOne={
            <SectionBlock
              img="location.png"
              firstTextBlock="50+"
              secondTextBlock="Locations"
            />
          }
          sectionTwo={
            <SectionBlock
              img="hierarchy-square-2.png"
              firstTextBlock="1000+"
              secondTextBlock="Servers"
            />
          }
        />
        <h3 className="text-center font-medium text-[#646464]">
          VPN-your <span className="text-[#3177F2]">ultimate</span> solution for
          a private and secure online experience!
        </h3>
        <SectionIterate />
        <section>
          <h4 className="text-center text-[#3177F2] font-bold text-2xl">
            Millions of people trust us!
          </h4>
        </section>
        <div ref={chooseNameRef}></div>
        <NameSelectionForm />
      </main>
    </>
  );
}
