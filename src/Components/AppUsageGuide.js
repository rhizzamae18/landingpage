import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

// Import your app usage screenshots
import appStep1 from "../Assets/1.png";
import appStep2 from "../Assets/2.png";
import appStep3 from "../Assets/3.png";
import appStep4 from "../Assets/4.png";
import appStep5 from "../Assets/5.png";
import appStep6 from "../Assets/6.png";
import appStep7 from "../Assets/7.png";
import appStep8 from "../Assets/8.png";
import appStep9 from "../Assets/9.png";
import appStep10 from "../Assets/10.png";
import appStep11 from "../Assets/11.png";
import appStep12 from "../Assets/12.png";
import appStep13 from "../Assets/13.png";
import appStep14 from "../Assets/14.png";
import appStep15 from "../Assets/15.png";
import appStep16 from "../Assets/16.png";
import appStep17 from "../Assets/17.png";

const AppUsageGuide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const appUsageSteps = [
    {
      step: 1,
      title: "Login Screen",
      description:
        "Enter your credentials provided by the CAPD department to access the app.",
      translation:
        "Ilagay ang iyong credentials mula sa CAPD department para ma-access ang app.",
      image: appStep2,
    },
    {
      step: 2,
      title: "Dashboard",
      description:
        "Tap on start treatment button to view your treatment prescriptions and start solution in.",
      translation:
        "Pindutin ang 'Start Treatment' button upang makita ang treatment prescription at masimulan ang solution in",
      image: appStep3,
    },
    {
      step: 3,
      title: "Solution In",
      description:
        "In solution in, you will now see if your device is connected (Check Device connection guide).",
      translation:
        "Dito makikita mo na kung ang timbanga ay konektado na sa iyong app (I-check ang gabay sa pagkonekta ng timbangan kung hinda pa konektado).",
      image: appStep4,
    },
    {
      step: 4,
      title: "PD Solution Weighing",
      description:
        "Put the PD solution bag on the scale for the solution in to start",
      translation: "Ilagay na sa timbangan ang PD solution",
      image: appStep5,
    },
    {
      step: 5,
      title: "Unclamp/Open the PD Solution Flow",
      description:
        "Connect now your catheter to the PD solution then if ready, make the PD solution flow now to you.",
      translation:
        "Ikonekta na ang catheter sa PD solution bag at simulan na ang fluid inflow",
      image: appStep6,
    },
    {
      step: 6,
      title: "Filling Start",
      description:
        "If the weighing scale detected that the fluid is flowing, it will now start the timer. Please wait until it finishes the filled volume goal",
      translation:
        "Kapag nadetekta na ng timbangan na gumagaan na ang solution bag, magsisimula na itong mag tmer. Maaari laman na hintayin matapos.",
      image: appStep7,
    },
    {
      step: 7,
      title: "Submit Solution In Record",
      description:
        "After the solution in. Please submit the record for it to be saved. Then you will now see that the dwell time have started",
      translation:
        "Matapos ang solution in, I-submit ang rekord. Makikita rin na nagsimuka na ang timer para sa dwell time",
      image: appStep8,
    },
    {
      step: 8,
      title: "Alarm Before Dwell Time Ends",
      description:
        "The app will notify you if the dwell time is nearing its end. Please click stop button, to stop the alarm",
      translation:
        "Ang app ay bibigyan ka ng notification at mag aalarm kung ang babad mo ng solution ay malapit nang matapos. Pindutin lamang ang stop button para matigil ang alarm",
      image: appStep9,
    },
    {
      step: 9,
      title: "Alarm on Dwell Complete",
      description:
        "A second alarm will ring if the dwell time is complete, then you can now tap 'Sart Drain' button, to start the draining process",
      translation:
        "Ang pangalawang alarm ay tutunog kapag natapos na ang dwell time. Maaari mo narin i-tap ang 'Start Drain' nbutton upang masimulan na ang prosesoo ng drain",
      image: appStep10,
    },
    {
      step: 10,
      title: "Solution Out (Drain)",
      description: "Ready your scale and put the drain bag on it.",
      translation:
        "I-ready na ang timbangan at ilagay na ang drain bag sa ibabaw nito",
      image: appStep11,
    },
    {
      step: 11,
      title: "Drain Process",
      description:
        "The drain timer will now start if it detects that the solution have started. Tap 'Stop Drain' button if you are finished draining",
      translation:
        "Magsisimula na ang timer ng drain kapag nadetect nito na nagsmula ka na maglabas ng fluid. I-tap ang 'Stop Drain' button kappag tapos ka na mag drain",
      image: appStep12,
    },
    {
      step: 12,
      title: "Select Fluid Color",
      description:
        "Observe the color of your drain, then select the color on the dropdown selection.",
      translation:
        "Obserbahan ang kulay ng iyong fluid drain at piliin ang pinakamalapit na kulay sa listahan",
      image: appStep13,
    },
    {
      step: 13,
      title: "Submit Drain Record",
      description:
        "You can also put or select some of your observations on the Notes. Tap the 'Submit' button to record your solution out treatment",
      translation:
        "Pwede ka rin maglagay ng Notes ayon sa iyong obserbasyon sa iyong sarili at sa proseso. Pindutin na ang 'Submit' button upang ma rekord and iyong solution out treatment",
      image: appStep14,
    },
    {
      step: 14,
      title: "Solution Out (Drain) Summary",
      description:
        "You can now see the summary of your drain record. Please take time to read exit site care instructions",
      translation:
        "Maaari mo ng makita ang iyong drain rekord, at maari lamang na basahin ang mga tagubilin sa pangangalaga ng exit site",
      image: appStep15,
    },
    {
      step: 15,
      title: "Go Back To Dashboard",
      description:
        "You can go back to dashboard and tap on the 'PD Records' to view your PD Treatment Records",
      translation:
        "Maaari ka ng bumalik sa dashboard at pindutin ang 'PD Records' sa tab bar upang makita mo ang iyong mga PD Treatment records",
      image: appStep16,
    },
    {
      step: 16,
      title: "PD Records",
      description:
        "You can now see the summary of your whole treatment process. ",
      translation: "Makikita mo na ang iyong buong PD treatment records",
      image: appStep17,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === appUsageSteps.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? appUsageSteps.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setCurrentSlide(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="app-usage-guide" className="usage-guide-section">
        <div className="usage-guide-container">
          <h2 className="usage-guide-title">
            App Usage <span className="highlight">Guide</span>
          </h2>

          <p className="usage-guide-description">
            Learn how to navigate and use the DialiEase app with our
            step-by-step visual guide.
          </p>
          <p
            className="usage-guide-description italic"
            style={{ marginTop: "0.5rem" }}
          >
            <em>
              Alamin kung paano gamitin ang DialiEase app sa aming step-by-step
              na visual guide.
            </em>
          </p>

          <div className="preview-grid">
            {appUsageSteps.slice(0, 3).map((step, index) => (
              <div key={step.step} className="preview-card">
                <div className="preview-image-container">
                  <img
                    src={step.image}
                    alt={`Preview ${step.step}`}
                    className="preview-image"
                  />
                  <div className="preview-overlay">
                    <span className="preview-step">Step {step.step}</span>
                  </div>
                </div>
                <div className="preview-content">
                  <h4>{step.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <button className="view-guide-button" onClick={openModal}>
            View Complete App Guide
            <br />
            <small style={{ fontWeight: "normal", opacity: 0.8 }}>
              <em>Tingnan ang Kumpletong Gabay sa App</em>
            </small>
          </button>
        </div>
      </section>

      {/* Slideshow Modal */}
      {isModalOpen && (
        <div className="slideshow-overlay" onClick={closeModal}>
          <div className="slideshow-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="slideshow-header">
              <div className="slideshow-title">
                <h2>App Usage Guide</h2>
                <p style={{ marginTop: "0.25rem" }}>
                  <em>Gabay sa Paggamit ng App</em>
                </p>
              </div>
              <button className="slideshow-close-button" onClick={closeModal}>
                <IoClose />
              </button>
            </div>

            {/* Main Content */}
            <div className="slideshow-content">
              {/* Navigation Arrows */}
              <button
                className="slide-nav-button prev-button"
                onClick={prevSlide}
              >
                <IoIosArrowBack />
              </button>

              {/* Current Slide */}
              <div className="slide-container">
                <div className="slide-image-container">
                  <img
                    src={appUsageSteps[currentSlide].image}
                    alt={`Step ${appUsageSteps[currentSlide].step}: ${appUsageSteps[currentSlide].title}`}
                    className="slide-image"
                    onError={(e) => {
                      console.error(
                        "Failed to load slide image:",
                        appUsageSteps[currentSlide].image
                      );
                      e.target.style.display = "none";
                      const fallback = document.querySelector(
                        `.slide-fallback-${currentSlide}`
                      );
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className={`image-fallback slide-fallback-${currentSlide}`}
                  >
                    <div className="fallback-content">
                      <span>Step {appUsageSteps[currentSlide].step}</span>
                      <small>{appUsageSteps[currentSlide].title}</small>
                      <small style={{ marginTop: "0.5rem", color: "#ff6b6b" }}>
                        Image not available
                      </small>
                    </div>
                  </div>
                </div>

                <div className="slide-info">
                  <div className="slide-step">
                    Step {appUsageSteps[currentSlide].step} of{" "}
                    {appUsageSteps.length}
                  </div>
                  <h3 className="slide-title">
                    {appUsageSteps[currentSlide].title}
                  </h3>
                  <p className="slide-description">
                    {appUsageSteps[currentSlide].description}
                  </p>
                  <p
                    className="slide-description italic"
                    style={{ marginTop: "0.5rem" }}
                  >
                    <em>{appUsageSteps[currentSlide].translation}</em>
                  </p>
                </div>
              </div>

              <button
                className="slide-nav-button next-button"
                onClick={nextSlide}
              >
                <IoIosArrowForward />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {appUsageSteps.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Navigation Help */}
            <div className="navigation-help">
              <p>Use arrow keys or swipe to navigate</p>
              <p style={{ marginTop: "0.25rem" }}>
                <em>Gamitin ang arrow keys o mag-swipe para mag-navigate</em>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppUsageGuide;
