
package br.com.saks.simulador.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Historico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "id_investidor")
    private Investidor investidor;
    
    @Column(nullable = false, length = 100)
    private String nome;
    
    @Column
    private float entrada;
    //valor para atingir o objetivo
    @Column
    private float valorEstimado;
    // tempo para concluir o objetivo
    @Column
    private int tempo;
    // resultado do calculo
    @Column
    private float resultado;
    
    @ManyToOne
    @JoinColumn(name = "id_investimento")
    private Investimento investimento; 
    
    
}
