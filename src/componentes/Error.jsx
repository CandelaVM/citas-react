function Error({children}){

    return (
        <div className="bg-red-700 text-white text-center uppercase font-bold p-2 mb-4">
            {children}
        </div>
    )
}

export default Error;