export const Pills = ({list=[]})=>{
    return(<div className="flex flex-wrap gap-3">
       {list.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center rounded-md text-sm px-3 py-2 bg-base_surface capitalize text-text_weak hover:text-primary font-semibold cursor-pointer"
          >
            <span>{item.name}</span>
          </div>
        ))}
    </div>)
}


