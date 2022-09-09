
package br.com.saks.simulador.repository;

import br.com.saks.simulador.model.Investidor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestidorRepository extends JpaRepository<Investidor, Long>{
    Optional<Investidor> findByEmail(String email);
}
