export function MeshBackground() {
  return (
    <div
      // Consolidated styling to make the mesh visible and apply the perspective/rotation
      // Note: #ffffff26 is a 15% white opacity, up from the near-invisible original value.
      className="bg-[linear-gradient(to_right,#ffffff26_1px,transparent_1px),linear-gradient(to_bottom,#ffffff26_1px,transparent_1px)] bg-[size:3rem_3rem] absolute inset-0 z-0 transform perspective-[800px] rotate-x-[45deg] opacity-40 pointer-events-none"
    />
  );
}
