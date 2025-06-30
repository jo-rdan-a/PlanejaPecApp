// Tipos para os arrays de consumo
type ConsumoArray = {
  [key: string]: number[];
};

// Interfaces para os grupos de consumo
interface ConsumoGrupo {
  femeas: number[];
  machos: number[];
  borregos: number[];
  borregas1: number[];
  borregas2: number[];
  total: number[];
}

interface ConsumoGrupoCompleto extends ConsumoGrupo {
  femeas_reb: number[];
  machos_reb: number[];
  borregos_reb: number[];
  borregas1_reb: number[];
  borregas2_reb: number[];
  total_reb: number[];
  femeas_per: number[];
  machos_per: number[];
  borregos_per: number[];
  borregas1_per: number[];
  borregas2_per: number[];
  total_per: number[];
}

// Importações com tipos
import {
  anoAtual,
  dados,
  parametros,
  suplementos
} from "./index";

// Arrays de consumo com tipagem
const consumo: ConsumoGrupoCompleto = {
  femeas: [],
  machos: [],
  borregos: [],
  borregas1: [],
  borregas2: [],
  total: [],
  femeas_reb: [],
  machos_reb: [],
  borregos_reb: [],
  borregas1_reb: [],
  borregas2_reb: [],
  total_reb: [],
  femeas_per: [],
  machos_per: [],
  borregos_per: [],
  borregas1_per: [],
  borregas2_per: [],
  total_per: []
};

const Volumoso: ConsumoGrupoCompleto = {
  femeas: [],
  machos: [],
  borregos: [],
  borregas1: [],
  borregas2: [],
  total: [],
  femeas_reb: [],
  machos_reb: [],
  borregos_reb: [],
  borregas1_reb: [],
  borregas2_reb: [],
  total_reb: [],
  femeas_per: [],
  machos_per: [],
  borregos_per: [],
  borregas1_per: [],
  borregas2_per: [],
  total_per: []
};

const VolumosoSeca: ConsumoGrupoCompleto = {
  femeas: [],
  machos: [],
  borregos: [],
  borregas1: [],
  borregas2: [],
  total: [],
  femeas_reb: [],
  machos_reb: [],
  borregos_reb: [],
  borregas1_reb: [],
  borregas2_reb: [],
  total_reb: [],
  femeas_per: [],
  machos_per: [],
  borregos_per: [],
  borregas1_per: [],
  borregas2_per: [],
  total_per: []
};

const Concentrado: ConsumoGrupoCompleto = {
  femeas: [],
  machos: [],
  borregos: [],
  borregas1: [],
  borregas2: [],
  total: [],
  femeas_reb: [],
  machos_reb: [],
  borregos_reb: [],
  borregas1_reb: [],
  borregas2_reb: [],
  total_reb: [],
  femeas_per: [],
  machos_per: [],
  borregos_per: [],
  borregas1_per: [],
  borregas2_per: [],
  total_per: []
};

const ConcentradoSeca: ConsumoGrupoCompleto = {
  femeas: [],
  machos: [],
  borregos: [],
  borregas1: [],
  borregas2: [],
  total: [],
  femeas_reb: [],
  machos_reb: [],
  borregos_reb: [],
  borregas1_reb: [],
  borregas2_reb: [],
  total_reb: [],
  femeas_per: [],
  machos_per: [],
  borregos_per: [],
  borregas1_per: [],
  borregas2_per: [],
  total_per: []
};

// Funções de cálculo com tipagem
function calcularConsumoTotal(): void {
  // Fêmeas
  consumo.femeas.push(parametros.pesoMedio.femeas * suplementos.materiaSeca.femeas);
  consumo.femeas_reb.push(consumo.femeas[anoAtual] * dados.quantidade.femeas[anoAtual]);
  consumo.femeas_per.push(consumo.femeas_reb[anoAtual] * suplementos.diasSuplementos.femeas);

  // Machos
  consumo.machos.push(parametros.pesoMedio.machos * suplementos.materiaSeca.machos);
  consumo.machos_reb.push(consumo.machos[anoAtual] * dados.quantidade.machos[anoAtual]);
  consumo.machos_per.push(consumo.machos_reb[anoAtual] * suplementos.diasSuplementos.machos);

  // Borregos
  consumo.borregos.push(((parametros.idadeDesmame + parametros.pesoAbate) / 2) * suplementos.materiaSeca.borregos);
  consumo.borregos_reb.push(consumo.borregos[anoAtual] * dados.nascimentos.machos[anoAtual]);
  consumo.borregos_per.push(consumo.borregos_reb[anoAtual] * suplementos.diasSuplementos.borregos);

  // Borregas1
  consumo.borregas1.push(((parametros.idadeDesmame + parametros.pesoAbate) / 2) * suplementos.materiaSeca.borregas1);
  consumo.borregas1_reb.push(consumo.borregas1[anoAtual] * dados.nascimentos.femeas[anoAtual]);
  consumo.borregas1_per.push(consumo.borregas1_reb[anoAtual] * suplementos.diasSuplementos.borregas1);

  // Borregas2
  consumo.borregas2.push(((parametros.pesoAbate + parametros.pesoMedio.borregas) / 2) * suplementos.materiaSeca.borregas2);
  consumo.borregas2_reb.push(consumo.borregas2[anoAtual] * dados.nascimentos.femeas[anoAtual]);
  consumo.borregas2_per.push(consumo.borregas2_reb[anoAtual] * suplementos.diasSuplementos.borregas2);

  // Totais
  consumo.total.push(
    consumo.femeas[anoAtual] + 
    consumo.machos[anoAtual] + 
    consumo.borregos[anoAtual] + 
    consumo.borregas1[anoAtual] + 
    consumo.borregas2[anoAtual]
  );
  
  consumo.total_reb.push(
    consumo.femeas_reb[anoAtual] + 
    consumo.machos_reb[anoAtual] + 
    consumo.borregos_reb[anoAtual] + 
    consumo.borregas1_reb[anoAtual] + 
    consumo.borregas2_reb[anoAtual]
  );
  
  consumo.total_per.push(
    consumo.femeas_per[anoAtual] + 
    consumo.machos_per[anoAtual] + 
    consumo.borregos_per[anoAtual] + 
    consumo.borregas1_per[anoAtual] + 
    consumo.borregas2_per[anoAtual]
  );
}

function calcularVolumoso(): void {
  // Fêmeas
  Volumoso.femeas.push(consumo.femeas[anoAtual] * suplementos.volumoso.femeas);
  Volumoso.femeas_reb.push(consumo.femeas_reb[anoAtual] * suplementos.volumoso.femeas);
  Volumoso.femeas_per.push(consumo.femeas_per[anoAtual] * suplementos.volumoso.femeas);

  // Machos
  Volumoso.machos.push(consumo.machos[anoAtual] * suplementos.volumoso.machos);
  Volumoso.machos_reb.push(consumo.machos_reb[anoAtual] * suplementos.volumoso.machos);
  Volumoso.machos_per.push(consumo.machos_per[anoAtual] * suplementos.volumoso.machos);

  // Borregos
  Volumoso.borregos.push(consumo.borregos[anoAtual] * suplementos.volumoso.borregos);
  Volumoso.borregos_reb.push(consumo.borregos_reb[anoAtual] * suplementos.volumoso.borregos);
  Volumoso.borregos_per.push(consumo.borregos_per[anoAtual] * suplementos.volumoso.borregos);

  // Borregas1
  Volumoso.borregas1.push(consumo.borregas1[anoAtual] * suplementos.volumoso.borregas1);
  Volumoso.borregas1_reb.push(consumo.borregas1_reb[anoAtual] * suplementos.volumoso.borregas1);
  Volumoso.borregas1_per.push(consumo.borregas1_per[anoAtual] * suplementos.volumoso.borregas1);

  // Borregas2
  Volumoso.borregas2.push(consumo.borregas2[anoAtual] * suplementos.volumoso.borregas2);
  Volumoso.borregas2_reb.push(consumo.borregas2_reb[anoAtual] * suplementos.volumoso.borregas2);
  Volumoso.borregas2_per.push(consumo.borregas2_per[anoAtual] * suplementos.volumoso.borregas2);

  // Totais
  Volumoso.total.push(
    Volumoso.femeas[anoAtual] + 
    Volumoso.machos[anoAtual] + 
    Volumoso.borregos[anoAtual] + 
    Volumoso.borregas1[anoAtual] + 
    Volumoso.borregas2[anoAtual]
  );
  
  Volumoso.total_reb.push(
    Volumoso.femeas_reb[anoAtual] + 
    Volumoso.machos_reb[anoAtual] + 
    Volumoso.borregos_reb[anoAtual] + 
    Volumoso.borregas1_reb[anoAtual] + 
    Volumoso.borregas2_reb[anoAtual]
  );
  
  Volumoso.total_per.push(
    Volumoso.femeas_per[anoAtual] + 
    Volumoso.machos_per[anoAtual] + 
    Volumoso.borregos_per[anoAtual] + 
    Volumoso.borregas1_per[anoAtual] + 
    Volumoso.borregas2_per[anoAtual]
  );
}

function calcularMateriaSecaVolumoso(): void {
  // Fêmeas
  VolumosoSeca.femeas.push(Volumoso.femeas[anoAtual] / suplementos.materiaSecaVolumoso.femeas);
  VolumosoSeca.femeas_reb.push(Volumoso.femeas_reb[anoAtual] / suplementos.materiaSecaVolumoso.femeas);
  VolumosoSeca.femeas_per.push(Volumoso.femeas_per[anoAtual] / suplementos.materiaSecaVolumoso.femeas);

  // Machos
  VolumosoSeca.machos.push(Volumoso.machos[anoAtual] / suplementos.materiaSecaVolumoso.machos);
  VolumosoSeca.machos_reb.push(Volumoso.machos_reb[anoAtual] / suplementos.materiaSecaVolumoso.machos);
  VolumosoSeca.machos_per.push(Volumoso.machos_per[anoAtual] / suplementos.materiaSecaVolumoso.machos);

  // Borregos
  VolumosoSeca.borregos.push(Volumoso.borregos[anoAtual] / suplementos.materiaSecaVolumoso.borregos);
  VolumosoSeca.borregos_reb.push(Volumoso.borregos_reb[anoAtual] / suplementos.materiaSecaVolumoso.borregos);
  VolumosoSeca.borregos_per.push(Volumoso.borregos_per[anoAtual] / suplementos.materiaSecaVolumoso.borregos);

  // Borregas1
  VolumosoSeca.borregas1.push(Volumoso.borregas1[anoAtual] / suplementos.materiaSecaVolumoso.borregas1);
  VolumosoSeca.borregas1_reb.push(Volumoso.borregas1_reb[anoAtual] / suplementos.materiaSecaVolumoso.borregas1);
  VolumosoSeca.borregas1_per.push(Volumoso.borregas1_per[anoAtual] / suplementos.materiaSecaVolumoso.borregas1);

  // Borregas2
  VolumosoSeca.borregas2.push(Volumoso.borregas2[anoAtual] / suplementos.materiaSecaVolumoso.borregas2);
  VolumosoSeca.borregas2_reb.push(Volumoso.borregas2_reb[anoAtual] / suplementos.materiaSecaVolumoso.borregas2);
  VolumosoSeca.borregas2_per.push(Volumoso.borregas2_per[anoAtual] / suplementos.materiaSecaVolumoso.borregas2);

  // Totais
  VolumosoSeca.total.push(
    VolumosoSeca.femeas[anoAtual] + 
    VolumosoSeca.machos[anoAtual] + 
    VolumosoSeca.borregos[anoAtual] + 
    VolumosoSeca.borregas1[anoAtual] + 
    VolumosoSeca.borregas2[anoAtual]
  );
  
  VolumosoSeca.total_reb.push(
    VolumosoSeca.femeas_reb[anoAtual] + 
    VolumosoSeca.machos_reb[anoAtual] + 
    VolumosoSeca.borregos_reb[anoAtual] + 
    VolumosoSeca.borregas1_reb[anoAtual] + 
    VolumosoSeca.borregas2_reb[anoAtual]
  );
  
  VolumosoSeca.total_per.push(
    VolumosoSeca.femeas_per[anoAtual] + 
    VolumosoSeca.machos_per[anoAtual] + 
    VolumosoSeca.borregos_per[anoAtual] + 
    VolumosoSeca.borregas1_per[anoAtual] + 
    VolumosoSeca.borregas2_per[anoAtual]
  );
}

function calcularConcentrado(): void {
  // Fêmeas
  Concentrado.femeas.push(consumo.femeas[anoAtual] - Volumoso.femeas[anoAtual]);
  Concentrado.femeas_reb.push(consumo.femeas_reb[anoAtual] - Volumoso.femeas_reb[anoAtual]);
  Concentrado.femeas_per.push(consumo.femeas_per[anoAtual] - Volumoso.femeas_per[anoAtual]);

  // Machos
  Concentrado.machos.push(consumo.machos[anoAtual] - Volumoso.machos[anoAtual]);
  Concentrado.machos_reb.push(consumo.machos_reb[anoAtual] - Volumoso.machos_reb[anoAtual]);
  Concentrado.machos_per.push(consumo.machos_per[anoAtual] - Volumoso.machos_per[anoAtual]);

  // Borregos
  Concentrado.borregos.push(consumo.borregos[anoAtual] - Volumoso.borregos[anoAtual]);
  Concentrado.borregos_reb.push(consumo.borregos_reb[anoAtual] - Volumoso.borregos_reb[anoAtual]);
  Concentrado.borregos_per.push(consumo.borregos_per[anoAtual] - Volumoso.borregos_per[anoAtual]);

  // Borregas1
  Concentrado.borregas1.push(consumo.borregas1[anoAtual] - Volumoso.borregas1[anoAtual]);
  Concentrado.borregas1_reb.push(consumo.borregas1_reb[anoAtual] - Volumoso.borregas1_reb[anoAtual]);
  Concentrado.borregas1_per.push(consumo.borregas1_per[anoAtual] - Volumoso.borregas1_per[anoAtual]);

  // Borregas2
  Concentrado.borregas2.push(consumo.borregas2[anoAtual] - Volumoso.borregas2[anoAtual]);
  Concentrado.borregas2_reb.push(consumo.borregas2_reb[anoAtual] - Volumoso.borregas2_reb[anoAtual]);
  Concentrado.borregas2_per.push(consumo.borregas2_per[anoAtual] - Volumoso.borregas2_per[anoAtual]);

  // Totais
  Concentrado.total.push(
    Concentrado.femeas[anoAtual] + 
    Concentrado.machos[anoAtual] + 
    Concentrado.borregos[anoAtual] + 
    Concentrado.borregas1[anoAtual] + 
    Concentrado.borregas2[anoAtual]
  );
  
  Concentrado.total_reb.push(
    Concentrado.femeas_reb[anoAtual] + 
    Concentrado.machos_reb[anoAtual] + 
    Concentrado.borregos_reb[anoAtual] + 
    Concentrado.borregas1_reb[anoAtual] + 
    Concentrado.borregas2_reb[anoAtual]
  );
  
  Concentrado.total_per.push(
    Concentrado.femeas_per[anoAtual] + 
    Concentrado.machos_per[anoAtual] + 
    Concentrado.borregos_per[anoAtual] + 
    Concentrado.borregas1_per[anoAtual] + 
    Concentrado.borregas2_per[anoAtual]
  );
}

function calcularMateriaSecaConcentrado(): void {
  // Fêmeas
  ConcentradoSeca.femeas.push(Concentrado.femeas[anoAtual] / suplementos.materiaSecaConcentrado.femeas);
  ConcentradoSeca.femeas_reb.push(Concentrado.femeas_reb[anoAtual] / suplementos.materiaSecaConcentrado.femeas);
  ConcentradoSeca.femeas_per.push(Concentrado.femeas_per[anoAtual] / suplementos.materiaSecaConcentrado.femeas);

  // Machos
  ConcentradoSeca.machos.push(Concentrado.machos[anoAtual] / suplementos.materiaSecaConcentrado.machos);
  ConcentradoSeca.machos_reb.push(Concentrado.machos_reb[anoAtual] / suplementos.materiaSecaConcentrado.machos);
  ConcentradoSeca.machos_per.push(Concentrado.machos_per[anoAtual] / suplementos.materiaSecaConcentrado.machos);

  // Borregos
  ConcentradoSeca.borregos.push(Concentrado.borregos[anoAtual] / suplementos.materiaSecaConcentrado.borregos);
  ConcentradoSeca.borregos_reb.push(Concentrado.borregos_reb[anoAtual] / suplementos.materiaSecaConcentrado.borregos);
  ConcentradoSeca.borregos_per.push(Concentrado.borregos_per[anoAtual] / suplementos.materiaSecaConcentrado.borregos);

  // Borregas1
  ConcentradoSeca.borregas1.push(Concentrado.borregas1[anoAtual] / suplementos.materiaSecaConcentrado.borregas1);
  ConcentradoSeca.borregas1_reb.push(Concentrado.borregas1_reb[anoAtual] / suplementos.materiaSecaConcentrado.borregas1);
  ConcentradoSeca.borregas1_per.push(Concentrado.borregas1_per[anoAtual] / suplementos.materiaSecaConcentrado.borregas1);

  // Borregas2
  ConcentradoSeca.borregas2.push(Concentrado.borregas2[anoAtual] / suplementos.materiaSecaConcentrado.borregas2);
  ConcentradoSeca.borregas2_reb.push(Concentrado.borregas2_reb[anoAtual] / suplementos.materiaSecaConcentrado.borregas2);
  ConcentradoSeca.borregas2_per.push(Concentrado.borregas2_per[anoAtual] / suplementos.materiaSecaConcentrado.borregas2);

  // Totais
  ConcentradoSeca.total.push(
    ConcentradoSeca.femeas[anoAtual] + 
    ConcentradoSeca.machos[anoAtual] + 
    ConcentradoSeca.borregos[anoAtual] + 
    ConcentradoSeca.borregas1[anoAtual] + 
    ConcentradoSeca.borregas2[anoAtual]
  );
  
  ConcentradoSeca.total_reb.push(
    ConcentradoSeca.femeas_reb[anoAtual] + 
    ConcentradoSeca.machos_reb[anoAtual] + 
    ConcentradoSeca.borregos_reb[anoAtual] + 
    ConcentradoSeca.borregas1_reb[anoAtual] + 
    ConcentradoSeca.borregas2_reb[anoAtual]
  );
  
  ConcentradoSeca.total_per.push(
    ConcentradoSeca.femeas_per[anoAtual] + 
    ConcentradoSeca.machos_per[anoAtual] + 
    ConcentradoSeca.borregos_per[anoAtual] + 
    ConcentradoSeca.borregas1_per[anoAtual] + 
    ConcentradoSeca.borregas2_per[anoAtual]
  );
}

// Função principal com tipagem
export function calcularInformacoes(): void {
  calcularConsumoTotal();
  calcularVolumoso();
  calcularMateriaSecaVolumoso();
  calcularConcentrado();
  calcularMateriaSecaConcentrado();
  
  // Nota: Para React Native, você precisará substituir as manipulações de DOM
  // por atualizações de estado ou chamadas a componentes específicos
}

// Exportações para uso em outros módulos
export {
  Concentrado,
  ConcentradoSeca, consumo,
  Volumoso,
  VolumosoSeca
};

