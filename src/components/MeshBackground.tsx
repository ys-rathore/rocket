export function MeshBackground() {
  return (
    <div
      // FIX: Increased the visibility of the grid lines (to #ffffff66, 40% white) 
      // and applied the 3D perspective and rotation directly.
      // The absolute inset-0 stretches to cover the entire parent container's height.
      className="bg-[linear-gradient(to_right,#ffffff66_1px,transparent_1px),linear-gradient(to_bottom,#ffffff66_1px,transparent_1px)] bg-[size:3rem_3rem] absolute inset-0 z-0 transform perspective-[800px] rotate-x-[45deg] opacity-40 pointer-events-none"
    />
  );
}
