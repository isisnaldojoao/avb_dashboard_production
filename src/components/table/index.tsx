import React, { useEffect, useState } from 'react';
import { getData } from '../../api/services/LaminatorService'; // Atualize o caminho do seu serviço
import { LaminatorItem } from '../../interfaces/laminatorItem';

const Table: React.FC = () => {
    // Estado para armazenar os dados da API
    const [data, setData] = useState<LaminatorItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Estado de loading
    const [error, setError] = useState<string | null>(null); // Estado de erro

    // Usando useEffect para chamar a API ao carregar o componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData(); // Chama o serviço que faz a requisição
                console.log(response);
                setData(response); // Armazena os dados no estado
            } catch (error) {
                setError('Erro ao carregar os dados.');
            } finally {
                setLoading(false); // Desliga o loading após a requisição
            }
        };

        fetchData();
    }, []); // O array vazio [] garante que a chamada seja feita apenas uma vez

    if (loading) {
      return (
        <div className="flex justify-center items-center mt-4">
            Carregando...
        </div>
    ); // Exibe mensagem de carregamento enquanto a requisição é feita
    }

    if (error) {
        return <div>{error}</div>; // Exibe erro, se houver
    }

    return (
        <section className="w-max-full mt-[-2px] flex justify-center items-center">
            <table className="w-full ml-[-1px] table-auto border-collapse">
                <thead className="w-full bg-green-600 text-white" data-aos="fade-down">
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
                    {data.map((item) => {
                        function getBackgroundColor(percentage: number): string {
                            const roundedPercentage = Math.round(percentage);
                            if (roundedPercentage >= 100) {
                                return 'bg-green-500';
                            } else if (roundedPercentage >= 75) {
                                return 'bg-blue-500';
                            } else if (roundedPercentage >= 50) {
                                return 'bg-orange-500';
                            } else if (roundedPercentage >= 25) {
                                return 'bg-red-300';
                            } else {
                                return 'bg-red-500';
                            }
                        }

                        
                        const backgroundColor = getBackgroundColor(item.PORCENTAGEM);

                        return (
                            <tr key={item.ORDEM} className="text-center">
                                <td className={`border px-6 py-4 font-bold justify-center items-center text-white items-center ${item.TIPO_MOVIMENTO === 'Produção' ? 'bg-green-500 ' : 'bg-red-500'}`} data-aos="fade-up">
                                    {item.TIPO_MOVIMENTO}
                                </td>
                                <td className="border px-6 py-4" data-aos="fade-up">{item.MATERIAL}</td>
                                <td className="border px-6 py-4" data-aos="fade-up">{item.DESC_MATERIAL}</td>
                                <td className="border px-6 py-4" data-aos="fade-up">{item.ORDEM}</td>
                                <td className={`border px-6 py-4 font-bold text-white ${item.QUANTIDADE < item.QUANTIDADE ? 'bg-red-500' : 'bg-green-500'}`} data-aos="fade-up">
                                    {item.QUANTIDADE_PROGRMADA.toLocaleString()}
                                </td>
                                <td className="border px-6 py-4" data-aos="fade-up">{item.QUANTIDADE_PROGRMADA.toLocaleString()}</td>
                                <td className="border px-6 py-4" data-aos="fade-up">{item.MAQUINA}</td>
                                <td className={`border px-6 py-4 font-bold text-white ${backgroundColor}`} data-aos="fade-up">
                                    {item.PORCENTAGEM}%
                                </td>
                                <td className="border px-6 py-4" data-aos="fade-up">{item.LOTE}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};

export default Table;
