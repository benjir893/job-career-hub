const getjobItem =()=>{
    const storeAppliedjobs = localStorage.getItem('job-Applied')
    if(storeAppliedjobs){
       return JSON.parse(storeAppliedjobs)
    }
    return[]
}
const setAppliedJobs=(id)=>{
    const storedJobs = getjobItem()
    const itemExist = storedJobs.find((jobid)=>jobid === Number(id))
    if(!itemExist)
    {
        storedJobs.push(Number(id))
        localStorage.setItem('job-Applied', JSON.stringify(storedJobs))
    }
}
export{getjobItem, setAppliedJobs}