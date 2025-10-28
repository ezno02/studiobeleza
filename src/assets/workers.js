import julioImg from './images/workers/imagemJulio.png'
import mathuesImg from './images/workers/imagemMatheus.png'
import kellyImg from './images/workers/imagemKelly.png'

import servicoUmImg from './images/services/1-servico.png'
import servicoDoisImg from './images/services/2-servico.png'
import servicoTresImg from './images/services/3-servico.png'
import servicoQuatroImg from './images/services/4-servico.png'
import servicoCincoImg from './images/services/5-servico.png'
import servicoSeisImg from './images/services/6-servico.png'

const julio = {
    nome: "Julio",
    sobreNome: "Beles",
    descricao: "Com mais de cinco anos de dedicação ao Studio Beleza, Julio é o mestre das tesouras que combina técnica apurada com um atendimento caloroso. Especialista em cortes clássicos e fade moderno, ele transforma cada visita em um momento de arte e precisão. Sua paixão garante a qualidade e o carinho que você já conhece.",
    descricaoRoute: "Com uma trajetória sólida de mais de cinco anos de dedicação exclusiva ao Studio Beleza, Julio é muito mais do que um barbeiro; ele é o mestre das tesouras cuja paixão transcende o simples ato de cortar cabelo. Sua longevidade na casa atesta uma maestria que ele aprimora dia após dia. Julio alcançou um nível de habilidade onde a técnica apurada e o atendimento caloroso se fundem em uma experiência inigualável. Seu olhar atento e a precisão de suas mãos o tornaram o especialista preferido tanto para quem busca a elegância atemporal dos cortes clássicos (como o pompadour, o executive contour e os slick backs), quanto para aqueles que preferem a modernidade e o hype do fade moderno em suas diversas variações (low, mid, high, skin). Para Julio, cada cliente é uma tela, e ele transforma cada visita em um momento de arte e precisão, garantindo que o resultado final não apenas atenda, mas supere as expectativas. Ele acredita que o corte perfeito começa com uma boa conversa, dedicando tempo para entender a personalidade e o estilo de vida de cada um. Sua paixão genuína pela barbearia é a força motriz que garante a qualidade excepcional e o carinho no atendimento que os clientes do Studio Beleza já conhecem e amam. Quando você se senta na cadeira do Julio, pode ter certeza de que está confiando o seu visual a um profissional que se importa profundamente com o seu bem-estar e a sua satisfação. Julio é a combinação perfeita de tradição e vanguarda.",
    imagem: julioImg,
    id: 0
}

const matheus = {
    nome: "Matheus",
    sobreNome: "Souza",
    descricao: "Com dois anos de Studio Beleza, Matheus é a energia e a inovação da nossa equipe. Focado nas últimas tendências de estilo e texturização, ele é o especialista ideal para quem busca uma transformação moderna. Seu olhar atento e criativo garante que cada cliente saia com um visual renovado e cheio de atitude.",
    descricaoRoute: "Em seus dois anos de dedicação ao Studio Beleza, Matheus rapidamente se estabeleceu como a energia e a inovação pulsante da nossa equipe. Ele representa a nova escola da barbearia, combinando entusiasmo juvenil com um conhecimento profundo das técnicas mais atuais. Matheus está constantemente focado nas últimas tendências de estilo, dedicando-se a dominar cortes e acabamentos que estão em alta nas grandes capitais e nas mídias sociais. Ele é o especialista ideal para quem busca uma transformação moderna, dominando técnicas avançadas de texturização, desconexão e estilos messy que garantem movimento e personalidade ao cabelo. Seja um mullet moderno, um corte crop com franja texturizada ou um fade com desenhos (hair design), Matheus aplica seu olhar atento e criativo para moldar um visual que não apenas segue a moda, mas se adapta perfeitamente à sua individualidade. Ele tem o dom de identificar o potencial máximo de cada cabelo e transformá-lo em uma declaração de estilo. Com Matheus, a cadeira de barbeiro se torna um laboratório de tendências. Ele garante que cada cliente saia com um visual renovado, cheio de atitude e a certeza de ter recebido um serviço que está na ponta da inovação. Se você está pronto para abandonar o básico e abraçar um estilo ousado e contemporâneo, Matheus é o barbeiro perfeito para a sua próxima grande mudança.",
    imagem: mathuesImg,
    id: 1
}

const kelly = {
    nome: "Kelly",
    sobreNome: "Pereira",
    descricao: "Com sua paixão e talento, Kelly chegou ao Studio Beleza há oito meses, trazendo uma perspectiva única. Ex-professora de design gráfico, ela une sua visão artística e criativa à maestria em colorimetria e cortes femininos. Kelly transforma cada cabelo em uma verdadeira obra de arte, garantindo que você saia com um estilo que reflete sua essência e personalidade.",
    descricaoRoute: "Desde sua chegada ao Studio Beleza, há oito meses, Kelly tem injetado uma dose vibrante de talento e uma perspectiva verdadeiramente única no nosso time. Sua história é fascinante: com uma sólida formação como ex-professora de design gráfico, ela canalizou sua paixão por cores, formas e harmonia para o mundo da beleza. Kelly não é apenas uma profissional, ela é uma artista que trabalha com cabelos. Ela une sua visão artística e criativa — treinada em composição e estética — à maestria em colorimetria e à precisão dos cortes femininos. Para ela, a cor é um elemento de design e o corte é a arquitetura que o sustenta. Seja para criar balayages sutis e luminosas, correções de cor complexas, ou para desenhar um corte long bob estruturado e cheio de movimento, Kelly se dedica a entender a cliente a fundo. Ela utiliza sua experiência em design para criar um estilo que reflete a essência e a personalidade de quem está na cadeira. Com Kelly, o processo criativo é colaborativo. Ela tem a habilidade de traduzir ideias e inspirações em resultados tangíveis, transformando cada cabelo em uma verdadeira obra de arte. Se você busca um visual com profundidade, cor e uma assinatura artística, Kelly é a profissional que transformará a sua imagem.",
    imagem: kellyImg,
    id: 2
}

const servicoUm = {
    nome: "Pezinho",
    descricao: "Utilização de uma máquina de corte para remover o volume e criar o formato desejado na parte de trás e laterais do cabelo, provavelmente iniciando ou refinando um degradê (fade). A mão do barbeiro indica a área de trabalho ou auxilia na tensão da pele para um corte mais preciso. O detalhe na nuca é frequentemente chamado de 'pezinho'.",
    imagem: servicoUmImg,
    preco: 65,
}

const servicoDois = {
    nome: "Aparagem de Barba com Tesoura",
    descricao: "O barbeiro utiliza a tesoura para remover o excesso de comprimento e dar forma à barba, geralmente como etapa inicial antes do uso da máquina ou navalha para o contorno e o detalhe fino. Essa técnica é crucial para manter a barba com um aspecto cheio, mas bem cuidado.",
    imagem: servicoDoisImg,
    preco: 55,
}

const servicoTres = {
    nome: "Corte de Cabelo com Tesoura sobre Pente",
    descricao: "Uso da tesoura em conjunto com um pente como guia para determinar o comprimento e criar a graduação (transição) do cabelo, especialmente na área lateral e topo. É uma técnica fundamental para cortes clássicos e para criar uma transição suave entre o topo e as laterais mais curtas.",
    imagem: servicoTresImg,
    preco: 65,
}

const servicoQuatro = {
    nome: "Aplicação de Creme/Espuma de Barbear com Pincel",
    descricao: "O barbeiro aplica espuma ou creme de barbear com um pincel (geralmente de cerdas naturais) na área do pescoço e bochecha. Este passo é essencial para amaciar os pelos, proteger a pele e preparar a área para o barbear com navalha ou máquina, garantindo um deslize mais suave e menos irritação.",
    imagem: servicoQuatroImg,
    preco: 55,
}

const servicoCinco = {
    nome: "Barba com Navalhete/Lâmina e Pente",
    descricao: "O barbeiro utiliza uma navalha ou navalhete para raspar a área do lábio superior (bigode) após a preparação da pele. A outra mão pode estar usando uma escova ou pente para esticar a pele, o que é crucial para criar uma superfície firme e plana, permitindo que a lâmina deslize de forma precisa e segura.",
    imagem: servicoCincoImg,
    preco: 40,
}

const servicoSeis = {
    nome: "Contorno da Barba/Pescoço com Navalha e Esticamento da Pele",
    descricao: "Uso da navalha para fazer o contorno da barba, removendo os pelos da área do pescoço e garantindo uma linha limpa e definida. A mão do barbeiro está esticando a pele (Tensão da Pele), uma técnica obrigatória para criar uma superfície uniforme para o barbear, minimizando o risco de cortes e garantindo um resultado mais rente.",
    imagem: servicoSeisImg,
    preco: 60,
}

export const workerAssets = [julio, matheus, kelly]
export const servicesAssets = [servicoUm, servicoDois, servicoTres, servicoQuatro, servicoCinco, servicoSeis]