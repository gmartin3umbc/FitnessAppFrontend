import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover p-5"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=900&t=st=1678220069~exp=1678220669~hmac=f188694fa332fa47df49db5c622cfdb15615269630b2e989479cd4dde9d2a085')",
        height: 400,
      }}
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      >
        <div class="flex justify-center items-center h-full">
          <div class="text-center text-white px-6 md:px-12">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Welcome to Group 1's <br />
              <span>Fitness Webapp</span>
            </h1>
            <Link to={"/sheets"}>
              <Button
                variant="contained"
                className="from-pink-500 to-orange-400"
                size="large"
                style={{
                  textTransform: "none",
                  fontSize: 20,
                  minWidth: 100,
                  background:
                    "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                  borderRadius: 20,
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
