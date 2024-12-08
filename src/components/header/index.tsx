import avb from '../../assets/avbbbb.png';

export default function Header() {
    return (
        <header className="flex bg-green-400 text-white items-center gap-[350px] select-none p-3">
            <img src={avb} alt="Logo AVB" />
            <h1 className="text-3xl font-bold">Painel de Produção - Laminador a Frio</h1>
        </header>
    );
}