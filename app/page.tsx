import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Contact/index';
import Clientsay from './components/Clientsay/index';
import Contact from './components/Contact/Contact';


export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Buyers />
      <Provide />
      <Why />
      <Network />
      <Clientsay />
      <Contact />
    </main>
  )
}
