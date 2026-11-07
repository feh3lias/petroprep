/* PETROPREP: atualize este arquivo para adicionar matérias/questões. */
window.PETRO_DATA = {
  "metadata": {
    "title": "PetroPrep",
    "version": "1.0.0",
    "updated": "2026-11-07",
    "exam": "Petrobras • Engenharia de Petróleo",
    "note": "Questões autorais inspiradas no formato Cebraspe; não reproduzem questões oficiais."
  },
  "links": {
    "edital": "https://www.petrobras.com.br/documents/d/f3a44542-113e-11ee-be56-0242ac120002/editalpetroleobrasileiro",
    "prova": "https://www.qconcursos.com/questoes-de-concursos/provas/cespe-cebraspe-2022-petrobras-engenharia-de-petroleo",
    "univesp": "https://apps.univesp.br/integra/",
    "khan": "https://pt.khanacademy.org/",
    "openstax": "https://openstax.org/subjects/science",
    "mit": "https://ocw.mit.edu/",
    "bpg": "https://wiki.aapg.org/Petroleum_systems",
    "up": "https://publicacoesup.petrobras.com.br/peld/catalog/",
    "pressao": "https://publicacoesup.petrobras.com.br/peld/catalog/book/52",
    "perfuracao": "https://publicacoesup.petrobras.com.br/peld/catalog/book/22",
    "british": "https://learnenglish.britishcouncil.org/free-resources/reading/b2",
    "portugues": "https://www.normaculta.com.br/",
    "stat": "https://pt.khanacademy.org/math/statistics-probability",
    "petrobras": "https://petrobras.com.br/quem-somos/concursos",
    "ingles": "https://learnenglish.britishcouncil.org/"
  },
  "topics": [
    {
      "id": "algebra",
      "block": "I",
      "title": "Álgebra Linear",
      "summary": "Estude operações matriciais, determinante, sistemas lineares, posto, autovalores e autovetores. Um sistema Ax=b tem solução única se A for quadrada e det(A)≠0.",
      "formula": "det(A) ≠ 0  ⇒  A inversível  ⇒  solução única para Ax=b",
      "example": "Ex.: A=[[2,0],[0,3]] ⇒ det(A)=6; autovalores 2 e 3.",
      "links": [
        "univesp",
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "calculo",
      "block": "I",
      "title": "Cálculo Diferencial e Integral",
      "summary": "Revise derivadas, integrais, máximos/mínimos, regra da cadeia e teorema fundamental do cálculo. Observe unidades e hipóteses de continuidade.",
      "formula": "d(xⁿ)/dx = n·xⁿ⁻¹  |  ∫xⁿ dx = xⁿ⁺¹/(n+1)+C",
      "example": "Ex.: s(t)=3t² → v(t)=6t; entre 0 e 2 s, Δs=12 m.",
      "links": [
        "univesp",
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "fisica",
      "block": "I",
      "title": "Física: Movimento e Trabalho",
      "summary": "Domine as leis de Newton, impulso, quantidade de movimento e trabalho/energia. Faça diagramas de corpo livre antes dos cálculos.",
      "formula": "ΣF = m·a  |  J = Δp  |  W_res = ΔK",
      "example": "Ex.: uma força resultante de 20 N em 4 kg produz a=5 m/s².",
      "links": [
        "openstax",
        "mit"
      ],
      "level": "Intermediário"
    },
    {
      "id": "fluidos",
      "block": "I",
      "title": "Mecânica dos Fluidos",
      "summary": "Priorize pressão hidrostática, empuxo, continuidade, quantidade de movimento e Bernoulli com suas hipóteses. Diferencie vazão volumétrica de mássica.",
      "formula": "p=p₀+ρgh  |  ṁ=ρAV  |  p+½ρv²+ρgz=const. (hipóteses)",
      "example": "Ex.: água incompressível em tubo com A₂=A₁/2 → v₂=2v₁.",
      "links": [
        "openstax",
        "univesp"
      ],
      "level": "Intermediário"
    },
    {
      "id": "resistencia",
      "block": "I",
      "title": "Resistência dos Materiais",
      "summary": "Tensões normais e cisalhantes, deformações, lei de Hooke, esforços cortantes e momentos fletores.",
      "formula": "σ=N/A  |  ε=ΔL/L  |  σ=Eε (regime linear)",
      "example": "Ex.: barra com N=20 kN e A=200 mm² → σ=100 MPa.",
      "links": [
        "mit",
        "univesp"
      ],
      "level": "Intermediário"
    },
    {
      "id": "vetorial",
      "block": "II",
      "title": "Cálculo Vetorial e Matricial",
      "summary": "Produto escalar, produto vetorial, gradiente, divergente e sistemas coordenados. Identifique grandezas escalares e vetoriais.",
      "formula": "a·b=|a||b|cosθ  |  ∇·v=∂vₓ/∂x+∂vᵧ/∂y+∂v_z/∂z",
      "example": "Ex.: vetores ortogonais têm produto escalar zero.",
      "links": [
        "univesp",
        "mit"
      ],
      "level": "Intermediário"
    },
    {
      "id": "combinatoria",
      "block": "II",
      "title": "Análise Combinatória",
      "summary": "Princípio multiplicativo, arranjos, permutações, combinações. Em combinações, a ordem não importa.",
      "formula": "C(n,k)=n!/[k!(n−k)!]",
      "example": "Ex.: escolher 2 pessoas dentre 5: C(5,2)=10.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "progressoes",
      "block": "II",
      "title": "Progressões",
      "summary": "Progressões aritméticas e geométricas; termos gerais e somas. Observe a razão e se a progressão é finita.",
      "formula": "PA: aₙ=a₁+(n−1)r  |  PG: aₙ=a₁qⁿ⁻¹",
      "example": "Ex.: PA (2,5,8,...): a₆=17.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "geomplana",
      "block": "II",
      "title": "Geometria Plana",
      "summary": "Áreas, ângulos, semelhança de triângulos e teorema de Pitágoras. Revise conversão entre unidades de área.",
      "formula": "A_círculo=πr²  |  a²+b²=c² (triângulo retângulo)",
      "example": "Ex.: círculo de raio 2 m: A=4π m².",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "geomesp",
      "block": "II",
      "title": "Geometria Espacial",
      "summary": "Volumes e áreas de sólidos: cilindros, cones, prismas e esferas; interpretação espacial e unidades cúbicas.",
      "formula": "V_cilindro=πr²h  |  V_esfera=4πr³/3",
      "example": "Ex.: cilindro com r=1 m e h=3 m → V=3π m³.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "geomanal",
      "block": "II",
      "title": "Geometria Analítica",
      "summary": "Retas, planos, distância entre pontos, vetores e cônicas.",
      "formula": "d(P,Q)=√[(x₂−x₁)²+(y₂−y₁)²]",
      "example": "Ex.: pontos (0,0) e (3,4) estão a 5 unidades.",
      "links": [
        "khan",
        "univesp"
      ],
      "level": "Intermediário"
    },
    {
      "id": "estatica",
      "block": "II",
      "title": "Estática de Corpos Rígidos",
      "summary": "Equilíbrio de forças e momentos, vínculos, apoios e diagramas de corpo livre.",
      "formula": "ΣF=0  |  ΣM=0",
      "example": "Ex.: viga biapoiada com carga central P apresenta reações P/2 em cada apoio (caso simétrico).",
      "links": [
        "openstax",
        "mit"
      ],
      "level": "Intermediário"
    },
    {
      "id": "acustica",
      "block": "II",
      "title": "Acústica",
      "summary": "Ondas, frequência, comprimento de onda, velocidade de propagação e nível sonoro.",
      "formula": "v=fλ  |  Lp=20 log₁₀(p/p_ref)",
      "example": "Ex.: som de 340 m/s com f=170 Hz → λ=2 m.",
      "links": [
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "otica",
      "block": "II",
      "title": "Óptica",
      "summary": "Reflexão, refração e lei de Snell; lentes e formação de imagens.",
      "formula": "n₁ senθ₁=n₂ senθ₂",
      "example": "Ex.: em uma interface sem absorção, a frequência da luz se mantém.",
      "links": [
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "eletricidade",
      "block": "II",
      "title": "Eletricidade e Eletromagnetismo",
      "summary": "Lei de Ohm, resistores, potência, circuitos e indução eletromagnética.",
      "formula": "V=RI  |  P=VI=I²R",
      "example": "Ex.: resistor de 5 Ω com 2 A dissipa 20 W.",
      "links": [
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "inercia",
      "block": "II",
      "title": "Momento de Inércia de Áreas",
      "summary": "Momento de inércia geométrico, teorema dos eixos paralelos e aplicação à flexão. Não confunda com momento de inércia de massa.",
      "formula": "Iₓ,retângulo = b h³/12 (eixo centroidal)",
      "example": "Ex.: dobrar h quadruplica? Não: aumenta I por fator 8 se b for fixo.",
      "links": [
        "mit",
        "univesp"
      ],
      "level": "Intermediário"
    },
    {
      "id": "elasticidade",
      "block": "II",
      "title": "Teoria da Elasticidade",
      "summary": "Relações constitutivas, módulo de Young, Poisson e elasticidade linear isotrópica.",
      "formula": "ε_transversal=−ν·ε_longitudinal (uniaxial, isotrópico)",
      "example": "Ex.: se ε_long=0,001 e ν=0,3 → ε_trans=−0,0003.",
      "links": [
        "mit"
      ],
      "level": "Intermediário"
    },
    {
      "id": "termo",
      "block": "II",
      "title": "Termodinâmica",
      "summary": "Propriedades de substâncias puras, calor, trabalho, 1ª e 2ª leis, entropia e processos. Diferencie sistema fechado de volume de controle.",
      "formula": "ΔU=Q−W (sistema fechado, convenção W realizado pelo sistema)",
      "example": "Ex.: sistema recebe 200 J de calor e realiza 50 J de trabalho: ΔU=150 J.",
      "links": [
        "openstax",
        "univesp"
      ],
      "level": "Intermediário"
    },
    {
      "id": "gases",
      "block": "II",
      "title": "Gases, Misturas e Soluções Ideais",
      "summary": "Equação de estado ideal, pressão parcial, misturas e fração molar. Atenção à temperatura em kelvin.",
      "formula": "pV=nRT  |  pᵢ=yᵢ p_total",
      "example": "Ex.: mistura com y_O₂=0,2 a 100 kPa → p_O₂=20 kPa.",
      "links": [
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "calor",
      "block": "II",
      "title": "Transferência de Calor",
      "summary": "Condução permanente, convecção e radiação: leis de Fourier, Newton e Stefan–Boltzmann. Verifique sinais e unidades.",
      "formula": "q̇_cond=−kA·dT/dx  |  q̇_conv=hA(Ts−T∞)",
      "example": "Ex.: parede plana: k=2 W/(m·K), A=1 m², L=0,1 m, ΔT=10 K → |q̇|=200 W.",
      "links": [
        "univesp",
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "massa",
      "block": "II",
      "title": "Transferência de Massa",
      "summary": "Difusão molecular, lei de Fick, gradientes de concentração e analogia com transporte de calor.",
      "formula": "J_A=−D_AB dC_A/dx (1D, difusão)",
      "example": "Ex.: moléculas difundem, em média, de maior para menor concentração em condições usuais.",
      "links": [
        "mit",
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "logica",
      "block": "III",
      "title": "Lógica",
      "summary": "Proposições, implicação, negação, equivalências e tabelas-verdade.",
      "formula": "p⇒q é falsa somente quando p é verdadeira e q é falsa.",
      "example": "Ex.: negar “todos passaram” equivale a “pelo menos um não passou”.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "conjuntos",
      "block": "III",
      "title": "Conjuntos",
      "summary": "União, interseção, complemento, cardinalidade e diagramas de Venn.",
      "formula": "|A∪B|=|A|+|B|−|A∩B|",
      "example": "Ex.: 12 estudam A, 8 estudam B, 3 ambos → 17 estudam ao menos uma.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "relacoes",
      "block": "III",
      "title": "Relações",
      "summary": "Pares ordenados, domínio, imagem, relações reflexivas, simétricas e transitivas.",
      "formula": "R⊆A×B; função é relação com uma imagem para cada elemento do domínio.",
      "example": "Ex.: “é igual a” é reflexiva, simétrica e transitiva.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "funcoes",
      "block": "III",
      "title": "Funções",
      "summary": "Domínio, imagem, composição, inversa, monotonicidade e interpretação de gráficos.",
      "formula": "(f∘g)(x)=f(g(x))",
      "example": "Ex.: f(x)=2x+1, g(x)=x² → (f∘g)(3)=19.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "logaritmo",
      "block": "III",
      "title": "Logaritmos",
      "summary": "Propriedades, mudanças de base e funções exponenciais; restrição x>0 para log em base válida.",
      "formula": "log_b(xy)=log_b x+log_b y",
      "example": "Ex.: log₁₀(1000)=3.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "trigo",
      "block": "III",
      "title": "Trigonometria",
      "summary": "Seno, cosseno, tangente, identidades trigonométricas e periodicidade.",
      "formula": "sen²θ+cos²θ=1",
      "example": "Ex.: sen 30°=0,5 e cos 60°=0,5.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "prob",
      "block": "III",
      "title": "Probabilidade",
      "summary": "Probabilidade condicional, independência, Bayes e distribuições básicas.",
      "formula": "P(A|B)=P(A∩B)/P(B)",
      "example": "Ex.: lançamentos independentes de moeda: P(duas caras)=1/4.",
      "links": [
        "stat"
      ],
      "level": "Intermediário"
    },
    {
      "id": "estat",
      "block": "III",
      "title": "Estatística Descritiva",
      "summary": "Média, mediana, variância, desvio-padrão, quantis e interpretação de gráficos.",
      "formula": "x̄=(Σxᵢ)/n  |  s²=Σ(xᵢ−x̄)²/(n−1)",
      "example": "Ex.: dados 1, 2, 9 → mediana=2 e média=4.",
      "links": [
        "stat"
      ],
      "level": "Intermediário"
    },
    {
      "id": "financeira",
      "block": "III",
      "title": "Matemática Financeira",
      "summary": "Juros simples e compostos, valor presente e taxa efetiva.",
      "formula": "VF=VP(1+i)ⁿ (juros compostos)",
      "example": "Ex.: R$ 1.000 a 10% ao período por 2 períodos → R$ 1.210.",
      "links": [
        "khan"
      ],
      "level": "Intermediário"
    },
    {
      "id": "geo",
      "block": "III",
      "title": "Geologia e Geofísica do Petróleo",
      "summary": "Sistemas petrolíferos: rocha geradora, migração, reservatório, selo e armadilhas. A sísmica usa ondas para inferir estruturas em subsuperfície.",
      "formula": "Tempo de trânsito sísmico (aproximação vertical): t≈2z/v",
      "example": "Ex.: refletor a z=1.500 m com v=3.000 m/s → tempo duplo ≈1 s.",
      "links": [
        "bpg",
        "up"
      ],
      "level": "Intermediário"
    },
    {
      "id": "perfuracao",
      "block": "III",
      "title": "Perfuração e Avaliação de Formações",
      "summary": "Sondas, coluna de perfuração, lama, pressão hidrostática e circulação; perfilagem e testes ajudam a caracterizar o poço e a formação.",
      "formula": "p_hid≈ρ g h  |  pressão no fundo depende da densidade do fluido e da profundidade.",
      "example": "Ex.: lama de 1.200 kg/m³ em coluna de 1.000 m → pressão hidrostática ≈11,8 MPa.",
      "links": [
        "perfuracao",
        "up"
      ],
      "level": "Intermediário"
    },
    {
      "id": "reservatorios",
      "block": "III",
      "title": "Completação e Reservatórios",
      "summary": "Completação prepara o poço para produzir/injetar. Estude porosidade, permeabilidade, saturações, pressão e balanço de fluidos.",
      "formula": "φ=V_poroso/V_total  |  Darcy (1D): Q=(kA/μ)(Δp/L)",
      "example": "Ex.: amostra de 100 cm³ com 20 cm³ de poros → φ=20%.",
      "links": [
        "pressao",
        "up"
      ],
      "level": "Intermediário"
    },
    {
      "id": "elevacao",
      "block": "III",
      "title": "Elevação e Escoamento de Petróleo",
      "summary": "Elevação natural/artificial, perdas de pressão, escoamento multifásico e curvas de produtividade.",
      "formula": "Δp_fricção>0 na direção do fluxo passivo; produção exige energia disponível.",
      "example": "Ex.: gas lift reduz a densidade média da coluna produzida e pode facilitar a elevação.",
      "links": [
        "up",
        "pressao"
      ],
      "level": "Intermediário"
    },
    {
      "id": "submarinos",
      "block": "III",
      "title": "Sistemas Submarinos e Processamento Primário",
      "summary": "Árvores de natal molhadas, manifolds, risers e linhas de produção. Separação primária de óleo, água e gás antes do processamento subsequente.",
      "formula": "Separação trifásica: correntes de óleo, gás e água.",
      "example": "Ex.: riser conecta instalações no fundo do mar à unidade de produção de superfície.",
      "links": [
        "up"
      ],
      "level": "Intermediário"
    },
    {
      "id": "quimica",
      "block": "III",
      "title": "Química Básica",
      "summary": "Estequiometria, mol, soluções, equilíbrio, ácido-base e funções orgânicas. Balanceie reações antes dos cálculos.",
      "formula": "n=m/M  |  C=n/V  |  PV=nRT (gás ideal)",
      "example": "Ex.: 18 g de H₂O correspondem aproximadamente a 1 mol.",
      "links": [
        "khan",
        "openstax"
      ],
      "level": "Intermediário"
    },
    {
      "id": "portugues",
      "block": "BÁSICOS",
      "title": "Língua Portuguesa",
      "summary": "Interpretação e inferência, coesão, regência, concordância, pontuação e reescrita sem mudança de sentido.",
      "formula": "Estratégia: separe informação literal de inferência; verifique se a reescrita altera sentido ou correção.",
      "example": "Ex.: “Havia problemas” — verbo haver impessoal permanece no singular.",
      "links": [
        "portugues"
      ],
      "level": "Intermediário"
    },
    {
      "id": "ingles",
      "block": "BÁSICOS",
      "title": "Língua Inglesa",
      "summary": "Reading comprehension, vocabulário em contexto, conectores, modal verbs, tempos verbais e referência pronominal.",
      "formula": "Although=embora  |  however=entretanto  |  therefore=portanto",
      "example": "Ex.: “Although production rose, costs increased” indica contraste entre as orações.",
      "links": [
        "british",
        "ingles"
      ],
      "level": "Intermediário"
    }
  ],
  "questions": [
    {
      "id": "Q001",
      "topic": "algebra",
      "text": "Toda matriz quadrada com determinante nulo é inversível.",
      "answer": false,
      "explanation": "Determinante nulo implica matriz singular, sem inversa.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q002",
      "topic": "algebra",
      "text": "Se A é uma matriz diagonal 2×2 com entradas 3 e 5, então det(A)=15.",
      "answer": true,
      "explanation": "Determinante de matriz diagonal é produto dos elementos diagonais.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q003",
      "topic": "calculo",
      "text": "A derivada de f(x)=x³−4x é 3x²−4.",
      "answer": true,
      "explanation": "Aplicando linearidade e regra da potência.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q004",
      "topic": "calculo",
      "text": "Se f′(x)=0 em um ponto, então esse ponto é obrigatoriamente máximo local.",
      "answer": false,
      "explanation": "Pode ser mínimo, inflexão estacionária ou outra situação.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q005",
      "topic": "fisica",
      "text": "Para um corpo de massa constante, a força resultante é igual à taxa de variação de sua quantidade de movimento.",
      "answer": true,
      "explanation": "Segunda lei de Newton: ΣF=dp/dt.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q006",
      "topic": "fisica",
      "text": "Se o trabalho da força resultante sobre um corpo é nulo, sua energia cinética permanece constante.",
      "answer": true,
      "explanation": "Teorema trabalho-energia: W_res=ΔK.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q007",
      "topic": "fluidos",
      "text": "Em escoamento permanente incompressível por um único tubo sem ramificações, reduzir a área transversal à metade dobra a velocidade média.",
      "answer": true,
      "explanation": "Da continuidade, A₁V₁=A₂V₂.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q008",
      "topic": "fluidos",
      "text": "A pressão manométrica em um líquido em repouso depende exclusivamente da área do recipiente.",
      "answer": false,
      "explanation": "p_man=ρgh, independentemente da forma ou área do recipiente.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q009",
      "topic": "fluidos",
      "text": "A equação de Bernoulli na forma p+ρv²/2+ρgz=constante pode ser aplicada sem correções a qualquer escoamento viscoso com perdas significativas.",
      "answer": false,
      "explanation": "A forma simples exige condições como perdas desprezíveis ao longo da linha de corrente.",
      "difficulty": 3,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q010",
      "topic": "resistencia",
      "text": "Uma barra de seção constante sujeita a tração axial N apresenta tensão média normal N/A.",
      "answer": true,
      "explanation": "Definição de tensão normal média.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q011",
      "topic": "resistencia",
      "text": "No regime elástico linear uniaxial, duplicar a tensão duplica a deformação, mantendo E constante.",
      "answer": true,
      "explanation": "σ=Eε; razão linear.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q012",
      "topic": "vetorial",
      "text": "O produto escalar de dois vetores perpendiculares é nulo.",
      "answer": true,
      "explanation": "a·b=|a||b|cos(90°)=0.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q013",
      "topic": "vetorial",
      "text": "A divergência de um campo vetorial é sempre um campo vetorial.",
      "answer": false,
      "explanation": "Divergência é um campo escalar.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q014",
      "topic": "combinatoria",
      "text": "O número de maneiras de selecionar 2 pessoas entre 5, sem importar a ordem, é 20.",
      "answer": false,
      "explanation": "Combinações: C(5,2)=10.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q015",
      "topic": "progressoes",
      "text": "Numa progressão aritmética de razão 3, a diferença entre termos consecutivos é sempre 3.",
      "answer": true,
      "explanation": "É a própria definição de razão da PA.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q016",
      "topic": "geomplana",
      "text": "A área de um círculo dobra quando seu raio dobra.",
      "answer": false,
      "explanation": "A=πr²: duplicar r quadruplica a área.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q017",
      "topic": "geomesp",
      "text": "O volume de um cilindro reto de base circular é πr²h.",
      "answer": true,
      "explanation": "Área da base vezes altura.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q018",
      "topic": "geomanal",
      "text": "A distância entre os pontos (1,1) e (4,5) é 5.",
      "answer": true,
      "explanation": "√(3²+4²)=5.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q019",
      "topic": "estatica",
      "text": "Para equilíbrio estático de um corpo rígido plano, as condições ΣFₓ=0, ΣFᵧ=0 e ΣM=0 são necessárias.",
      "answer": true,
      "explanation": "São as três equações escalares de equilíbrio plano.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q020",
      "topic": "estatica",
      "text": "Um corpo pode estar em equilíbrio estático mesmo com momento resultante diferente de zero.",
      "answer": false,
      "explanation": "Equilíbrio exige momento resultante nulo.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q021",
      "topic": "acustica",
      "text": "Uma onda de frequência 200 Hz que se propaga a 400 m/s possui comprimento de onda de 2 m.",
      "answer": true,
      "explanation": "λ=v/f=2 m.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q022",
      "topic": "otica",
      "text": "Na refração, a frequência da luz deve necessariamente mudar ao passar de um meio para outro.",
      "answer": false,
      "explanation": "A frequência se conserva; velocidade e comprimento de onda podem variar.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q023",
      "topic": "eletricidade",
      "text": "Um resistor de 10 Ω sob corrente de 2 A dissipa 40 W.",
      "answer": true,
      "explanation": "P=I²R=4×10=40 W.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q024",
      "topic": "inercia",
      "text": "Para retângulo em torno do eixo centroidal paralelo à base, o momento de inércia de área é proporcional ao cubo da altura.",
      "answer": true,
      "explanation": "I=bh³/12.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q025",
      "topic": "elasticidade",
      "text": "Para material isotrópico sob tração uniaxial, deformação transversal normalmente tem sinal oposto à longitudinal quando ν>0.",
      "answer": true,
      "explanation": "ε_t=−νε_l.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q026",
      "topic": "termo",
      "text": "Em um ciclo termodinâmico completo, a variação da energia interna do sistema é nula.",
      "answer": true,
      "explanation": "Energia interna é função de estado; volta ao estado inicial.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q027",
      "topic": "termo",
      "text": "Em um ciclo termodinâmico completo, a geração de entropia é necessariamente nula.",
      "answer": false,
      "explanation": "Entropia do sistema retorna ao início, mas a geração pode ser positiva em ciclo irreversível.",
      "difficulty": 3,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q028",
      "topic": "termo",
      "text": "Um sistema fechado recebe 150 J de calor e realiza 50 J de trabalho. Sua variação de energia interna é 100 J.",
      "answer": true,
      "explanation": "ΔU=Q−W=150−50=100 J.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q029",
      "topic": "gases",
      "text": "Para gás ideal a volume e quantidade de matéria constantes, a pressão absoluta é proporcional à temperatura absoluta.",
      "answer": true,
      "explanation": "Da equação de estado ideal pV=nRT; para V e n constantes, p/T permanece constante.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q030",
      "topic": "gases",
      "text": "Em mistura ideal gasosa, a soma das pressões parciais é igual à pressão total.",
      "answer": true,
      "explanation": "Lei de Dalton.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q031",
      "topic": "calor",
      "text": "Numa parede plana com k e ΔT constantes, dobrar a espessura reduz pela metade a taxa de condução estacionária.",
      "answer": true,
      "explanation": "|q̇|=kAΔT/L.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q032",
      "topic": "calor",
      "text": "O fluxo radiativo líquido de um corpo negro depende linearmente da temperatura absoluta.",
      "answer": false,
      "explanation": "Depende de T⁴, para troca com ambiente idealizado.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q033",
      "topic": "massa",
      "text": "A lei de Fick relaciona fluxo difusivo a gradiente de concentração.",
      "answer": true,
      "explanation": "J_A=−D_AB ∇C_A nas hipóteses apropriadas.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q034",
      "topic": "logica",
      "text": "A proposição “se p então q” é falsa quando p é verdadeira e q é falsa.",
      "answer": true,
      "explanation": "É a única linha falsa da implicação material.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q035",
      "topic": "conjuntos",
      "text": "Se |A|=10, |B|=8 e |A∩B|=3, então |A∪B|=15.",
      "answer": true,
      "explanation": "Inclusão-exclusão: 10+8−3=15.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q036",
      "topic": "relacoes",
      "text": "Toda relação reflexiva é necessariamente simétrica.",
      "answer": false,
      "explanation": "Uma propriedade não implica a outra.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q037",
      "topic": "funcoes",
      "text": "Se f(x)=2x+1, então f(3)=7.",
      "answer": true,
      "explanation": "f(3)=2×3+1=7.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q038",
      "topic": "logaritmo",
      "text": "log₁₀(100)+log₁₀(10)=3.",
      "answer": true,
      "explanation": "log₁₀(100)=2 e log₁₀(10)=1; portanto a soma é 3.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q039",
      "topic": "trigo",
      "text": "Para qualquer ângulo real θ, sen²θ+cos²θ=1.",
      "answer": true,
      "explanation": "Identidade trigonométrica fundamental.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q040",
      "topic": "prob",
      "text": "Se A e B são eventos independentes, então P(A∩B)=P(A)P(B).",
      "answer": true,
      "explanation": "Definição de independência.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q041",
      "topic": "prob",
      "text": "Se P(A)=0,6 e P(B)=0,5, então P(A∩B)=0,3 necessariamente.",
      "answer": false,
      "explanation": "Só seria obrigatório com independência.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q042",
      "topic": "estat",
      "text": "A mediana é sempre igual à média aritmética.",
      "answer": false,
      "explanation": "Uma distribuição assimétrica pode ter média e mediana diferentes.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q043",
      "topic": "estat",
      "text": "No conjunto 2, 3, 100, a mediana é 3.",
      "answer": true,
      "explanation": "Ordenando os três valores, o central é 3.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q044",
      "topic": "financeira",
      "text": "Um capital de R$ 1.000 aplicado a juros compostos de 10% ao período resulta em R$ 1.210 após dois períodos.",
      "answer": true,
      "explanation": "1000×1,1²=1210.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q045",
      "topic": "geo",
      "text": "Um sistema petrolífero convencional pode exigir rocha geradora, migração, reservatório, selo e armadilha.",
      "answer": true,
      "explanation": "São elementos/processos clássicos do sistema petrolífero.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q046",
      "topic": "geo",
      "text": "A sísmica de reflexão fornece diretamente uma fotografia literal e sem ambiguidades das rochas no subsolo.",
      "answer": false,
      "explanation": "A sísmica mede resposta de ondas; requer aquisição, processamento e interpretação.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q047",
      "topic": "geo",
      "text": "Para trajetória vertical com velocidade sísmica constante de 2.000 m/s e refletor a 1.000 m, o tempo de trânsito de ida e volta é 1 s.",
      "answer": true,
      "explanation": "t=2z/v=2×1000/2000=1 s.",
      "difficulty": 3,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q048",
      "topic": "perfuracao",
      "text": "A pressão hidrostática exercida por uma coluna de lama de perfuração cresce com a densidade e a altura vertical da coluna.",
      "answer": true,
      "explanation": "p=ρgh, desprezadas correções.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q049",
      "topic": "perfuracao",
      "text": "A perfilagem de poços pode auxiliar a avaliação de propriedades das formações atravessadas.",
      "answer": true,
      "explanation": "Perfis registram respostas físicas que ajudam a interpretar as formações.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q050",
      "topic": "perfuracao",
      "text": "Perfuração direcional é necessariamente realizada com poço horizontal.",
      "answer": false,
      "explanation": "Inclui poços desviados, horizontais e outros tipos de trajetórias.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q051",
      "topic": "reservatorios",
      "text": "Porosidade é a razão entre volume de poros e volume total da rocha.",
      "answer": true,
      "explanation": "φ=V_poros/V_total.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q052",
      "topic": "reservatorios",
      "text": "Permeabilidade e porosidade são sinônimos e sempre têm o mesmo valor numérico.",
      "answer": false,
      "explanation": "Porosidade mede fração de vazios; permeabilidade mede facilidade de fluxo.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q053",
      "topic": "reservatorios",
      "text": "Pela lei de Darcy idealizada, mantendo-se os demais fatores, dobrar a viscosidade reduz à metade a vazão.",
      "answer": true,
      "explanation": "Q∝1/μ sob hipóteses de Darcy.",
      "difficulty": 3,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q054",
      "topic": "elevacao",
      "text": "A injeção de gás em coluna de produção pode reduzir sua densidade média e auxiliar a elevação.",
      "answer": true,
      "explanation": "Princípio do gas lift.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q055",
      "topic": "elevacao",
      "text": "Em linhas de produção, perdas por atrito são sempre inexistentes em escoamento real.",
      "answer": false,
      "explanation": "Escoamentos reais têm dissipação viscosa, exceto idealizações.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q056",
      "topic": "submarinos",
      "text": "Em operações offshore, um riser pode conduzir fluidos entre o fundo do mar e uma instalação de superfície.",
      "answer": true,
      "explanation": "Função típica de risers de produção.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q057",
      "topic": "submarinos",
      "text": "O processamento primário de petróleo pode separar fases de óleo, gás e água.",
      "answer": true,
      "explanation": "A separação trifásica é etapa típica da produção.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q058",
      "topic": "quimica",
      "text": "18 g de água, com massa molar aproximadamente igual a 18 g/mol, correspondem a aproximadamente 1 mol.",
      "answer": true,
      "explanation": "n=m/M=18/18=1.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q059",
      "topic": "quimica",
      "text": "Em reação química balanceada, a quantidade total de átomos de cada elemento se conserva.",
      "answer": true,
      "explanation": "Conservação de elementos na reação química.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q060",
      "topic": "portugues",
      "text": "Na oração “Havia muitos problemas no projeto”, a flexão do verbo haver no singular está correta.",
      "answer": true,
      "explanation": "Haver no sentido de existir é impessoal e fica no singular.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q061",
      "topic": "portugues",
      "text": "As expressões “portanto” e “entretanto” estabelecem, respectivamente, relações de conclusão e oposição.",
      "answer": true,
      "explanation": "Conectivos introduzem conclusão e adversidade.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q062",
      "topic": "ingles",
      "text": "The connector “although” generally introduces a contrast or concession.",
      "answer": true,
      "explanation": "Although significa embora/ainda que.",
      "difficulty": 1,
      "origin": "Autoral • estilo Cebraspe"
    },
    {
      "id": "Q063",
      "topic": "ingles",
      "text": "In “Production has increased since 2020”, the present perfect indicates a connection between a past starting point and the present.",
      "answer": true,
      "explanation": "O present perfect pode expressar processo iniciado no passado com relevância atual.",
      "difficulty": 2,
      "origin": "Autoral • estilo Cebraspe"
    }
  ],
  "weeks": [
    {
      "number": 1,
      "range": "16–22 nov",
      "title": "Diagnóstico + Álgebra Linear e Cálculo",
      "topics": [
        "algebra",
        "calculo"
      ]
    },
    {
      "number": 2,
      "range": "23–29 nov",
      "title": "Mecânica dos Fluidos",
      "topics": [
        "fluidos"
      ]
    },
    {
      "number": 3,
      "range": "30 nov–6 dez",
      "title": "Resistência dos Materiais e Mecânica",
      "topics": [
        "resistencia",
        "fisica",
        "estatica"
      ]
    },
    {
      "number": 4,
      "range": "7–13 dez",
      "title": "Termodinâmica e Transferência de Calor",
      "topics": [
        "termo",
        "calor"
      ]
    },
    {
      "number": 5,
      "range": "14–20 dez",
      "title": "Matemática complementar",
      "topics": [
        "combinatoria",
        "geomplana",
        "trigo",
        "financeira"
      ]
    },
    {
      "number": 6,
      "range": "21–27 dez",
      "title": "Física e Química",
      "topics": [
        "eletricidade",
        "otica",
        "acustica",
        "quimica"
      ]
    },
    {
      "number": 7,
      "range": "28 dez–3 jan",
      "title": "Estatística + revisão",
      "topics": [
        "prob",
        "estat",
        "portugues",
        "ingles"
      ]
    },
    {
      "number": 8,
      "range": "4–10 jan",
      "title": "Geologia e Geofísica",
      "topics": [
        "geo"
      ]
    },
    {
      "number": 9,
      "range": "11–17 jan",
      "title": "Perfuração de Poços",
      "topics": [
        "perfuracao"
      ]
    },
    {
      "number": 10,
      "range": "18–24 jan",
      "title": "Avaliação, completação e reservatórios",
      "topics": [
        "reservatorios"
      ]
    },
    {
      "number": 11,
      "range": "25–31 jan",
      "title": "Elevação, escoamento e sistemas submarinos",
      "topics": [
        "elevacao",
        "submarinos"
      ]
    },
    {
      "number": 12,
      "range": "1–7 fev",
      "title": "Revisão e simulado geral",
      "topics": [
        "portugues",
        "ingles",
        "fluidos",
        "termo",
        "geo"
      ]
    }
  ],
  "resources": [
    {
      "title": "Edital oficial • Engenharia de Petróleo",
      "description": "Petrobras • conteúdo programático, p. 41",
      "link": "edital"
    },
    {
      "title": "Prova real Petrobras 2022",
      "description": "Questões reais; resolva no site externo",
      "link": "prova"
    },
    {
      "title": "Publicações da Universidade Petrobras",
      "description": "Biblioteca de referências técnicas; acesso varia por obra",
      "link": "up"
    },
    {
      "title": "Fundamentos da Análise de Testes de Pressão",
      "description": "Livro técnico sobre reservatórios e testes de pressão",
      "link": "pressao"
    },
    {
      "title": "Perfuração direcional",
      "description": "Referência técnica sobre poços direcionais",
      "link": "perfuracao"
    },
    {
      "title": "Petroleum Systems • AAPG Wiki",
      "description": "Referência aberta de sistemas petrolíferos",
      "link": "bpg"
    },
    {
      "title": "UNIVESP",
      "description": "Aulas de cálculo, física e engenharia",
      "link": "univesp"
    },
    {
      "title": "Khan Academy",
      "description": "Matemática, química e estatística",
      "link": "khan"
    },
    {
      "title": "OpenStax",
      "description": "Livros abertos de física, química e engenharia básica",
      "link": "openstax"
    },
    {
      "title": "MIT OpenCourseWare",
      "description": "Cursos de engenharia e materiais",
      "link": "mit"
    },
    {
      "title": "British Council",
      "description": "Inglês e interpretação",
      "link": "british"
    }
  ]
};
