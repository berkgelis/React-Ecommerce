import Caarousel from '../components/Home/Caarousel';
import Banner from '../components/Home/Banner';
import Cardss from '../components/Home/Cardss';
import '../components/CSS/Home.css'




function Home() {

    return (
        <div className='homeContainer'>
            <Caarousel />
            <Banner />
            <Cardss />
        </div >
    );
}

export default Home;