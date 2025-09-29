import { useState } from "react";
import { missoes } from '../Dados/dadosMissao';
import { MissaoCard } from '../Componentes/MissaoCard';
import { MissaoModal } from '../Componentes/MissaoModal';

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);


  const concluirMissao = (id) => {
    const inventario = JSON.parse(localStorage.getItem("Iventário")) || [];
    const m = missoes.find((ms) => m.id === id);

    const figurinha = {
      id: m.id,
      nome: m.titulo || 'Figurinha'
    }

  };

  return (
    <section className='conteiner'>
      <h2>Missões</h2>
      <div className="missoes-grid">
        {missoes.map((m) => (
          <MissaoCard
            key={m.id} 
            missao={m}  
            onIniciarMissao={setMissaoSelecionada} 
            concluida={missoesConcluidas.includes(m.id)} 
          />
        ))}
      </div>

      {missaoSelecionada && (
        <MissaoModal 
          missao={missaoSelecionada} 
          onClose={() => setMissaoSelecionada(null)} 
          onConcluir={() => concluirMissao(missaoSelecionada.id)} 
        />
      )}
    </section>
  );
}
