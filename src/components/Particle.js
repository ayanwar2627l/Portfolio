import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#a1c4fd", // Light blueish/white rain
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out"
            },
            random: false,
            speed: 6,
            straight: true,
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Acts like an umbrella
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
