export function MeshBackground() {
  return (
    <div
      // FIX: Increased grid line opacity to #ffffff66 (40% white) for visibility 
      // and set the overall opacity to 40% to make the grid pop.
      className="bg-[linear-gradient(to_right,#ffffff66_1px,transparent_1px),linear-gradient(to_bottom,#ffffff66_1px,transparent_1px)] bg-[size:3rem_3rem] absolute inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
}
