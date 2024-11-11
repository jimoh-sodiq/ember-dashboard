"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { Mail, Home, Contact, Coins, type LucideIcon } from "lucide-react"
import {Sidebar, SidebarFooter, SidebarHeader, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton} from "@/components/ui/sidebar";
import clsx from "clsx";

interface ISidebarItem {
    title: string;
    url: string;
    icon: LucideIcon
}

export default function AppSidebar() {
    const pathname = usePathname();

    const sidebarItems: Array<ISidebarItem> = [
        {
            title: "Overview",
            url: "/dashboard",
            icon: Home,
        },
        {
            title: "Contacts",
            url: "/dashboard/contacts",
            icon: Contact,
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader className="py-6">
                <div>
                    <h1 className="font-semibold text-gray-700 text-small"><Link href="/" className="inline-flex items-center gap-1 "><Mail /> <span className="inline-block">Embermail.AI</span></Link></h1>
                    <p className="text-xs font-semibold text-gray-500">built for you</p>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu className="space-y-3">
                        {
                            sidebarItems.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild className={clsx("rounded-lg w-full h-full text-xs font-medium flex items-center ring-gray-200 ring-[1px] hover:ring-[2px] transition-all py-3 px-3 gap-x-1",
                                        {
                                            "bg-red-100 hover:bg-red-200 text-red-700": pathname === item.url
                                        },)}>
                                        <Link href={item.url}

                                        ><item.icon size={18} /><span className="inlline-block">{item.title}</span></Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter>
                <div className="rounded-lg bg-gray-300 p-[3px]">
                    <div className="rounded-lg bg-white ring-gray-200 ring-[1px]">
                        <div className="bg-gray-300 p-2">
                            <p className="text-xs font-medium text-gray-import clsx from 'clsx';700">Annual starter plan</p>
                        </div>
                        <div className="p-3">
                            <p className="text-xs font-medium text-gray-500">Credit balance: <span className="text-lg font-semibold text-gray-800">270</span></p>
                        </div>
                        <div className="p-3">
                            <button className="p-2.5 text-sm font-medium rounded-lg ring-[1px] ring-gray-300 hover:ring-gray-400 hover:bg-gray-100 w-full flex items-center justify-center text-red-500 text-center"><span className="mr-1">Get more credits</span> <Coins size={20} color="red" /></button>
                        </div>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}