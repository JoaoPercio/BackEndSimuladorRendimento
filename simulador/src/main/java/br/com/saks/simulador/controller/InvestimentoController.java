
package br.com.saks.simulador.controller;

import br.com.saks.simulador.model.Investimento;
import br.com.saks.simulador.repository.InvestimentoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/investimentos")
public class InvestimentoController {
    
    @Autowired
    private InvestimentoRepository investimentoRepository;
    
   
    @GetMapping
    public List<Investimento> listarTodos() {
        return investimentoRepository.findAll();
    }
    
    
    @GetMapping(value="/{id}")
    public Optional<Investimento> listarPeloId(@PathVariable Long id) {
        return investimentoRepository.findById(id);
    }

    @PostMapping
    public Investimento adicionar(@RequestBody Investimento investimento) {
        return investimentoRepository.save(investimento);
    }
    
    @PutMapping(value="/{id}")
    public ResponseEntity editar(@PathVariable Long id, @RequestBody Investimento investimento) {
        return investimentoRepository.findById(id)
                .map(record -> {
                    record.setNome(investimento.getNome());
                    record.setRisco(investimento.getRisco());
                    record.setRentabilidade(investimento.getRentabilidade());
                    Investimento investimentoUpdated = investimentoRepository.save(record);
                    return ResponseEntity.ok().body(investimentoUpdated);
                }).orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        return investimentoRepository.findById(id)
                .map(record-> {
                    investimentoRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
    
}
