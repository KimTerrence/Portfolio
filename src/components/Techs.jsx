

export default function Techs({img = "" , name = ""}){
    return(
       <>
       <div className="p-4 bg-lightGray/5 rounded-lg">
            <div className="grid grid-cols-1 justify-center items-center">
                <div className="flex items-center justify-center flex-col">
                    <img className="size-10" src={img} alt={name} />
                    <p className="text-sm">{name}</p>
                </div>
                
            </div>
       </div>
       </>

       
    )
}