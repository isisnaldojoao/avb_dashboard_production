import avb from '../../assets/avbbbb.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 1500,
  easing: 'ease-in-out',  
  once: true, 
});



AOS.init();


export default function Header() {
    return (
        <header className="flex bg-green-400 text-white items-center gap-[350px] select-none p-3"
        data-aos="fade-down"
        >
            <img src={avb} alt="Logo AVB" />
            <h1 className="text-3xl font-bold">Painel de Produção - Laminador a Frio</h1>
        </header>
    );
}