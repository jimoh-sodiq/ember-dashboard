import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="p-4 md:p-6">
            <h1 className="text-xl font-medium">Dashboard Page</h1>
            <p><Link href="/dashboard/contacts" className="text-blue-500 font-medium underline underline-offset-2">View Contacts Page</Link></p>
        </div>
    )
}