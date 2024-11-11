import {IContact} from "@/app/dashboard/contacts/types";

export async function getContacts(): Promise<IContact[]> {
    try {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users")
        return await usersResponse.json()
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch contacts data.');
    }
}