export function AboutSection() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-textColor text-4xl">Sobre o Desafio:</h2>

            <p><b>Instruções para entrega do desafio</b></p>
            
            <h3 className="font-semibold text-lg">📝│ O Que deve ser utilizado :</h3>

            <ul className="bg-borderColor/50 p-4 rounded-md">
                <li>• - Variáveis</li>
                <li>• - Operadores</li>
                <li>• - Laços de repetição</li>
                <li>• - Estruturas de decisões</li>
                <li>• - Funções</li>
                <li>• - Classes e Objetos</li>
            </ul>

            <h3 className="font-semibold text-lg">🎯│ Objetivo :</h3>

            <p>Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:</p>

            <ul className="bg-borderColor/50 p-4 rounded-md">
                <li>• - Nome</li>
                <li>• - Idade</li>
                <li>• - tipo (ex: guerreiro, mago, monge, ninja )</li>
            </ul>

            <p>além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:</p>

            <ul className="bg-borderColor/50 p-4 rounded-md">
                <li>• - exibir a mensagem: "o **tipo** atacou usando **ataque**"</li>
                <li>• - aonde o **tipo** deve ser concatenando o tipo que está na propriedade da classe</li>
                <li>• - e no **ataque** deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:</li>
            </ul>

            <table className="border-collapse border border-borderColor">
                <caption className="caption-bottom m-4 italic">Tabela: Condições e resultados</caption>
                <thead className="h-10">
                    <tr className="bg-borderColor/50">
                        <th className="text-left border px-4 border-borderColor">❓ Condição</th>
                        <th className="text-left border px-4 border-borderColor">🏆 Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se mago</td>
                        <td className="border px-4 border-borderColor">No ataque exibir (usou magia)</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se guerreiro</td>
                        <td className="border px-4 border-borderColor">No ataque exibir (usou espada)</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se monge</td>
                        <td className="border px-4 border-borderColor">No ataque exibir (usou artes marciais)</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se ninja</td>
                        <td className="border px-4 border-borderColor">No ataque exibir (usou shuriken)</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="font-semibold text-lg">💻│ Saída :</h3>

            <p>Ao final deve se exibir uma mensagem:</p>

            <p className="bg-borderColor/50 p-4 rounded-md">" o **tipo** atacou usando **ataque** "</p>
            <p><b>exemplo:</b> mago atacou usando magia</p>
            <p><b>exemplo:</b> guerreiro atacou usando espada</p>
        </section>
    )
}