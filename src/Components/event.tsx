const Event=()=>
    <div className="bg-[#F6F6F6] h-[max-content] p-4">
        <div className=" text-[green] font-black text-[25px] ml-[3.2em] md:ml-[9em] md:text-[3em]">
           <p>Upcoming Event</p>
      </div>
        <div className="md:grid grid-cols-[2fr_3fr] md:ml-[20em]">
        <div>
        <img src="/event.png" alt="" className="mt-[3em] md:mt-[5em] md:ml-[2em]"/>
        </div>
        <div>
        <div className=" mt-[3em] text-[black] font-bold text-[25px] ml-[2.5em] md:text-[20px] md:mt-[3em]">
            <p>International Trade</p>
            <p>Facilitation Training</p>
        </div>
        <div className="text-[gray] mt-[1em] ml-[1.5em] text-[20px]">
            <p>Some brief information about the</p>
            <p>event that is about to take place in</p>
            <p>Abuja will be inserted here</p>
        </div>
        <div className="grid grid-cols-[1fr_2fr] mt-[2em] md:grid grid-cols-[1fr_3fr] mt-[2em]">
            <p className="text-[19px] pt-[0.5em] ml-[2em] pl-[0.5em] text-[blue] ml-[0.8em] border rounded-[56px] w-[10em] h-[2.5em]">31 November 2024</p>
            <p className="text-[19px] pt-[0.5em] pl-[2em] text-[blue] border rounded-[56px] w-[7em] h-[2.5em]">Abuja</p>
        </div>
        <p className="border-solid text-[green] pt-[0.5em] pb-[0.5em] rounded-[25px] border-green-700 mt-[2em] ml-[3.5em] text-[20px] border-2 w-[10em] pl-[32px] md:mt-[1em]">Register Now</p>
        </div>
        </div>
    </div>
    export default Event;