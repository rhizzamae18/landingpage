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
      "Get DialiEase from the App Store or Google Play and install it on your mobile device.",
  },
  {
    title: "Login with Your Credentials",
    description:
      "Use the login credentials that the CAPD department provided or emailed to you.",
  },
  {
    title: "Review Terms & Update Password",
    description:
      "Read and accept the terms and conditions, then change your password for security.",
  },
  {
    title: "Connect Your IoT Device",
    description:
      "Follow the step-by-step instructions with images to connect your IoT device to the app.",
    hasModal: true,
  },
  {
    title: "Track & Log Sessions",
    description:
      "Easily log each dialysis session, monitor your records, and track fluid balance in real time.",
  },
  {
    title: "Receive Reminders & Alerts",
    description:
      "Get automatic notifications for your next dialysis session, supply checks, and hydration tips.",
  },
];

const connectionSteps = [
  {
    step: 1,
    title: "Prepare Your Devices",
    description: "Ensure both your smartphone and IoT device are turned on",
    image: step0Image, // Direct reference to imported image
  },
  {
    step: 2,
    title: "Configure WiFi",
    description:
      "Once turned on the IoT device will make a portal to configure your wifi. Tap the PD-Treatment-Scale-Config",
    image: step1Image, // Direct reference to imported image
  },
  {
    step: 3,
    title: "WiFi Manager Portal",
    description:
      "After tapping, you will now see the WifiManager Configure portal, tap the 'Configure WiFi Button'",
    image: step2Image, // Direct reference to imported image
  },
  {
    step: 4,
    title: "Provide WiFi Credentials",
    description:
      "You can  now see the available WiFi your IoT device is able to connect to. Tap the WiFi you want the IoT to connect then provide the password",
    image: step3Image, // Direct reference to imported image
  },
  {
    step: 5,
    title: "Saving Credentials",
    description: "Wait, until your WiFi credentials are saved",
    image: step5Image,
    // Direct reference to imported image
  },
  {
    step: 6,
    title: "WiFi saved",
    description:
      "Now, your device is saved to your selected WiFi. You may now go to your app and check the connection",
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
              <h2>IoT Device Connection Guide</h2>
              <button className="close-button" onClick={closeModal}>
                <IoClose />
              </button>
            </div>

            <div className="modal-content">
              <p className="modal-subtitle">
                Follow these steps to connect your IoT monitoring device to the
                DialiEase app
              </p>

              <div className="connection-steps-grid">
                {connectionSteps.map((step) => (
                  <div key={step.step} className="connection-step-card">
                    <div className="step-header">
                      <div className="step-badge">Step {step.step}</div>
                      <h3 className="step-title">{step.title}</h3>
                    </div>

                    <p className="step-description">{step.description}</p>

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
                <div className="troubleshooting-tips">
                  <div className="tip">
                    • Restart both devices if connection fails
                  </div>

                  <div className="tip">
                    • Contact CAPD Department: (555) 123-4567
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
