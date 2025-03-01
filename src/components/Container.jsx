

export default function Container({children}){
    return(
        <div className=" bg-primay text-lightGray antialiased h-full px-5 sm:px-10 md:px-10 lg:px-10 xl:px-30 2xl:px-60 font-poppins w-screen max-w-[1600px] top-0 left-0 right-0">
            {children}
        </div>
    )
};  