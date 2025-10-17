import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

// Import your actual images
import step0Image from "../Assets/0.jpg";
import step1Image from "../Assets/1.jpg";
import step2Image from "../Assets/2.jpg";
import step3Image from "../Assets/3.jpg";
import step4Image from "../Assets/4.jpg";
import step5Image from "../Assets/5.jpg";

const steps = [
  {
    title: "Download the App",
    description:
      "Get DialiEase from the here and install it on your cellphone.",
    translation:
      "I-download ang DialiEase mula sa dito at i-install ito sa iyong cellphone.",
  },
  {
    title: "Login with Your Credentials",
    description:
      "Use the login credentials that the CAPD department provided or emailed to you.",
    translation:
      "Gamitin ang login credentials na ibinigay o ipinadala sa iyo ng CAPD department.",
  },
  {
    title: "Review Terms & Update Password",
    description:
      "Read and accept the terms and conditions, then change your password for security.",
    translation:
      "Basahin at tanggapin ang mga tuntunin at kundisyon, pagkatapos ay palitan ang iyong password para sa seguridad.",
  },
  {
    title: "Connect Your Weighing Device",
    description:
      "Follow the step-by-step instructions with images to connect your Weighing device to the app.",
    translation:
      "Sundin ang mga hakbang na may kasamang larawan upang ikonekta ang iyong timbangan sa app.",
    hasModal: true,
  },
  {
    title: "Track & Log Sessions",
    description:
      "Easily log each dialysis session, monitor your records, and track fluid balance in real time.",
    translation:
      "Madaling i-log ang bawat dialysis session, subaybayan ang iyong mga tala, at makita ang fluid balance sa real time.",
  },
  {
    title: "Receive Reminders & Alerts",
    description:
      "Get automatic notifications for your next dialysis session, supply checks, and hydration tips.",
    translation:
      "Tumanggap ng awtomatikong paalala para sa susunod na dialysis session, supply checks, at mga tips sa hydration.",
  },
];

const connectionSteps = [
  {
    step: 1,
    title: "Prepare Your Devices",
    description:
      "Ensure both your smartphone and Weighing device are turned on",
    translation: "Tiyaking naka-on ang iyong smartphone at Timbangan.",
    image: step0Image,
  },
  {
    step: 2,
    title: "Configure WiFi",
    description:
      "Once turned on the Weighing device will make a portal to configure your wifi. Tap the PD-Treatment-Scale-Config",
    translation:
      "Kapag naka-on, magbubukas ang Timbangan ng portal para sa Wi-Fi configuration. I-tap ang PD-Treatment-Scale-Config.",
    image: step1Image,
  },
  {
    step: 3,
    title: "WiFi Manager Portal",
    description:
      "After tapping, you will now see the WifiManager Configure portal, tap the 'Configure WiFi Button'",
    translation:
      "Pagkatapos i-tap, makikita mo ang WifiManager Configure portal. I-tap ang 'Configure WiFi Button'.",
    image: step2Image,
  },
  {
    step: 4,
    title: "Provide WiFi Credentials",
    description:
      "You can  now see the available WiFi your Weighing device is able to connect to. Tap the WiFi you want the Weighing to connect then provide the password",
    translation:
      "Makikita mo na ngayon ang mga available na Wi-Fi na maaaring i-connect ang Timbangan. I-tap ang Wi-Fi na gusto mong gamitin at ilagay ang password.",
    image: step3Image,
  },
  {
    step: 5,
    title: "Saving Credentials",
    description: "Wait, until your WiFi credentials are saved",
    translation: "Maghintay hanggang sa ma-save ang iyong Wi-Fi credentials.",
    image: step5Image,
  },
  {
    step: 6,
    title: "WiFi saved",
    description:
      "Now, your device is saved to your selected WiFi. You may now go to your app and check the connection",
    translation:
      "Na-save na ngayon ang iyong device sa napiling Wi-Fi. Maaari ka nang pumunta sa iyong app at suriin ang koneksyon.",
    image: step4Image,
  },
];

const Work = () => {
  const [showConnectionGuide, setShowConnectionGuide] = useState(false);

  const handleStepClick = (index) => {
    if (steps[index].hasModal) {
      setShowConnectionGuide(true);
    }
  };

  const closeModal = () => {
    setShowConnectionGuide(false);
  };

  return (
    <>
      <section id="how-it-works" className="how-section">
        <div className="how-container">
          <h2 className="how-title">
            How <span className="highlight">It Works</span>
          </h2>

          <p className="how-description">
            Follow these simple steps to get started with DialiEase and manage
            your dialysis journey more efficiently.
          </p>
          <p className="how-description italic" style={{ marginTop: "0.5rem" }}>
            <em>
              Sundin ang mga simpleng hakbang na ito upang mas mapadali ang
              paggamit ng DialiEase at masubaybayan nang maayos ang iyong
              dialysis journey.
            </em>
          </p>

          <div className="how-steps">
            {steps.map((step, index) => (
              <div
                className={`how-step ${step.hasModal ? "clickable-step" : ""}`}
                key={index}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div>
                  <h3 className="step-title">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="step-text">{step.description}</p>
                  <p
                    className="step-text italic"
                    style={{ marginTop: "0.5rem" }}
                  >
                    <em>{step.translation}</em>
                  </p>
                  {step.hasModal && (
                    <span className="step-click-hint">
                      Click for detailed instructions →
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Guide Modal */}
      {showConnectionGuide && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="connection-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Weighing Device Connection Guide</h2>
              <p style={{ marginTop: "0.25rem" }}>
                <em>Gabay sa Pagkonekta ng Timbangan</em>
              </p>
              <button className="close-button" onClick={closeModal}>
                <IoClose />
              </button>
            </div>

            <div className="modal-content">
              <p className="modal-subtitle">
                Follow these steps to connect your Weighing monitoring device to
                the DialiEase app
              </p>
              <p
                className="modal-subtitle italic"
                style={{ marginTop: "0.5rem" }}
              >
                <em>
                  Sundin ang mga hakbang na ito upang ikonekta ang iyong
                  Weighing monitoring device sa DialiEase app.
                </em>
              </p>

              <div className="connection-steps-grid">
                {connectionSteps.map((step) => (
                  <div key={step.step} className="connection-step-card">
                    <div className="step-header">
                      <div className="step-badge">Step {step.step}</div>
                      <h3 className="step-title">{step.title}</h3>
                    </div>

                    <p className="step-description">{step.description}</p>
                    <p
                      className="step-description italic"
                      style={{ marginTop: "0.5rem" }}
                    >
                      <em>{step.translation}</em>
                    </p>

                    <div className="step-image-container">
                      <img
                        src={step.image}
                        alt={`Step ${step.step}: ${step.title}`}
                        className="portrait-image"
                        onError={(e) => {
                          console.error(
                            `Failed to load image for step ${step.step}:`,
                            step.image
                          );
                          e.target.style.display = "none";
                          const fallback = e.target.nextSibling;
                          if (fallback) {
                            fallback.style.display = "flex";
                          }
                        }}
                        onLoad={(e) => {
                          console.log(
                            `Successfully loaded image for step ${step.step}`
                          );
                          e.target.style.display = "block";
                          const fallback = e.target.nextSibling;
                          if (fallback) {
                            fallback.style.display = "none";
                          }
                        }}
                      />
                      <div className="image-placeholder">
                        <div className="placeholder-content">
                          <span>Step {step.step}</span>
                          <small>{step.title}</small>
                          <small
                            style={{ marginTop: "0.5rem", color: "#ff6b6b" }}
                          >
                            Image failed to load
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="troubleshooting-section">
                <h3>Need Help Connecting?</h3>
                <p style={{ marginTop: "0.25rem" }}>
                  <em>Kailangan ng tulong sa pagkonekta?</em>
                </p>
                <div className="troubleshooting-tips">
                  <div className="tip">
                    • Restart both devices if connection fails
                    <br />
                    <em style={{ marginTop: "0.25rem", display: "block" }}>
                      • I-restart ang parehong device kung hindi makakonekta
                    </em>
                  </div>

                  <div className="tip" style={{ marginTop: "0.5rem" }}>
                    • Contact CAPD Department: (555) 123-4567
                    <br />
                    <em style={{ marginTop: "0.25rem", display: "block" }}>
                      • Makipag-ugnayan sa CAPD Department: (555) 123-4567
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
