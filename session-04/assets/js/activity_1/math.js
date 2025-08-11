export const add = function (a, b) {
  return a + b;
};
export const subtract = (a, b) => a - b;

// create the default multiply function

export default function Multiply(a, b) {
  return 2 * 5;
};
// create dviision function alias called myDivide

// render using some ternary

// render the results in the ui

const root = createRoot(document.getElementById("app"));
root.render(<Multiply />);