import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import AppSidebar from "@/app/dashboard/components/AppSidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            <div className="flex h-[100dvh] w-full flex-col md:flex-row relative">
                <AppSidebar/>
                <main className="grow md:overflow-y-auto relative flex flex-col">
                    <div
                        className="w-full px-3 py-4 md:py-5 sticky bg-white z-10 top-0 flex items-center justify-between gap-x-10 border-b-gray-200 border-b-[1px] shadow-sm">
                        <div className="sm:max-w-[350px] w-full flex items-center">
                            <SidebarTrigger/>
                            {/*<SearchInput/>*/}
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div
                                className="sm:ml-2.5 rounded-full bg-gray-300 p-2 text-sm font-semibold uppercase text-gray-700">
                                JS
                            </div>
                            <div className="hidden md:inline-block font-semibold text-sm text-gray-700">
                                Jimoh Sodiq
                            </div>
                        </div>
                    </div>
                    <div className="grow">{children}</div>
                </main>
            </div>
        </SidebarProvider>
    )
}