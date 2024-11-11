import Link from "next/link"
export default function Home() {
  return (
    <div className="grid place-items-center h-[100dvh] bg-gray-300">
        <div>
            <h1>Welcome,</h1>
            <p>Please click <Link href="/dashboard" className="text-blue-500 font-medium underline underline-offset-2">here</Link> to view the dashboard</p>
        </div>
    </div>
  );
}
