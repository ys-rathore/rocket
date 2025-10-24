export function MeshBackground() {
  return (
    <div
      // 🚀 FINAL FIXES APPLIED:
      // 1. Increased contrast: Grid lines are now a clearly visible 40% white (#ffffff66).
      // 2. Removed 3D transform: Fixes the mesh appearing cut off/hidden at the bottom.
      // 3. Added bg-fixed: Ensures the background pattern covers the entire screen,
      //    making it look like a perpetual mesh that stretches behind all scrollable content.
      className="bg-[linear-gradient(to_right,#ffffff66_1px,transparent_1px),linear-gradient(to_bottom,#ffffff66_1px,transparent_1px)] bg-[size:3rem_3rem] absolute inset-0 z-0 opacity-40 pointer-events-none bg-fixed"
    />
  );
}
