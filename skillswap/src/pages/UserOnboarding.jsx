import React, { useState } from "react";
import { PiArrowRightBold, PiArrowLeftBold } from "react-icons/pi";
import "./UserOnboarding.css";
import { useNavigate } from "react-router-dom";

const ALL_SKILLS = [
  "programacion", "musica", "dibujo", "idiomas", "matematica",
  "cocina", "deporte", "baile", "canto", "robotica", "historia", "finanzas",
  "literatura", "ciencia", "arte", "fotografia", "cine", "teatro"
];

const HOW_MET_OPTIONS = [
  "Por el Trabajo",
  "Por la facultad",
  "Por mis amigos"
];

const STEPS = [
  {
    title: "¿Cuáles son tus habilidades?",
    type: "choose",
    stateKey: "skills",
    options: ALL_SKILLS
  },
  {
    title: "¿Qué habilidades quieres aprender?",
    type: "choose",
    stateKey: "skillsToLearn",
    options: ALL_SKILLS
  },
  {
    title: "¿Por dónde nos conociste?",
    type: "how-met",
    stateKey: "howMet",
    options: HOW_MET_OPTIONS
  }
];

function UserOnboarding({ onFinish }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
  
    skills: [],
    skillsToLearn: [],
    skillsToOffer: [],
    howMet: ""
  });
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");
  const navigate = useNavigate();

function nextStep() {
  if (step < STEPS.length - 1) {
    setSlideDirection("next");
    setAnimating(true);
    setTimeout(() => {
      setStep(step + 1);
      setAnimating(false);
    }, 340);
  } else {
    // Redirige al foro al finalizar el onboarding
    navigate("/foro");
    // Si quieres también llamar a onFinish, puedes hacerlo aquí
    // if (onFinish) onFinish(answers);
  }
}
  function prevStep() {
    if (step > 0) {
      setSlideDirection("prev");
      setAnimating(true);
      setTimeout(() => {
        setStep(step - 1);
        setAnimating(false);
      }, 340);
    }
  }

  function selectTag(option, stateKey) {
    setAnswers(prev => {
      const already = prev[stateKey].includes(option);
      return {
        ...prev,
        [stateKey]: already
          ? prev[stateKey].filter(tag => tag !== option)
          : [...prev[stateKey], option]
      };
    });
  }

  function selectHowMet(option) {
    setAnswers(prev => ({ ...prev, howMet: option }));
  }

  function renderStepper() {
    return (
      <div className="onboard-stepper">
        {STEPS.map((_, idx) => (
          <React.Fragment key={idx}>
            <div
              className={
                "onboard-step-circle" +
                (idx === step
                  ? " onboard-step-active"
                  : idx < step
                  ? " onboard-step-done"
                  : "")
              }
            >
              {idx + 1}
            </div>
            {idx !== STEPS.length - 1 && (
              <div className="onboard-step-line" />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  function renderTags(options, stateKey) {
    return (
      <div className="onboard-tags-box">
        {options.map(option => (
          <div
            key={option}
            className={
              "onboard-tag" +
              (answers[stateKey].includes(option) ? " onboard-tag-active" : "")
            }
            onClick={() => selectTag(option, stateKey)}
          >
            #{option}
          </div>
        ))}
      </div>
    );
  }

  function renderOptions(options) {
    return (
      <div className="onboard-options-box">
        {options.map(option => (
          <div
            key={option}
            className={
              "onboard-option" +
              (answers.howMet === option ? " onboard-option-active" : "")
            }
            onClick={() => selectHowMet(option)}
          >
            {option}
          </div>
        ))}
      </div>
    );
  }

  function renderStep() {
    const current = STEPS[step];
    if (current.type === "choose") {
      return (
        <>
          <h2 className="onboard-question onboard-question-center">{current.title}</h2>
          {renderTags(current.options, current.stateKey)}
        </>
      );
    } else if (current.type === "how-met") {
      return (
        <>
          <h2 className="onboard-question">{current.title}</h2>
          {renderOptions(current.options)}
        </>
      );
    }
    return null;
  }

  const animClass =
    animating && slideDirection === "next"
      ? " onboard-slide-out"
      : animating && slideDirection === "prev"
      ? " onboard-slide-out-rev"
      : "";

  return (
    <div className="onboard-bg">
      <div className="onboard-header">
        {step > 0 && (
          <button className="onboard-prev-btn" onClick={prevStep}>
            <PiArrowLeftBold size={32} />
          </button>
        )}
        <button className="onboard-next-btn" onClick={nextStep}>
          <PiArrowRightBold size={32} />
        </button>
      </div>
      {renderStepper()}
      <div className={`onboard-card${animClass}`}>
        {renderStep()}
      </div>
    </div>
  );
}

export default UserOnboarding;

