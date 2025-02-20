

export default function Techs({img = "" , name = ""}){
    return(
        <div className="flex flex-col justify-center items-center py-5 w-40 bg-lightGray/10 rounded-xl gap-2">
            <img className="size-10" src={img} alt={name} />
            <p className="text-sm">{name}</p>
        </div>
    )
}