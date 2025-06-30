"use client";
import React, { useState } from "react";
import StepModal from "@/app/components/roadmap/stepModal";
import type { Step } from "@/app/roadmap/topics";

interface RoadmapProps {
  steps: Step[];
}

const Roadmap: React.FC<RoadmapProps> = ({ steps }) => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  return (
    <div className="flex flex-col items-center gap-1 relative">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center">
          <button
            onClick={() => setSelectedStep(step)}
            className={`px-6 py-3 rounded-md shadow-md font-semibold text-white ${
              index === steps.length - 1
                ? "bg-red-500"
                : index >= 4
                  ? "bg-orange-400"
                  : "bg-emerald-500"
            }`}
          >
            {step.title}
          </button>
          {index < steps.length - 1 && (
            <React.Fragment>
              <div className="h-1 w-1 rounded bg-black my-2" />
              <div className="h-1 w-1 rounded bg-gray-500 my-2" />
              <div className="h-1 w-1 rounded bg-gray-400 my-2" />
              <div className="h-1 w-1 rounded bg-gray-300 my-2" />
            </React.Fragment>
          )}
        </div>
      ))}

      {selectedStep && (
        <StepModal
          title={selectedStep.title}
          description={selectedStep.description}
          details={selectedStep.details}
          resource={selectedStep.resource}
          category={selectedStep.category}
          estimatedTime={selectedStep.estimatedTime}
          onClose={() => setSelectedStep(null)}
        />
      )}
    </div>
  );
};

export default Roadmap;
