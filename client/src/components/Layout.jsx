export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="max-w-sm w-full bg-gray-200">{children}</div>
    </div>
  );
}
