export default function DashboardLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-2xl mx-auto dashboard">
        {children}
    </div>
  );
}