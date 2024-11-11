import {getContacts} from "@/app/dashboard/contacts/lib/data";

export default async function ContactsTable() {

    const users = await getContacts()

    if (!users || users.length === 0) {
        return <div
            className="rounded-lg text-center h-full bg-white ring-[1px] ring-gray-200 shadow overflow-clip grid place-items-center">
                No Data Found, try adding a contact
        </div>
    }

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
                            users.map(user => (
                                <tr key={user.id} className="text-xs font-semibold h-16">
                                    <td className="px-4">{user.name}</td>
                                    <td className="px-4">{user.username}</td>
                                    <td className="px-4">{user.email}</td>
                                    <td className="px-4">{user.address.street + "," + user.address.city}</td>
                                    <td className="px-4">{user.phone}</td>
                                    <td className="px-4">{user.website}</td>
                                    <td className="px-4">{user.company.name}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-4 border-t-[1px] border-t-gray-200">Pagination</div>
        </div>
    )
}