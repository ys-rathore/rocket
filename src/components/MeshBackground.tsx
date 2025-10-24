export function MeshBackground() {
  return (
    <div
      // 🚀 FINAL FIX: High visibility lines (40% white) and removed the 3D rotation.
      // This ensures the pattern is visible and stretches from top to bottom of the scrollable content.
      className="bg-[linear-gradient(to_right,#ffffff66_1px,transparent_1px),linear-gradient(to_bottom,#ffffff66_1px,transparent_1px)] bg-[size:3rem_3rem] absolute inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
}
