const stemLengthInput = document.getElementById("stemLength") as HTMLInputElement | null;
const stemAngleInput = document.getElementById("stemAngle") as HTMLInputElement | null;
const headTubeAngleInput = document.getElementById("headTubeAngle") as HTMLInputElement | null;

const effectiveAngleOutput = document.getElementById("effectiveAngle");
const horizontalReachOutput = document.getElementById("horizontalReach");
const verticalReachOutput = document.getElementById("verticalReach");

const toNumber = (value: string): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const updateReach = (): void => {
  if (
    !stemLengthInput ||
    !stemAngleInput ||
    !headTubeAngleInput ||
    !effectiveAngleOutput ||
    !horizontalReachOutput ||
    !verticalReachOutput
  ) {
    return;
  }

  const stemLength = toNumber(stemLengthInput.value);
  const stemAngle = toNumber(stemAngleInput.value);
  const headTubeAngle = toNumber(headTubeAngleInput.value);

  const effectiveAngle = (90 - headTubeAngle) + stemAngle;
  const radians = (effectiveAngle * Math.PI) / 180;

  const horizontalReach = stemLength * Math.cos(radians);
  const verticalReach = stemLength * Math.sin(radians);

  effectiveAngleOutput.textContent = `${effectiveAngle.toFixed(1)}°`;
  horizontalReachOutput.textContent = `${horizontalReach.toFixed(1)} mm`;
  verticalReachOutput.textContent = `${verticalReach.toFixed(1)} mm`;
};

[stemLengthInput, stemAngleInput, headTubeAngleInput].forEach((input) => {
  input?.addEventListener("input", updateReach);
});

updateReach();
