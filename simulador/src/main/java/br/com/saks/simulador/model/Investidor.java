
package br.com.saks.simulador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Investidor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(length = 100)
    private String nome;
    
    @Column(nullable = false, unique = true, length = 200)
    private String email;
    
    @Column(nullable = false, length = 200)
    private String senha;
    
    @JsonIgnore
    @OneToMany(mappedBy = "investidor")
    private List<Historico> historicos;
}
