import LeftMenu from "@/app/dashboard/_components/left-menu/LeftMenu"

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-screen-2xl mx-auto dashboard">
      <div className="flex">
        <LeftMenu />
        <main className="bg-[#f0f0f099] w-full h-screen overflow-hidden p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
