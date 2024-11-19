const Footer=()=>
    <div className="bg-[black] h-[max-content] p-4">
        <div className="md:grid grid-cols-2">
        <div>
        <div className="ml-[2em]">
            <img src="/logo-white.png" alt="" />
        </div>
        <div className="mt-[3em] ml-[2em]">
            <img src="/footer group.png" alt="" />
        </div>
        <div className="mt-[3em] ml-[1em] text-[white] font-bold">
            <p>© 2024 Center for Research in African</p>
            <p>Trade facilitation (CRAFT). All Rights</p>
            <p>Reserved.</p>
        </div>
        </div>
        <div>
        <div className="grid grid-cols-2 text-[white] mt-[2em] ml-[1em]">
            <div className="grid">
                <p className="text-[20px] font-bold mb-[0.5em]">Links</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Mission</p>
                <p>Contact Us</p>
            </div>
            <div className="grid">
                <p className="text-[20px] font-bold mb-[0.5em]">More</p>
                <p>Documentation</p>
                <p>Licence</p>
            </div>
        </div>
        </div>
        </div>
    </div>
    export default Footer;