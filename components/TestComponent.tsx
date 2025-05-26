export default function TestComponent() {
    return (
        <div className="border border-gray-300 rounded p-4" >
            <h2 className="text-xl font-bold mb-4" > Responsive Grid Test </h2>
            <p className="mb-4" > This grid should be 1 column on mobile and 2 columns on medium screens(md breakpoint = 768px)-tailwind v3.17 or (md breakpoint = 48rem)-tailwind v4.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                <div className="bg-red-200 p-4 rounded" > Item 1 </div>
                <div className="bg-blue-200 p-4 rounded" > Item 2 </div>
                <div className="bg-green-200 p-4 rounded" > Item 3 </div>
                <div className="bg-purple-200 p-4 rounded" > Item 4 </div>
            </div>
        </div>
    )
}