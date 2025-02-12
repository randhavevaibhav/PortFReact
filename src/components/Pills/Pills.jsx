const Pills = ({list=[]})=>{
    return(<div className="flex flex-wrap gap-3">
       {list.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center rounded-sm text-sm px-2 py-1 bg-base_surface capitalize text-text_weak hover:text-primary font-semibold"
          >
            <span>{item.name}</span>
          </div>
        ))}
    </div>)
}


export default Pills;