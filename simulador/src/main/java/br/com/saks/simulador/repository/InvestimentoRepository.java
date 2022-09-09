
package br.com.saks.simulador.repository;

import br.com.saks.simulador.model.Investimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{
}
