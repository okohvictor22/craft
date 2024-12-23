const WeAre =() =>
<main>
<div className="bg-[white] ">
    <div className="sm:grid md:grid grid-cols-2">
    <div className="hidden md:grid mt-[4em] ml-[2em]">
        <img src="/earth.png" alt="" className="z-1 absolute"/>
        <img src="/market.png" alt="" className="z-2 absolute ml-[19em] mt-[5em]"/>
    </div>
    <div>
    <p className="mt-[9em] text-[30.4px] text-[green] text[32px] ml-[2em] text-[32px] font-black">Who We Are</p>
        <div className="text-[black] text-[15px] ml-[1em] mt-[1em] font-normal">
            <p>The <span className="font-bold">Center for Research in African's Trade Facilitation(craft),</span></p>
            <p>established by renowed Trade Information Marnagement</p>
            <p> Expert Dr. Aleofuna Ekenechukwu,is at the forefront of</p>
            <p>advancing trade facilitation accross Africa. Registered</p>
            <p> with the Nigerian Corporate Affairs Commission in </p>
            <p>2022 CRAFT is dedicated to simplifing and optimizing</p>
            <p>trade processess in line with the Africa Continented </p>
            <p>Free Trade Area(AFCFTA) framework.</p>
            <p></p>
        </div>
    </div>
    </div>
    <div className="md:grid grid-cols-3">
        <div className="mt-[3em] ml-[1em] grid grid-cols-[1fr_3fr] w-[max -content]">
            <img src="/star.png" alt="" />
            <div className="text-[black] bg-[#F9BF29] w-[200px] rounded-[11.96px] pb-[14px] pl-[25px] pt-[14px]  border">
                <p>Established in 2020</p>
                <p>officially registered</p>
                <p>  in 2020</p>
                
            </div>
        </div>
        <div className="mt-[3em] ml-[1em] grid grid-cols-[1fr_3fr]">
                <img src="/star.png" alt="" />
            <div className="text-[black] bg-[#F9BF29] rounded-[11.96px] pb-[14px] pl-[15px] pt-[14px] w-[200px] border">
                    <p>Conducted International Trade</p>
                    <p>Facilitation Programme in Kigali,</p>
                    <p>Rwanda, attended by 36 fedral agencies.</p>
                </div>
        </div>
        <div className="mt-[3em] ml-[1em] grid grid-cols-[1fr_3fr] ">
             <img src="/star.png" alt="" />
             <div className="text-[black] bg-[#F9BF29] rounded-[11.96px] w-[200px] pb-[14px] pl-[25px] pt-[14px] width-[270.22px] border">
                <p>Championing Single</p>
                <p>Window Trading</p>
                <p>Systems accross</p>
                <p> Africa.</p>
             </div>
        </div>
    </div>
 </div>
</main>
export default WeAre;