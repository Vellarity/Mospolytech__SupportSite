import Link from "next/link"

export default function Group({groupName, groupItems}){
    return(
        <div className="w-full rounded-2xl bg-white p-5 flex flex-col">
            <span className="text-3xl font-semibold pb-5">{groupName}</span>
            {groupItems.map((link) =>{
                console.log(link.path)
                return <Link className="text-xl pb-1 pl-5 hover:underline" href={{pathname:`tutorials/${link.name}`, query:{path:link.path}}}  key={link.name}>{link.name}</Link>
            })}
        </div>
    )
}
/* as={`tutorials/${link.name}`} */