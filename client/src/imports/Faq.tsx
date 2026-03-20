import svgPaths from "./svg-d9dl1vated";
import imgConfidentRadiantSmile from "figma:asset/a9826dc5756409b00c73f26a786ca5052dfd4597.png";
import imgLinkOrahDental from "figma:asset/f75255e1b824b08459260a03d5891cf916a775dd.png";
import imgRectangle1 from "figma:asset/ef478d2a42ad3d4d142f85a902ec1ea5a6d2e8c5.png";

function ConfidentRadiantSmile() {
  return (
    <div className="h-[992px] relative shrink-0 w-full" data-name="Confident, radiant smile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-11.23%] max-w-none top-0 w-[122.47%]" src={imgConfidentRadiantSmile} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#859c81] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">FAQ</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[72px] relative shrink-0 text-[#161950] text-[72px] tracking-[-1.8px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Frequently asked `}</p>
        <p className="font-['Playfair_Display:Medium_Italic',sans-serif] italic text-[#879c84]">questions</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[51px] items-center left-0 max-w-[672px] pt-[8px] right-[768px] top-[211px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light justify-center leading-[28px] left-[calc(50%-336px)] text-[#5c5e8a] text-[20px] top-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Find answers to common questions about our services, treatments, and</p>
        <p>what to expect during your visit.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-[131px] top-[85px] w-[1440px]" data-name="Container">
      <Container2 />
      <Heading />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <ConfidentRadiantSmile />
      <div className="absolute inset-[-15px_0_0_0]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(79.6901deg, rgba(255, 249, 240, 0.9) 2.5135%, rgba(255, 249, 240, 0.855) 36.598%, rgba(255, 249, 240, 0.36) 70.684%)" }} />
      <div className="absolute inset-[3px_0_0_0]" data-name="Gradient" />
      <Container1 />
    </div>
  );
}

function Section() {
  return (
    <div className="-translate-x-1/2 absolute h-[404px] left-1/2 top-[84px] w-[1440px]" data-name="Section">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[228px] pt-[288px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#859c81] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Call Now</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[48px] text-center tracking-[-1.2px] whitespace-nowrap">
        <p>
          <span className="leading-[48px]">Still have questions?</span>
          <span className="font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[48px]">{` `}</span>
          <span className="font-['Playfair_Display:Medium_Italic',sans-serif] font-medium italic leading-[48px] text-[#879c84]">{`We're here to help.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-[730px]" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Light',sans-serif] font-light justify-center leading-[28px] relative shrink-0 text-[#5c5e8a] text-[20px] text-center w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">{`Book a consultation with our specialists. We'll listen to your concerns, explain your options clearly, and create a personalized`}</p>
        <p>care plan just for you.</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#9f121f] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[9999px] shadow-[0px_2px_8px_-2px_rgba(22,25,80,0.06)] shrink-0" data-name="Component 6">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Call Us: +91 80914 68965</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Overlay() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center left-[calc(50%+30px)] px-[64px] py-[144px] rounded-[40px] top-0 w-[960px]" data-name="Overlay">
      <Container4 />
      <Heading1 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(135,156,132,0.1)] bottom-[497.37px] content-stretch flex flex-col h-[580px] items-start left-[calc(45.83%+42px)] px-[448px] py-[144px] w-[1920px]" data-name="Section">
      <Overlay />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.06%_0.05%_0.04%_-26.7%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2432.47 1492.82">
        <g id="Group" opacity="0.15">
          <path d="M0 0.826162H2308.63" id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="1.65232" />
          <path d="M0 69.23H2308.63" id="Vector_2" stroke="url(#paint0_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 206.038H2308.63" id="Vector_3" stroke="url(#paint1_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 345.289H2308.63" id="Vector_4" stroke="url(#paint2_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 484.538H2308.63" id="Vector_5" stroke="url(#paint3_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 623.79H2308.63" id="Vector_6" stroke="url(#paint4_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 760.597H2308.63" id="Vector_7" stroke="url(#paint5_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 899.848H2308.63" id="Vector_8" stroke="url(#paint6_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1039.1H2308.63" id="Vector_9" stroke="url(#paint7_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1178.35H2308.63" id="Vector_10" stroke="url(#paint8_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1317.6H2308.63" id="Vector_11" stroke="url(#paint9_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1454.41H2308.63" id="Vector_12" stroke="url(#paint10_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 137.634H2308.63" id="Vector_13" stroke="url(#paint11_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 274.442H2308.63" id="Vector_14" stroke="url(#paint12_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 413.692H2308.63" id="Vector_15" stroke="url(#paint13_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 552.943H2308.63" id="Vector_16" stroke="url(#paint14_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 692.194H2308.63" id="Vector_17" stroke="url(#paint15_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 829.002H2308.63" id="Vector_18" stroke="url(#paint16_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 968.251H2308.63" id="Vector_19" stroke="url(#paint17_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1107.5H2308.63" id="Vector_20" stroke="url(#paint18_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1246.75H2308.63" id="Vector_21" stroke="url(#paint19_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M0 1386H2308.63" id="Vector_22" stroke="url(#paint20_linear_1_6411)" strokeWidth="1.65232" />
          <path d="M543.21 1492.82V0.547161" id="Vector_23" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d={svgPaths.p355fc100} id="Vector_24" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M684.903 1492.82V0.547161" id="Vector_25" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M753.308 1492.82V0.547161" id="Vector_26" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M824.154 1492.82V0.547161" id="Vector_27" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M892.559 1492.82V0.547161" id="Vector_28" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M963.405 1492.82V0.547161" id="Vector_29" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d={svgPaths.p28c2d740} id="Vector_30" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M1102.66 1492.82V0.547161" id="Vector_31" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M1173.5 1492.82V0.547161" id="Vector_32" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M1241.91 1492.82V0.547161" id="Vector_33" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M1312.75 1492.82V0.547161" id="Vector_34" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M1381.16 1492.82V0.547161" id="Vector_35" stroke="var(--stroke-0, #474785)" strokeWidth="1.65232" />
          <path d="M1452 1492.82V0.547161" id="Vector_36" stroke="var(--stroke-0, #454545)" strokeWidth="1.65232" />
          <path d="M1522.85 1492.82V0.547161" id="Vector_37" stroke="var(--stroke-0, #3D3D3D)" strokeWidth="1.65232" />
          <path d="M1591.26 1492.82V0.547161" id="Vector_38" stroke="var(--stroke-0, #393939)" strokeWidth="1.65232" />
          <path d="M1662.1 1492.82V0.547161" id="Vector_39" stroke="var(--stroke-0, #3A3A3A)" strokeWidth="1.65232" />
          <path d="M1730.5 1492.82V0.547161" id="Vector_40" stroke="var(--stroke-0, #343434)" strokeWidth="1.65232" />
          <path d="M1801.35 1492.82V0.547161" id="Vector_41" stroke="var(--stroke-0, #353535)" strokeWidth="1.65232" />
          <path d="M1869.76 1492.82V0.547161" id="Vector_42" stroke="var(--stroke-0, #333333)" strokeWidth="1.65232" />
          <path d="M1940.6 1492.82V0.547161" id="Vector_43" stroke="var(--stroke-0, #2E2E2E)" strokeWidth="1.65232" />
          <path d="M2011.45 1492.82V0.547161" id="Vector_44" stroke="var(--stroke-0, #2C2C2C)" strokeWidth="1.65232" />
          <path d="M2079.85 1492.82V0.547161" id="Vector_45" stroke="var(--stroke-0, #252525)" strokeWidth="1.65232" />
          <path d="M2150.7 1492.82V0.547161" id="Vector_46" stroke="var(--stroke-0, #252525)" strokeWidth="1.65232" />
          <path d="M2219.1 1492.82V0.547161" id="Vector_47" stroke="var(--stroke-0, #252525)" strokeWidth="1.65232" />
          <path d="M2289.96 1492.82V0.547161" id="Vector_48" stroke="var(--stroke-0, #252525)" strokeWidth="1.65232" />
          <path d="M2360.79 1492.82V0.547161" id="Vector_49" stroke="var(--stroke-0, #252525)" strokeWidth="1.65232" />
          <path d="M2360.79 1492.82V0.547161" id="Vector_50" stroke="var(--stroke-0, #242424)" strokeWidth="1.65232" />
          <path d="M2431.64 1492.82V0.547161" id="Vector_51" stroke="var(--stroke-0, #242424)" strokeWidth="1.65232" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_6411" x1="-nan" x2="-nan" y1="-nan" y2="-nan">
            <stop offset="0.305" stopColor="#515050" />
            <stop offset="1" stopColor="#1E1E1E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[0.5px] top-[59.45px]" data-name="Mask group">
      <div className="absolute bg-white h-[31px] left-[42.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42px_5px] mask-size-[101px_17px] top-[54.45px] w-[58px]" style={{ maskImage: `url('${imgRectangle1}')` }} />
    </div>
  );
}

function LinkOrahDental() {
  return (
    <div className="h-[100px] overflow-clip relative shrink-0 w-[101px]" data-name="Link → Orah Dental">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkOrahDental} />
      </div>
      <MaskGroup />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[16px] w-[276px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">Gentle Dentistry. Advanced Care. One Trusted Place.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center pt-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(255,244,230,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Component 9">
        <div className="relative shrink-0 size-[20px]" data-name="Component 1">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                <path d={svgPaths.p1aaf0300} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]" data-name="Vector">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33334 8.33334">
                <path d={svgPaths.p1a50b2f0} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]" data-name="Vector">
            <div className="absolute inset-[-0.83px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
                <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[23.4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <LinkOrahDental />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Quick Links</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Home</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">About Us</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Our Services</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Our Team</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 9">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">FAQs</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 8">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Contact us</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading2 />
      <Nav />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Our Services</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Preventive Dentistry</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Smile Design</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Orthodontics</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Dental Implants</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">Pediatric Dentistry</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading3 />
      <Nav1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Contact Us</p>
      </div>
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="SVG:margin">
      <div className="relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[8.33%_8.33%_8.63%_8.8%]" data-name="Vector">
          <div className="absolute inset-[-5.02%_-5.03%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5925 14.6188">
              <path d={svgPaths.p3c6b6a00} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="SVG:margin">
      <div className="relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12">
              <path d={svgPaths.p3cc1ea80} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-16.68%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 5.33076">
              <path d={svgPaths.p13316000} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="SVG:margin">
      <div className="relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6665">
              <path d={svgPaths.pdde7000} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
              <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #FFF3E3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[23.7px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] w-[220px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">First Floor, Sai Complex, Maranda,Palampur, Himachal Pradesh</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin2 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Component 10">
        <SvgMargin />
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">+91 80914 68965</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Component 10">
        <SvgMargin1 />
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#fff3e3] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[26px]">dental.orah@gmail.com</p>
        </div>
      </div>
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading4 />
      <Container15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[48px] h-[272px] items-start justify-center left-[calc(50%+19px)] top-[73.84px] w-[1216px]" data-name="Container">
      <Container9 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[14px] whitespace-nowrap">
          <p className="leading-[22px]">© 2026 Orah Dental. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 6">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 6">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff3e3] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-106.28px] content-stretch flex items-center justify-between left-[calc(50%+0.5px)] pt-[33px] w-[1216px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,244,230,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[70px] items-start left-[calc(50%-0.5px)] max-w-[1280px] pb-[144px] pt-[70px] px-[32px] top-[-0.28px] w-[1280px]" data-name="Container">
      <Container8 />
      <HorizontalBorder />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#16184e] bottom-[0.37px] content-stretch flex flex-col h-[497px] items-start left-[calc(54.17%-41px)] px-[320px] w-[1920px]" data-name="Footer">
      <div className="absolute h-[551px] left-[229.5px] overflow-clip top-0 w-[1448px]" data-name="Component 19">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1493.701px] left-1/2 overflow-clip top-1/2 w-[1920px]" data-name="Component 1">
          <Group />
        </div>
      </div>
      <Container7 />
    </div>
  );
}

function LinkOrahDental1() {
  return (
    <div className="h-[100px] relative shrink-0 w-[101px]" data-name="Link → Orah Dental">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkOrahDental} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 11">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(22,25,80,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center px-[74px] relative shrink-0" data-name="Nav">
      <Component3 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 11">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(22,25,80,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[20px]">About</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 11">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(22,25,80,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[20px]">Services</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 11">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(22,25,80,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[20px]">Our Team</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 11">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(22,25,80,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[20px]">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(22,25,80,0.7)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[20px]">+91 80914 68965</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 13">
        <div className="relative shrink-0 size-[16px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_8.33%_8.63%_8.8%]" data-name="Vector">
            <div className="absolute inset-[-5.02%_-5.03%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5925 14.6188">
                <path d={svgPaths.p3c6b6a00} id="Vector" stroke="var(--stroke-0, #161950)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <Container22 />
      </div>
      <div className="bg-[#9f121f] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[9999px] shadow-[0px_2px_8px_-2px_rgba(22,25,80,0.06)] shrink-0" data-name="Component 6">
        <div className="relative shrink-0 size-[16px]" data-name="Component 1">
          <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-25%_-0.67px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-25%_-0.67px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-0.67px_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
                <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[20px]">Book Appointment</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-x-1/2 absolute h-[80px] left-[calc(50%+2.5px)] top-[-2px] w-[1171px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <LinkOrahDental1 />
        <Nav2 />
        <Container21 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,249,240,0.8)] content-stretch flex flex-col items-center left-[62px] pb-px px-[320px] top-[-1px] w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(232,226,217,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute h-[81px] left-[calc(50%+0.5px)] top-[3px] w-[1557px]">
      <Header />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[18px] whitespace-nowrap">
          <p className="leading-[22.191px]">Is Orah Dental a multispeciality clinic?</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16184e] text-[16.643px] whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white relative rounded-[18.492px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[18px] whitespace-nowrap">
          <p className="leading-[22.191px]">Do you provide dental implants?</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16184e] text-[16.643px] whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function ElementskitCardEndLink() {
  return (
    <div className="bg-white relative rounded-[18.492px] shrink-0 w-full" data-name="elementskit-card END → Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
          <p className="leading-[22.191px]">Is dental treatment painful?</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16.643px] text-white whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#879c84] relative rounded-tl-[18.492px] rounded-tr-[18.492px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-tl-[18.492px] rounded-tr-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.638px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14.794px] text-white w-full">
        <p className="leading-[26.629px] whitespace-pre-wrap">{`Modern dentistry is designed to be comfortable. With advanced techniques, proper anaesthesia, and  a gentle approach, most procedures are either painless or associated with minimal discomfort`}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#879c84] relative rounded-bl-[18.492px] rounded-br-[18.492px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pb-[18.492px] pl-[18.492px] pr-[46.231px] pt-[17.475px] relative w-full">
        <Container34 />
      </div>
    </div>
  );
}

function ElementskitCardEnd() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="elementskit-card END">
      <Link1 />
      <Background />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[18px] whitespace-nowrap">
          <p className="leading-[22.191px]">How do I know which treatment is right for me?</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16184e] text-[16.643px] whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function ElementskitCardEndLink1() {
  return (
    <div className="bg-white relative rounded-[18.492px] shrink-0 w-full" data-name="elementskit-card END → Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[18px] whitespace-nowrap">
          <p className="leading-[22.191px]">Do you treat children and elderly patients?</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16184e] text-[16.643px] whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function ElementskitCardEndLink2() {
  return (
    <div className="bg-white relative rounded-[18.492px] shrink-0 w-full" data-name="elementskit-card END → Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[18px] whitespace-nowrap">
          <p className="leading-[22.191px]">{` How often should I visit the dentist?`}</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16184e] text-[16.643px] whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function ElementskitCardEndLink3() {
  return (
    <div className="bg-white relative rounded-[18.492px] shrink-0 w-full" data-name="elementskit-card END → Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.246px] relative">
        <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16184e] text-[18px] whitespace-nowrap">
          <p className="leading-[22.191px]">What makes Orah Dental different?</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute right-[19.18px] top-[19.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2.774px] relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16184e] text-[16.643px] whitespace-nowrap">
          <p className="leading-[16.643px]"></p>
        </div>
      </div>
    </div>
  );
}

function ElementskitCardEndLink4() {
  return (
    <div className="bg-white relative rounded-[18.492px] shrink-0 w-full" data-name="elementskit-card END → Link">
      <div aria-hidden="true" className="absolute border-[0.925px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.492px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.417px] pr-[47.156px] py-[19.417px] relative w-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[23.115px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <ElementskitCardEndLink />
      <ElementskitCardEnd />
      <ElementskitCardEndLink1 />
      <ElementskitCardEndLink2 />
      <ElementskitCardEndLink3 />
      <ElementskitCardEndLink4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[9.246px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="-translate-x-1/2 absolute content-center flex flex-wrap items-center left-1/2 top-[632px] w-[1202px]" data-name="Container">
      <Container24 />
    </div>
  );
}

export default function Faq() {
  return (
    <div className="relative size-full" data-name="Faq" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 249, 240) 0%, rgb(255, 249, 240) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Section />
      <Section1 />
      <Footer />
      <Frame />
      <Container23 />
    </div>
  );
}