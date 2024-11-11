import {Skeleton} from "@/components/ui/skeleton";

export default function ContactTableSkeleton() {

    return (
        <div className="rounded-lg h-full bg-white ring-[1px] ring-gray-200 shadow overflow-clip flex flex-col">
            <div className="grow w-full overflow-x-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="w-full bg-gray-200 h-12 text-left text-xs text-gray-500 capitalize">
                            <th className="px-4">name</th>
                            <th className="px-4">username</th>
                            <th className="px-4">email</th>
                            <th className="px-4">address</th>
                            <th className="px-4">phone</th>
                            <th className="px-4">website</th>
                            <th className="px-4">company</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => (
                                <tr key={item} className="text-xs font-semibold h-16 text-red-600">
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                    <td className="px-4"><Skeleton className="w-full h-8 rounded-lg"/></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-4 border-t-[1px] border-t-gray-200">
                <Skeleton className="w-full max-w-[150px] h-8 rounded-lg"/>
            </div>
        </div>
    )
}