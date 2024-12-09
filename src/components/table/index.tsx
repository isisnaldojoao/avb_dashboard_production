import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 1500,
  easing: 'ease-in-out',  
  once: true, 
});



AOS.init();


export default function Table(){
    const Material = [
        {id: 1, Tipo: 'Produção', Material: '80-000338', Descrição: 'AVB Vergalhão CA50 Barra 12 M ⌀ 10 mm EN', OP: 1955452, Produzida: 27111, Progamada: 27111, Máquina: 'TREF-02', Porcentagem: 100, Corrida: 'J001828EN'},
        {id: 2, Tipo: 'Consumo', Material: '80-000694', Descrição: 'AVB Vergalhão CA50 Rolo ⌀ 10 mm', OP: 1955452, Produzida: 22000, Progamada: 27111, Máquina: 'TREF-02', Porcentagem: 75, Corrida: 'J001828EN'},
        {id: 3, Tipo: 'Produção', Material: '80-000495', Descrição: 'AVB Vergalhão CA60 Carretel ⌀ 6,0 mm', OP: 195486, Produzida: 17000, Progamada: 25000, Máquina: 'TREF-04', Porcentagem: 50, Corrida: 'J001048TF'},
        {id: 4, Tipo: 'Consumo', Material: '80-000589', Descrição: 'FIO MÁQUINA AVB 1010 L05 Rolo ⌀ 8mm ', OP: 1955452, Produzida: 20000, Progamada: 25000, Máquina: 'TREF-04', Porcentagem: 25, Corrida: 'J007530'}
      ];

    return(
        <section className="w-max-full mt-[-2px] flex justify-center items-center">
          <table className="w-full ml-[-1px] table-auto border-collapse">
            <thead className="w-full bg-green-600 text-white"
            data-aos="fade-down"
            >
              <tr>
                <th className="px-6 py-4">TIPO</th>
                <th className="px-6 py-4">MATERIAL</th>
                <th className="px-6 py-4">DESCRIÇÃO</th>
                <th className="px-6 py-4">O.P</th>
                <th className="px-6 py-4">Qtd. Produzida/Consumida</th>
                <th className="px-6 py-4">Qtd. Programada</th>
                <th className="px-6 py-4">Máquina</th>
                <th className="px-6 py-4">%</th>
                <th className="px-6 py-4">Corrida</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Material.map((item) => {
                function getBackgroundColor(percentage: number): string {
                  const roundedPercentage = Math.round(percentage);
                
                  if (roundedPercentage >= 100) {
                    return "bg-green-500";
                  } else if (roundedPercentage >= 75) {
                    return "bg-blue-500";
                  } else if (roundedPercentage >= 50) {
                    return "bg-orange-500";
                  } else if (roundedPercentage >= 25) {
                    return "bg-red-300";
                  } else {
                    return "bg-red-500";
                  }
                }
                
                
                const percentageInt = (item.Produzida * 100) / item.Progamada;
                const backgroundColor = getBackgroundColor(percentageInt);
                
                return (
                  <tr key={item.id} className='text-center'>
                    <td 
                    className={`border px-6 py-4 font-bold justify-center items-center text-white items-center ${item.Tipo === "Produção" ? "bg-green-500 " : "bg-red-500"}`}
                    data-aos="fade-up"
                    >
                      {item.Tipo}
                    </td>
                    <td className="border px-6 py-4" data-aos="fade-up" >{item.Material}</td>
                    <td className="border px-6 py-4" data-aos="fade-up" >{item.Descrição}</td>
                    <td className="border px-6 py-4"data-aos="fade-up" >{item.OP}</td>
                    <td className={`border px-6 py-4 font-bold text-white ${item.Produzida < item.Progamada ? "bg-red-500" : "bg-green-500"}`}
                    data-aos="fade-up"
                    >{item.Produzida.toLocaleString()}</td>
                    
                    <td className="border px-6 py-4" data-aos="fade-up">{item.Progamada.toLocaleString()}</td>
                    <td className="border px-6 py-4" data-aos="fade-up">{item.Máquina}</td>
                    <td className={`border px-6 py-4 font-bold text-white ${backgroundColor}`}
                    data-aos="fade-up"
                    >{percentageInt.toString().slice(0, 4)}%</td>
                    <td className="border px-6 py-4" data-aos="fade-up">{item.Corrida}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
    )
}