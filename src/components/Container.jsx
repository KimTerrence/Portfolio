

export default function Container({children}){
    return(
        <div className="min-h-screen h-full bg-primary text-lightGray antialiased 2xl:px-60 font-poppins w-screen max-w-[1920px] top-0 left-0 right-0">
            {children}
        </div>
    )
};