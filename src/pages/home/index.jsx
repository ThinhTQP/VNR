import { useEffect, useRef } from "react";
import { TrongDong3D } from "../../components/models/TrongDong3D";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import CommunistPage from "../communist";
import ContextSection from "../boicanh";
import StrategyAndLogisticsSection from "../chienluoc";
import DienBienPage from "../dienbien";
import BattleMap from "../map";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);
  const frame3Ref = useRef(null);

  useEffect(() => {
    // Đợi elements render xong
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // FRAME 1 ANIMATIONS
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: frame1Ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Animate elements ra khỏi màn hình khi scroll
        tl1
          .to("#home_title", {
            y: -200,
            opacity: 0,
            duration: 1,
          })
          .to(
            "#anh_chien_si",
            {
              x: -window.innerWidth,
              duration: 1,
            },
            0.3
          )
          .to(
            "#anh_bac",
            {
              x: window.innerWidth,
              duration: 1,
            },
            0.3
          );

        // FRAME 2 ANIMATIONS - ENTER
        // Set initial states cho frame 2
        gsap.set("#quote_container", { y: 100, opacity: 0 });
        gsap.set("#anh_bac_2", { x: -200, opacity: 0 });

        const tl2Enter = gsap.timeline({
          scrollTrigger: {
            trigger: frame2Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        });

        // Animation vào màn hình
        tl2Enter
          .to("#quote_container", {
            y: 0,
            opacity: 1,
            duration: 0.8,
          })
          .to(
            "#anh_bac_2",
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
            },
            0.2
          );

        // FRAME 2 ANIMATIONS - EXIT
        const tl2Exit = gsap.timeline({
          scrollTrigger: {
            trigger: frame2Ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

      }, containerRef);

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>


      <div
        ref={containerRef}
        className="home-page w-full min-h-screen overflow-y-auto overflow-x-hidden"
        style={{ height: "auto" }}
      >
        {/* FRAME 1 */}
        <div
          ref={frame1Ref}
          id="frame_1"
          className="w-full h-screen p-30 relative overflow-x-hidden"
        >
          <div
            id="home_title"
            className="relative flex flex-col items-center justify-center p-20  z-20 gap-5"
          >
            <div className="w-full flex items-center justify-center">
              <p  className="font-bungee text-5xl text-red-600">Chiến thắng</p>
            </div>
            <div className="w-full flex items-center justify-center text-white">
              <p id="gradient_text" className="font-bungee text-9xl leading-tight text-center">
                Điện Biên Phủ
              </p>
            </div>
            <div className="w-full flex items-center justify-center text-red-600">
              <p  className="font-bungee text-center text-3xl text-yellow-500">
                "lừng lẫy năm châu, chấn động địa cầu"
              </p>
            </div>
          </div>
        </div>

        <div
          ref={frame2Ref}
          id="frame_2"
          className=" w-full h-screen flex flex-col relative"
        >
          <div
            id="quote_container"
            className="mt-30 w-full h-72 flex bg-[#5D0404] border-t-2 border-b-2 border-white justify-end"
          >
            <div
              id="quote_text"
              className="h-full w-3/5 flex flex-col justify-between p-10"
            >
              <div className="flex items-end text-white gap-4 justify-center align-center">
                <p className="font-dau-phay text-7xl mb-8">"</p>
                <p className="font-brygada text-4xl ">
                  Tất cả cho tiền tuyến, tất cả để chiến thắng
                </p>
              </div>
              <div
                id="quote_author"
                className="w-full flex items-center justify-end text-white"
              >
                <p className="font-brygada font-light">- Chủ tịch Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          <div
            id="anh_bac_2"
            className="absolute bottom-0 left-0 overflow-hidden h-11/12 z-10"
          >
            <img
              className="h-full"
              src="/images/home/anhbac2.png"
              alt="Ảnh Bác Hồ"
            />
          </div>

        </div>

      </div>
      <ContextSection />
      <StrategyAndLogisticsSection />
      <DienBienPage />
    </div>
  );
};

export default HomePage;
