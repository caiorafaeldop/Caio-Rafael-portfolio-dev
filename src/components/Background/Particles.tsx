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
            value: ["#005566", "#FFFFFF"],
          },
          links: {
            color: {
              value: "#005566",
            },
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
