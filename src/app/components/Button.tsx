export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-[#f18b3d] hover:transform hover:scale-125 duration-100 rounded-2xl px-4 py-1 text-base outline-none ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}
