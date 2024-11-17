const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex items-center justify-between">
                <h1>Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-skyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2024-01-01
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora officiis saepe officia ullam qui
                    </p>
                </div>
                <div className="bg-purpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2024-01-01
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora officiis saepe officia ullam qui
                    </p>
                </div>
                <div className="bg-yellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2024-01-01
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora officiis saepe officia ullam qui
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcements