

export default function Container({children}){
    return(
        <div className="min-h-screen w-full bg-slateBlue text-lightGray antialiased">
            {children}
        </div>
    )
};