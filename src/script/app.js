document.querySelector(".go-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behaviour: "smooth"
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const anoActual = new Date().getFullYear()
  document.getElementById("anoActual").textContent = anoActual
})

// Configuração do scroll suave com Lenis
let lenisInstance = null

// Função para inicializar Lenis
function initSmoothScroll() {
  // Verificar se Lenis está disponível
  if (typeof Lenis === "undefined") {
    console.warn(
      'Lenis não carregado. Adicione o script: <script src="https://unpkg.com/lenis@1.3.15/dist/lenis.min.js"></script>'
    )
    return
  }

  // Inicializar Lenis com configurações básicas
  lenisInstance = new Lenis({
    smoothWheel: true, // Scroll suave com mouse/rodinha
    lerp: 0.07, // Suavidade do scroll (0.05-0.1 é ideal)
    wheelMultiplier: 1, // Velocidade normal
    autoRaf: true, // Gerencia automaticamente o requestAnimationFrame
    syncTouch: false, // Comportamento nativo no mobile para melhor performance
    infinite: false // Scroll infinito desativado
  })

  // Loop opcional (se autoRaf: true não funcionar bem)
  function raf(time) {
    if (lenisInstance) {
      lenisInstance.raf(time)
    }
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

// Função para limpar Lenis (prevenção de memória)
function cleanupSmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}

// Adicionar CSS necessário para Lenis
function addLenisStyles() {
  // Verificar se o CSS já existe
  if (document.querySelector("style[data-lenis-css]")) return

  const style = document.createElement("style")
  style.setAttribute("data-lenis-css", "true")
  style.textContent = `
    html.lenis, html.lenis body {
      height: auto;
    }
    .lenis.lenis-smooth {
      scroll-behavior: auto !important;
    }
    .lenis.lenis-smooth [data-lenis-prevent] {
      overscroll-behavior: contain;
    }
    .lenis.lenis-stopped {
      overflow: hidden;
    }
    .lenis.lenis-smooth iframe {
      pointer-events: none;
    }
  `
  document.head.appendChild(style)
}

// Inicializar scroll suave quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  addLenisStyles()

  // Inicializar após um pequeno delay para garantir que Lenis esteja carregado
  setTimeout(initSmoothScroll, 100)
})

// Limpar na navegação SPA (se aplicável)
window.addEventListener("beforeunload", cleanupSmoothScroll)

const uiSymbols = [
  {
    code: "&#10003;",
    symbol: "&#10003;",
    name: "check",
    keywords: [
      "check",
      "confirmar",
      "aprovado",
      "selecionado",
      "ok",
      "verificado",
      "marcar",
      "validar",
      "aceitar",
      "completar",
      "correto",
      "sucesso"
    ]
  },
  {
    code: "&#10004;",
    symbol: "&#10004;",
    name: "check pesado",
    keywords: [
      "check",
      "pesado",
      "confirmar",
      "aprovado",
      "marcado",
      "verificado",
      "concluído",
      "sucesso",
      "finalizado",
      "aceito",
      "validado",
      "ok"
    ]
  },
  {
    code: "&#10005;",
    symbol: "&#10005;",
    name: "x pesado",
    keywords: [
      "x",
      "pesado",
      "erro",
      "cancelar",
      "fechar",
      "excluir",
      "remover",
      "negado",
      "incorreto",
      "errado",
      "invalidar",
      "rejeitar"
    ]
  },
  {
    code: "&#10006;",
    symbol: "&#10006;",
    name: "multiplicar",
    keywords: [
      "multiplicar",
      "x",
      "fechar",
      "cancelar",
      "remover",
      "excluir",
      "erro",
      "incorreto",
      "negado",
      "deletar",
      "apagar",
      "eliminar"
    ]
  },
  {
    code: "&#9654;",
    symbol: "&#9654;",
    name: "play",
    keywords: [
      "play",
      "tocar",
      "iniciar",
      "vídeo",
      "áudio",
      "start",
      "executar",
      "multimédia",
      "reproduzir",
      "começar",
      "início",
      "run"
    ]
  },
  {
    code: "&#9632;",
    symbol: "&#9632;",
    name: "parar",
    keywords: [
      "parar",
      "stop",
      "pausar",
      "interromper",
      "terminar",
      "finish",
      "bloquear",
      "vídeo",
      "áudio",
      "stop button",
      "finalizar",
      "controle"
    ]
  },
  {
    code: "&#9998;",
    symbol: "&#9998;",
    name: "editar",
    keywords: [
      "editar",
      "lapis",
      "modificar",
      "alterar",
      "escrever",
      "text",
      "update",
      "esboço",
      "alteração",
      "anotar",
      "ajustar",
      "modificação"
    ]
  },
  {
    code: "&#8592;",
    symbol: "&#8592;",
    name: "seta para a esquerda",
    keywords: [
      "esquerda",
      "voltar",
      "left",
      "retroceder",
      "anterior",
      "navegação",
      "flecha",
      "direcção",
      "movimento",
      "regresso",
      "avanço inverso",
      "retrocesso",
      "ícone direccional"
    ]
  },
  {
    code: "&#8594;",
    symbol: "&#8594;",
    name: "seta para a direita",
    keywords: [
      "direita",
      "right",
      "avançar",
      "seguir",
      "próximo",
      "navegação",
      "flecha",
      "direcção",
      "movimento",
      "progresso",
      "continuação",
      "ícone direccional",
      "avanço"
    ]
  },
  {
    code: "&#8593;",
    symbol: "&#8593;",
    name: "seta para cima",
    keywords: [
      "cima",
      "subir",
      "acima",
      "ascender",
      "navegação",
      "flecha",
      "direcção",
      "movimento",
      "elevação",
      "subida",
      "ícone direccional",
      "progresso vertical"
    ]
  },
  {
    code: "&#8595;",
    symbol: "&#8595;",
    name: "seta para baixo",
    keywords: [
      "baixo",
      "descer",
      "abaixo",
      "cair",
      "navegação",
      "flecha",
      "direcção",
      "movimento",
      "descida",
      "redução",
      "ícone direccional",
      "movimento descendente"
    ]
  },
  {
    code: "&#8249;",
    symbol: "&#8249;",
    name: "seta esquerda",
    keywords: [
      "seta esquerda",
      "back",
      "voltar",
      "anterior",
      "recuar",
      "slide",
      "navegar",
      "retroceder",
      "direção",
      "movimento",
      "esquerda",
      "retornar"
    ]
  },
  {
    code: "&#8250;",
    symbol: "&#8250;",
    name: "seta direita",
    keywords: [
      "seta direita",
      "next",
      "seguinte",
      "avançar",
      "slide",
      "navegar",
      "continuar",
      "próximo",
      "direção",
      "movimento",
      "direita",
      "progredir"
    ]
  },
  {
    code: "&#9650;",
    symbol: "&#9650;",
    name: "seta cima",
    keywords: [
      "seta cima",
      "up",
      "subir",
      "scroll",
      "acima",
      "incrementar",
      "navegar",
      "topo",
      "anterior",
      "deslocar cima",
      "movimento",
      "direção"
    ]
  },
  {
    code: "&#9660;",
    symbol: "&#9660;",
    name: "seta baixo",
    keywords: [
      "seta baixo",
      "down",
      "descer",
      "scroll",
      "baixo",
      "diminuir",
      "navegar",
      "fim",
      "próximo",
      "movimento",
      "direção",
      "rolar"
    ]
  },
  {
    code: "&#8598;",
    symbol: "&#8598;",
    name: "seta para cima e para a esquerda",
    keywords: [
      "noroeste",
      "diagonal",
      "cima-esquerda",
      "retroceder",
      "subir",
      "esquerda",
      "flecha",
      "direcção",
      "movimento",
      "ícone direccional",
      "regresso diagonal",
      "navegação",
      "left"
    ]
  },
  {
    code: "&#8599;",
    symbol: "&#8599;",
    name: "seta para cima e para a direita",
    keywords: [
      "nordeste",
      "diagonal",
      "cima-direita",
      "avançar",
      "subir",
      "direita",
      "flecha",
      "direcção",
      "movimento",
      "ícone direccional",
      "progresso diagonal",
      "navegação"
    ]
  },
  {
    code: "&#8600;",
    symbol: "&#8600;",
    name: "seta para baixo e para a direita",
    keywords: [
      "sudoeste",
      "diagonal",
      "baixo-direita",
      "retroceder",
      "descer",
      "direita",
      "flecha",
      "direcção",
      "movimento",
      "ícone direccional",
      "regresso descendente",
      "navegação",
      "right"
    ]
  },
  {
    code: "&#8601;",
    symbol: "&#8601;",
    name: "seta para baixo e para a direita",
    keywords: [
      "sudeste",
      "diagonal",
      "baixo-esquerda",
      "retroceder",
      "descer",
      "esquerda",
      "flecha",
      "direcção",
      "movimento",
      "ícone direccional",
      "progresso descendente",
      "navegação",
      "left"
    ]
  },
  {
    code: "&#11240;",
    symbol: "&#11240;",
    name: "seta diagonal noroeste",
    keywords: [
      "noroeste",
      "diagonal",
      "cima-esquerda",
      "movimento",
      "direcção",
      "flecha",
      "navegação",
      "regresso",
      "ícone direccional",
      "retroceder",
      "subir",
      "esquerda"
    ]
  },
  {
    code: "&#11241;",
    symbol: "&#11241;",
    name: "seta diagonal nordeste",
    keywords: [
      "nordeste",
      "diagonal",
      "cima-direita",
      "movimento",
      "direcção",
      "flecha",
      "navegação",
      "avanço",
      "ícone direccional",
      "prosseguir",
      "subir",
      "direita"
    ]
  },
  {
    code: "&#11242;",
    symbol: "&#11242;",
    name: "seta diagonal sudoeste",
    keywords: [
      "sudoeste",
      "diagonal",
      "baixo-esquerda",
      "movimento",
      "direcção",
      "flecha",
      "navegação",
      "retroceder",
      "ícone direccional",
      "descer",
      "esquerda",
      "regresso"
    ]
  },
  {
    code: "&#11243;",
    symbol: "&#11243;",
    name: "seta diagonal sudeste",
    keywords: [
      "sudeste",
      "diagonal",
      "baixo-direita",
      "movimento",
      "direcção",
      "flecha",
      "navegação",
      "avanço",
      "ícone direccional",
      "descer",
      "direita",
      "prosseguir"
    ]
  },
  {
    code: "&#129104;",
    symbol: "&#129104;",
    name: "seta em curva para a esquerda",
    keywords: [
      "curva",
      "esquerda",
      "retorno",
      "repetir",
      "reverter",
      "recuar",
      "loop",
      "refazer",
      "regresso",
      "retroceder",
      "flecha curva",
      "ícone cíclico"
    ]
  },
  {
    code: "&#129105;",
    symbol: "&#129105;",
    name: "seta em curva para a direita",
    keywords: [
      "curva",
      "direita",
      "avanço",
      "repetir",
      "continuar",
      "prosseguir",
      "loop",
      "actualizar",
      "progresso",
      "sequência",
      "flecha curva",
      "ícone cíclico"
    ]
  },
  {
    code: "&#129108;",
    symbol: "&#129108;",
    name: "seta circular para a esquerda",
    keywords: [
      "noroeste",
      "diagonal",
      "cima-esquerda",
      "retroceder",
      "subir",
      "esquerda",
      "flecha",
      "direcção",
      "movimento",
      "ícone direccional",
      "regresso diagonal",
      "navegação",
      "left"
    ]
  },
  {
    code: "&#129109;",
    symbol: "&#129109;",
    name: "seta circular para a direita",
    keywords: [
      "circular",
      "direita",
      "avanço",
      "repetir",
      "actualizar",
      "continuar",
      "loop",
      "reiniciar",
      "progresso",
      "sequência",
      "flecha rotativa",
      "ícone cíclico"
    ]
  },
  {
    code: "&#129035;",
    symbol: "&#129035;",
    name: "seta de retorno simples",
    keywords: [
      "retorno",
      "regresso",
      "recuar",
      "reverter",
      "anterior",
      "refazer",
      "recomeçar",
      "flecha",
      "loop",
      "actualizar",
      "ícone cíclico",
      "retroceder"
    ]
  },
  {
    code: "&#129028;",
    symbol: "&#129028;",
    name: "seta em laço para a esquerda",
    keywords: [
      "esquerda",
      "voltar",
      "left",
      "retroceder",
      "anterior",
      "navegação",
      "flecha",
      "direcção",
      "movimento",
      "regresso",
      "avanço inverso",
      "retrocesso",
      "ícone direccional"
    ]
  },
  {
    code: "&#129029;",
    symbol: "&#129029;",
    name: "seta em laço para a direita",
    keywords: [
      "laço",
      "direita",
      "avanço",
      "repetir",
      "actualizar",
      "continuar",
      "flecha",
      "progresso",
      "loop",
      "reiniciar",
      "sequência",
      "ícone cíclico"
    ]
  },
  {
    code: "&#129031;",
    symbol: "&#129031;",
    name: "seta em U para cima",
    keywords: [
      "U",
      "subir",
      "retorno",
      "virar",
      "recuar",
      "movimento",
      "flecha",
      "regresso",
      "curva fechada",
      "ícone direccional",
      "navegação",
      "reverter"
    ]
  },
  {
    code: "&#129032;",
    symbol: "&#129032;",
    name: "seta em U para baixo",
    keywords: [
      "U",
      "descer",
      "continuar",
      "virar",
      "avançar",
      "movimento",
      "flecha",
      "progresso",
      "curva fechada",
      "ícone direccional",
      "navegação",
      "seguir"
    ]
  },
  {
    code: "&#129033;",
    symbol: "&#129033;",
    name: "seta com gancho para a cima",
    keywords: [
      "gancho",
      "cima",
      "captura",
      "retorno",
      "recuar",
      "flecha",
      "regresso",
      "curva",
      "ícone direccional",
      "reverter",
      "navegação",
      "retroceder",
      "top",
      "up",
      "topo",
      "em cima",
      "subir"
    ]
  },
  {
    code: "&#129034;",
    symbol: "&#129034;",
    name: "seta com gancho para a direita",
    keywords: [
      "gancho",
      "direita",
      "avanço",
      "movimento",
      "flecha",
      "progresso",
      "curva",
      "ícone direccional",
      "prosseguir",
      "navegação",
      "seguir",
      "continuar"
    ]
  },
  {
    code: "&#129110;",
    symbol: "&#129110;",
    name: "seta vertical curva",
    keywords: [
      "vertical",
      "curva",
      "subir e descer",
      "movimento cíclico",
      "loop vertical",
      "flecha",
      "direcção",
      "ícone rotativo",
      "navegação",
      "actualização",
      "regresso",
      "ciclo"
    ]
  },
  {
    code: "&#129106;",
    symbol: "&#129106;",
    name: "seta dupla vertical",
    keywords: [
      "vertical",
      "dupla",
      "cima e baixo",
      "alternância",
      "troca",
      "movimento",
      "flecha",
      "direcção",
      "selecção",
      "comutação",
      "ícone bidireccional",
      "navegação"
    ]
  },
  {
    code: "&#129107;",
    symbol: "&#129107;",
    name: "seta dupla horizontal",
    keywords: [
      "horizontal",
      "dupla",
      "esquerda e direita",
      "alternância",
      "troca",
      "movimento",
      "flecha",
      "direcção",
      "selecção",
      "comutação",
      "ícone bidireccional",
      "navegação"
    ]
  },
  {
    code: "&#10558;",
    symbol: "&#10558;",
    name: "seta dupla horizontal fina",
    keywords: [
      "dupla",
      "horizontal",
      "fina",
      "troca",
      "comutação",
      "esquerda e direita",
      "flecha",
      "movimento",
      "alternância",
      "selecção",
      "ícone bidireccional",
      "navegação"
    ]
  },
  {
    code: "&#10559;",
    symbol: "&#10559;",
    name: "seta dupla vertical grossa",
    keywords: [
      "dupla",
      "vertical",
      "grossa",
      "troca",
      "comutação",
      "cima e baixo",
      "flecha",
      "movimento",
      "alternância",
      "selecção",
      "ícone bidireccional",
      "navegação"
    ]
  },
  {
    code: "&#8634;",
    symbol: "&#8634;",
    name: "seta circular anti-horária",
    keywords: [
      "circular",
      "anti-horária",
      "retroceder",
      "regresso",
      "recarregar",
      "reverter",
      "refazer",
      "loop",
      "flecha rotativa",
      "ícone cíclico",
      "reciclar",
      "actualizar"
    ]
  },
  {
    code: "&#8635;",
    symbol: "&#8635;",
    name: "seta circular horária",
    keywords: [
      "circular",
      "horária",
      "avançar",
      "repetir",
      "actualizar",
      "progresso",
      "sequência",
      "loop",
      "flecha rotativa",
      "ícone cíclico",
      "continuar",
      "reiniciar"
    ]
  },
  {
    code: "&#129030;",
    symbol: "&#129030;",
    name: "seta circular dupla",
    keywords: [
      "circular",
      "dupla",
      "recarregar",
      "actualizar",
      "sincronizar",
      "refrescar",
      "loop",
      "repetir",
      "reiniciar",
      "flecha rotativa",
      "ícone cíclico",
      "actualização"
    ]
  },
  {
    code: "&#8630;",
    symbol: "&#8630;",
    name: "seta em espiral anti-horária",
    keywords: [
      "espiral",
      "anti-horária",
      "retroceder",
      "regresso",
      "recarregar",
      "reverter",
      "refazer",
      "loop",
      "flecha rotativa",
      "ícone cíclico",
      "reciclar",
      "recomeçar"
    ]
  },
  {
    code: "&#8631;",
    symbol: "&#8631;",
    name: "seta em espiral horária",
    keywords: [
      "espiral",
      "horária",
      "avançar",
      "repetir",
      "actualizar",
      "progresso",
      "sequência",
      "loop",
      "flecha rotativa",
      "ícone cíclico",
      "continuar",
      "reiniciar"
    ]
  },
  {
    code: "&#10560;",
    symbol: "&#10560;",
    name: "seta horizontal barrada",
    keywords: [
      "barrada",
      "bloqueada",
      "proibida",
      "interrompida",
      "horizontal",
      "movimento negado",
      "flecha",
      "ícone restritivo",
      "paragem",
      "impedimento",
      "restrição",
      "negação"
    ]
  },
  {
    code: "&#10561;",
    symbol: "&#10561;",
    name: "seta vertical barrada",
    keywords: [
      "barrada",
      "bloqueada",
      "proibida",
      "interrompida",
      "vertical",
      "movimento negado",
      "flecha",
      "ícone restritivo",
      "paragem",
      "impedimento",
      "restrição",
      "negação"
    ]
  },
  {
    code: "&#9776;",
    symbol: "&#9776;",
    name: "menu hamburger",
    keywords: [
      "menu",
      "hamburger",
      "opções",
      "navegação",
      "lista",
      "dropdown",
      "botão",
      "menu principal",
      "painel",
      "abrir menu",
      "sidebar",
      "menu lateral"
    ]
  },
  {
    code: "&#8942;",
    symbol: "&#8942;",
    name: "três pontos vertical",
    keywords: [
      "três pontos",
      "vertical",
      "menu",
      "opções",
      "configurações",
      "mais",
      "detalhes",
      "ações",
      "ellipsis",
      "expandir",
      "dropdown",
      "mais opções"
    ]
  },
  {
    code: "&#8230;",
    symbol: "&#8230;",
    name: "três pontos horizontal",
    keywords: [
      "três pontos",
      "horizontal",
      "menu",
      "opções",
      "configurações",
      "mais",
      "detalhes",
      "ações",
      "ellipsis",
      "expandir",
      "dropdown",
      "mais opções"
    ]
  },
  {
    code: "&#128736;",
    symbol: "&#128736;",
    name: "configurações",
    keywords: [
      "configurações",
      "settings",
      "engrenagem",
      "opções",
      "ajustes",
      "preferências",
      "controle",
      "menu",
      "sistema",
      "painel",
      "tools",
      "modificar",
      "tool",
      "srtting"
    ]
  },
  {
    code: "&#9003;",
    symbol: "&#9003;",
    name: "retrocesso",
    keywords: [
      "retrocesso",
      "apagar",
      "voltar",
      "correcção",
      "tecla",
      "entrada",
      "remover",
      "navegação",
      "regresso",
      "editar",
      "correcção",
      "recuar"
    ]
  },
  {
    code: "&#8998;",
    symbol: "&#8998;",
    name: "pilha de documentos",
    keywords: [
      "pilha",
      "documentos",
      "arquivo",
      "papel",
      "organização",
      "símbolo",
      "ícone",
      "conjunto",
      "agrupamento",
      "ficheiro",
      "pasta",
      "registos"
    ]
  },
  {
    code: "&#8999;",
    symbol: "&#8999;",
    name: "ficheiro simples",
    keywords: [
      "ficheiro",
      "documento",
      "papel",
      "gravação",
      "símbolo",
      "ícone",
      "arquivo",
      "registo",
      "texto",
      "dados",
      "computador",
      "guardar"
    ]
  },
  {
    code: "&#9000;",
    symbol: "&#9000;",
    name: "símbolo de comando",
    keywords: [
      "comando",
      "instrução",
      "executar",
      "terminal",
      "consola",
      "símbolo",
      "ícone",
      "ordem",
      "computador",
      "sistema",
      "tecla",
      "programação"
    ]
  },
  {
    code: "&#9197;",
    symbol: "&#9197;",
    name: "relógio analógico",
    keywords: [
      "relógio",
      "analógico",
      "tempo",
      "hora",
      "cronómetro",
      "alarme",
      "símbolo",
      "ícone",
      "minuto",
      "segundo",
      "gestão",
      "agendamento"
    ]
  },
  {
    code: "&#9198;",
    symbol: "&#9198;",
    name: "relógio com alarme",
    keywords: [
      "relógio",
      "alarme",
      "tempo",
      "hora",
      "aviso",
      "símbolo",
      "ícone",
      "notificação",
      "despertador",
      "agendamento",
      "alerta",
      "temporizador"
    ]
  },
  {
    code: "&#9199;",
    symbol: "&#9199;",
    name: "relógio com seta circular",
    keywords: [
      "relógio",
      "seta circular",
      "tempo",
      "hora",
      "reciclagem",
      "actualizar",
      "símbolo",
      "ícone",
      "actualização",
      "temporizador",
      "histórico",
      "regresso"
    ]
  },
  {
    code: "&#9206;",
    symbol: "&#9206;",
    name: "relógio com seta de actualização",
    keywords: [
      "relógio",
      "seta",
      "actualizar",
      "tempo",
      "hora",
      "símbolo",
      "ícone",
      "recarregar",
      "loop",
      "actualização",
      "temporizador",
      "sincronização"
    ]
  },
  {
    code: "&#9204;",
    symbol: "&#9204;",
    name: "relógio com ponto",
    keywords: [
      "relógio",
      "ponto",
      "tempo",
      "hora",
      "precisão",
      "símbolo",
      "ícone",
      "pontualidade",
      "exactidão",
      "temporizador",
      "agendamento",
      "minuto"
    ]
  },
  {
    code: "&#9205;",
    symbol: "&#9205;",
    name: "relógio com estrela",
    keywords: [
      "relógio",
      "estrela",
      "tempo",
      "hora",
      "destaque",
      "símbolo",
      "ícone",
      "excelência",
      "reconhecimento",
      "temporizador",
      "agendamento",
      "prioridade"
    ]
  },
  {
    code: "&#9207;",
    symbol: "&#9207;",
    name: "relógio com exclamação",
    keywords: [
      "relógio",
      "exclamação",
      "tempo",
      "hora",
      "urgência",
      "símbolo",
      "ícone",
      "alerta",
      "aviso",
      "temporizador",
      "crítico",
      "aviso iminente"
    ]
  },
  {
    code: "&#9211;",
    symbol: "&#9211;",
    name: "relógio com interrogação",
    keywords: [
      "relógio",
      "interrogação",
      "tempo",
      "hora",
      "dúvida",
      "símbolo",
      "ícone",
      "incerteza",
      "questão",
      "temporizador",
      "agendamento",
      "indefinido"
    ]
  },
  {
    code: "&#9208;",
    symbol: "&#9208;",
    name: "relógio com cruz",
    keywords: [
      "relógio",
      "cruz",
      "tempo",
      "hora",
      "paragem",
      "interrupção",
      "símbolo",
      "ícone",
      "impedimento",
      "falha",
      "cancelar",
      "tempo esgotado"
    ]
  },
  {
    code: "&#9733;",
    symbol: "&#9733;",
    name: "estrela preenchida",
    keywords: [
      "estrela",
      "preenchida",
      "avaliação",
      "classificação",
      "símbolo",
      "ícone",
      "nota",
      "pontuação",
      "destaque",
      "qualidade",
      "reconhecimento",
      "excelência"
    ]
  },
  {
    code: "&#9734;",
    symbol: "&#9734;",
    name: "estrela vazia",
    keywords: [
      "estrela",
      "vazia",
      "avaliação",
      "classificação",
      "símbolo",
      "ícone",
      "nota",
      "pontuação",
      "destaque",
      "qualidade",
      "reconhecimento",
      "excelência"
    ]
  },
  {
    code: "&#9932;",
    symbol: "&#9932;",
    name: "estrela preenchida grossa",
    keywords: [
      "estrela",
      "preenchida",
      "grossa",
      "avaliação",
      "classificação",
      "símbolo",
      "ícone",
      "excelência",
      "destaque",
      "qualidade",
      "pontuação",
      "reconhecimento",
      "indicação",
      "x",
      "plus",
      "mais",
      "adicao",
      "multiplicacao",
      "fechar",
      "close",
      "ocultar"
    ]
  },
  {
    code: "&#10025;",
    symbol: "&#10025;",
    name: "estrela branca",
    keywords: [
      "estrela",
      "branca",
      "classificação",
      "avaliação",
      "favorito",
      "destaque",
      "importante",
      "nota",
      "preferido",
      "melhor",
      "top",
      "avaliar"
    ]
  },
  {
    code: "&#10034;",
    symbol: "&#10034;",
    name: "estrela branca pesada",
    keywords: [
      "estrela",
      "branca",
      "pesada",
      "classificação",
      "avaliação",
      "favorito",
      "destaque",
      "importante",
      "nota",
      "preferido",
      "melhor",
      "top"
    ]
  },
  {
    code: "&#10035;",
    symbol: "&#10035;",
    name: "estrela preta pesada",
    keywords: [
      "estrela",
      "preta",
      "pesada",
      "classificação",
      "avaliação",
      "favorito",
      "destaque",
      "importante",
      "nota",
      "preferido",
      "melhor",
      "top"
    ]
  },
  {
    code: "&#10022;",
    symbol: "&#10022;",
    name: "estrela seis pontas",
    keywords: [
      "estrela",
      "seis",
      "pontas",
      "classificação",
      "avaliação",
      "favorito",
      "destaque",
      "importante",
      "nota",
      "preferido",
      "melhor",
      "top"
    ]
  },
  {
    code: "&#10023;",
    symbol: "&#10023;",
    name: "estrela oito pontas",
    keywords: [
      "estrela",
      "oito",
      "pontas",
      "classificação",
      "avaliação",
      "favorito",
      "destaque",
      "importante",
      "nota",
      "preferido",
      "melhor",
      "top"
    ]
  },
  {
    code: "&#10033;",
    symbol: "&#10033;",
    name: "estrela quatro pontas preta",
    keywords: [
      "estrela",
      "quatro",
      "pontas",
      "preta",
      "classificação",
      "avaliação",
      "favorito",
      "destaque",
      "importante",
      "nota",
      "preferido",
      "melhor"
    ]
  },
  {
    code: "&#10032;",
    symbol: "&#10032;",
    name: "asterisco pontilhado",
    keywords: [
      "asterisco",
      "pontilhado",
      "nota",
      "observação",
      "referência",
      "rodapé",
      "destaque",
      "atenção",
      "marcador",
      "importante",
      "ponto",
      "símbolo"
    ]
  },
  {
    code: "&#10052;",
    symbol: "&#10052;",
    name: "losango branco",
    keywords: [
      "losango",
      "branco",
      "vazio",
      "contorno",
      "selecionar",
      "marcador",
      "opção",
      "botão",
      "indicador",
      "ponto",
      "marcação",
      "item"
    ]
  },
  {
    code: "&#10054;",
    symbol: "&#10054;",
    name: "losango branco grande",
    keywords: [
      "losango",
      "branco",
      "grande",
      "vazio",
      "contorno",
      "selecionar",
      "marcador",
      "opção",
      "botão",
      "indicador",
      "ponto",
      "marcação"
    ]
  },
  {
    code: "&#10074;",
    symbol: "&#10074;",
    name: "quadrado branco pequeno",
    keywords: [
      "quadrado",
      "branco",
      "pequeno",
      "vazio",
      "contorno",
      "caixa",
      "selecionar",
      "checkbox",
      "marcador",
      "opção",
      "indicador",
      "marcação"
    ]
  },
  {
    code: "&#10072;",
    symbol: "&#10072;",
    name: "losango com ponto",
    keywords: [
      "losango",
      "ponto",
      "marcador",
      "selecionar",
      "opção",
      "botão",
      "indicador",
      "referência",
      "destacar",
      "atenção",
      "importante",
      "nota"
    ]
  },
  {
    code: "&#10073;",
    symbol: "&#10073;",
    name: "losango com círculo",
    keywords: [
      "losango",
      "círculo",
      "marcador",
      "selecionar",
      "opção",
      "botão",
      "indicador",
      "referência",
      "destacar",
      "atenção",
      "importante",
      "nota"
    ]
  },
  {
    code: "&#10070;",
    symbol: "&#10070;",
    name: "triângulo branco grande",
    keywords: [
      "triângulo",
      "branco",
      "grande",
      "vazio",
      "contorno",
      "seta",
      "direção",
      "indicador",
      "navegação",
      "apontar",
      "ponteiro",
      "marcação"
    ]
  },
  {
    code: "&#10077;",
    symbol: "&#10077;",
    name: "triângulo equilátero",
    keywords: [
      "triângulo",
      "equilátero",
      "seta",
      "direção",
      "indicador",
      "navegação",
      "apontar",
      "ponteiro",
      "marcação",
      "item",
      "seleção",
      "ponteiro"
    ]
  },
  {
    code: "&#10078;",
    symbol: "&#10078;",
    name: "triângulo equilátero",
    keywords: [
      "triângulo",
      "equilátero",
      "seta",
      "direção",
      "indicador",
      "navegação",
      "apontar",
      "ponteiro",
      "marcação",
      "item",
      "seleção",
      "ponteiro"
    ]
  },
  {
    code: "&#10075;",
    symbol: "&#10075;",
    name: "quadrado preto pequeno",
    keywords: [
      "quadrado",
      "preto",
      "pequeno",
      "sólido",
      "caixa",
      "selecionado",
      "checkbox",
      "marcador",
      "opção",
      "indicador",
      "marcação",
      "seleção"
    ]
  },
  {
    code: "&#10076;",
    symbol: "&#10076;",
    name: "triângulo retângulo",
    keywords: [
      "triângulo",
      "retângulo",
      "seta",
      "direção",
      "indicador",
      "navegação",
      "apontar",
      "ponteiro",
      "marcação",
      "item",
      "seleção",
      "ponteiro"
    ]
  },
  {
    code: "&#128970;",
    symbol: "&#128970;",
    name: "círculo com cruz",
    keywords: [
      "círculo",
      "cruz",
      "negação",
      "cancelar",
      "proibido",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual"
    ]
  },
  {
    code: "&#9829;",
    symbol: "&#9829;",
    name: "coração sólido",
    keywords: [
      "coração",
      "sólido",
      "amor",
      "emoção",
      "sentimento",
      "símbolo",
      "ícone",
      "afecto",
      "paixão",
      "vida",
      "relação",
      "romance"
    ]
  },
  {
    code: "&#10084;",
    symbol: "&#10084;",
    name: "coração branco",
    keywords: [
      "coração",
      "branco",
      "vazio",
      "contorno",
      "amor",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho"
    ]
  },
  {
    code: "&#10088;",
    symbol: "&#10088;",
    name: "coração pontiagudo",
    keywords: [
      "coração",
      "pontiagudo",
      "valentine",
      "amor",
      "romântico",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho"
    ]
  },
  {
    code: "&#10089;",
    symbol: "&#10089;",
    name: "coração invertido",
    keywords: [
      "coração",
      "invertido",
      "amor",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine",
      "romântico"
    ]
  },
  {
    code: "&#10090;",
    symbol: "&#10090;",
    name: "coração giratório",
    keywords: [
      "coração",
      "giratório",
      "animado",
      "amor",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine"
    ]
  },
  {
    code: "&#10091;",
    symbol: "&#10091;",
    name: "coração decorativo",
    keywords: [
      "coração",
      "decorativo",
      "ornamento",
      "amor",
      "valentine",
      "romântico",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento"
    ]
  },
  {
    code: "&#10092;",
    symbol: "&#10092;",
    name: "coração com fita",
    keywords: [
      "coração",
      "fita",
      "presente",
      "amor",
      "valentine",
      "romântico",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho"
    ]
  },
  {
    code: "&#10093;",
    symbol: "&#10093;",
    name: "coração com seta",
    keywords: [
      "coração",
      "seta",
      "amor",
      "indicador",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine"
    ]
  },
  {
    code: "&#10094;",
    symbol: "&#10094;",
    name: "coração com ponto",
    keywords: [
      "coração",
      "ponto",
      "marcador",
      "amor",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine"
    ]
  },
  {
    code: "&#10095;",
    symbol: "&#10095;",
    name: "coração com círculo",
    keywords: [
      "coração",
      "círculo",
      "marcador",
      "amor",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine"
    ]
  },
  {
    code: "&#10096;",
    symbol: "&#10096;",
    name: "coração com fogo",
    keywords: [
      "coração",
      "fogo",
      "paixão",
      "amor intenso",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine"
    ]
  },
  {
    code: "&#10097;",
    symbol: "&#10097;",
    name: "coração com coroa",
    keywords: [
      "coração",
      "coroa",
      "rei",
      "rainha",
      "amor real",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine"
    ]
  },
  {
    code: "&#10098;",
    symbol: "&#10098;",
    name: "coração com asas",
    keywords: [
      "coração",
      "asas",
      "amor livre",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine",
      "romântico"
    ]
  },
  {
    code: "&#10099;",
    symbol: "&#10099;",
    name: "coração com música",
    keywords: [
      "coração",
      "música",
      "amor musical",
      "gostar",
      "favorito",
      "like",
      "afeto",
      "emoção",
      "sentimento",
      "carinho",
      "valentine",
      "romântico"
    ]
  },
  {
    code: "&#9825;",
    symbol: "&#9825;",
    name: "naipe de copas",
    keywords: [
      "copas",
      "naipe",
      "cartas",
      "jogo",
      "coração",
      "baralho",
      "símbolo",
      "ícone",
      "trunfo",
      "amor",
      "valor",
      "figura"
    ]
  },
  {
    code: "&#9728;",
    symbol: "&#9728;",
    name: "sol branco",
    keywords: [
      "sol",
      "branco",
      "clima",
      "dia",
      "astro",
      "luz",
      "energia",
      "calor",
      "símbolo",
      "ícone",
      "tempo bom",
      "radiante"
    ]
  },
  {
    code: "&#9729;",
    symbol: "&#9729;",
    name: "lua crescente",
    keywords: [
      "lua",
      "crescente",
      "noite",
      "astro",
      "fase lunar",
      "símbolo",
      "ícone",
      "astronomia",
      "ciclo",
      "mistério",
      "tempo",
      "calendário"
    ]
  },
  {
    code: "&#9788;",
    symbol: "&#9788;",
    name: "símbolo feminino",
    keywords: [
      "feminino",
      "mulher",
      "género",
      "biológico",
      "símbolo",
      "ícone",
      "representação",
      "identidade",
      "sexo",
      "Vénus",
      "astrologia",
      "marca social"
    ]
  },
  {
    code: "&#8801;",
    symbol: "&#8801;",
    name: "sinal de identidade",
    keywords: [
      "identidade",
      "igualdade",
      "matemática",
      "lógica",
      "equivalência",
      "símbolo",
      "ícone",
      "relação",
      "congruência",
      "função",
      "expressão",
      "fórmula"
    ]
  },
  {
    code: "&#8803;",
    symbol: "&#8803;",
    name: "não idêntico",
    keywords: [
      "não idêntico",
      "diferença",
      "matemática",
      "lógica",
      "desigualdade",
      "símbolo",
      "ícone",
      "relação",
      "contraste",
      "expressão",
      "função",
      "fórmula"
    ]
  },
  {
    code: "&#9868;",
    symbol: "&#9868;",
    name: "telefone",
    keywords: [
      "telefone",
      "comunicação",
      "contacto",
      "ligação",
      "telemóvel",
      "símbolo",
      "ícone",
      "chamada",
      "voz",
      "rede",
      "móvel",
      "disco telefónico"
    ]
  },
  {
    code: "&#128929;",
    symbol: "&#128929;",
    name: "quadrado com linha diagonal",
    keywords: [
      "quadrado",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128930;",
    symbol: "&#128930;",
    name: "círculo com linha diagonal",
    keywords: [
      "círculo",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128931;",
    symbol: "&#128931;",
    name: "triângulo com linha diagonal",
    keywords: [
      "triângulo",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128932;",
    symbol: "&#128932;",
    name: "losango com linha diagonal",
    keywords: [
      "losango",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128933;",
    symbol: "&#128933;",
    name: "pentágono com linha diagonal",
    keywords: [
      "pentágono",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128934;",
    symbol: "&#128934;",
    name: "hexágono com linha diagonal",
    keywords: [
      "hexágono",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128935;",
    symbol: "&#128935;",
    name: "estrela com linha diagonal",
    keywords: [
      "estrela",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128936;",
    symbol: "&#128936;",
    name: "cruz com linha diagonal",
    keywords: [
      "cruz",
      "diagonal",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao",
      "multiplicacao",
      "fechar",
      "close",
      "ocultar"
    ]
  },
  {
    code: "&#128937;",
    symbol: "&#128937;",
    name: "cruz grega",
    keywords: [
      "cruz",
      "grega",
      "religioso",
      "símbolo histórico",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "tradição",
      "cristianismo",
      "indicação",
      "x",
      "plus",
      "mais",
      "adicao",
      "multiplicacao",
      "fechar",
      "close",
      "ocultar"
    ]
  },
  {
    code: "&#128938;",
    symbol: "&#128938;",
    name: "losango preenchido",
    keywords: [
      "losango",
      "preenchido",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "x",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128939;",
    symbol: "&#128939;",
    name: "círculo preenchido",
    keywords: [
      "círculo",
      "preenchido",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128940;",
    symbol: "&#128940;",
    name: "quadrado preenchido",
    keywords: [
      "quadrado",
      "preenchido",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128941;",
    symbol: "&#128941;",
    name: "triângulo preenchido",
    keywords: [
      "triângulo",
      "preenchido",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#128942;",
    symbol: "&#128942;",
    name: "estrela preenchida",
    keywords: [
      "estrela",
      "preenchida",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#10761;",
    symbol: "&#10761;",
    name: "losango aberto",
    keywords: [
      "losango",
      "aberto",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },
  {
    code: "&#10539;",
    symbol: "&#10539;",
    name: "círculo aberto",
    keywords: [
      "círculo",
      "aberto",
      "geometria",
      "figura",
      "símbolo",
      "marca",
      "design",
      "gráfico",
      "ícone",
      "forma",
      "elemento visual",
      "indicação",
      "+",
      "plus",
      "mais",
      "adicao"
    ]
  },

  {
    code: "&#127275;",
    symbol: "&#127275;",
    name: "símbolo regional A",
    keywords: [
      "regional",
      "bandeira",
      "A",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127276;",
    symbol: "&#127276;",
    name: "símbolo regional B",
    keywords: [
      "regional",
      "bandeira",
      "B",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127338;",
    symbol: "&#127338;",
    name: "símbolo regional C",
    keywords: [
      "regional",
      "bandeira",
      "C",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127339;",
    symbol: "&#127339;",
    name: "símbolo regional D",
    keywords: [
      "regional",
      "bandeira",
      "D",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127340;",
    symbol: "&#127340;",
    name: "símbolo regional E",
    keywords: [
      "regional",
      "bandeira",
      "E",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127341;",
    symbol: "&#127341;",
    name: "símbolo regional F",
    keywords: [
      "regional",
      "bandeira",
      "F",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127387;",
    symbol: "&#127387;",
    name: "símbolo regional M",
    keywords: [
      "regional",
      "bandeira",
      "M",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127389;",
    symbol: "&#127389;",
    name: "símbolo regional O",
    keywords: [
      "regional",
      "bandeira",
      "O",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127390;",
    symbol: "&#127390;",
    name: "símbolo regional P",
    keywords: [
      "regional",
      "bandeira",
      "P",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127391;",
    symbol: "&#127391;",
    name: "símbolo regional Q",
    keywords: [
      "regional",
      "bandeira",
      "Q",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },
  {
    code: "&#127403;",
    symbol: "&#127403;",
    name: "símbolo regional Z",
    keywords: [
      "regional",
      "bandeira",
      "Z",
      "marca territorial",
      "alfabeto",
      "inicial",
      "identificação",
      "símbolo geográfico",
      "letra",
      "território",
      "código",
      "ícone regional"
    ]
  },

  { code: "&#11251;", symbol: "&#11251;", name: "Lousa", keywords: ["Quadro", "lousa"] },
  { code: "&#64;", symbol: "&#64;", name: "aroba", keywords: ["@", "a", "a comercial"] },
  { code: "&#63;", symbol: "&#63;", name: "interrogação", keywords: ["interrogação", "question", "pergunta", "?", ""] },
  { code: "&#8209;", symbol: "&#8209;", name: "dahs", keywords: ["dahs", "-", "_", "hifen", "menus"] },
  { code: "&#8210;", symbol: "&#8210;", name: "dahs", keywords: ["dahs", "-", "_", "hifen", "menus"] },
  { code: "&#8211;", symbol: "&#8211;", name: "dahs", keywords: ["dahs", "-", "_", "hifen", "menus"] },
  { code: "&#8212;", symbol: "&#8212;", name: "dahs", keywords: ["dahs", "-", "_", "hifen", "menus"] },
  { code: "&#8213;", symbol: "&#8213;", name: "dahs", keywords: ["dahs", "-", "_", "hifen", "menus"] },
  {
    code: "&#8226;",
    symbol: "&#8226;",
    name: "ponto",
    keywords: [".", "ponto", "reticencias", "dois pontos", "ponto final"]
  },
  {
    code: "&#8228;",
    symbol: "&#8228;",
    name: "ponto",
    keywords: [".", "ponto", "reticencias", "dois pontos", "ponto final"]
  },
  {
    code: "&#8229;",
    symbol: "&#8229;",
    name: "ponto",
    keywords: [".", "ponto", "reticencias", "dois pontos", "ponto final"]
  },
  {
    code: "&#8230;",
    symbol: "&#8230;",
    name: "ponto",
    keywords: [".", "ponto", "reticencias", "dois pontos", "ponto final"]
  }
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
  // { code: '&#;', symbol: '&#;', name: '', keywords: ['', '', '', '', ''] },
]

const symbolsContainer = document.getElementById("symbolsContainer")
const searchInput = document.getElementById("search")
const modalOverlay = document.getElementById("modalOverlay")
const closeModalBtn = document.getElementById("closeModal")
const modalSymbol = document.getElementById("modalSymbol")
const modalCode = document.getElementById("modalCode")
const copyBtn = document.getElementById("copyBtn")

let selectedSymbol = null

function renderSymbols(symbols) {
  symbolsContainer.innerHTML = ""

  if (symbols.length === 0) {
    symbolsContainer.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><p>Nenhum símbolo encontrado.</p></div>`
    return
  }

  symbols.forEach(symbol => {
    const card = document.createElement("div")
    card.className = "symbol-card"
    card.setAttribute("tabindex", "0") // torna a div focável pelo teclado
    card.innerHTML = `<div class="symbol">${symbol.symbol}</div>`

    // clique com rato
    card.addEventListener("click", () => openModal(symbol))

    // activação com Enter
    card.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        openModal(symbol)
      }
    })

    symbolsContainer.appendChild(card)
  })
}

function openModal(symbol) {
  selectedSymbol = symbol
  modalSymbol.innerHTML = symbol.symbol
  modalCode.textContent = symbol.code
  copyBtn.innerHTML =
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="336" height="336" x="128" y="128" fill="none" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></path></svg> Copiar Código'
  copyBtn.classList.remove("copied")
  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modalOverlay.classList.remove("active")
  document.body.style.overflow = "auto"
}

function copyCode() {
  if (!selectedSymbol) return
  navigator.clipboard
    .writeText(selectedSymbol.code)
    .then(() => {
      copyBtn.innerHTML = "&#10004; Código Copiado!"
      copyBtn.classList.add("copied")
      setTimeout(() => {
        copyBtn.innerHTML =
          '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="336" height="336" x="128" y="128" fill="none" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></path></svg> Copiar Código'
        copyBtn.classList.remove("copied")
      }, 2000)
    })
    .catch(err => {
      alert("Não foi possível copiar o código.")
    })
}

function filterSymbols() {
  const searchTerm = searchInput.value.toLowerCase().trim()
  if (!searchTerm) {
    renderSymbols(uiSymbols)
    return
  }

  const filteredSymbols = uiSymbols.filter(symbol => {
    const temp = document.createElement("div")
    temp.innerHTML = symbol.symbol
    const renderedSymbol = temp.textContent || temp.innerText || ""

    return (
      renderedSymbol.toLowerCase().includes(searchTerm) ||
      symbol.name.toLowerCase().includes(searchTerm) ||
      symbol.keywords.some(kw => kw.toLowerCase().includes(searchTerm))
    )
  })

  renderSymbols(filteredSymbols)
}

function atualizarTotalDeIcones() {
  const total = uiSymbols.length
  const elemento = document.getElementById("TotalDeIcones")
  if (elemento) {
    elemento.textContent = total >= 1000 ? (total / 1000).toFixed(1).replace(".0", "") + "K" : total
  }
}

document.addEventListener("DOMContentLoaded", atualizarTotalDeIcones)
searchInput.addEventListener("input", filterSymbols)
closeModalBtn.addEventListener("click", closeModal)
copyBtn.addEventListener("click", copyCode)
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal()
})

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) closeModal()
})

renderSymbols(uiSymbols)
