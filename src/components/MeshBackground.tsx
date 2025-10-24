export function MeshBackground() {
  return (
    <div
      // 🚀 FINAL FIX: Mesh is now 2D, ensuring it covers the ENTIRE vertical page height (up to down end).
      // Line visibility is high (40% white).
      className="bg-[linear-gradient(to_right,#ffffff66_1px,transparent_1px),linear-gradient(to_bottom,#ffffff66_1px,transparent_1px)] bg-[size:3rem_3rem] absolute inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
}
