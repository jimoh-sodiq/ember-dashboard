import { Suspense } from "react";
import { Download } from "lucide-react"
import ContactsTable from "@/app/dashboard/contacts/components/ContactsTable";
import ContactTableSkeleton from "@/app/dashboard/contacts/components/ContactTableSkeleton";

export default function ContactsPage() {

    return (
        <section className="h-full flex flex-col">
            <div className="w-full pt-5 px-3 md:px-6 border-b-gray-200 border-b-[1px]">
                <div className="flex items-center justify-between gap-2.5">
                    <h1 className="text-2xl font-semibold text-gray-800">Contacts</h1>
                    <button className="text-xs flex items-center gap-1 text-gray-700 font-medium outline-none rounded ring-[1px] ring-gray-300 py-2 px-3 hover:ring-gray-400 hover:shadow transition-all">
                        <Download size={16} /> <span className="inline-block">Sample file</span>
                    </button>
                </div>
                <div className="my-2.5">
                    <p className="font-medium text-sm text-gray-600"> A list of all your contacts with their details</p>
                </div>
            </div>
            <div className="px-3 md:px-6 py-4 bg-gray-100 grow">
                    <Suspense fallback={<ContactTableSkeleton />}>
                        <ContactsTable/>
                    </Suspense>
            </div>
        </section>
    );
}
