const HomePage = () => {6
    return (
       <main>
            <div className='bg-[#f6f6f6] '>
                <div className='grid grid-cols-2 mt-[1em] ml-[2em]'>
                    <img src="/logo.svg" alt="" />
                    <img src="/side.png" alt="" />
                </div>
                <div className='mt-[1em] text-[green] text-[30.4px] ml-[0.8em] font-weght-900'>
                    <p>Empowering Africa's</p>
                    <p className='ml-[1em]'>Trade Ecosystem</p>
                    <p>With Innovation And</p>
                    <p className='ml-[2em]'>Research</p>
                </div>
                <div className='text-black mt-{2em}  ml-[2em] mt-[1em]'>
                    <p>Leading the way in trade facilitation,</p>
                    <p>research,and industrial financing to</p>
                    <p className='ml-[1em]'>drive Africa's economic growth.</p>
                </div>
                <div className='grid grid-cols-2 m'>
                    <p className='text-[0.8em] bg-[yellow] text-[black] border-[black] rounded-[72.83px] mt-[2em] ml-[2em] pt-[8.74px] pb-[8.74px] pr-[18.21px] pl-[18.21px]'>Learn more about CRAFT</p>
                    <p className='text-[0.8em] text-[green] border-solid-[green] bg-[] rounded-[72.83px] mt-[2em] ml-[1em]'>Contact Us</p>
                </div>
                <div className='mt-[2em]'>
                    <img src="/group.png" alt="" />
                </div>
            </div>
       </main>
    );
};

export default HomePage;