import React from "react";
import {
  IoMdBluetooth,
  IoMdPhonePortrait,
  IoMdCheckmarkCircle,
} from "react-icons/io";

const IoTConnectionGuide = () => {
  const connectionSteps = [
    {
      step: 1,
      title: "Prepare Your Devices",
      description:
        "Ensure both your smartphone and IoT device are charged and turned on",
      image: "/images/iot-step1.jpg", // Placeholder for your image
      icon: <IoMdPhonePortrait className="text-2xl" />,
    },
    {
      step: 2,
      title: "Enable Bluetooth",
      description:
        "Go to your phone's settings and turn on Bluetooth connectivity",
      image: "/images/iot-step2.jpg", // Placeholder for your image
      icon: <IoMdBluetooth className="text-2xl" />,
    },
    {
      step: 3,
      title: "Put IoT Device in Pairing Mode",
      description:
        "Press and hold the power button on your IoT device until the LED light starts blinking",
      image: "/images/iot-step3.jpg", // Placeholder for your image
      icon: <IoMdCheckmarkCircle className="text-2xl" />,
    },
    {
      step: 4,
      title: "Open DialiEase App",
      description:
        "Navigate to Settings > Devices > Connect New Device in your DialiEase app",
      image: "/images/iot-step4.jpg", // Placeholder for your image
      icon: <IoMdPhonePortrait className="text-2xl" />,
    },
    {
      step: 5,
      title: "Select Your Device",
      description:
        "Choose your IoT device from the list of available devices (usually named 'DialiEase-IoT-XXXX')",
      image: "/images/iot-step5.jpg", // Placeholder for your image
      icon: <IoMdCheckmarkCircle className="text-2xl" />,
    },
    {
      step: 6,
      title: "Confirm Connection",
      description:
        "Tap 'Pair' and wait for the confirmation message. The LED on your IoT device will turn solid blue when connected",
      image: "/images/iot-step6.jpg", // Placeholder for your image
      icon: <IoMdCheckmarkCircle className="text-2xl" />,
    },
  ];

  const troubleshootingTips = [
    "Ensure your IoT device is within 3 feet of your phone during pairing",
    "Restart both devices if connection fails",
    "Check if your IoT device needs firmware updates",
    "Make sure Bluetooth permissions are enabled for DialiEase app",
  ];

  return (
    <section id="iot-connection-guide" className="iot-guide-section">
      <div className="iot-container">
        {/* Header */}
        <div className="iot-header">
          <h1 className="iot-title">
            IoT Device <span className="highlight">Connection Guide</span>
          </h1>
          <p className="iot-subtitle">
            Follow these step-by-step instructions to connect your IoT
            monitoring device to the DialiEase app
          </p>
        </div>

        {/* Connection Steps */}
        <div className="connection-steps">
          <h2 className="steps-title">Step-by-Step Connection Process</h2>

          <div className="steps-grid">
            {connectionSteps.map((step) => (
              <div key={step.step} className="connection-step">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>

                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  {/* Image Placeholder */}
                  <div className="step-image-placeholder">
                    <img
                      src={step.image}
                      alt={`Step ${step.step}: ${step.title}`}
                      className="step-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="image-fallback">
                      <span>Image: {step.title}</span>
                      <small>Your visual guide will appear here</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="troubleshooting-section">
          <h2 className="troubleshooting-title">Troubleshooting Tips</h2>
          <div className="tips-grid">
            {troubleshootingTips.map((tip, index) => (
              <div key={index} className="tip-item">
                <IoMdCheckmarkCircle className="tip-icon" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="support-section">
          <h2>Need Help Connecting?</h2>
          <p>
            If you're still experiencing issues after following these steps,
            please contact our support team:
          </p>
          <div className="support-contacts">
            <div className="support-item">
              <strong>CAPD Department:</strong> (555) 123-4567
            </div>
            <div className="support-item">
              <strong>Technical Support:</strong> support@dialiease.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTConnectionGuide;
