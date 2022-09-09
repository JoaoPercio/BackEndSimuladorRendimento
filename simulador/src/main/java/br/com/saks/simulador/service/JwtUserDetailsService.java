
package br.com.saks.simulador.service;

import br.com.saks.simulador.model.Investidor;
import br.com.saks.simulador.repository.InvestidorRepository;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService{
    
    @Autowired
    private InvestidorRepository investidorRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Investidor> usuarioResponse = investidorRepository.findByEmail(email);
                Investidor usuario = usuarioResponse.get();
		
		if (usuario.getEmail().equals(email)) {
			return new User(email, usuario.getSenha(),
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("usuário não encontrado - email: " + email);
		}
	}
}
