import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadParticlesLinksInteraction } from "tsparticles-interaction-particles-links";
import { prefersReducedMotion } from "@/lib/animations";

const ParticlesBackground = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    setShouldAnimate(!prefersReducedMotion());
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine, false);
    await loadParticlesLinksInteraction(engine);
  }, []);

  if (!shouldAnimate) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: ["#005566", "#008b9b", "#00b8cc"],
          },
          links: {
            color: {
              value: "#005566",
            },
            distance: 160,
            enable: true,
            opacity: 0.55,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.55,
          },
          size: {
            value: { min: 1.5, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
