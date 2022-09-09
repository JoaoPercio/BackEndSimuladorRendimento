
package br.com.saks.simulador.controller;

import br.com.saks.simulador.model.Historico;
import br.com.saks.simulador.repository.HistoricoRepository;
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
@RequestMapping("/api/historicos")
public class HistoricoController {
    
    @Autowired
    private HistoricoRepository historicoRepository;
    
    @GetMapping
    public List<Historico> listarTodos() {
        return historicoRepository.findAll();
    }
    // para listar o historico do investidor logado ****NãoFunciona****
    @GetMapping(value="/{id_investidor}")
    public Optional<Historico> listarPeloIdInvestidor(@PathVariable Long id_investidor) {
        return historicoRepository.findById(id_investidor);
    }
    
    @PostMapping
    public Historico adicionar(@RequestBody Historico historico) {
        return historicoRepository.save(historico);
    }
    
    @PutMapping(value="/{id}")
    public ResponseEntity editar(@PathVariable Long id, @RequestBody Historico historico) {
        return historicoRepository.findById(id)
                .map(record -> {
                    record.setNome(historico.getNome());
                    Historico imovelUpdated = historicoRepository.save(record);
                    return ResponseEntity.ok().body(imovelUpdated);
                }).orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        return historicoRepository.findById(id)
                .map(record-> {
                    historicoRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
    
}
