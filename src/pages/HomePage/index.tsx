import './index.css';

const HomePage = () => {
    return (
       <main>
            <div className='top'>
                <div className='logo'>
                    <img src="./logo.svg" alt="" />
                    <img src="./side.png" alt="" />
                </div>
                <div className='empower'>
                    <p>Empowering Africa's</p>
                    <p className='trade'>Trade Ecosystem</p>
                    <p>With Innovation And</p>
                    <p className='last'>Research</p>
                </div>
                <div className='paragraph'>
                    <p>Leading the way in trade facilitation,</p>
                    <p>research,and industrial financing to</p>
                    <p className='down'>drive Africa's economic growth.</p>
                </div>
                <div className='more'>
                    <p className='learn'>Learn more about craft</p>
                    <p className='contact'>Contact Us</p>
                </div>
                <div className='group'>
                    <img src="/group.png" alt="" />
                </div>
            </div>
       </main>
    );
};

export default HomePage;