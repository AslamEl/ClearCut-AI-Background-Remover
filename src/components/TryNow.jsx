const TryNow = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Remove Image Background.
            </h2>
            <p className="text-gray-500 mb-8 text-center">
                Get a transparent background for any image.
            </p>
            <div className="bg-white rounded-5x1 shadow-lg p-10 flex flex-col items-center space-y-4">
                <input type="file" id="upload2" hidden accept="image/*" />
                <label htmlFor="upload2"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg
                hover:from-purple-600 hover:to-indigo-600 text-white font-semibold
                 py-3 px-6 rounded-full transition-colors duration-300">
                    Upload Image
                </label>
                <p className="text-gray-500 text-sm">
                    or drop file, paste image or <a href="#" className="text-blue-500 underline">URL</a>
                </p>
            </div>
        </div>
    )
}

export default TryNow;