
package br.com.saks.simulador.controller;

import br.com.saks.simulador.model.Investidor;
import br.com.saks.simulador.model.JwtResponse;
import br.com.saks.simulador.repository.InvestidorRepository;
import br.com.saks.simulador.config.JwtTokenUtil;
import br.com.saks.simulador.service.JwtUserDetailsService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/investidores")
public class InvestidorController {
    
    @Autowired
    private InvestidorRepository investidorRepository;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;
    
    @GetMapping
    public List<Investidor> listarTodos() {
        return investidorRepository.findAll();
    }
    
    @GetMapping(value="/{id}")
    public Optional<Investidor> listarPeloId(@PathVariable Long id) {
        return investidorRepository.findById(id);
    }
    
    @PostMapping
    public Investidor adicionarInvestidor(@RequestBody Investidor investidor) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        investidor.setSenha(encoder.encode(investidor.getSenha()));
        
        return investidorRepository.save(investidor);
    }
    
    @RequestMapping(value = "/criar", method = RequestMethod.POST)
    public ResponseEntity<?> adicionar(@RequestBody Investidor investidor) {
        try {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            String senha = investidor.getSenha();
            investidor.setSenha(encoder.encode(investidor.getSenha()));
            

            Investidor investidorSave = investidorRepository.save(investidor);
            authenticate(investidorSave.getEmail(), senha);
            final UserDetails userDetails = userDetailsService
                    .loadUserByUsername(investidorSave.getEmail());
            final String token = jwtTokenUtil.generateToken(userDetails);
            return ResponseEntity.ok(new JwtResponse(token));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "EMAIL_DUPLICADO");
        }
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
    
    @PutMapping(value="/{id}")
    public ResponseEntity editar(@PathVariable Long id, @RequestBody Investidor investidor) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        investidor.setSenha(encoder.encode(investidor.getSenha()));
        return investidorRepository.findById(id)
                .map(record -> {
                    record.setNome(investidor.getNome());
                    record.setEmail(investidor.getEmail());
                    record.setSenha(investidor.getSenha());
                   
                    Investidor investidorUpdated = investidorRepository.save(record);
                    return ResponseEntity.ok().body(investidorUpdated);
                }).orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        return investidorRepository.findById(id)
                .map(record-> {
                    investidorRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
