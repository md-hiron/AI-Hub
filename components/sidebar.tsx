"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";


const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-sky-500"
      },
      {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
      },
      {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        href: '/image',
      },
      {
        label: 'Video Generation',
        icon: VideoIcon,
        color: "text-orange-700",
        href: '/video',
      },
      {
        label: 'Music Generation',
        icon: Music,
        color: "text-emerald-500",
        href: '/music',
      },
      {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        href: '/code',
      },
      {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
      },
]
const Sidebar = () => {
    return(
        <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <h3 className="text-3xl"><span className="text-[#de4ae8]">AI</span> Hub</h3>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href} className="text-sm p-3 hover:text-white hover:bg-white/10 flex rounded-lg transition">
                            <div className="flex items-center">
                                <route.icon className={cn('h-5 w-5 mr-3',route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar