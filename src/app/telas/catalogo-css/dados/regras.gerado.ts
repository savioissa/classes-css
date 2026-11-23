// ARQUIVO GERADO por scripts/gerar-catalogo-css.mjs a partir de src/styles.css.
// Não edite à mão: rode "npm run catalogo" (roda sozinho no start e no build).
import { ArquivoCss } from './modelo';

export const ARQUIVO_CSS: ArquivoCss = {
  "totalRegras": 444,
  "totalLinhas": 2872,
  "imports": [
    {
      "texto": "@import \"primeng/resources/themes/lara-light-blue/theme.css\";",
      "linha": 2
    },
    {
      "texto": "@import \"primeng/resources/primeng.css\";",
      "linha": 3
    },
    {
      "texto": "@import \"primeicons/primeicons.css\";",
      "linha": 5
    },
    {
      "texto": "@import \"../node_modules/primeflex/primeflex.css\";",
      "linha": 7
    },
    {
      "texto": "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat&display=swap');",
      "linha": 9
    },
    {
      "texto": "@import \"ol/ol.css\";",
      "linha": 10
    },
    {
      "texto": "@import \"global-overrides.css\";",
      "linha": 12
    },
    {
      "texto": "@import \"../node_modules/@toast-ui/calendar/dist/toastui-calendar.min.css\";",
      "linha": 14
    },
    {
      "texto": "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');",
      "linha": 16
    },
    {
      "texto": "@import \"form-style.css\";",
      "linha": 18
    },
    {
      "texto": "@import \"advanced-filter.css\";",
      "linha": 19
    },
    {
      "texto": "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');",
      "linha": 21
    }
  ],
  "avisos": [
    {
      "tipo": "duplicada-identica",
      "titulo": "Import repetido",
      "texto": "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'); aparece 2 vezes (linhas 16, 21). O navegador baixa a fonte duas vezes; pode apagar uma.",
      "linhas": [
        16,
        21
      ]
    },
    {
      "tipo": "sem-efeito",
      "titulo": "Arquivo importado está vazio",
      "texto": "global-overrides.css foi criado vazio neste projeto porque o conteúdo original não veio junto. As classes dele não aparecem no catálogo.",
      "linhas": [
        12
      ]
    },
    {
      "tipo": "sem-efeito",
      "titulo": "Arquivo importado está vazio",
      "texto": "form-style.css foi criado vazio neste projeto porque o conteúdo original não veio junto. As classes dele não aparecem no catálogo.",
      "linhas": [
        18
      ]
    },
    {
      "tipo": "sem-efeito",
      "titulo": "Arquivo importado está vazio",
      "texto": "advanced-filter.css foi criado vazio neste projeto porque o conteúdo original não veio junto. As classes dele não aparecem no catálogo.",
      "linhas": [
        19
      ]
    }
  ],
  "entradas": [
    {
      "chave": "body",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": "body",
          "alvo": "proprio",
          "linhas": [
            24
          ],
          "atributos": [
            {
              "prop": "margin",
              "valor": "0",
              "linha": 25
            }
          ]
        }
      ],
      "linha": 24
    },
    {
      "chave": ".p-sidebar",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-sidebar",
          "alvo": "proprio",
          "linhas": [
            28
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "auto",
              "linha": 29
            }
          ]
        }
      ],
      "linha": 28
    },
    {
      "chave": ".p-card",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-card .p-card-header",
          "alvo": "interno",
          "linhas": [
            38
          ],
          "atributos": [
            {
              "prop": "margin-left",
              "valor": "1.25rem",
              "linha": 39
            },
            {
              "prop": "padding-top",
              "valor": "1.25rem",
              "linha": 40
            }
          ]
        },
        {
          "seletor": ".p-card .p-card-body",
          "alvo": "interno",
          "linhas": [
            43
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0 1.25rem",
              "linha": 44
            },
            {
              "prop": "margin-bottom",
              "valor": "20px",
              "linha": 45
            }
          ]
        }
      ],
      "linha": 38
    },
    {
      "chave": ".card-button-map",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".card-button-map .p-button.p-button-outlined",
          "alvo": "interno",
          "linhas": [
            48
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 49
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 50
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 51
            }
          ]
        }
      ],
      "linha": 48
    },
    {
      "chave": ".card",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".card",
          "alvo": "proprio",
          "linhas": [
            54
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "var(--surface-card)",
              "linha": 55
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 57
            },
            {
              "prop": "margin-bottom",
              "valor": "1rem",
              "linha": 58
            }
          ]
        }
      ],
      "linha": 54
    },
    {
      "chave": ".p-dropdown",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-dropdown",
          "alvo": "proprio",
          "linhas": [
            61
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 62
            }
          ]
        },
        {
          "seletor": ".p-dropdown.p-disabled .p-dropdown-trigger",
          "alvo": "interno",
          "linhas": [
            1530
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "none",
              "linha": 1531
            }
          ]
        }
      ],
      "linha": 61
    },
    {
      "chave": ".portal-cliente-título-etapa",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-título-etapa",
          "alvo": "proprio",
          "linhas": [
            65
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 66
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 67
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 68
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 69
            }
          ]
        }
      ],
      "linha": 65
    },
    {
      "chave": ".portal-cliente-subtítulo-etapa",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-subtítulo-etapa",
          "alvo": "proprio",
          "linhas": [
            72
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 73
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 74
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 75
            },
            {
              "prop": "color",
              "valor": "#747988",
              "linha": 76
            }
          ]
        }
      ],
      "linha": 72
    },
    {
      "chave": ".portal-cliente-rótulo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-rótulo",
          "alvo": "proprio",
          "linhas": [
            79
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 80
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 81
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 82
            },
            {
              "prop": "color",
              "valor": "#5D616D",
              "linha": 83
            }
          ]
        }
      ],
      "linha": 79
    },
    {
      "chave": ".portal-cliente-atributo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-atributo .p-dropdown .p-dropdown-label",
          "alvo": "interno",
          "linhas": [
            86
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 87
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 88
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 89
            },
            {
              "prop": "color",
              "valor": "#000000",
              "linha": 90
            }
          ]
        }
      ],
      "linha": 86
    },
    {
      "chave": ".portal-cliente-placeholder-atributo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-placeholder-atributo .p-dropdown .p-dropdown-label.p-placeholder",
          "alvo": "interno",
          "linhas": [
            93
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 94
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 95
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 96
            },
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 97
            }
          ]
        }
      ],
      "linha": 93
    },
    {
      "chave": ".portal-cliente-botao-voltar",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-voltar .p-button",
          "alvo": "interno",
          "linhas": [
            100
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 101
            },
            {
              "prop": "font-size",
              "valor": "15px",
              "linha": 102
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 103
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 104
            }
          ]
        }
      ],
      "linha": 100
    },
    {
      "chave": ".portal-cliente-botao-proximo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-proximo .p-button",
          "alvo": "interno",
          "linhas": [
            107
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 108
            },
            {
              "prop": "font-size",
              "valor": "15px",
              "linha": 109
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 110
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 111
            }
          ]
        }
      ],
      "linha": 107
    },
    {
      "chave": ".portal-cliente-descricao-anexo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-descricao-anexo",
          "alvo": "proprio",
          "linhas": [
            114
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 115
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 116
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 117
            },
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 118
            }
          ]
        }
      ],
      "linha": 114
    },
    {
      "chave": ".portal-cliente-resumo-titulo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-resumo-titulo",
          "alvo": "proprio",
          "linhas": [
            121
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 122
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 123
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 124
            },
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 125
            }
          ]
        }
      ],
      "linha": 121
    },
    {
      "chave": ".portal-cliente-resumo-etapa",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-resumo-etapa",
          "alvo": "proprio",
          "linhas": [
            128
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 129
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 130
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 131
            },
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 132
            }
          ]
        }
      ],
      "linha": 128
    },
    {
      "chave": ".portal-cliente-resumo-botao-alterar",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-resumo-botao-alterar",
          "alvo": "proprio",
          "linhas": [
            135
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 136
            },
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 137
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 138
            },
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 139
            }
          ]
        }
      ],
      "linha": 135
    },
    {
      "chave": ".portal-cliente-resumo-atributo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-resumo-atributo",
          "alvo": "proprio",
          "linhas": [
            142
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 143
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 144
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 145
            },
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 146
            }
          ]
        }
      ],
      "linha": 142
    },
    {
      "chave": ".portal-cliente-resumo-rotulo",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-resumo-rotulo",
          "alvo": "proprio",
          "linhas": [
            149
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 150
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 151
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 152
            },
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 153
            }
          ]
        }
      ],
      "linha": 149
    },
    {
      "chave": ".p-steps",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-steps ul",
          "media": "@media (max-width: 576px)",
          "alvo": "interno",
          "linhas": [
            157
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "block",
              "linha": 158
            }
          ]
        }
      ],
      "linha": 157
    },
    {
      "chave": ".portal-cliente-anexo-tabela",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-anexo-tabela .p-datatable .p-datatable-tbody > tr > td",
          "alvo": "interno",
          "linhas": [
            162
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 163
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 164
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 165
            },
            {
              "prop": "color",
              "valor": "#3B404F",
              "linha": 166
            },
            {
              "prop": "max-width",
              "valor": "1rem",
              "linha": 167
            },
            {
              "prop": "overflow-wrap",
              "valor": "break-word",
              "linha": 168
            }
          ]
        },
        {
          "seletor": ".portal-cliente-anexo-tabela .p-datatable .p-datatable-tbody > tr > td .p-inputtext",
          "alvo": "interno",
          "linhas": [
            171
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 172
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 173
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 174
            },
            {
              "prop": "color",
              "valor": "#3B404F",
              "linha": 175
            },
            {
              "prop": "width",
              "valor": "100%",
              "linha": 176
            }
          ]
        },
        {
          "seletor": ".portal-cliente-anexo-tabela .p-datatable .p-datatable-thead > tr > th",
          "alvo": "interno",
          "linhas": [
            179
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 180
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 181
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 182
            },
            {
              "prop": "color",
              "valor": "#3B404F",
              "linha": 183
            }
          ]
        },
        {
          "seletor": ".portal-cliente-anexo-tabela i:hover",
          "alvo": "interno",
          "linhas": [
            1269
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 1270
            }
          ]
        }
      ],
      "linha": 162
    },
    {
      "chave": ".portal-cliente-agendamento-card",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-agendamento-card",
          "alvo": "proprio",
          "linhas": [
            186
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "solid 1px rgb(203, 213, 225)",
              "linha": 187
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 188
            },
            {
              "prop": "justify-content",
              "valor": "center",
              "linha": 189
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 190
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 191
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 192
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 193
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 194
            },
            {
              "prop": "height",
              "valor": "50px",
              "linha": 195
            },
            {
              "prop": "width",
              "valor": "90%",
              "linha": 196
            },
            {
              "prop": "margin",
              "valor": "0 10px 10px 0",
              "linha": 197
            }
          ]
        }
      ],
      "linha": 186
    },
    {
      "chave": ".p-button",
      "tipo": "global",
      "avisos": [
        {
          "tipo": "global-escondido",
          "titulo": "Ajuste global declarado junto de outra classe",
          "texto": "Na linha 1998 a parte \".p-button:enabled:focus\" está na mesma regra que \".btn-add-restrictions .p-button:focus\". Ela afeta todos os elementos do tipo, não só os da outra classe; parece não ter sido intencional.",
          "linhas": [
            1998
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".p-button.p-fileupload-choose",
          "alvo": "proprio",
          "linhas": [
            200
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "2rem",
              "linha": 201
            },
            {
              "prop": "height",
              "valor": "2rem",
              "linha": 202
            }
          ]
        },
        {
          "seletor": ".p-button:enabled:focus",
          "alvo": "proprio",
          "linhas": [
            1998
          ],
          "atributos": [
            {
              "prop": "outline",
              "valor": "none",
              "importante": true,
              "linha": 1999
            },
            {
              "prop": "box-shadow",
              "valor": "none",
              "importante": true,
              "linha": 2000
            }
          ]
        }
      ],
      "linha": 200
    },
    {
      "chave": ".portal-cliente-observacoes",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-observacoes .p-inputtext",
          "alvo": "interno",
          "linhas": [
            205
          ],
          "atributos": [
            {
              "prop": "resize",
              "valor": "vertical",
              "linha": 206
            }
          ]
        }
      ],
      "linha": 205
    },
    {
      "chave": ".p-image-preview-icon",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-image-preview-icon.p-icon",
          "alvo": "proprio",
          "linhas": [
            209
          ],
          "atributos": [
            {
              "prop": "scale",
              "valor": "1",
              "linha": 210
            }
          ]
        }
      ],
      "linha": 209
    },
    {
      "chave": ".portal-cliente-título-atendimento-criado",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            215
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".portal-cliente-título-atendimento-criado",
          "alvo": "proprio",
          "linhas": [
            213
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 214
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 215
            },
            {
              "prop": "font-size",
              "valor": "32px",
              "linha": 216
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 217
            }
          ]
        }
      ],
      "linha": 213
    },
    {
      "chave": ".portal-cliente-subtitulo-codigo-os",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            222
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".portal-cliente-subtitulo-codigo-os",
          "alvo": "proprio",
          "linhas": [
            220
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3E3939",
              "linha": 221
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 222
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 223
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 224
            }
          ]
        }
      ],
      "linha": 220
    },
    {
      "chave": ".uploadButton",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".uploadButton .p-button.p-fileupload-choose",
          "alvo": "interno",
          "linhas": [
            227
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "10rem",
              "linha": 228
            },
            {
              "prop": "height",
              "valor": "10rem",
              "linha": 229
            },
            {
              "prop": "background",
              "valor": "white",
              "linha": 230
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 231
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 232
            }
          ]
        }
      ],
      "linha": 227
    },
    {
      "chave": ".portal-cliente-botao-remover-anexo",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“Inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “Inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            236
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-remover-anexo .p-button",
          "alvo": "interno",
          "linhas": [
            235
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“Inter”, sans-serif",
              "linha": 236
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 237
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 238
            },
            {
              "prop": "color",
              "valor": "#A5A5A5",
              "linha": 239
            }
          ]
        }
      ],
      "linha": 235
    },
    {
      "chave": ".portal-cliente-botao-tentar-novamente",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“Inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “Inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            243
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-tentar-novamente .p-button",
          "alvo": "interno",
          "linhas": [
            242
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“Inter”, sans-serif",
              "linha": 243
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 244
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 245
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 246
            },
            {
              "prop": "padding",
              "valor": "0",
              "linha": 247
            }
          ]
        }
      ],
      "linha": 242
    },
    {
      "chave": ".cancel-button",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".cancel-button .p-button",
          "alvo": "interno",
          "linhas": [
            250
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#494F61",
              "linha": 251
            }
          ]
        }
      ],
      "linha": 250
    },
    {
      "chave": ".icon-attachment-status",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".icon-attachment-status img",
          "alvo": "interno",
          "linhas": [
            254
          ],
          "atributos": [
            {
              "prop": "max-width",
              "valor": "100%",
              "linha": 255
            }
          ]
        }
      ],
      "linha": 254
    },
    {
      "chave": ".osCard",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".osCard .p-card",
          "alvo": "interno",
          "linhas": [
            258
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 259
            },
            {
              "prop": "background",
              "valor": "var(--surface-card)",
              "linha": 260
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 261
            },
            {
              "prop": "margin-bottom",
              "valor": "1rem",
              "linha": 262
            }
          ]
        },
        {
          "seletor": ".osCard .p-card-content",
          "alvo": "interno",
          "linhas": [
            265
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 266
            }
          ]
        }
      ],
      "linha": 258
    },
    {
      "chave": ".bordered-card",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "sem-efeito",
          "titulo": "Borda sem estilo",
          "texto": "\"border-left: 3rem\" não diz o estilo da borda (solid, dashed...). Sem isso o estilo é \"none\" e a borda não aparece.",
          "linhas": [
            270
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".p-card .bordered-card",
          "alvo": "proprio",
          "linhas": [
            269
          ],
          "atributos": [
            {
              "prop": "border-left",
              "valor": "3rem",
              "linha": 270
            }
          ]
        }
      ],
      "linha": 269
    },
    {
      "chave": ".cto-card-location-btn",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".cto-card-location-btn .customer-portal-button-positive-no-color .p-button",
          "alvo": "interno",
          "linhas": [
            273
          ],
          "atributos": [
            {
              "prop": "padding-right",
              "valor": "0",
              "linha": 274
            },
            {
              "prop": "padding-left",
              "valor": "0",
              "linha": 275
            }
          ]
        }
      ],
      "linha": 273
    },
    {
      "chave": ".customer-portal-button-positive-no-color",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".customer-portal-button-positive-no-color.p-button",
          "alvo": "proprio",
          "linhas": [
            278
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 280
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 281
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 282
            }
          ]
        },
        {
          "seletor": ".customer-portal-button-positive-no-color .p-button",
          "alvo": "interno",
          "linhas": [
            278
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 280
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 281
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 282
            }
          ]
        }
      ],
      "linha": 278
    },
    {
      "chave": ".customer-portal-button-positive-color",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".customer-portal-button-positive-color .p-button",
          "alvo": "interno",
          "linhas": [
            285
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FFFFFF",
              "linha": 286
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 287
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 288
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 289
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 290
            }
          ]
        }
      ],
      "linha": 285
    },
    {
      "chave": ".customer-portal-button-positive",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".customer-portal-button-positive .p-button",
          "alvo": "interno",
          "linhas": [
            293
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#3B82F6",
              "linha": 294
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 295
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 296
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 297
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 298
            }
          ]
        }
      ],
      "linha": 293
    },
    {
      "chave": ".customer-portal-button-negative",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".customer-portal-button-negative.p-button",
          "alvo": "proprio",
          "linhas": [
            301
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 302
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 303
            },
            {
              "prop": "color",
              "valor": "#EF4444",
              "linha": 304
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 305
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 306
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 307
            }
          ]
        }
      ],
      "linha": 301
    },
    {
      "chave": ".customer-portal-button-cancel",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".customer-portal-button-cancel .p-button",
          "alvo": "interno",
          "linhas": [
            310
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 311
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 312
            },
            {
              "prop": "color",
              "valor": "#4b5563",
              "linha": 313
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 314
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 315
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 316
            }
          ]
        }
      ],
      "linha": 310
    },
    {
      "chave": ".unfocusable",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".unfocusable .p-button",
          "alvo": "interno",
          "linhas": [
            319
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "default",
              "importante": true,
              "linha": 320
            },
            {
              "prop": "pointer-events",
              "valor": "none",
              "linha": 321
            },
            {
              "prop": "opacity",
              "valor": "0.7",
              "linha": 322
            }
          ]
        }
      ],
      "linha": 319
    },
    {
      "chave": ".positive-tags",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".positive-tags\" aparece 2 vezes (linhas 325, 469) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            325,
            469
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".positive-tags",
          "alvo": "proprio",
          "linhas": [
            325,
            469
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#1F62A4",
              "linha": 470,
              "anteriores": [
                {
                  "valor": "#1F62A4",
                  "linha": 326,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border",
              "valor": "1px solid #1F62A4",
              "linha": 471,
              "anteriores": [
                {
                  "valor": "1px solid #1F62A4",
                  "linha": 327,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 472,
              "anteriores": [
                {
                  "valor": "6px",
                  "linha": 328,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 473,
              "anteriores": [
                {
                  "valor": "12px",
                  "linha": 329,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 474,
              "anteriores": [
                {
                  "valor": "normal",
                  "linha": 330,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background-color",
              "valor": "#ffffff",
              "linha": 475,
              "anteriores": [
                {
                  "valor": "#ffffff",
                  "linha": 331,
                  "importante": false
                }
              ]
            },
            {
              "prop": "padding",
              "valor": "2px",
              "linha": 476,
              "anteriores": [
                {
                  "valor": "2px",
                  "linha": 332,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 325
    },
    {
      "chave": ".negative-tags",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".negative-tags\" aparece 2 vezes (linhas 335, 479) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            335,
            479
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".negative-tags",
          "alvo": "proprio",
          "linhas": [
            335,
            479
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#E04C53",
              "linha": 480,
              "anteriores": [
                {
                  "valor": "#E04C53",
                  "linha": 336,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border",
              "valor": "1px solid #E04C53",
              "linha": 481,
              "anteriores": [
                {
                  "valor": "1px solid #E04C53",
                  "linha": 337,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 482,
              "anteriores": [
                {
                  "valor": "6px",
                  "linha": 338,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 483,
              "anteriores": [
                {
                  "valor": "12px",
                  "linha": 339,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 484,
              "anteriores": [
                {
                  "valor": "normal",
                  "linha": 340,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background-color",
              "valor": "#ffffff",
              "linha": 485,
              "anteriores": [
                {
                  "valor": "#ffffff",
                  "linha": 341,
                  "importante": false
                }
              ]
            },
            {
              "prop": "padding",
              "valor": "2px",
              "linha": 486,
              "anteriores": [
                {
                  "valor": "2px",
                  "linha": 342,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 335
    },
    {
      "chave": ".button-neutral",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".button-neutral .p-button",
          "alvo": "interno",
          "linhas": [
            345
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3D3D3D",
              "linha": 346
            },
            {
              "prop": "border",
              "valor": "1px solid #EBE8E8",
              "linha": 347
            },
            {
              "prop": "font-family",
              "valor": "Inter, sans-serif",
              "linha": 348
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 349
            },
            {
              "prop": "height",
              "valor": "40px",
              "linha": 350
            }
          ]
        }
      ],
      "linha": 345
    },
    {
      "chave": ".portal-cliente-botao-cancelar-os",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-cancelar-os .p-button",
          "alvo": "interno",
          "linhas": [
            354
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#EF4444",
              "linha": 355
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 356
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 357
            }
          ]
        }
      ],
      "linha": 354
    },
    {
      "chave": ".portal-cliente-botao-reagendar-os",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-reagendar-os .p-button",
          "alvo": "interno",
          "linhas": [
            360
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#3B82F6",
              "linha": 361
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 362
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 363
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 364
            }
          ]
        }
      ],
      "linha": 360
    },
    {
      "chave": ".portal-cliente-botao-agendar-os",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-agendar-os .p-button",
          "alvo": "interno",
          "linhas": [
            367
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#3B82F6",
              "linha": 368
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 369
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 370
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 371
            }
          ]
        }
      ],
      "linha": 367
    },
    {
      "chave": ".portal-cliente-botao-ver-mais-info",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“Inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “Inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            375
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-ver-mais-info .p-button",
          "alvo": "interno",
          "linhas": [
            374
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“Inter”, sans-serif",
              "linha": 375
            },
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 376
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 377
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 378
            }
          ]
        }
      ],
      "linha": 374
    },
    {
      "chave": ".portal-cliente-botao-ligar",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".portal-cliente-botao-ligar .p-button",
          "alvo": "interno",
          "linhas": [
            381
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 382
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 383
            },
            {
              "prop": "width",
              "valor": "100%",
              "linha": 384
            }
          ]
        }
      ],
      "linha": 381
    },
    {
      "chave": ".portal-cliente-label-titulo",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“Inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “Inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            388
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".portal-cliente-label-titulo",
          "alvo": "proprio",
          "linhas": [
            387
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“Inter”, sans-serif",
              "linha": 388
            },
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 389
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 390
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 391
            }
          ]
        }
      ],
      "linha": 387
    },
    {
      "chave": ".status-so-tag",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".status-so-tag",
          "alvo": "proprio",
          "linhas": [
            394
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 395
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 396
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 397
            },
            {
              "prop": "padding",
              "valor": "0 7px",
              "linha": 398
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 399
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 400
            },
            {
              "prop": "height",
              "valor": "25px",
              "linha": 401
            },
            {
              "prop": "width",
              "valor": "fit-content",
              "linha": 402
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 403
            }
          ]
        }
      ],
      "linha": 394
    },
    {
      "chave": ".status-so-tag-minified",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".status-so-tag-minified",
          "alvo": "proprio",
          "linhas": [
            406
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "5px",
              "linha": 407
            },
            {
              "prop": "margin-right",
              "valor": "3px",
              "linha": 408
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 409
            },
            {
              "prop": "width",
              "valor": "40px",
              "linha": 410
            },
            {
              "prop": "height",
              "valor": "2px",
              "linha": 411
            }
          ]
        }
      ],
      "linha": 406
    },
    {
      "chave": ".serviceorder-status-tag-not-found",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-not-found",
          "alvo": "proprio",
          "linhas": [
            414
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#7F7F7F",
              "linha": 415
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 416
            }
          ]
        }
      ],
      "linha": 414
    },
    {
      "chave": ".serviceorder-status-tag-opened",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-opened",
          "alvo": "proprio",
          "linhas": [
            419
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#D2E1F9",
              "linha": 420
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 421
            }
          ]
        }
      ],
      "linha": 419
    },
    {
      "chave": ".serviceorder-status-tag-scheduled",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-scheduled",
          "alvo": "proprio",
          "linhas": [
            424
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#CCF3D8",
              "linha": 425
            },
            {
              "prop": "color",
              "valor": "#437E50",
              "linha": 426
            }
          ]
        }
      ],
      "linha": 424
    },
    {
      "chave": ".serviceorder-status-tag-on-the-go",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-on-the-go",
          "alvo": "proprio",
          "linhas": [
            429
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FFF5DA",
              "linha": 430
            },
            {
              "prop": "color",
              "valor": "#FF8A00",
              "linha": 431
            }
          ]
        }
      ],
      "linha": 429
    },
    {
      "chave": ".serviceorder-status-tag-in-execution",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-in-execution",
          "alvo": "proprio",
          "linhas": [
            434
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#ECE0FF",
              "linha": 435
            },
            {
              "prop": "color",
              "valor": "#7B52BE",
              "linha": 436
            }
          ]
        }
      ],
      "linha": 434
    },
    {
      "chave": ".serviceorder-status-tag-pending-closure",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-pending-closure",
          "alvo": "proprio",
          "linhas": [
            439
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FFB4B4",
              "linha": 440
            },
            {
              "prop": "color",
              "valor": "#BC2A0A",
              "linha": 441
            }
          ]
        }
      ],
      "linha": 439
    },
    {
      "chave": ".serviceorder-status-tag-closed",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".serviceorder-status-tag-closed",
          "alvo": "proprio",
          "linhas": [
            444
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#E1E6E2",
              "linha": 445
            },
            {
              "prop": "color",
              "valor": "#898989",
              "linha": 446
            }
          ]
        }
      ],
      "linha": 444
    },
    {
      "chave": ".backgroundColor",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".backgroundColor",
          "alvo": "proprio",
          "linhas": [
            449
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#F9FAFC",
              "linha": 451
            }
          ]
        }
      ],
      "linha": 449
    },
    {
      "chave": ".heading-1",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".heading-1",
          "alvo": "proprio",
          "linhas": [
            454
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'inter', sans-serif",
              "linha": 455
            },
            {
              "prop": "font-size",
              "valor": "48px",
              "linha": 456
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 457
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 458
            }
          ]
        }
      ],
      "linha": 454
    },
    {
      "chave": ".heading-1-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            463
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-1-regular-gray",
          "alvo": "proprio",
          "linhas": [
            461
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 462
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 463
            },
            {
              "prop": "font-size",
              "valor": "48px",
              "linha": 464
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 465
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 466
            }
          ]
        }
      ],
      "linha": 461
    },
    {
      "chave": ".heading-2",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            490
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-2",
          "alvo": "proprio",
          "linhas": [
            489
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 490
            },
            {
              "prop": "font-size",
              "valor": "36px",
              "linha": 491
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 492
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 493
            }
          ]
        }
      ],
      "linha": 489
    },
    {
      "chave": ".heading-2-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            498
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-2-regular-gray",
          "alvo": "proprio",
          "linhas": [
            496
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 497
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 498
            },
            {
              "prop": "font-size",
              "valor": "36px",
              "linha": 499
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 500
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 501
            }
          ]
        }
      ],
      "linha": 496
    },
    {
      "chave": ".heading-3",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            505
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-3",
          "alvo": "proprio",
          "linhas": [
            504
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 505
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 506
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 507
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 508
            }
          ]
        }
      ],
      "linha": 504
    },
    {
      "chave": ".heading-3-regular-grey",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            513
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-3-regular-grey",
          "alvo": "proprio",
          "linhas": [
            511
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 512
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 513
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 514
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 515
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 516
            }
          ]
        }
      ],
      "linha": 511
    },
    {
      "chave": ".heading-4",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            520
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-4",
          "alvo": "proprio",
          "linhas": [
            519
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 520
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 521
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 522
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 523
            }
          ]
        }
      ],
      "linha": 519
    },
    {
      "chave": ".heading-4-regular-gray",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".heading-4-regular-gray",
          "alvo": "proprio",
          "linhas": [
            526
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 527
            },
            {
              "prop": "font-family",
              "valor": "'inter', sans-serif",
              "linha": 528
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 529
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 530
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 531
            }
          ]
        }
      ],
      "linha": 526
    },
    {
      "chave": ".heading-5",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            535
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-5",
          "alvo": "proprio",
          "linhas": [
            534
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 535
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 536
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 537
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 538
            }
          ]
        }
      ],
      "linha": 534
    },
    {
      "chave": ".heading-5-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            543
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-5-regular-gray",
          "alvo": "proprio",
          "linhas": [
            541
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 542
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 543
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 544
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 545
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 546
            }
          ]
        }
      ],
      "linha": 541
    },
    {
      "chave": ".heading-5-bold-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada",
          "titulo": "Declarada mais de uma vez com valores diferentes",
          "texto": "\".heading-5-bold-gray\" aparece 3 vezes (linhas 549, 2078, 2154). Quando o mesmo atributo se repete, vale o da última declaração.",
          "detalhes": [
            "font-size: 20px (linha 552) → 24px (linha 2081) → 24px (linha 2157, é o que vale)",
            "font-weight: bold (linha 553) → 700 (linha 2082) → 700 (linha 2158, é o que vale)"
          ],
          "linhas": [
            549,
            2078,
            2154
          ]
        },
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            2156
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-5-bold-gray",
          "alvo": "proprio",
          "linhas": [
            549,
            2078,
            2154
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 2155,
              "anteriores": [
                {
                  "valor": "#303030",
                  "linha": 550,
                  "importante": false
                },
                {
                  "valor": "#303030",
                  "linha": 2079,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 2156,
              "anteriores": [
                {
                  "valor": "“inter”, sans-serif",
                  "linha": 551,
                  "importante": false
                },
                {
                  "valor": "“inter”, sans-serif",
                  "linha": 2080,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 2157,
              "anteriores": [
                {
                  "valor": "20px",
                  "linha": 552,
                  "importante": false
                },
                {
                  "valor": "24px",
                  "linha": 2081,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 2158,
              "anteriores": [
                {
                  "valor": "bold",
                  "linha": 553,
                  "importante": false
                },
                {
                  "valor": "700",
                  "linha": 2082,
                  "importante": false
                }
              ]
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 2159,
              "anteriores": [
                {
                  "valor": "0",
                  "linha": 554,
                  "importante": false
                },
                {
                  "valor": "0",
                  "linha": 2083,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 549
    },
    {
      "chave": ".heading-6",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".heading-6",
          "alvo": "proprio",
          "linhas": [
            557
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'inter', sans-serif",
              "linha": 558
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 559
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 560
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 561
            }
          ]
        }
      ],
      "linha": 557
    },
    {
      "chave": ".heading-6-primary-blue",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".heading-6-primary-blue",
          "alvo": "proprio",
          "linhas": [
            564
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 565
            },
            {
              "prop": "font-family",
              "valor": "'inter', sans-serif",
              "linha": 566
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 567
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 568
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 569
            }
          ]
        }
      ],
      "linha": 564
    },
    {
      "chave": ".heading-6-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            574
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-6-regular-gray",
          "alvo": "proprio",
          "linhas": [
            572
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 573
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 574
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 575
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 576
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 577
            }
          ]
        }
      ],
      "linha": 572
    },
    {
      "chave": ".heading-7",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            581
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-7",
          "alvo": "proprio",
          "linhas": [
            580
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 581
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 582
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 583
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 584
            }
          ]
        }
      ],
      "linha": 580
    },
    {
      "chave": ".heading-7-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            589
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".heading-7-regular-gray",
          "alvo": "proprio",
          "linhas": [
            587
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 588
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 589
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 590
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 591
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 592
            }
          ]
        }
      ],
      "linha": 587
    },
    {
      "chave": ".heading-8-regular-gray",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".heading-8-regular-gray",
          "alvo": "proprio",
          "linhas": [
            595
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 596
            },
            {
              "prop": "font-family",
              "valor": "'inter', sans-serif",
              "linha": 597
            },
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 598
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 599
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 600
            }
          ]
        }
      ],
      "linha": 595
    },
    {
      "chave": ".body",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada",
          "titulo": "Declarada mais de uma vez com valores diferentes",
          "texto": "\".body\" aparece 2 vezes (linhas 603, 1067). Quando o mesmo atributo se repete, vale o da última declaração.",
          "detalhes": [
            "font-family: “inter”, sans-serif (linha 604) → inter, sans-serif (linha 1068, é o que vale)",
            "font-size: 16px (linha 605) → 10px (linha 1069, é o que vale)",
            "font-weight: normal (linha 606) → 600 (linha 1070, é o que vale)"
          ],
          "linhas": [
            603,
            1067
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".body",
          "alvo": "proprio",
          "linhas": [
            603,
            1067
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 1068,
              "anteriores": [
                {
                  "valor": "“inter”, sans-serif",
                  "linha": 604,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "10px",
              "linha": 1069,
              "anteriores": [
                {
                  "valor": "16px",
                  "linha": 605,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 1070,
              "anteriores": [
                {
                  "valor": "normal",
                  "linha": 606,
                  "importante": false
                }
              ]
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 607
            },
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1071
            }
          ]
        }
      ],
      "linha": 603
    },
    {
      "chave": ".body-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            612
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".body-regular-gray",
          "alvo": "proprio",
          "linhas": [
            610
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#353535",
              "linha": 611
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 612
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 613
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 614
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 615
            },
            {
              "prop": "line-height",
              "valor": "160%",
              "linha": 616
            }
          ]
        }
      ],
      "linha": 610
    },
    {
      "chave": ".body-regular-gray-lighter",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            621
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".body-regular-gray-lighter",
          "alvo": "proprio",
          "linhas": [
            619
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 620
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 621
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 622
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 623
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 624
            }
          ]
        }
      ],
      "linha": 619
    },
    {
      "chave": ".body-light-gray",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".body-light-gray",
          "alvo": "proprio",
          "linhas": [
            627
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 628
            },
            {
              "prop": "font-family",
              "valor": "\"inter\", sans-serif",
              "linha": 629
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 630
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 631
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 632
            }
          ]
        }
      ],
      "linha": 627
    },
    {
      "chave": ".body-bold",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            636
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".body-bold",
          "alvo": "proprio",
          "linhas": [
            635
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 636
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 637
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 638
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 639
            }
          ]
        }
      ],
      "linha": 635
    },
    {
      "chave": ".body-bold-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            644
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".body-bold-regular-gray",
          "alvo": "proprio",
          "linhas": [
            642
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 643
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 644
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 645
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 646
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 647
            }
          ]
        }
      ],
      "linha": 642
    },
    {
      "chave": ".body-bold-light-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            652
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".body-bold-light-gray",
          "alvo": "proprio",
          "linhas": [
            650
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 651
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 652
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 653
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 654
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 655
            }
          ]
        }
      ],
      "linha": 650
    },
    {
      "chave": ".small",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            660
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".small",
          "alvo": "proprio",
          "linhas": [
            659
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 660
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 661
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 662
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 663
            }
          ]
        }
      ],
      "linha": 659
    },
    {
      "chave": ".small-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada",
          "titulo": "Declarada mais de uma vez com valores diferentes",
          "texto": "\".small-regular-gray\" aparece 3 vezes (linhas 666, 2130, 2206). Quando o mesmo atributo se repete, vale o da última declaração.",
          "detalhes": [
            "font-weight: 500 (linha 670) → normal (linha 2134) → normal (linha 2210, é o que vale)"
          ],
          "linhas": [
            666,
            2130,
            2206
          ]
        },
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            2208
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".small-regular-gray",
          "alvo": "proprio",
          "linhas": [
            666,
            2130,
            2206
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 2207,
              "anteriores": [
                {
                  "valor": "#303030",
                  "linha": 667,
                  "importante": false
                },
                {
                  "valor": "#303030",
                  "linha": 2131,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 2208,
              "anteriores": [
                {
                  "valor": "“inter”, sans-serif",
                  "linha": 668,
                  "importante": false
                },
                {
                  "valor": "“inter”, sans-serif",
                  "linha": 2132,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2209,
              "anteriores": [
                {
                  "valor": "14px",
                  "linha": 669,
                  "importante": false
                },
                {
                  "valor": "14px",
                  "linha": 2133,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 2210,
              "anteriores": [
                {
                  "valor": "500",
                  "linha": 670,
                  "importante": false
                },
                {
                  "valor": "normal",
                  "linha": 2134,
                  "importante": false
                }
              ]
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 2211,
              "anteriores": [
                {
                  "valor": "0",
                  "linha": 671,
                  "importante": false
                },
                {
                  "valor": "0",
                  "linha": 2135,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 666
    },
    {
      "chave": ".small-light-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            676
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".small-light-gray",
          "alvo": "proprio",
          "linhas": [
            674
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 675
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 676
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 677
            },
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 678
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 679
            }
          ]
        }
      ],
      "linha": 674
    },
    {
      "chave": ".small-bold",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            683
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".small-bold",
          "alvo": "proprio",
          "linhas": [
            682
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 683
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 684
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 685
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 686
            }
          ]
        }
      ],
      "linha": 682
    },
    {
      "chave": ".small-bold-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            691
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".small-bold-regular-gray",
          "alvo": "proprio",
          "linhas": [
            689
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 690
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 691
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 692
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 693
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 694
            }
          ]
        }
      ],
      "linha": 689
    },
    {
      "chave": ".small-bold-light-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            699
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".small-bold-light-gray",
          "alvo": "proprio",
          "linhas": [
            697
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 698
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 699
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 700
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 701
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 702
            }
          ]
        }
      ],
      "linha": 697
    },
    {
      "chave": ".mini",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            707
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini",
          "alvo": "proprio",
          "linhas": [
            706
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 707
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 708
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 709
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 710
            }
          ]
        }
      ],
      "linha": 706
    },
    {
      "chave": ".mini-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            715
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini-regular-gray",
          "alvo": "proprio",
          "linhas": [
            713
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 714
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 715
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 716
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 717
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 718
            }
          ]
        }
      ],
      "linha": 713
    },
    {
      "chave": ".mini-light-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            723
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini-light-gray",
          "alvo": "proprio",
          "linhas": [
            721
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 722
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 723
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 724
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 725
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 726
            }
          ]
        }
      ],
      "linha": 721
    },
    {
      "chave": ".mini-bold",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            731
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini-bold",
          "alvo": "proprio",
          "linhas": [
            730
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 731
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 732
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 733
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 734
            }
          ]
        }
      ],
      "linha": 730
    },
    {
      "chave": ".mini-bold-regular-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            739
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini-bold-regular-gray",
          "alvo": "proprio",
          "linhas": [
            737
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 738
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 739
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 740
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 741
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 742
            }
          ]
        }
      ],
      "linha": 737
    },
    {
      "chave": ".mini-bold-light-gray",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            747
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini-bold-light-gray",
          "alvo": "proprio",
          "linhas": [
            745
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 746
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 747
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 748
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 749
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 750
            }
          ]
        }
      ],
      "linha": 745
    },
    {
      "chave": ".mini-bold-primary-blue",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            755
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".mini-bold-primary-blue",
          "alvo": "proprio",
          "linhas": [
            753
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 754
            },
            {
              "prop": "font-family",
              "valor": "“inter”, sans-serif",
              "linha": 755
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 756
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 757
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 758
            }
          ]
        }
      ],
      "linha": 753
    },
    {
      "chave": ".btn",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn",
          "alvo": "proprio",
          "linhas": [
            761
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "2px",
              "linha": 762
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 763
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 764
            },
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 765
            }
          ]
        }
      ],
      "linha": 761
    },
    {
      "chave": ".btn-positive",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-positive",
          "alvo": "proprio",
          "linhas": [
            768
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#3B82F6",
              "linha": 769
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 770
            }
          ]
        }
      ],
      "linha": 768
    },
    {
      "chave": ".btn-negative",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-negative",
          "alvo": "proprio",
          "linhas": [
            773
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#EF4444",
              "linha": 774
            },
            {
              "prop": "color",
              "valor": "#EF4444",
              "linha": 775
            }
          ]
        }
      ],
      "linha": 773
    },
    {
      "chave": ".btn-neutral",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-neutral",
          "alvo": "proprio",
          "linhas": [
            778
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#7A7A7A",
              "linha": 779
            }
          ]
        }
      ],
      "linha": 778
    },
    {
      "chave": ".heading-8-bold-regular-gray",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".heading-8-bold-regular-gray",
          "alvo": "proprio",
          "linhas": [
            782
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 783
            },
            {
              "prop": "font-family",
              "valor": "'inter', sans-serif",
              "linha": 784
            },
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 785
            },
            {
              "prop": "font-weight",
              "valor": "700",
              "linha": 786
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 787
            },
            {
              "prop": "padding-right",
              "valor": "10px",
              "linha": 788
            }
          ]
        }
      ],
      "linha": 782
    },
    {
      "chave": ".noTextTransform",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".noTextTransform",
          "alvo": "proprio",
          "linhas": [
            791
          ],
          "atributos": [
            {
              "prop": "text-transform",
              "valor": "none",
              "linha": 792
            }
          ]
        }
      ],
      "linha": 791
    },
    {
      "chave": ".cardColumn",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".cardColumn i",
          "alvo": "interno",
          "linhas": [
            795
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 796
            }
          ]
        }
      ],
      "linha": 795
    },
    {
      "chave": ".card-medium",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".card-medium i",
          "alvo": "interno",
          "linhas": [
            799
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 800
            }
          ]
        },
        {
          "seletor": ".card-medium .p-button",
          "alvo": "interno",
          "linhas": [
            803
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 804
            },
            {
              "prop": "padding",
              "valor": "5px 15px",
              "linha": 805
            }
          ]
        }
      ],
      "linha": 799
    },
    {
      "chave": ".iam-panel",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".iam-panel .body-primary-blue",
          "alvo": "interno",
          "linhas": [
            808
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 809
            },
            {
              "prop": "font-family",
              "valor": "\"inter\", sans-serif",
              "linha": 810
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 811
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 812
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 813
            }
          ]
        },
        {
          "seletor": ".iam-panel .btn-outlined-blue button",
          "alvo": "interno",
          "linhas": [
            816
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #3B82F6",
              "linha": 817
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 818
            },
            {
              "prop": "font-family",
              "valor": "Arial, sans-serif",
              "linha": 819
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 820
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 821
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 822
            },
            {
              "prop": "letter-spacing",
              "valor": "0",
              "linha": 823
            },
            {
              "prop": "background-color",
              "valor": "#FFFFFF",
              "linha": 824
            }
          ]
        },
        {
          "seletor": ".iam-panel .save .p-button",
          "alvo": "interno",
          "linhas": [
            827
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.5rem 1.5rem",
              "linha": 830
            }
          ]
        },
        {
          "seletor": ".iam-panel .cancel .p-button",
          "alvo": "interno",
          "linhas": [
            827
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.5rem 1.5rem",
              "linha": 830
            }
          ]
        },
        {
          "seletor": ".iam-panel .thinner-button .p-button",
          "alvo": "interno",
          "linhas": [
            827
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.5rem 1.5rem",
              "linha": 830
            }
          ]
        },
        {
          "seletor": ".iam-panel .field",
          "alvo": "interno",
          "linhas": [
            833
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 834
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 835
            },
            {
              "prop": "width",
              "valor": "100%",
              "linha": 836
            }
          ]
        },
        {
          "seletor": ".iam-panel .field label",
          "alvo": "interno",
          "linhas": [
            839
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 840
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 841
            },
            {
              "prop": "color",
              "valor": "#6B7280",
              "linha": 842
            },
            {
              "prop": "margin",
              "valor": "0",
              "linha": 843
            },
            {
              "prop": "margin-bottom",
              "valor": "4px",
              "linha": 844
            }
          ]
        },
        {
          "seletor": ".iam-panel .field-value",
          "alvo": "interno",
          "linhas": [
            847
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 848
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 849
            },
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 850
            }
          ]
        },
        {
          "seletor": ".iam-panel .p-sidebar-bottom",
          "alvo": "interno",
          "linhas": [
            853
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 854
            },
            {
              "prop": "height",
              "valor": "fit-content",
              "linha": 855
            }
          ]
        },
        {
          "seletor": ".iam-panel .add-modal .content",
          "alvo": "interno",
          "linhas": [
            858
          ],
          "atributos": [
            {
              "prop": "position",
              "valor": "relative",
              "linha": 859
            },
            {
              "prop": "height",
              "valor": "40rem",
              "linha": 860
            },
            {
              "prop": "overflow-y",
              "valor": "auto",
              "linha": 861
            }
          ]
        },
        {
          "seletor": ".iam-panel .p-sidebar-header",
          "alvo": "interno",
          "linhas": [
            864
          ],
          "atributos": [
            {
              "prop": "align-items",
              "valor": "start",
              "linha": 865
            }
          ]
        },
        {
          "seletor": ".iam-panel .add-group-button .p-button",
          "alvo": "interno",
          "linhas": [
            868
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0",
              "linha": 870
            },
            {
              "prop": "height",
              "valor": "fit-content",
              "linha": 871
            }
          ]
        },
        {
          "seletor": ".iam-panel .close-group-modal .p-button",
          "alvo": "interno",
          "linhas": [
            868
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0",
              "linha": 870
            },
            {
              "prop": "height",
              "valor": "fit-content",
              "linha": 871
            }
          ]
        },
        {
          "seletor": ".iam-panel .close-group-modal .p-button.p-button-icon-only",
          "alvo": "interno",
          "linhas": [
            874
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "fit-content",
              "linha": 875
            }
          ]
        },
        {
          "seletor": ".iam-panel .add-group-button .p-button:focus",
          "alvo": "interno",
          "linhas": [
            878
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 880
            },
            {
              "prop": "box-shadow",
              "valor": "none",
              "linha": 881
            }
          ]
        },
        {
          "seletor": ".iam-panel .close-group-modal .p-button:focus",
          "alvo": "interno",
          "linhas": [
            878
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 880
            },
            {
              "prop": "box-shadow",
              "valor": "none",
              "linha": 881
            }
          ]
        },
        {
          "seletor": ".iam-panel .filter .p-button",
          "alvo": "interno",
          "linhas": [
            884
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.75rem 0.6rem",
              "linha": 885
            }
          ]
        },
        {
          "seletor": ".iam-panel .filter-header",
          "alvo": "interno",
          "linhas": [
            888
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "200px",
              "linha": 889
            }
          ]
        },
        {
          "seletor": ".iam-panel ::-webkit-scrollbar",
          "alvo": "interno",
          "linhas": [
            894
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "10px",
              "linha": 895
            }
          ]
        },
        {
          "seletor": ".iam-panel ::-webkit-scrollbar-track",
          "alvo": "interno",
          "linhas": [
            900
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#f1f1f1",
              "linha": 901
            }
          ]
        },
        {
          "seletor": ".iam-panel ::-webkit-scrollbar-thumb",
          "alvo": "interno",
          "linhas": [
            906
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#bcbcbc",
              "linha": 907
            }
          ]
        },
        {
          "seletor": ".iam-panel ::-webkit-scrollbar-thumb:hover",
          "alvo": "interno",
          "linhas": [
            912
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#555",
              "linha": 913
            }
          ]
        }
      ],
      "linha": 808
    },
    {
      "chave": ".tag-status-in-operation",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".tag-status-in-operation",
          "alvo": "proprio",
          "linhas": [
            916
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#00B67D",
              "linha": 917
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 918
            },
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 919
            },
            {
              "prop": "font-size",
              "valor": "17px",
              "linha": 920
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 921
            },
            {
              "prop": "padding",
              "valor": "7px",
              "linha": 922
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 923
            }
          ]
        }
      ],
      "linha": 916
    },
    {
      "chave": ".tag-status-downtime",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".tag-status-downtime",
          "alvo": "proprio",
          "linhas": [
            926
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#BC2A0A",
              "linha": 927
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 928
            },
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 929
            },
            {
              "prop": "font-size",
              "valor": "17px",
              "linha": 930
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 931
            },
            {
              "prop": "padding",
              "valor": "7px",
              "linha": 932
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 933
            }
          ]
        }
      ],
      "linha": 926
    },
    {
      "chave": ".title",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".title",
          "alvo": "proprio",
          "linhas": [
            957
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 958
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 959
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 960
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 961
            }
          ]
        }
      ],
      "linha": 957
    },
    {
      "chave": ".description",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".description",
          "alvo": "proprio",
          "linhas": [
            965
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 966
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 967
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 968
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 969
            }
          ]
        }
      ],
      "linha": 965
    },
    {
      "chave": ".sub-title",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".sub-title",
          "alvo": "proprio",
          "linhas": [
            973
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 974
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 975
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 976
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 977
            }
          ]
        }
      ],
      "linha": 973
    },
    {
      "chave": ".highlighted-large-inputs",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".highlighted-large-inputs",
          "alvo": "proprio",
          "linhas": [
            981
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 982
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 983
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 984
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 985
            }
          ]
        }
      ],
      "linha": 981
    },
    {
      "chave": ".highlighted-extra-large-inputs",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".highlighted-extra-large-inputs",
          "alvo": "proprio",
          "linhas": [
            989
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 990
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 991
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 992
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 993
            }
          ]
        }
      ],
      "linha": 989
    },
    {
      "chave": ".large-inputs",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".large-inputs",
          "alvo": "proprio",
          "linhas": [
            997
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 998
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 999
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1000
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 1001
            }
          ]
        }
      ],
      "linha": 997
    },
    {
      "chave": ".label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label",
          "alvo": "proprio",
          "linhas": [
            1004
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 1005
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1006
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 1007
            },
            {
              "prop": "color",
              "valor": "#4b5563",
              "linha": 1008
            }
          ]
        }
      ],
      "linha": 1004
    },
    {
      "chave": ".label-filter",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label-filter",
          "alvo": "proprio",
          "linhas": [
            1011
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1012
            },
            {
              "prop": "font-family",
              "valor": "Geist",
              "linha": 1013
            },
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 1014
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1015
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1016
            }
          ]
        }
      ],
      "linha": 1011
    },
    {
      "chave": ".input",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".input\" aparece 2 vezes (linhas 1019, 1469) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            1019,
            1469
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".input",
          "alvo": "proprio",
          "linhas": [
            1019,
            1469
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 1470,
              "anteriores": [
                {
                  "valor": "inter, sans-serif",
                  "linha": 1020,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1471,
              "anteriores": [
                {
                  "valor": "12px",
                  "linha": 1021,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1472,
              "anteriores": [
                {
                  "valor": "500",
                  "linha": 1022,
                  "importante": false
                }
              ]
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 1473,
              "anteriores": [
                {
                  "valor": "#525050",
                  "linha": 1023,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 1019
    },
    {
      "chave": ".masterplan-ordering",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".masterplan-ordering .input",
          "alvo": "interno",
          "linhas": [
            1026
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1027
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1028
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1029
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1030
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1031
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1032
            }
          ]
        },
        {
          "seletor": ".masterplan-ordering .ordering",
          "alvo": "interno",
          "linhas": [
            1035
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "30px",
              "linha": 1036
            },
            {
              "prop": "margin-top",
              "valor": "6px",
              "linha": 1037
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 1038
            },
            {
              "prop": "border",
              "valor": "1px solid #E6E7E9",
              "linha": 1039
            },
            {
              "prop": "background",
              "valor": "#FFF",
              "linha": 1040
            },
            {
              "prop": "box-shadow",
              "valor": "0 4px 4px 0 rgba(0, 0, 0, 0.05)",
              "linha": 1041
            }
          ]
        }
      ],
      "linha": 1026
    },
    {
      "chave": ".label-form",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label-form",
          "alvo": "proprio",
          "linhas": [
            1044
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#314158",
              "linha": 1045
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1046
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1047
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1048
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1049
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1050
            }
          ]
        }
      ],
      "linha": 1044
    },
    {
      "chave": ".details",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".details",
          "alvo": "proprio",
          "linhas": [
            1053
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 1054
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1055
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1056
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 1057
            },
            {
              "prop": "font-style",
              "valor": "italic",
              "linha": 1058
            }
          ]
        }
      ],
      "linha": 1053
    },
    {
      "chave": ".description-small",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".description-small",
          "alvo": "proprio",
          "linhas": [
            1061
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1062
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1063
            },
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1064
            }
          ]
        }
      ],
      "linha": 1061
    },
    {
      "chave": ".dashboard-equipment-accordion",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".dashboard-equipment-accordion .p-accordion .p-accordion-header .p-accordion-header-link",
          "alvo": "interno",
          "linhas": [
            1074
          ],
          "atributos": [
            {
              "prop": "justify-content",
              "valor": "end",
              "linha": 1075
            },
            {
              "prop": "outline",
              "valor": "none",
              "linha": 1076
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 1077
            },
            {
              "prop": "background-color",
              "valor": "white",
              "linha": 1078
            }
          ]
        },
        {
          "seletor": ".dashboard-equipment-accordion .p-accordion .p-accordion-content",
          "alvo": "interno",
          "linhas": [
            1081
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "none",
              "linha": 1082
            }
          ]
        }
      ],
      "linha": 1074
    },
    {
      "chave": ".user-group",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".user-group input",
          "alvo": "interno",
          "linhas": [
            1085
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 1086
            }
          ]
        },
        {
          "seletor": ".user-group p-iconfield",
          "alvo": "interno",
          "linhas": [
            1089
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 1090
            }
          ]
        },
        {
          "seletor": ".user-group button",
          "alvo": "interno",
          "linhas": [
            1093
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "transparent",
              "linha": 1094
            },
            {
              "prop": "border",
              "valor": "2px #CBD5E1 solid",
              "linha": 1095
            },
            {
              "prop": "color",
              "valor": "#747988",
              "linha": 1096
            }
          ]
        },
        {
          "seletor": ".user-group button .p-button-icon",
          "alvo": "interno",
          "linhas": [
            1105
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1106
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1107
            }
          ]
        }
      ],
      "linha": 1085
    },
    {
      "chave": ".p-dataview",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-dataview .p-dataview-content",
          "alvo": "interno",
          "linhas": [
            1110
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 1111
            },
            {
              "prop": "margin-top",
              "valor": "0",
              "importante": true,
              "linha": 1112
            }
          ]
        }
      ],
      "linha": 1110
    },
    {
      "chave": ".selected-group",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".selected-group",
          "alvo": "proprio",
          "linhas": [
            1115
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#c0d9fa",
              "linha": 1116
            }
          ]
        }
      ],
      "linha": 1115
    },
    {
      "chave": ".disabled-group",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".disabled-group",
          "alvo": "proprio",
          "linhas": [
            1119
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "default",
              "importante": true,
              "linha": 1120
            },
            {
              "prop": "background-color",
              "valor": "#F9FAFC",
              "importante": true,
              "linha": 1121
            },
            {
              "prop": "color",
              "valor": "#C6C6C6",
              "importante": true,
              "linha": 1122
            }
          ]
        }
      ],
      "linha": 1119
    },
    {
      "chave": ".group",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".group",
          "alvo": "proprio",
          "linhas": [
            1125
          ],
          "atributos": [
            {
              "prop": "min-width",
              "valor": "40%",
              "linha": 1126
            },
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 1127
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 1128
            }
          ]
        }
      ],
      "linha": 1125
    },
    {
      "chave": ".group-row",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".group-row",
          "alvo": "proprio",
          "linhas": [
            1131
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.8rem 0.5rem",
              "linha": 1132
            }
          ]
        },
        {
          "seletor": ".group-row:hover",
          "alvo": "proprio",
          "linhas": [
            1135
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#c0d9fa",
              "linha": 1136
            }
          ]
        }
      ],
      "linha": 1131
    },
    {
      "chave": ".break-overflow",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".break-overflow",
          "alvo": "proprio",
          "linhas": [
            1139
          ],
          "atributos": [
            {
              "prop": "overflow-wrap",
              "valor": "anywhere",
              "linha": 1140
            }
          ]
        }
      ],
      "linha": 1139
    },
    {
      "chave": ".p-toast",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-toast .p-toast-message.p-toast-message-error",
          "alvo": "interno",
          "linhas": [
            1143
          ],
          "atributos": [
            {
              "prop": "overflow-wrap",
              "valor": "anywhere",
              "linha": 1144
            }
          ]
        }
      ],
      "linha": 1143
    },
    {
      "chave": ".selected",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-complementar",
          "titulo": "Declarada em mais de um lugar (sem conflito)",
          "texto": "\".p-tree .p-tree-container .p-treenode .selected\" aparece 2 vezes (linhas 1151, 1426), cada vez com atributos diferentes. Nada é sobrescrito, mas vale juntar num bloco só.",
          "linhas": [
            1151,
            1426
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .selected .pi-box",
          "alvo": "interno",
          "linhas": [
            1147
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 1148
            }
          ]
        },
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .selected",
          "alvo": "proprio",
          "linhas": [
            1151,
            1426
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 1152
            },
            {
              "prop": "color",
              "valor": "inherit",
              "linha": 1427
            }
          ]
        },
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .selected .equipment-slot",
          "alvo": "interno",
          "linhas": [
            1213
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#3B82F6",
              "linha": 1214
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 1215
            },
            {
              "prop": "background",
              "valor": "#F0F6FF",
              "linha": 1216
            }
          ]
        }
      ],
      "linha": 1147
    },
    {
      "chave": ".p-tree",
      "tipo": "global",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".p-tree .p-tree-container .p-treenode .p-treenode-content:hover\" aparece 2 vezes (linhas 1176, 1180) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            1176,
            1180
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .p-treenode-content",
          "alvo": "interno",
          "linhas": [
            1171
          ],
          "atributos": [
            {
              "prop": "box-shadow",
              "valor": "none",
              "linha": 1172
            },
            {
              "prop": "padding",
              "valor": "0",
              "linha": 1173
            }
          ]
        },
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .p-treenode-content:hover",
          "alvo": "interno",
          "linhas": [
            1176,
            1180
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "none",
              "linha": 1181,
              "anteriores": [
                {
                  "valor": "none",
                  "linha": 1177,
                  "importante": false
                }
              ]
            }
          ]
        },
        {
          "seletor": ".p-tree",
          "alvo": "proprio",
          "linhas": [
            1238
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0",
              "linha": 1239
            }
          ]
        }
      ],
      "linha": 1171
    },
    {
      "chave": ".equipment-info",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .p-treenode-selectable .equipment-info",
          "alvo": "proprio",
          "linhas": [
            1184
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "4px 8px",
              "linha": 1185
            }
          ]
        },
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .p-treenode-selectable:hover .equipment-info",
          "alvo": "proprio",
          "linhas": [
            1188
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#F0F6FF",
              "linha": 1189
            },
            {
              "prop": "border-radius",
              "valor": "8px",
              "linha": 1190
            }
          ]
        }
      ],
      "linha": 1184
    },
    {
      "chave": ".equipment-slot",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .p-treenode-content:hover .equipment-slot",
          "alvo": "proprio",
          "linhas": [
            1193
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#F0F6FF",
              "linha": 1194
            }
          ]
        },
        {
          "seletor": ".p-tree .p-tree-container .p-treenode .p-treenode-content .equipment-slot",
          "alvo": "proprio",
          "linhas": [
            1197
          ],
          "atributos": [
            {
              "prop": "border-radius",
              "valor": "8px",
              "linha": 1198
            },
            {
              "prop": "border",
              "valor": "2px dashed #B5BAC0",
              "linha": 1199
            },
            {
              "prop": "padding",
              "valor": "4px 8px",
              "linha": 1200
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 1201
            },
            {
              "prop": "gap",
              "valor": "5px",
              "linha": 1202
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 1203
            }
          ]
        }
      ],
      "linha": 1193
    },
    {
      "chave": ".input-italic",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".input-italic",
          "alvo": "proprio",
          "linhas": [
            1206
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 1207
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1208
            },
            {
              "prop": "font-style",
              "valor": "italic",
              "linha": 1209
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1210
            }
          ]
        }
      ],
      "linha": 1206
    },
    {
      "chave": ".pi-ellipsis-v",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".pi-ellipsis-v",
          "alvo": "proprio",
          "linhas": [
            1219
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 1220
            },
            {
              "prop": "font-size",
              "valor": "0.8rem",
              "linha": 1221
            }
          ]
        }
      ],
      "linha": 1219
    },
    {
      "chave": ".add-equipment-tree-input",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".add-equipment-tree-input .p-inputtext",
          "alvo": "interno",
          "linhas": [
            1224
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1225
            },
            {
              "prop": "padding",
              "valor": "8px",
              "linha": 1226
            }
          ]
        }
      ],
      "linha": 1224
    },
    {
      "chave": ".equipment-tree",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-tree .p-inputtext",
          "alvo": "interno",
          "linhas": [
            1229
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 1231
            }
          ]
        }
      ],
      "linha": 1229
    },
    {
      "chave": ".model-tree",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".model-tree .p-inputtext",
          "alvo": "interno",
          "linhas": [
            1229
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 1231
            }
          ]
        }
      ],
      "linha": 1229
    },
    {
      "chave": ".add-equipment-tree",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".add-equipment-tree .p-paginator",
          "alvo": "interno",
          "linhas": [
            1234
          ],
          "atributos": [
            {
              "prop": "justify-content",
              "valor": "end",
              "linha": 1235
            }
          ]
        },
        {
          "seletor": ".add-equipment-tree .p-card .p-card-content",
          "alvo": "interno",
          "linhas": [
            1261
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0",
              "linha": 1262
            }
          ]
        },
        {
          "seletor": ".add-equipment-tree .p-card .p-card-body",
          "alvo": "interno",
          "linhas": [
            1265
          ],
          "atributos": [
            {
              "prop": "margin-bottom",
              "valor": "10px",
              "linha": 1266
            }
          ]
        }
      ],
      "linha": 1234
    },
    {
      "chave": ".highlight",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".highlight",
          "alvo": "proprio",
          "linhas": [
            1242
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#FEF9C3",
              "linha": 1243
            }
          ]
        }
      ],
      "linha": 1242
    },
    {
      "chave": ".actual-highlight",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".actual-highlight",
          "alvo": "proprio",
          "linhas": [
            1246
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#D9E5F9",
              "linha": 1247
            }
          ]
        }
      ],
      "linha": 1246
    },
    {
      "chave": ".counter",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".counter .p-button.p-button-icon-only",
          "alvo": "interno",
          "linhas": [
            1250
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 1251
            },
            {
              "prop": "width",
              "valor": "2rem",
              "linha": 1252
            },
            {
              "prop": "box-shadow",
              "valor": "none",
              "linha": 1253
            }
          ]
        }
      ],
      "linha": 1250
    },
    {
      "chave": ".equipment-tree-header",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-tree-header .p-button.p-button-text",
          "alvo": "interno",
          "linhas": [
            1256
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 1258
            }
          ]
        }
      ],
      "linha": 1256
    },
    {
      "chave": ".model-tree-header",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".model-tree-header .p-button.p-button-text",
          "alvo": "interno",
          "linhas": [
            1256
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 1258
            }
          ]
        }
      ],
      "linha": 1256
    },
    {
      "chave": ".open-attachment",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".open-attachment i:hover",
          "alvo": "interno",
          "linhas": [
            1273
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 1274
            }
          ]
        }
      ],
      "linha": 1273
    },
    {
      "chave": ".update-icon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".update-icon i",
          "alvo": "interno",
          "linhas": [
            1277
          ],
          "atributos": [
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 1278
            },
            {
              "prop": "color",
              "valor": "#3B404F",
              "linha": 1279
            }
          ]
        }
      ],
      "linha": 1277
    },
    {
      "chave": ".description-large",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "fonte-invalida",
          "titulo": "Fonte escrita com aspas curvas",
          "texto": "“Inter” usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente “Inter”, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por \"Inter\".",
          "linhas": [
            1283
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".description-large",
          "alvo": "proprio",
          "linhas": [
            1282
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "“Inter”, sans-serif",
              "linha": 1283
            },
            {
              "prop": "font-style",
              "valor": "italic",
              "linha": 1284
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 1285
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1286
            },
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1287
            }
          ]
        }
      ],
      "linha": 1282
    },
    {
      "chave": ".description-medium",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".description-medium",
          "alvo": "proprio",
          "linhas": [
            1290
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1291
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1292
            },
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1293
            }
          ]
        }
      ],
      "linha": 1290
    },
    {
      "chave": ".file-view",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".file-view img",
          "alvo": "interno",
          "linhas": [
            1297
          ],
          "atributos": [
            {
              "prop": "max-width",
              "valor": "320px",
              "linha": 1298
            }
          ]
        }
      ],
      "linha": 1297
    },
    {
      "chave": ".equipment-list-input",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-list-input input",
          "alvo": "interno",
          "linhas": [
            1301
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "100%",
              "linha": 1302
            }
          ]
        }
      ],
      "linha": 1301
    },
    {
      "chave": ".chips-container",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".chips-container .p-chip",
          "alvo": "interno",
          "linhas": [
            1305
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1306
            },
            {
              "prop": "background-color",
              "valor": "#EFF6FF",
              "linha": 1307
            },
            {
              "prop": "color",
              "valor": "#1E3A8A",
              "linha": 1308
            }
          ]
        }
      ],
      "linha": 1305
    },
    {
      "chave": ".chips-container-items",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".chips-container-items .p-chip",
          "alvo": "interno",
          "linhas": [
            1311
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1312
            },
            {
              "prop": "background-color",
              "valor": "#FFFFFF",
              "linha": 1313
            },
            {
              "prop": "color",
              "valor": "#3b82f6",
              "linha": 1314
            },
            {
              "prop": "border",
              "valor": "solid 1px #3b82f6",
              "linha": 1315
            }
          ]
        }
      ],
      "linha": 1311
    },
    {
      "chave": ".chips-container-red",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".chips-container-red .p-chip",
          "alvo": "interno",
          "linhas": [
            1318
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1319
            },
            {
              "prop": "background-color",
              "valor": "#FEE2E2",
              "linha": 1320
            },
            {
              "prop": "color",
              "valor": "#991B1B",
              "linha": 1321
            }
          ]
        }
      ],
      "linha": 1318
    },
    {
      "chave": ".chips-container-gray",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".chips-container-gray .p-chip",
          "alvo": "interno",
          "linhas": [
            1324
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1325
            },
            {
              "prop": "background-color",
              "valor": "#F3F4F6",
              "linha": 1326
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 1327
            }
          ]
        }
      ],
      "linha": 1324
    },
    {
      "chave": ".underline-button",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".underline-button .p-button-label",
          "alvo": "interno",
          "linhas": [
            1330
          ],
          "atributos": [
            {
              "prop": "text-decoration",
              "valor": "underline",
              "linha": 1331
            }
          ]
        }
      ],
      "linha": 1330
    },
    {
      "chave": ".info-medium",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".info-medium",
          "alvo": "proprio",
          "linhas": [
            1334
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3b82f6",
              "linha": 1335
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1336
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1337
            }
          ]
        }
      ],
      "linha": 1334
    },
    {
      "chave": ".tag-operation-status",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-complementar",
          "titulo": "Declarada em mais de um lugar (sem conflito)",
          "texto": "\".tag-operation-status\" aparece 2 vezes (linhas 1340, 1414), cada vez com atributos diferentes. Nada é sobrescrito, mas vale juntar num bloco só.",
          "linhas": [
            1340,
            1414
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".tag-operation-status",
          "alvo": "proprio",
          "linhas": [
            1340,
            1414
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "white",
              "linha": 1341
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 1342
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1343
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 1344
            },
            {
              "prop": "padding",
              "valor": "4px",
              "linha": 1345
            },
            {
              "prop": "background-color",
              "valor": "#7F7F7F",
              "linha": 1415
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.operation",
          "alvo": "proprio",
          "linhas": [
            1361
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#1DB87F",
              "linha": 1362
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.operation-event",
          "alvo": "proprio",
          "linhas": [
            1365
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#F79637",
              "linha": 1366
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.unscheduled-stop",
          "alvo": "proprio",
          "linhas": [
            1369
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#DD4153",
              "linha": 1370
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.out-of-operation",
          "alvo": "proprio",
          "linhas": [
            1373
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#93A5B5",
              "linha": 1374
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.schedule-stop",
          "alvo": "proprio",
          "linhas": [
            1377
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#3294EA",
              "linha": 1378
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.active",
          "alvo": "proprio",
          "linhas": [
            1381
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#CCE0FF",
              "linha": 1382
            },
            {
              "prop": "color",
              "valor": "#0077B6",
              "linha": 1383
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.inactive",
          "alvo": "proprio",
          "linhas": [
            1386
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#FEE2E2",
              "linha": 1387
            },
            {
              "prop": "color",
              "valor": "#991B3B",
              "linha": 1388
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.pending",
          "alvo": "proprio",
          "linhas": [
            1391
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#FEDEC8",
              "linha": 1392
            },
            {
              "prop": "color",
              "valor": "#BC5D09",
              "linha": 1393
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.undefined",
          "alvo": "proprio",
          "linhas": [
            1396
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#FFFFFF",
              "linha": 1397
            },
            {
              "prop": "color",
              "valor": "#7F7F7F",
              "linha": 1398
            },
            {
              "prop": "border",
              "valor": "1px solid #7F7F7F",
              "linha": 1399
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.undefined .newInput",
          "alvo": "interno",
          "linhas": [
            1406
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#7F7F7F",
              "linha": 1407
            }
          ]
        },
        {
          "seletor": ".tag-operation-status.undefined .modelDescriptionsLabelColor",
          "alvo": "interno",
          "linhas": [
            1410
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#7F7F7F",
              "linha": 1411
            }
          ]
        }
      ],
      "linha": 1340
    },
    {
      "chave": ".whiteIcon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".whiteIcon",
          "alvo": "proprio",
          "linhas": [
            1348
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "white",
              "importante": true,
              "linha": 1349
            }
          ]
        }
      ],
      "linha": 1348
    },
    {
      "chave": ".ellipsis",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ellipsis",
          "alvo": "proprio",
          "linhas": [
            1352
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "block",
              "linha": 1353
            },
            {
              "prop": "white-space",
              "valor": "nowrap",
              "linha": 1354
            },
            {
              "prop": "overflow",
              "valor": "hidden",
              "linha": 1355
            },
            {
              "prop": "text-overflow",
              "valor": "ellipsis",
              "linha": 1356
            },
            {
              "prop": "max-width",
              "valor": "100%",
              "linha": 1357
            }
          ]
        }
      ],
      "linha": 1352
    },
    {
      "chave": ".miniCardWidth",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".miniCardWidth .tag-operation-status.undefined",
          "alvo": "interno",
          "linhas": [
            1402
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid rgba(127, 127, 127, 0.3)",
              "linha": 1403
            }
          ]
        }
      ],
      "linha": 1402
    },
    {
      "chave": ".filters-input-height-calendar",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".filters-input-height-calendar input",
          "alvo": "interno",
          "linhas": [
            1418
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "2rem",
              "linha": 1421
            },
            {
              "prop": "padding-top",
              "valor": "0.3rem",
              "linha": 1422
            },
            {
              "prop": "padding-bottom",
              "valor": "0.3rem",
              "linha": 1423
            }
          ]
        },
        {
          "seletor": ".filters-input-height-calendar button",
          "alvo": "interno",
          "linhas": [
            1418
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "2rem",
              "linha": 1421
            },
            {
              "prop": "padding-top",
              "valor": "0.3rem",
              "linha": 1422
            },
            {
              "prop": "padding-bottom",
              "valor": "0.3rem",
              "linha": 1423
            }
          ]
        }
      ],
      "linha": 1418
    },
    {
      "chave": ".filters-input-height",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".filters-input-height",
          "alvo": "proprio",
          "linhas": [
            1418
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "2rem",
              "linha": 1421
            },
            {
              "prop": "padding-top",
              "valor": "0.3rem",
              "linha": 1422
            },
            {
              "prop": "padding-bottom",
              "valor": "0.3rem",
              "linha": 1423
            }
          ]
        }
      ],
      "linha": 1418
    },
    {
      "chave": ".clearButton",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".clearButton .p-button",
          "alvo": "interno",
          "linhas": [
            1430
          ],
          "atributos": [
            {
              "prop": "white-space",
              "valor": "nowrap",
              "linha": 1431
            }
          ]
        }
      ],
      "linha": 1430
    },
    {
      "chave": ".reduce-paginator-size",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".reduce-paginator-size button",
          "alvo": "interno",
          "linhas": [
            1434
          ],
          "atributos": [
            {
              "prop": "min-width",
              "valor": "2rem",
              "linha": 1435
            },
            {
              "prop": "width",
              "valor": "2rem",
              "linha": 1436
            },
            {
              "prop": "height",
              "valor": "2rem",
              "linha": 1437
            }
          ]
        },
        {
          "seletor": ".reduce-paginator-size",
          "alvo": "proprio",
          "linhas": [
            1440
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 1441
            },
            {
              "prop": "justify-content",
              "valor": "end",
              "linha": 1442
            }
          ]
        }
      ],
      "linha": 1434
    },
    {
      "chave": ".icon-button",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".icon-button button",
          "alvo": "interno",
          "linhas": [
            1445
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "18px",
              "linha": 1446
            },
            {
              "prop": "padding",
              "valor": "0",
              "linha": 1447
            },
            {
              "prop": "width",
              "valor": "fit-content",
              "linha": 1448
            }
          ]
        }
      ],
      "linha": 1445
    },
    {
      "chave": ".required",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".required:after",
          "alvo": "proprio",
          "linhas": [
            1451
          ],
          "atributos": [
            {
              "prop": "content",
              "valor": "\" *\"",
              "linha": 1452
            },
            {
              "prop": "color",
              "valor": "red",
              "linha": 1453
            }
          ]
        }
      ],
      "linha": 1451
    },
    {
      "chave": ".foreign-key-border",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada",
          "titulo": "Declarada mais de uma vez com valores diferentes",
          "texto": "\".foreign-key-border\" aparece 2 vezes (linhas 1456, 1552). Quando o mesmo atributo se repete, vale o da última declaração.",
          "detalhes": [
            "border: 1px solid #3B82F6 (linha 1457) → 1px solid #EDEDED (linha 1553, é o que vale)"
          ],
          "linhas": [
            1456,
            1552
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".foreign-key-border",
          "alvo": "proprio",
          "linhas": [
            1456,
            1552
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #EDEDED",
              "linha": 1553,
              "anteriores": [
                {
                  "valor": "1px solid #3B82F6",
                  "linha": 1457,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-radius",
              "valor": "var(--border-radius)",
              "importante": true,
              "linha": 1458
            },
            {
              "prop": "box-shadow",
              "valor": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
              "linha": 1554
            }
          ]
        }
      ],
      "linha": 1456
    },
    {
      "chave": ".border-gray",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".border-gray",
          "alvo": "proprio",
          "linhas": [
            1461
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #E5EAEF",
              "linha": 1462
            },
            {
              "prop": "border-radius",
              "valor": "var(--border-radius)",
              "importante": true,
              "linha": 1463
            },
            {
              "prop": "margin",
              "valor": "0.5rem",
              "linha": 1464
            },
            {
              "prop": "padding",
              "valor": "0.5rem",
              "linha": 1465
            }
          ]
        }
      ],
      "linha": 1461
    },
    {
      "chave": ".radio-size",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".radio-size .p-radiobutton .p-radiobutton-box",
          "alvo": "interno",
          "linhas": [
            1476
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "16px",
              "linha": 1477
            },
            {
              "prop": "height",
              "valor": "16px",
              "linha": 1478
            },
            {
              "prop": "align-self",
              "valor": "center",
              "linha": 1479
            }
          ]
        }
      ],
      "linha": 1476
    },
    {
      "chave": ".clear-filter-segmentation",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "sem-efeito",
          "titulo": "Posição sem \"position\"",
          "texto": "Os atributos top, right, bottom só funcionam se o elemento tiver position (relative, absolute...) definido em outro lugar.",
          "linhas": [
            1482
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".clear-filter-segmentation",
          "alvo": "proprio",
          "linhas": [
            1482
          ],
          "atributos": [
            {
              "prop": "right",
              "valor": "8px",
              "linha": 1483
            },
            {
              "prop": "bottom",
              "valor": "50%",
              "linha": 1484
            },
            {
              "prop": "top",
              "valor": "50%",
              "linha": 1485
            }
          ]
        }
      ],
      "linha": 1482
    },
    {
      "chave": ".icl-disabled",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".icl-disabled",
          "alvo": "proprio",
          "linhas": [
            1488
          ],
          "atributos": [
            {
              "prop": "opacity",
              "valor": "0.6",
              "linha": 1489
            }
          ]
        }
      ],
      "linha": 1488
    },
    {
      "chave": ".p-button-label",
      "tipo": "global",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".p-button-label",
          "alvo": "proprio",
          "linhas": [
            1492
          ],
          "atributos": [
            {
              "prop": "font-weight",
              "valor": "normal",
              "linha": 1493
            }
          ]
        }
      ],
      "linha": 1492
    },
    {
      "chave": ".service-history",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".service-history .p-datatable .p-datatable-thead > tr > th",
          "alvo": "interno",
          "linhas": [
            1496
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.2rem 1rem",
              "linha": 1497
            },
            {
              "prop": "background",
              "valor": "#FFFFFF",
              "linha": 1498
            },
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 1499
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1500
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 1501
            },
            {
              "prop": "color",
              "valor": "#3d3d3d",
              "linha": 1502
            }
          ]
        },
        {
          "seletor": ".service-history .p-datatable .p-datatable-tbody > tr > td",
          "alvo": "interno",
          "linhas": [
            1505
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.2rem 1rem",
              "linha": 1506
            },
            {
              "prop": "font-family",
              "valor": "inter, sans-serif",
              "linha": 1507
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1508
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1509
            },
            {
              "prop": "color",
              "valor": "#525050",
              "linha": 1510
            }
          ]
        }
      ],
      "linha": 1496
    },
    {
      "chave": ".tooltip-cto-history",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".tooltip-cto-history .p-tooltip-text",
          "alvo": "interno",
          "linhas": [
            1513
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1514
            },
            {
              "prop": "padding",
              "valor": "0.35rem 0 0.35rem 0.75rem",
              "linha": 1515
            }
          ]
        }
      ],
      "linha": 1513
    },
    {
      "chave": ".caption",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".caption",
          "alvo": "proprio",
          "linhas": [
            1518
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 1519
            },
            {
              "prop": "color",
              "valor": "#3F454E",
              "linha": 1520
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1521
            }
          ]
        }
      ],
      "linha": 1518
    },
    {
      "chave": ".link-xs-strong",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".link-xs-strong",
          "alvo": "proprio",
          "linhas": [
            1524
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 1525
            },
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 1526
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1527
            }
          ]
        }
      ],
      "linha": 1524
    },
    {
      "chave": ".ability-dropdown",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ability-dropdown",
          "alvo": "proprio",
          "linhas": [
            1534
          ],
          "atributos": [
            {
              "prop": "min-height",
              "valor": "36px",
              "linha": 1535
            }
          ]
        },
        {
          "seletor": ".ability-dropdown .p-dropdown-label",
          "alvo": "interno",
          "linhas": [
            1538
          ],
          "atributos": [
            {
              "prop": "padding-top",
              "valor": "0.5rem",
              "linha": 1539
            },
            {
              "prop": "padding-bottom",
              "valor": "0.5rem",
              "linha": 1540
            },
            {
              "prop": "font-size",
              "valor": "0.875rem",
              "linha": 1541
            }
          ]
        }
      ],
      "linha": 1534
    },
    {
      "chave": ".field-invalid",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": "p-dropdown.field-invalid .p-dropdown",
          "alvo": "interno",
          "linhas": [
            1544
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#EF4444",
              "linha": 1545
            }
          ]
        },
        {
          "seletor": "p-dropdown.field-invalid .p-dropdown-label",
          "alvo": "interno",
          "linhas": [
            1548
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#EF4444",
              "linha": 1549
            }
          ]
        }
      ],
      "linha": 1544
    },
    {
      "chave": ".medium",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".medium",
          "alvo": "proprio",
          "linhas": [
            1557
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1558
            },
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 1559
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1560
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1561
            }
          ]
        }
      ],
      "linha": 1557
    },
    {
      "chave": ".ext-large",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ext-large",
          "alvo": "proprio",
          "linhas": [
            1564
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1565
            },
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 1566
            },
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 1567
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1568
            }
          ]
        }
      ],
      "linha": 1564
    },
    {
      "chave": ".card-input",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".card-input",
          "alvo": "proprio",
          "linhas": [
            1572
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1573
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1574
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1575
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1576
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1577
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1578
            }
          ]
        }
      ],
      "linha": 1572
    },
    {
      "chave": ".card-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".card-label",
          "alvo": "proprio",
          "linhas": [
            1582
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#6A7282",
              "linha": 1583
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1584
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1585
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1586
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1587
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1588
            }
          ]
        }
      ],
      "linha": 1582
    },
    {
      "chave": ".selected-card",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".selected-card",
          "alvo": "proprio",
          "linhas": [
            1592
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#F8FAFC",
              "linha": 1593
            },
            {
              "prop": "border",
              "valor": "1px solid #E2E8F0",
              "linha": 1594
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1595
            },
            {
              "prop": "position",
              "valor": "relative",
              "linha": 1596
            },
            {
              "prop": "font-family",
              "valor": "'Geist', 'Inter', sans-serif",
              "linha": 1597
            }
          ]
        }
      ],
      "linha": 1592
    },
    {
      "chave": ".equipment-event-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-event-label",
          "alvo": "proprio",
          "linhas": [
            1600
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 1601
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1602
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1603
            },
            {
              "prop": "margin-bottom",
              "valor": "2px",
              "linha": 1604
            },
            {
              "prop": "display",
              "valor": "block",
              "linha": 1605
            }
          ]
        }
      ],
      "linha": 1600
    },
    {
      "chave": ".equipment-event-input",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-event-input",
          "alvo": "proprio",
          "linhas": [
            1608
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1609
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1610
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1611
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1612
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1613
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1614
            }
          ]
        }
      ],
      "linha": 1608
    },
    {
      "chave": ".custom-divider",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".custom-divider",
          "alvo": "proprio",
          "linhas": [
            1617
          ],
          "atributos": [
            {
              "prop": "border-top",
              "valor": "1px solid #CACACA",
              "linha": 1618
            },
            {
              "prop": "margin",
              "valor": "12px 0",
              "linha": 1619
            },
            {
              "prop": "width",
              "valor": "100%",
              "linha": 1620
            },
            {
              "prop": "height",
              "valor": "1px",
              "linha": 1621
            }
          ]
        }
      ],
      "linha": 1617
    },
    {
      "chave": ".model-type-input",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".model-type-input\" aparece 2 vezes (linhas 1624, 2069) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            1624,
            2069
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".model-type-input",
          "alvo": "proprio",
          "linhas": [
            1624,
            2069
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 2070,
              "anteriores": [
                {
                  "valor": "#212121",
                  "linha": 1625,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 2071,
              "anteriores": [
                {
                  "valor": "\"Geist\", sans-serif",
                  "linha": 1626,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 2072,
              "anteriores": [
                {
                  "valor": "12px",
                  "linha": 1627,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 2073,
              "anteriores": [
                {
                  "valor": "normal",
                  "linha": 1628,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2074,
              "anteriores": [
                {
                  "valor": "400",
                  "linha": 1629,
                  "importante": false
                }
              ]
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 2075,
              "anteriores": [
                {
                  "valor": "normal",
                  "linha": 1630,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 1624
    },
    {
      "chave": ".equipment-event-warning-text",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-event-warning-text",
          "alvo": "proprio",
          "linhas": [
            1633
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 1634
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1635
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1636
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1637
            },
            {
              "prop": "color",
              "valor": "#8A8A8A",
              "linha": 1638
            }
          ]
        }
      ],
      "linha": 1633
    },
    {
      "chave": ".equipment-event-warning-icon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".equipment-event-warning-icon",
          "alvo": "proprio",
          "linhas": [
            1641
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#95989C",
              "linha": 1642
            },
            {
              "prop": "font-size",
              "valor": "1rem",
              "linha": 1643
            }
          ]
        }
      ],
      "linha": 1641
    },
    {
      "chave": ".selected-filter-badge",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".selected-filter-badge .p-badge-dot",
          "alvo": "interno",
          "linhas": [
            1646
          ],
          "atributos": [
            {
              "prop": "max-width",
              "valor": "10px",
              "linha": 1647
            },
            {
              "prop": "width",
              "valor": "10px",
              "linha": 1648
            },
            {
              "prop": "height",
              "valor": "10px",
              "linha": 1649
            },
            {
              "prop": "max-height",
              "valor": "10px",
              "linha": 1650
            }
          ]
        }
      ],
      "linha": 1646
    },
    {
      "chave": ".section-alterations",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".section-alterations",
          "alvo": "proprio",
          "linhas": [
            1653
          ],
          "atributos": [
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 1654
            },
            {
              "prop": "border",
              "valor": "1px solid #DBEAFE",
              "linha": 1655
            },
            {
              "prop": "background",
              "valor": "#F4F8FD",
              "linha": 1656
            },
            {
              "prop": "box-shadow",
              "valor": "0 4px 4px -4px rgba(0, 0, 0, 0.08)",
              "linha": 1657
            }
          ]
        },
        {
          "seletor": ".section-alterations .p-checkbox",
          "alvo": "interno",
          "linhas": [
            2021
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2022
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2023
            }
          ]
        },
        {
          "seletor": ".section-alterations .p-checkbox-label",
          "alvo": "interno",
          "linhas": [
            2026
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#6A7282",
              "linha": 2027
            },
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 2028
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2029
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 2030
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2031
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2032
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2033
            },
            {
              "prop": "margin-left",
              "valor": "4px",
              "linha": 2034
            }
          ]
        }
      ],
      "linha": 1653
    },
    {
      "chave": ".type-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".type-label",
          "alvo": "proprio",
          "linhas": [
            1663
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#1d4ed8",
              "linha": 1664
            },
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 1665
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 1666
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1667
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 1668
            },
            {
              "prop": "border",
              "valor": "0.761px solid #cde0ff",
              "linha": 1669
            },
            {
              "prop": "background",
              "valor": "#d7e2ef45",
              "linha": 1670
            },
            {
              "prop": "display",
              "valor": "inline-flex",
              "linha": 1671
            },
            {
              "prop": "padding",
              "valor": "2px 7px",
              "linha": 1672
            },
            {
              "prop": "justify-content",
              "valor": "center",
              "linha": 1673
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 1674
            },
            {
              "prop": "height",
              "valor": "25px",
              "linha": 1675
            }
          ]
        }
      ],
      "linha": 1663
    },
    {
      "chave": ".main-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".main-label",
          "alvo": "proprio",
          "linhas": [
            1678
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 1679
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1680
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1681
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1682
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1683
            },
            {
              "prop": "margin-left",
              "valor": "8px",
              "linha": 1684
            }
          ]
        }
      ],
      "linha": 1678
    },
    {
      "chave": ".second-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".second-label",
          "alvo": "proprio",
          "linhas": [
            1687
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#6a7282",
              "linha": 1688
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1689
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1690
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1691
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1692
            }
          ]
        }
      ],
      "linha": 1687
    },
    {
      "chave": ".third-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".third-label",
          "alvo": "proprio",
          "linhas": [
            1695
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 1696
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1697
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1698
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1699
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1700
            }
          ]
        }
      ],
      "linha": 1695
    },
    {
      "chave": ".fourth-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".fourth-label",
          "alvo": "proprio",
          "linhas": [
            1704
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 1705
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1706
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1707
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1708
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1709
            }
          ]
        }
      ],
      "linha": 1704
    },
    {
      "chave": ".label-items",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "sem-efeito",
          "titulo": "Largura de borda sem estilo",
          "texto": "\"border-bottom-width: 6px\" só aparece se o elemento já tiver um border-style vindo de outro lugar.",
          "linhas": [
            1714
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".label-items",
          "alvo": "proprio",
          "linhas": [
            1712
          ],
          "atributos": [
            {
              "prop": "padding-bottom",
              "valor": "0",
              "linha": 1713
            },
            {
              "prop": "border-bottom-width",
              "valor": "6px",
              "linha": 1714
            },
            {
              "prop": "margin-bottom",
              "valor": "6px",
              "linha": 1715
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1716
            },
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 1717
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1718
            },
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1719
            }
          ]
        }
      ],
      "linha": 1712
    },
    {
      "chave": ".label-alterations",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label-alterations",
          "alvo": "proprio",
          "linhas": [
            1722
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 1723
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 1724
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1725
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1726
            }
          ]
        }
      ],
      "linha": 1722
    },
    {
      "chave": ".label-restrictions",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label-restrictions",
          "alvo": "proprio",
          "linhas": [
            1729
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#1D4ED8",
              "linha": 1730
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1731
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1732
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1733
            }
          ]
        }
      ],
      "linha": 1729
    },
    {
      "chave": ".custom-checkbox",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".custom-checkbox:indeterminate",
          "alvo": "proprio",
          "linhas": [
            1738
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#add8e6",
              "linha": 1740
            },
            {
              "prop": "border-color",
              "valor": "#add8e6",
              "linha": 1741
            }
          ]
        }
      ],
      "linha": 1738
    },
    {
      "chave": ".checkbox-partial",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".checkbox-partial",
          "alvo": "proprio",
          "linhas": [
            1738
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#add8e6",
              "linha": 1740
            },
            {
              "prop": "border-color",
              "valor": "#add8e6",
              "linha": 1741
            }
          ]
        }
      ],
      "linha": 1738
    },
    {
      "chave": ".btn-edit-icon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-edit-icon",
          "alvo": "proprio",
          "linhas": [
            1744
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#99A1AF",
              "linha": 1745
            }
          ]
        }
      ],
      "linha": 1744
    },
    {
      "chave": ".contracted-plan-tree",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".contracted-plan-tree .p-treenode-children",
          "alvo": "interno",
          "linhas": [
            1748
          ],
          "atributos": [
            {
              "prop": "padding-left",
              "valor": "2rem",
              "linha": 1749
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-treenode-content.p-highlight:hover",
          "alvo": "interno",
          "linhas": [
            1752
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#DBEAFE",
              "importante": true,
              "linha": 1753
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-checkbox-box",
          "alvo": "interno",
          "linhas": [
            1756
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "18px",
              "importante": true,
              "linha": 1757
            },
            {
              "prop": "height",
              "valor": "18px",
              "importante": true,
              "linha": 1758
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 1759
            },
            {
              "prop": "border",
              "valor": "1px solid #cad5e2",
              "linha": 1760
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox",
          "alvo": "interno",
          "linhas": [
            1763
          ],
          "atributos": [
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 1764
            },
            {
              "prop": "margin-right",
              "valor": "8px",
              "linha": 1765
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tree-toggler",
          "alvo": "interno",
          "linhas": [
            1768
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "10px",
              "linha": 1769
            },
            {
              "prop": "height",
              "valor": "10px",
              "linha": 1770
            },
            {
              "prop": "color",
              "valor": "#90a1b9",
              "linha": 1771
            },
            {
              "prop": "margin-right",
              "valor": "12px",
              "linha": 1772
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tree",
          "alvo": "interno",
          "linhas": [
            1775
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#FFF",
              "linha": 1776
            },
            {
              "prop": "padding-top",
              "valor": "10px",
              "linha": 1777
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .node-remove > .p-treenode-content",
          "alvo": "interno",
          "linhas": [
            1784
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#fee2e280",
              "linha": 1785
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-divider",
          "alvo": "interno",
          "linhas": [
            1863
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0",
              "linha": 1864
            },
            {
              "prop": "margin-top",
              "valor": "0.25rem",
              "linha": 1865
            },
            {
              "prop": "height",
              "valor": "1.5rem",
              "linha": 1866
            },
            {
              "prop": "min-height",
              "valor": "1.5rem",
              "linha": 1867
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tree .p-tree-container .p-treenode",
          "alvo": "interno",
          "linhas": [
            1870
          ],
          "atributos": [
            {
              "prop": "padding-left",
              "valor": "1.6rem",
              "linha": 1871
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tree .p-tree-container .p-treenode .p-treenode-content",
          "alvo": "interno",
          "linhas": [
            1874
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0.2rem",
              "linha": 1875
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-treenode-label",
          "alvo": "interno",
          "linhas": [
            1878
          ],
          "atributos": [
            {
              "prop": "flex",
              "valor": "1 1 auto",
              "linha": 1879
            },
            {
              "prop": "min-width",
              "valor": "0",
              "linha": 1880
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tabview .p-tabview-nav",
          "alvo": "interno",
          "linhas": [
            1956
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#45556c",
              "linha": 1957
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1958
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1959
            }
          ]
        },
        {
          "seletor": ".contracted-plan-tree .p-tabview .p-tabview-panels",
          "alvo": "interno",
          "linhas": [
            1994
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "2rem 3rem",
              "linha": 1995
            }
          ]
        }
      ],
      "linha": 1748
    },
    {
      "chave": ".compact-pagination",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".compact-pagination .p-paginator",
          "alvo": "interno",
          "linhas": [
            1780
          ],
          "atributos": [
            {
              "prop": "transform",
              "valor": "scale(0.9)",
              "linha": 1781
            }
          ]
        }
      ],
      "linha": 1780
    },
    {
      "chave": ".restrictions-container",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restrictions-container",
          "alvo": "proprio",
          "linhas": [
            1788
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #edf4fd",
              "linha": 1789
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1790
            }
          ]
        }
      ],
      "linha": 1788
    },
    {
      "chave": ".restrictions-header",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restrictions-header",
          "alvo": "proprio",
          "linhas": [
            1793
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#eef5fe",
              "linha": 1794
            },
            {
              "prop": "color",
              "valor": "#5293f2",
              "linha": 1795
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1796
            }
          ]
        },
        {
          "seletor": ".restrictions-header .p-divider",
          "alvo": "interno",
          "linhas": [
            1804
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0",
              "linha": 1805
            },
            {
              "prop": "margin-top",
              "valor": "0.25rem",
              "linha": 1806
            },
            {
              "prop": "height",
              "valor": "1.5rem",
              "linha": 1807
            },
            {
              "prop": "min-height",
              "valor": "1.5rem",
              "linha": 1808
            }
          ]
        },
        {
          "seletor": ".restrictions-header p-button.p-disabled .p-button",
          "alvo": "interno",
          "linhas": [
            1823
          ],
          "atributos": [
            {
              "prop": "opacity",
              "valor": "1",
              "linha": 1825
            },
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 1826
            },
            {
              "prop": "background-color",
              "valor": "#F3F4F6",
              "linha": 1827
            }
          ]
        },
        {
          "seletor": ".restrictions-header .p-button.p-disabled",
          "alvo": "interno",
          "linhas": [
            1823
          ],
          "atributos": [
            {
              "prop": "opacity",
              "valor": "1",
              "linha": 1825
            },
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 1826
            },
            {
              "prop": "background-color",
              "valor": "#F3F4F6",
              "linha": 1827
            }
          ]
        }
      ],
      "linha": 1793
    },
    {
      "chave": ".restriction-header-items",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restriction-header-items",
          "alvo": "proprio",
          "linhas": [
            1799
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "0.7px solid #bdd6ff",
              "linha": 1800
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 1801
            }
          ]
        }
      ],
      "linha": 1799
    },
    {
      "chave": ".restrictions-header-loading",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restrictions-header-loading",
          "alvo": "proprio",
          "linhas": [
            1811
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 1812
            }
          ]
        },
        {
          "seletor": ".restrictions-header-loading .label-restrictions",
          "alvo": "interno",
          "linhas": [
            1811
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 1812
            }
          ]
        },
        {
          "seletor": ".restrictions-header-loading .p-progress-spinner-circle",
          "alvo": "interno",
          "linhas": [
            1830
          ],
          "atributos": [
            {
              "prop": "stroke",
              "valor": "#9CA3AF",
              "linha": 1832
            },
            {
              "prop": "animation",
              "valor": "p-progress-spinner-dash 1.5s ease-in-out infinite",
              "linha": 1833
            }
          ]
        }
      ],
      "linha": 1811
    },
    {
      "chave": ".restrictions-header-error",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restrictions-header-error",
          "alvo": "proprio",
          "linhas": [
            1815
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#F62447",
              "linha": 1816
            }
          ]
        },
        {
          "seletor": ".restrictions-header-error .label-restrictions",
          "alvo": "interno",
          "linhas": [
            1815
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#F62447",
              "linha": 1816
            }
          ]
        }
      ],
      "linha": 1815
    },
    {
      "chave": ".restriction-retry-icon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restriction-retry-icon",
          "alvo": "proprio",
          "linhas": [
            1819
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1820
            }
          ]
        }
      ],
      "linha": 1819
    },
    {
      "chave": ".restrictions-progress",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restrictions-progress .p-progress-spinner-circle",
          "alvo": "interno",
          "linhas": [
            1830
          ],
          "atributos": [
            {
              "prop": "stroke",
              "valor": "#9CA3AF",
              "linha": 1832
            },
            {
              "prop": "animation",
              "valor": "p-progress-spinner-dash 1.5s ease-in-out infinite",
              "linha": 1833
            }
          ]
        },
        {
          "seletor": ".restrictions-progress",
          "alvo": "proprio",
          "linhas": [
            1836
          ],
          "atributos": [
            {
              "prop": "margin-top",
              "valor": "-4px",
              "linha": 1837
            },
            {
              "prop": "margin-bottom",
              "valor": "8px",
              "linha": 1838
            }
          ]
        },
        {
          "seletor": ".restrictions-progress .p-progressbar",
          "alvo": "interno",
          "linhas": [
            1841
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "12rem",
              "linha": 1842
            },
            {
              "prop": "height",
              "valor": "6px",
              "linha": 1843
            },
            {
              "prop": "border-radius",
              "valor": "3px",
              "linha": 1844
            }
          ]
        }
      ],
      "linha": 1830
    },
    {
      "chave": ".restrictions-error-banner",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".restrictions-error-banner",
          "alvo": "proprio",
          "linhas": [
            1847
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#FEE2E2",
              "linha": 1848
            },
            {
              "prop": "border",
              "valor": "1px solid #FECACA",
              "linha": 1849
            },
            {
              "prop": "color",
              "valor": "#991B1B",
              "linha": 1850
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1851
            },
            {
              "prop": "padding",
              "valor": "0.75rem 1rem",
              "linha": 1852
            },
            {
              "prop": "margin-bottom",
              "valor": "8px",
              "linha": 1853
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1854
            }
          ]
        },
        {
          "seletor": ".restrictions-error-banner .p-button",
          "alvo": "interno",
          "linhas": [
            1857
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1858
            },
            {
              "prop": "border-color",
              "valor": "#E5E5E5",
              "linha": 1859
            },
            {
              "prop": "background-color",
              "valor": "#FFFFFF",
              "linha": 1860
            }
          ]
        }
      ],
      "linha": 1847
    },
    {
      "chave": ".btn-icon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-icon .p-button",
          "alvo": "interno",
          "linhas": [
            1883
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#64748b",
              "linha": 1884
            },
            {
              "prop": "width",
              "valor": "45px",
              "linha": 1885
            },
            {
              "prop": "height",
              "valor": "45px",
              "linha": 1886
            },
            {
              "prop": "border",
              "valor": "#E5E5E5 1px solid",
              "linha": 1887
            },
            {
              "prop": "box-shadow",
              "valor": "0 4px 4px -4px rgba(0, 0, 0, 0.08)",
              "linha": 1888
            },
            {
              "prop": "transition",
              "valor": "background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
              "linha": 1889
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1890
            },
            {
              "prop": "outline-color",
              "valor": "transparent",
              "linha": 1891
            },
            {
              "prop": "padding",
              "valor": "0.75rem 0",
              "linha": 1892
            }
          ]
        }
      ],
      "linha": 1883
    },
    {
      "chave": ".btn-search",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-search .p-button",
          "alvo": "interno",
          "linhas": [
            1895
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 1896
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1897
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1898
            },
            {
              "prop": "height",
              "valor": "45px",
              "linha": 1899
            },
            {
              "prop": "border",
              "valor": "#DBEAFE 1px solid",
              "linha": 1900
            },
            {
              "prop": "box-shadow",
              "valor": "0 4px 4px -4px rgba(0, 0, 0, 0.08)",
              "linha": 1901
            },
            {
              "prop": "transition",
              "valor": "background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
              "linha": 1902
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1903
            },
            {
              "prop": "outline-color",
              "valor": "transparent",
              "linha": 1904
            },
            {
              "prop": "padding",
              "valor": "0.75rem 1.25rem",
              "linha": 1905
            }
          ]
        }
      ],
      "linha": 1895
    },
    {
      "chave": ".custom-dropdown",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".custom-dropdown .p-dropdown",
          "alvo": "interno",
          "linhas": [
            1908
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "25px",
              "linha": 1909
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1910
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 1911
            },
            {
              "prop": "border",
              "valor": "1px solid #e2e8ff",
              "linha": 1912
            }
          ]
        },
        {
          "seletor": ".custom-dropdown .p-dropdown-label",
          "alvo": "interno",
          "linhas": [
            1915
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1916
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 1917
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 1918
            }
          ]
        }
      ],
      "linha": 1908
    },
    {
      "chave": ".btn-cancel-active",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-cancel-active .p-button",
          "alvo": "interno",
          "linhas": [
            1921
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#1f2937",
              "linha": 1922
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1923
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1924
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1925
            },
            {
              "prop": "transition",
              "valor": "color 0.3s ease",
              "linha": 1926
            }
          ]
        },
        {
          "seletor": ".btn-cancel-active .p-button:hover",
          "alvo": "interno",
          "linhas": [
            1929
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#212529",
              "linha": 1930
            }
          ]
        }
      ],
      "linha": 1921
    },
    {
      "chave": ".btn-apply-changes",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-apply-changes .p-button",
          "alvo": "interno",
          "linhas": [
            1933
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#3B82F6",
              "linha": 1934
            },
            {
              "prop": "color",
              "valor": "white",
              "linha": 1935
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1936
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1937
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 1938
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 1939
            }
          ]
        }
      ],
      "linha": 1933
    },
    {
      "chave": ".filter-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".filter-label",
          "alvo": "proprio",
          "linhas": [
            1942
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1943
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 1944
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1945
            },
            {
              "prop": "color",
              "valor": "#314158",
              "linha": 1946
            }
          ]
        }
      ],
      "linha": 1942
    },
    {
      "chave": ".div-filter",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".div-filter",
          "alvo": "proprio",
          "linhas": [
            1949
          ],
          "atributos": [
            {
              "prop": "background-color",
              "valor": "#f8fafc",
              "linha": 1950
            },
            {
              "prop": "border",
              "valor": "1px solid #e2e8f0",
              "linha": 1951
            },
            {
              "prop": "border-radius",
              "valor": ".625rem",
              "linha": 1952
            },
            {
              "prop": "padding",
              "valor": "10px 10px 10px 12px",
              "linha": 1953
            }
          ]
        }
      ],
      "linha": 1949
    },
    {
      "chave": ".empty-state-title",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".empty-state-title",
          "alvo": "proprio",
          "linhas": [
            1962
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#1d293d",
              "linha": 1963
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1964
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 1965
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1966
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 1967
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1968
            },
            {
              "prop": "margin-bottom",
              "valor": "4px",
              "linha": 1969
            }
          ]
        }
      ],
      "linha": 1962
    },
    {
      "chave": ".empty-state-description",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".empty-state-description",
          "alvo": "proprio",
          "linhas": [
            1972
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#62798e",
              "linha": 1973
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 1974
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 1975
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 1976
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 1977
            },
            {
              "prop": "line-height",
              "valor": "normal",
              "linha": 1978
            }
          ]
        }
      ],
      "linha": 1972
    },
    {
      "chave": ".empty-state-div",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".empty-state-div",
          "alvo": "proprio",
          "linhas": [
            1981
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #cad5e2",
              "linha": 1982
            },
            {
              "prop": "padding",
              "valor": "65px 100px 65px 100px",
              "linha": 1983
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1984
            }
          ]
        }
      ],
      "linha": 1981
    },
    {
      "chave": ".no-results-state",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".no-results-state",
          "alvo": "proprio",
          "linhas": [
            1987
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #cad5e2",
              "linha": 1988
            },
            {
              "prop": "padding",
              "valor": "30px 100px 30px 100px",
              "linha": 1989
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 1990
            },
            {
              "prop": "text-align",
              "valor": "center",
              "linha": 1991
            }
          ]
        }
      ],
      "linha": 1987
    },
    {
      "chave": ".btn-add-restrictions",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "global-escondido",
          "titulo": "Regra com efeito global escondido",
          "texto": "Na linha 1998 o seletor \".btn-add-restrictions .p-button:focus, .p-button:enabled:focus\" também tem uma parte que não depende desta classe (\".p-button:enabled:focus\"). Essa parte vale para o sistema inteiro.",
          "linhas": [
            1998
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".btn-add-restrictions .p-button:focus",
          "alvo": "interno",
          "linhas": [
            1998
          ],
          "atributos": [
            {
              "prop": "outline",
              "valor": "none",
              "importante": true,
              "linha": 1999
            },
            {
              "prop": "box-shadow",
              "valor": "none",
              "importante": true,
              "linha": 2000
            }
          ]
        }
      ],
      "linha": 1998
    },
    {
      "chave": ".label-type",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label-type",
          "alvo": "proprio",
          "linhas": [
            2003
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#2A323F",
              "linha": 2004
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 2005
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 2006
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 2007
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2008
            },
            {
              "prop": "padding",
              "valor": "0.65rem 0 0.65rem 0.75rem",
              "linha": 2009
            }
          ]
        }
      ],
      "linha": 2003
    },
    {
      "chave": ".label-options",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".label-options",
          "alvo": "proprio",
          "linhas": [
            2012
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3C4451",
              "linha": 2013
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 2014
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 2015
            },
            {
              "prop": "font-style",
              "valor": "normal",
              "linha": 2016
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2017
            },
            {
              "prop": "padding",
              "valor": "0.55rem 0.75rem",
              "linha": 2018
            }
          ]
        }
      ],
      "linha": 2012
    },
    {
      "chave": ".batch-dropdown",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".batch-dropdown .p-dropdown",
          "alvo": "interno",
          "linhas": [
            2037
          ],
          "atributos": [
            {
              "prop": "margin-bottom",
              "valor": "6px",
              "linha": 2038
            },
            {
              "prop": "height",
              "valor": "35px",
              "linha": 2039
            }
          ]
        },
        {
          "seletor": ".batch-dropdown .p-dropdown-label",
          "alvo": "interno",
          "linhas": [
            2042
          ],
          "atributos": [
            {
              "prop": "align-self",
              "valor": "center",
              "linha": 2043
            }
          ]
        }
      ],
      "linha": 2037
    },
    {
      "chave": ".batch-dropdown-unselected",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".batch-dropdown-unselected .p-dropdown",
          "alvo": "interno",
          "linhas": [
            2046
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid rgba(239, 68, 68, 0.40)",
              "linha": 2047
            }
          ]
        },
        {
          "seletor": ".batch-dropdown-unselected .p-dropdown-label:after",
          "alvo": "interno",
          "linhas": [
            2050
          ],
          "atributos": [
            {
              "prop": "content",
              "valor": "\" *\"",
              "linha": 2051
            },
            {
              "prop": "color",
              "valor": "#EF4444",
              "linha": 2052
            }
          ]
        }
      ],
      "linha": 2046
    },
    {
      "chave": ".batch-action",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".batch-action",
          "alvo": "proprio",
          "linhas": [
            2055
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 2056
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", sans-serif",
              "linha": 2057
            },
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 2058
            }
          ]
        }
      ],
      "linha": 2055
    },
    {
      "chave": ".toastui-calendar-allday",
      "tipo": "externa",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".toastui-calendar-allday",
          "alvo": "proprio",
          "linhas": [
            2061
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "30px",
              "importante": true,
              "linha": 2062
            }
          ]
        }
      ],
      "linha": 2061
    },
    {
      "chave": ".toastui-calendar-template-alldayTitle",
      "tipo": "externa",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".toastui-calendar-template-alldayTitle",
          "alvo": "proprio",
          "linhas": [
            2065
          ],
          "atributos": [
            {
              "prop": "margin",
              "valor": "7px",
              "linha": 2066
            }
          ]
        }
      ],
      "linha": 2065
    },
    {
      "chave": ".total-box",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".total-box\" aparece 2 vezes (linhas 2086, 2162) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2086,
            2162
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".total-box",
          "alvo": "proprio",
          "linhas": [
            2086,
            2162
          ],
          "atributos": [
            {
              "prop": "margin-top",
              "valor": "16px",
              "linha": 2163,
              "anteriores": [
                {
                  "valor": "16px",
                  "linha": 2087,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background",
              "valor": "#F5F6FE",
              "linha": 2164,
              "anteriores": [
                {
                  "valor": "#F5F6FE",
                  "linha": 2088,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border",
              "valor": "1px solid #E4E7F5",
              "linha": 2165,
              "anteriores": [
                {
                  "valor": "1px solid #E4E7F5",
                  "linha": 2089,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 2166,
              "anteriores": [
                {
                  "valor": "10px",
                  "linha": 2090,
                  "importante": false
                }
              ]
            },
            {
              "prop": "padding",
              "valor": "15px 16px",
              "linha": 2167,
              "anteriores": [
                {
                  "valor": "15px 16px",
                  "linha": 2091,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2086
    },
    {
      "chave": ".summary-divider",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".summary-divider\" aparece 2 vezes (linhas 2094, 2170) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2094,
            2170
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".summary-divider",
          "alvo": "proprio",
          "linhas": [
            2094,
            2170
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "1px",
              "linha": 2171,
              "anteriores": [
                {
                  "valor": "1px",
                  "linha": 2095,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background",
              "valor": "#EEF1F4",
              "linha": 2171,
              "anteriores": [
                {
                  "valor": "#EEF1F4",
                  "linha": 2095,
                  "importante": false
                }
              ]
            },
            {
              "prop": "margin",
              "valor": "18px 0",
              "linha": 2171,
              "anteriores": [
                {
                  "valor": "18px 0",
                  "linha": 2095,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2094
    },
    {
      "chave": ".header-container-default-basic-layout",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".header-container-default-basic-layout\" aparece 2 vezes (linhas 2098, 2174) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2098,
            2174
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".header-container-default-basic-layout",
          "alvo": "proprio",
          "linhas": [
            2098,
            2174
          ],
          "atributos": [
            {
              "prop": "position",
              "valor": "sticky",
              "linha": 2175,
              "anteriores": [
                {
                  "valor": "sticky",
                  "linha": 2099,
                  "importante": false
                }
              ]
            },
            {
              "prop": "top",
              "valor": "0",
              "linha": 2176,
              "anteriores": [
                {
                  "valor": "0",
                  "linha": 2100,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2178,
              "anteriores": [
                {
                  "valor": "#fff",
                  "linha": 2102,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-bottom",
              "valor": "1px solid #E6E9EE",
              "linha": 2179,
              "anteriores": [
                {
                  "valor": "1px solid #E6E9EE",
                  "linha": 2103,
                  "importante": false
                }
              ]
            },
            {
              "prop": "box-shadow",
              "valor": "0 1px 3px rgba(16,24,40,.05)",
              "linha": 2180,
              "anteriores": [
                {
                  "valor": "0 1px 3px rgba(16,24,40,.05)",
                  "linha": 2104,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2098
    },
    {
      "chave": ".card-title",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".card-title\" aparece 2 vezes (linhas 2107, 2183) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2107,
            2183
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".card-title",
          "alvo": "proprio",
          "linhas": [
            2107,
            2183
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "16px 20px",
              "linha": 2184,
              "anteriores": [
                {
                  "valor": "16px 20px",
                  "linha": 2108,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-bottom",
              "valor": "1px solid #EEF1F4",
              "linha": 2185,
              "anteriores": [
                {
                  "valor": "1px solid #EEF1F4",
                  "linha": 2109,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2107
    },
    {
      "chave": ".group-header",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".group-header\" aparece 2 vezes (linhas 2112, 2188) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2112,
            2188
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".group-header",
          "alvo": "proprio",
          "linhas": [
            2112,
            2188
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "10px 20px",
              "linha": 2189,
              "anteriores": [
                {
                  "valor": "10px 20px",
                  "linha": 2113,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background",
              "valor": "#FAFBFC",
              "linha": 2190,
              "anteriores": [
                {
                  "valor": "#FAFBFC",
                  "linha": 2114,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-top",
              "valor": "1px solid #EEF1F4",
              "linha": 2191,
              "anteriores": [
                {
                  "valor": "1px solid #EEF1F4",
                  "linha": 2115,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-bottom",
              "valor": "1px solid #EEF1F4",
              "linha": 2192,
              "anteriores": [
                {
                  "valor": "1px solid #EEF1F4",
                  "linha": 2116,
                  "importante": false
                }
              ]
            },
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 2193,
              "anteriores": [
                {
                  "valor": "#64748B",
                  "linha": 2117,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font",
              "valor": "700 14px 'Inter'",
              "linha": 2194,
              "anteriores": [
                {
                  "valor": "700 14px 'Inter'",
                  "linha": 2118,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2112
    },
    {
      "chave": ".list-row",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".list-row\" aparece 2 vezes (linhas 2121, 2197) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2121,
            2197
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".list-row",
          "alvo": "proprio",
          "linhas": [
            2121,
            2197
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "13px 20px",
              "linha": 2198,
              "anteriores": [
                {
                  "valor": "13px 20px",
                  "linha": 2122,
                  "importante": false
                }
              ]
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2199,
              "anteriores": [
                {
                  "valor": "flex",
                  "linha": 2123,
                  "importante": false
                }
              ]
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2200,
              "anteriores": [
                {
                  "valor": "center",
                  "linha": 2124,
                  "importante": false
                }
              ]
            },
            {
              "prop": "justify-content",
              "valor": "space-between",
              "linha": 2201,
              "anteriores": [
                {
                  "valor": "space-between",
                  "linha": 2125,
                  "importante": false
                }
              ]
            },
            {
              "prop": "gap",
              "valor": "14px",
              "linha": 2202,
              "anteriores": [
                {
                  "valor": "14px",
                  "linha": 2126,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border-bottom",
              "valor": "1px solid #F4F6F8",
              "linha": 2203,
              "anteriores": [
                {
                  "valor": "1px solid #F4F6F8",
                  "linha": 2127,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2121
    },
    {
      "chave": ".list-row-title",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".list-row-title\" aparece 2 vezes (linhas 2138, 2214) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2138,
            2214
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".list-row-title",
          "alvo": "proprio",
          "linhas": [
            2138,
            2214
          ],
          "atributos": [
            {
              "prop": "font",
              "valor": "600 14px 'Inter'",
              "linha": 2215,
              "anteriores": [
                {
                  "valor": "600 14px 'Inter'",
                  "linha": 2139,
                  "importante": false
                }
              ]
            },
            {
              "prop": "color",
              "valor": "#303030",
              "linha": 2216,
              "anteriores": [
                {
                  "valor": "#303030",
                  "linha": 2140,
                  "importante": false
                }
              ]
            },
            {
              "prop": "white-space",
              "valor": "nowrap",
              "linha": 2217,
              "anteriores": [
                {
                  "valor": "nowrap",
                  "linha": 2141,
                  "importante": false
                }
              ]
            },
            {
              "prop": "overflow",
              "valor": "hidden",
              "linha": 2218,
              "anteriores": [
                {
                  "valor": "hidden",
                  "linha": 2142,
                  "importante": false
                }
              ]
            },
            {
              "prop": "text-overflow",
              "valor": "ellipsis",
              "linha": 2219,
              "anteriores": [
                {
                  "valor": "ellipsis",
                  "linha": 2143,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2138
    },
    {
      "chave": ".list-row-code",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".list-row-code\" aparece 2 vezes (linhas 2147, 2223) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2147,
            2223
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".list-row-code",
          "alvo": "proprio",
          "linhas": [
            2147,
            2223
          ],
          "atributos": [
            {
              "prop": "margin-top",
              "valor": "6px",
              "linha": 2224,
              "anteriores": [
                {
                  "valor": "6px",
                  "linha": 2148,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font",
              "valor": "400 12px 'Inter'",
              "linha": 2225,
              "anteriores": [
                {
                  "valor": "400 12px 'Inter'",
                  "linha": 2149,
                  "importante": false
                }
              ]
            },
            {
              "prop": "color",
              "valor": "#767676",
              "linha": 2226,
              "anteriores": [
                {
                  "valor": "#767676",
                  "linha": 2150,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2147
    },
    {
      "chave": ".unlink-icon",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "imagem-ausente",
          "titulo": "Imagem não encontrada",
          "texto": "O arquivo /assets/img/icon.svg não existe neste projeto (src/assets/img/icon.svg), então a imagem não aparece.",
          "linhas": [
            2231
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".unlink-icon",
          "alvo": "proprio",
          "linhas": [
            2230
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "url('/assets/img/icon.svg') no-repeat center",
              "linha": 2231
            },
            {
              "prop": "background-size",
              "valor": "contain",
              "linha": 2232
            },
            {
              "prop": "width",
              "valor": "1rem",
              "linha": 2233
            },
            {
              "prop": "height",
              "valor": "1rem",
              "linha": 2234
            },
            {
              "prop": "display",
              "valor": "inline-block",
              "linha": 2235
            }
          ]
        }
      ],
      "linha": 2230
    },
    {
      "chave": ".expandable-list-border",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-border",
          "alvo": "proprio",
          "linhas": [
            2238
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2239
            },
            {
              "prop": "border",
              "valor": "1px solid #e5e7eb",
              "linha": 2240
            },
            {
              "prop": "border-radius",
              "valor": "12px",
              "linha": 2241
            },
            {
              "prop": "overflow",
              "valor": "hidden",
              "linha": 2242
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
              "linha": 2243
            }
          ]
        }
      ],
      "linha": 2238
    },
    {
      "chave": ".expandable-list-header",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-header",
          "alvo": "proprio",
          "linhas": [
            2246
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2247
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2248
            },
            {
              "prop": "gap",
              "valor": "12px",
              "linha": 2249
            },
            {
              "prop": "padding",
              "valor": "12px 20px",
              "linha": 2250
            },
            {
              "prop": "font-family",
              "valor": "\"Geist\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
              "linha": 2251
            }
          ]
        }
      ],
      "linha": 2246
    },
    {
      "chave": ".expandable-list-header-title",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-header-title",
          "alvo": "proprio",
          "linhas": [
            2254
          ],
          "atributos": [
            {
              "prop": "flex",
              "valor": "1",
              "linha": 2255
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2256
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2257
            },
            {
              "prop": "gap",
              "valor": "12px",
              "linha": 2258
            },
            {
              "prop": "font-size",
              "valor": "15px",
              "linha": 2259
            },
            {
              "prop": "color",
              "valor": "#1f2937",
              "linha": 2260
            }
          ]
        }
      ],
      "linha": 2254
    },
    {
      "chave": ".expandable-list-header-chevron",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-header-chevron",
          "alvo": "proprio",
          "linhas": [
            2263
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2264
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2265
            },
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 2266
            },
            {
              "prop": "transition",
              "valor": "transform .18s ease",
              "linha": 2267
            }
          ]
        }
      ],
      "linha": 2263
    },
    {
      "chave": ".expandable-list-header-chevron-open",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-header-chevron-open",
          "alvo": "proprio",
          "linhas": [
            2270
          ],
          "atributos": [
            {
              "prop": "transform",
              "valor": "rotate(180deg)",
              "linha": 2270
            }
          ]
        }
      ],
      "linha": 2270
    },
    {
      "chave": ".expandable-list-header-button",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-header-button .p-button",
          "alvo": "interno",
          "linhas": [
            2272
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "36px",
              "linha": 2273
            },
            {
              "prop": "height",
              "valor": "32px",
              "linha": 2274
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2275
            },
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2276
            },
            {
              "prop": "border",
              "valor": "1px solid #d1d5db",
              "linha": 2277
            },
            {
              "prop": "border-radius",
              "valor": "9px",
              "linha": 2278
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2279
            }
          ]
        },
        {
          "seletor": ".expandable-list-header-button .p-button-icon",
          "alvo": "interno",
          "linhas": [
            2282
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2282
            }
          ]
        },
        {
          "seletor": ".expandable-list-header-button:hover",
          "alvo": "proprio",
          "linhas": [
            2284
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#f9fafb",
              "linha": 2284
            }
          ]
        }
      ],
      "linha": 2272
    },
    {
      "chave": ".expandable-list-body",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-body",
          "alvo": "proprio",
          "linhas": [
            2286
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "4px 20px 4px",
              "linha": 2287
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2288
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2289
            },
            {
              "prop": "gap",
              "valor": "14px",
              "linha": 2290
            }
          ]
        }
      ],
      "linha": 2286
    },
    {
      "chave": ".expandable-list-filters-border",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-filters-border",
          "alvo": "proprio",
          "linhas": [
            2293
          ],
          "atributos": [
            {
              "prop": "margin",
              "valor": "0 20px 14px",
              "linha": 2294
            },
            {
              "prop": "padding",
              "valor": "16px",
              "linha": 2295
            },
            {
              "prop": "background",
              "valor": "#f9fafb",
              "linha": 2296
            },
            {
              "prop": "border",
              "valor": "1px solid #eceef1",
              "linha": 2297
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 2298
            }
          ]
        }
      ],
      "linha": 2293
    },
    {
      "chave": ".expandable-list-filters-field",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-filters-field",
          "alvo": "proprio",
          "linhas": [
            2301
          ],
          "atributos": [
            {
              "prop": "margin-bottom",
              "valor": "0",
              "linha": 2301
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field .field.col-12",
          "alvo": "interno",
          "linhas": [
            2302
          ],
          "atributos": [
            {
              "prop": "margin-bottom",
              "valor": "16px",
              "linha": 2302
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field input",
          "alvo": "interno",
          "linhas": [
            2303
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "38px",
              "linha": 2303
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field .p-multiselect",
          "alvo": "interno",
          "linhas": [
            2304
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "38px",
              "linha": 2304
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2304
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2304
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field .p-multiselect-label",
          "alvo": "interno",
          "linhas": [
            2305
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2305
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2305
            },
            {
              "prop": "padding-top",
              "valor": "0",
              "linha": 2305
            },
            {
              "prop": "padding-bottom",
              "valor": "0",
              "linha": 2305
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field .p-calendar .p-inputtext",
          "alvo": "interno",
          "linhas": [
            2306
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "38px",
              "linha": 2306
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field .p-calendar .p-datepicker-trigger.p-button",
          "alvo": "interno",
          "linhas": [
            2307
          ],
          "atributos": [
            {
              "prop": "width",
              "valor": "38px",
              "linha": 2307
            },
            {
              "prop": "height",
              "valor": "38px",
              "linha": 2307
            },
            {
              "prop": "padding",
              "valor": "0",
              "linha": 2307
            }
          ]
        },
        {
          "seletor": ".expandable-list-filters-field .p-dropdown",
          "alvo": "interno",
          "linhas": [
            2359
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "38px",
              "linha": 2359
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2359
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2359
            }
          ]
        }
      ],
      "linha": 2301
    },
    {
      "chave": ".expandable-list-filters-field-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-filters-field-label",
          "alvo": "proprio",
          "linhas": [
            2309
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "block",
              "linha": 2310
            },
            {
              "prop": "margin-bottom",
              "valor": "6px",
              "linha": 2311
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 2312
            },
            {
              "prop": "color",
              "valor": "#6b7280",
              "linha": 2313
            }
          ]
        }
      ],
      "linha": 2309
    },
    {
      "chave": ".expandable-list-card-border",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-card-border",
          "alvo": "proprio",
          "linhas": [
            2316
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Geist\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
              "linha": 2317
            },
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2318
            },
            {
              "prop": "border",
              "valor": "1px solid #e5e7eb",
              "linha": 2319
            },
            {
              "prop": "border-radius",
              "valor": "11px",
              "linha": 2320
            },
            {
              "prop": "padding",
              "valor": "6px 12px 6px",
              "linha": 2321
            },
            {
              "prop": "box-shadow",
              "valor": "0 1px 2px rgba(16, 24, 40, .04)",
              "linha": 2322
            }
          ]
        }
      ],
      "linha": 2316
    },
    {
      "chave": ".expandable-list-card-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-card-label",
          "alvo": "proprio",
          "linhas": [
            2325
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2326
            },
            {
              "prop": "color",
              "valor": "#6b7280",
              "linha": 2326
            },
            {
              "prop": "margin-bottom",
              "valor": "3px",
              "linha": 2326
            }
          ]
        }
      ],
      "linha": 2325
    },
    {
      "chave": ".expandable-list-card-value",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-card-value",
          "alvo": "proprio",
          "linhas": [
            2329
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "15px",
              "linha": 2330
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2330
            }
          ]
        }
      ],
      "linha": 2329
    },
    {
      "chave": ".expandable-list-card-navigation-handler",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-card-navigation-handler",
          "alvo": "proprio",
          "linhas": [
            2333
          ],
          "atributos": [
            {
              "prop": "flex",
              "valor": "none",
              "linha": 2334
            },
            {
              "prop": "width",
              "valor": "34px",
              "linha": 2335
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 2336
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2337
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2338
            },
            {
              "prop": "justify-content",
              "valor": "center",
              "linha": 2339
            },
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2340
            },
            {
              "prop": "color",
              "valor": "#6b7280",
              "linha": 2341
            }
          ]
        },
        {
          "seletor": ".expandable-list-card-navigation-handler:hover",
          "alvo": "proprio",
          "linhas": [
            2343
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#f9fafb",
              "linha": 2343
            }
          ]
        }
      ],
      "linha": 2333
    },
    {
      "chave": ".expandable-list-card-address",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-card-address",
          "alvo": "proprio",
          "linhas": [
            2345
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "4px 12px",
              "linha": 2346
            },
            {
              "prop": "background",
              "valor": "#f9fafb",
              "linha": 2347
            },
            {
              "prop": "border",
              "valor": "1px solid #eceef1",
              "linha": 2348
            },
            {
              "prop": "border-radius",
              "valor": "8px",
              "linha": 2349
            },
            {
              "prop": "font-size",
              "valor": "12px",
              "linha": 2350
            },
            {
              "prop": "line-height",
              "valor": "16px",
              "linha": 2351
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2352
            }
          ]
        }
      ],
      "linha": 2345
    },
    {
      "chave": ".expandable-list-card-address-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".expandable-list-card-address-label",
          "alvo": "proprio",
          "linhas": [
            2355
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#9ca3af",
              "linha": 2356
            }
          ]
        }
      ],
      "linha": 2355
    },
    {
      "chave": ".move-left-border",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-left-border",
          "alvo": "proprio",
          "linhas": [
            2361
          ],
          "atributos": [
            {
              "prop": "border-left",
              "valor": "3px solid #9ca3af",
              "linha": 2362
            },
            {
              "prop": "padding-left",
              "valor": "12px",
              "linha": 2363
            }
          ]
        }
      ],
      "linha": 2361
    },
    {
      "chave": ".move-type-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-type-label",
          "alvo": "proprio",
          "linhas": [
            2365
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "15px",
              "linha": 2365
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2365
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2365
            }
          ]
        }
      ],
      "linha": 2365
    },
    {
      "chave": ".move-quantity-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-quantity-label",
          "alvo": "proprio",
          "linhas": [
            2366
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "15px",
              "linha": 2366
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2366
            },
            {
              "prop": "margin-top",
              "valor": "2px",
              "linha": 2366
            }
          ]
        }
      ],
      "linha": 2366
    },
    {
      "chave": ".move-date-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-date-label",
          "alvo": "proprio",
          "linhas": [
            2367
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2367
            },
            {
              "prop": "color",
              "valor": "#6b7280",
              "linha": 2367
            },
            {
              "prop": "margin-top",
              "valor": "4px",
              "linha": 2367
            }
          ]
        }
      ],
      "linha": 2367
    },
    {
      "chave": ".move-left-border--instalacao",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-left-border--instalacao",
          "alvo": "proprio",
          "linhas": [
            2369
          ],
          "atributos": [
            {
              "prop": "border-left-color",
              "valor": "#16a34a",
              "linha": 2369
            }
          ]
        },
        {
          "seletor": ".move-left-border--instalacao .move-type-label",
          "alvo": "interno",
          "linhas": [
            2370
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#16a34a",
              "linha": 2370
            }
          ]
        }
      ],
      "linha": 2369
    },
    {
      "chave": ".move-left-border--desinstalacao",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-left-border--desinstalacao",
          "alvo": "proprio",
          "linhas": [
            2372
          ],
          "atributos": [
            {
              "prop": "border-left-color",
              "valor": "#dc2626",
              "linha": 2372
            }
          ]
        },
        {
          "seletor": ".move-left-border--desinstalacao .move-type-label",
          "alvo": "interno",
          "linhas": [
            2373
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#dc2626",
              "linha": 2373
            }
          ]
        }
      ],
      "linha": 2372
    },
    {
      "chave": ".move-left-border--transferencia",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-left-border--transferencia",
          "alvo": "proprio",
          "linhas": [
            2375
          ],
          "atributos": [
            {
              "prop": "border-left-color",
              "valor": "#2563eb",
              "linha": 2375
            }
          ]
        },
        {
          "seletor": ".move-left-border--transferencia .move-type-label",
          "alvo": "interno",
          "linhas": [
            2376
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#2563eb",
              "linha": 2376
            }
          ]
        }
      ],
      "linha": 2375
    },
    {
      "chave": ".move-left-border--material",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-left-border--material",
          "alvo": "proprio",
          "linhas": [
            2378
          ],
          "atributos": [
            {
              "prop": "border-left",
              "valor": "2px solid #CBD5E1",
              "linha": 2379
            },
            {
              "prop": "border-radius",
              "valor": "5px",
              "linha": 2380
            }
          ]
        }
      ],
      "linha": 2378
    },
    {
      "chave": ".move-object-border",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-object-border",
          "alvo": "proprio",
          "linhas": [
            2383
          ],
          "atributos": [
            {
              "prop": "border",
              "valor": "1px solid #e5e7eb",
              "linha": 2384
            },
            {
              "prop": "border-radius",
              "valor": "9px",
              "linha": 2385
            },
            {
              "prop": "padding",
              "valor": "6px 12px 12px",
              "linha": 2386
            },
            {
              "prop": "margin",
              "valor": "0",
              "linha": 2387
            },
            {
              "prop": "min-width",
              "valor": "0",
              "linha": 2388
            }
          ]
        }
      ],
      "linha": 2383
    },
    {
      "chave": ".move-object-legend",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-object-legend",
          "alvo": "proprio",
          "linhas": [
            2391
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2392
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2393
            },
            {
              "prop": "gap",
              "valor": "5px",
              "linha": 2394
            },
            {
              "prop": "padding",
              "valor": "0 4px",
              "linha": 2395
            },
            {
              "prop": "font-size",
              "valor": "12.5px",
              "linha": 2396
            },
            {
              "prop": "color",
              "valor": "#6b7280",
              "linha": 2397
            }
          ]
        }
      ],
      "linha": 2391
    },
    {
      "chave": ".move-object-legend-icon",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-object-legend-icon",
          "alvo": "proprio",
          "linhas": [
            2400
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 2400
            },
            {
              "prop": "color",
              "valor": "#9ca3af",
              "linha": 2400
            }
          ]
        }
      ],
      "linha": 2400
    },
    {
      "chave": ".move-object-main-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-object-main-label",
          "alvo": "proprio",
          "linhas": [
            2402
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14.5px",
              "linha": 2402
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2402
            }
          ]
        }
      ],
      "linha": 2402
    },
    {
      "chave": ".move-object-aux-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".move-object-aux-label",
          "alvo": "proprio",
          "linhas": [
            2403
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2403
            },
            {
              "prop": "color",
              "valor": "#6b7280",
              "linha": 2403
            },
            {
              "prop": "margin-top",
              "valor": "3px",
              "linha": 2403
            }
          ]
        }
      ],
      "linha": 2403
    },
    {
      "chave": ".card-container-default-basic-layout",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".card-container-default-basic-layout",
          "alvo": "proprio",
          "linhas": [
            2405
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FFFFFF",
              "linha": 2406
            },
            {
              "prop": "border",
              "valor": "1px solid #E5E7EB",
              "linha": 2407
            },
            {
              "prop": "border-radius",
              "valor": "8px",
              "linha": 2408
            }
          ]
        }
      ],
      "linha": 2405
    },
    {
      "chave": ".ui-title",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ui-title",
          "alvo": "proprio",
          "linhas": [
            2411
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 2412
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2413
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2414
            },
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 2415
            }
          ]
        }
      ],
      "linha": 2411
    },
    {
      "chave": ".ui-label",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ui-label",
          "alvo": "proprio",
          "linhas": [
            2418
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 2419
            },
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 2420
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2421
            },
            {
              "prop": "color",
              "valor": "#64748B",
              "linha": 2422
            }
          ]
        }
      ],
      "linha": 2418
    },
    {
      "chave": ".ui-value",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ui-value",
          "alvo": "proprio",
          "linhas": [
            2425
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "\"Inter\", sans-serif",
              "linha": 2426
            },
            {
              "prop": "font-size",
              "valor": "13.5px",
              "linha": 2427
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2428
            },
            {
              "prop": "color",
              "valor": "#1E293B",
              "linha": 2429
            }
          ]
        }
      ],
      "linha": 2425
    },
    {
      "chave": ".request-approve-btn",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada",
          "titulo": "Declarada mais de uma vez com valores diferentes",
          "texto": "\".request-approve-btn .p-button\" aparece 2 vezes (linhas 2432, 2464). Quando o mesmo atributo se repete, vale o da última declaração.",
          "detalhes": [
            "font-size: 13px (linha 2465) sobrescreve a parte \"font-size\" de \"font: 600 14px 'Inter'\" (linha 2437)"
          ],
          "linhas": [
            2432,
            2464
          ]
        },
        {
          "tipo": "duplicada-complementar",
          "titulo": "Declarada em mais de um lugar (sem conflito)",
          "texto": "\".request-approve-btn .p-button:hover\" aparece 2 vezes (linhas 2446, 2468), cada vez com atributos diferentes. Nada é sobrescrito, mas vale juntar num bloco só.",
          "linhas": [
            2446,
            2468
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".request-approve-btn .p-button",
          "alvo": "interno",
          "linhas": [
            2432,
            2464
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "40px",
              "linha": 2433
            },
            {
              "prop": "padding",
              "valor": "0 16px",
              "linha": 2434
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 2435
            },
            {
              "prop": "border",
              "valor": "1px solid transparent",
              "linha": 2436
            },
            {
              "prop": "font",
              "valor": "600 14px 'Inter'",
              "linha": 2437
            },
            {
              "prop": "display",
              "valor": "inline-flex",
              "linha": 2438
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2439
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2440
            },
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 2441
            },
            {
              "prop": "background",
              "valor": "#10B981",
              "linha": 2442
            },
            {
              "prop": "color",
              "valor": "#fff",
              "linha": 2443
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2465
            }
          ]
        },
        {
          "seletor": ".request-approve-btn .p-button:hover",
          "alvo": "interno",
          "linhas": [
            2446,
            2468
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#0DA271",
              "linha": 2446
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2469
            }
          ]
        }
      ],
      "linha": 2432
    },
    {
      "chave": ".request-cancel-btn",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada",
          "titulo": "Declarada mais de uma vez com valores diferentes",
          "texto": "\".request-cancel-btn .p-button\" aparece 2 vezes (linhas 2448, 2472). Quando o mesmo atributo se repete, vale o da última declaração.",
          "detalhes": [
            "font-size: 13px (linha 2473) sobrescreve a parte \"font-size\" de \"font: 600 14px 'Inter'\" (linha 2453)"
          ],
          "linhas": [
            2448,
            2472
          ]
        },
        {
          "tipo": "duplicada-complementar",
          "titulo": "Declarada em mais de um lugar (sem conflito)",
          "texto": "\".request-cancel-btn .p-button:hover\" aparece 2 vezes (linhas 2462, 2476), cada vez com atributos diferentes. Nada é sobrescrito, mas vale juntar num bloco só.",
          "linhas": [
            2462,
            2476
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".request-cancel-btn .p-button",
          "alvo": "interno",
          "linhas": [
            2448,
            2472
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "40px",
              "linha": 2449
            },
            {
              "prop": "padding",
              "valor": "0 16px",
              "linha": 2450
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 2451
            },
            {
              "prop": "border",
              "valor": "1px solid #FCA5A5",
              "linha": 2452
            },
            {
              "prop": "font",
              "valor": "600 14px 'Inter'",
              "linha": 2453
            },
            {
              "prop": "display",
              "valor": "inline-flex",
              "linha": 2454
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2455
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2456
            },
            {
              "prop": "cursor",
              "valor": "pointer",
              "linha": 2457
            },
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2458
            },
            {
              "prop": "color",
              "valor": "#DC2626",
              "linha": 2459
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2473
            }
          ]
        },
        {
          "seletor": ".request-cancel-btn .p-button:hover",
          "alvo": "interno",
          "linhas": [
            2462,
            2476
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FEF2F2",
              "linha": 2462
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2477
            }
          ]
        }
      ],
      "linha": 2448
    },
    {
      "chave": ".filter-toggle-active",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".filter-toggle-active .p-button\" aparece 2 vezes (linhas 2480, 2555) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2480,
            2555
          ]
        },
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".filter-toggle-active .p-button .p-button-icon\" aparece 2 vezes (linhas 2485, 2560) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2485,
            2560
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".filter-toggle-active .p-button",
          "alvo": "interno",
          "linhas": [
            2480,
            2555
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#89B4FA",
              "linha": 2556,
              "anteriores": [
                {
                  "valor": "#89B4FA",
                  "linha": 2481,
                  "importante": false
                }
              ]
            },
            {
              "prop": "background-color",
              "valor": "#ECF3FF",
              "linha": 2557,
              "anteriores": [
                {
                  "valor": "#ECF3FF",
                  "linha": 2482,
                  "importante": false
                }
              ]
            }
          ]
        },
        {
          "seletor": ".filter-toggle-active .p-button .p-button-icon",
          "alvo": "interno",
          "linhas": [
            2485,
            2560
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#3B82F6",
              "linha": 2561,
              "anteriores": [
                {
                  "valor": "#3B82F6",
                  "linha": 2486,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2480
    },
    {
      "chave": ".btn-neutral-s",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn-neutral-s .p-button",
          "alvo": "interno",
          "linhas": [
            2488
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2489
            },
            {
              "prop": "border",
              "valor": "1px solid #D5DAE1",
              "linha": 2490
            },
            {
              "prop": "border-radius",
              "valor": "8px",
              "linha": 2491
            },
            {
              "prop": "padding",
              "valor": "8px 13px",
              "linha": 2492
            },
            {
              "prop": "font",
              "valor": "600 14px 'Inter'",
              "linha": 2493
            },
            {
              "prop": "color",
              "valor": "#374151",
              "linha": 2494
            }
          ]
        }
      ],
      "linha": 2488
    },
    {
      "chave": ".confirm-attachment",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".confirm-attachment .confirm-attachment__body",
          "alvo": "proprio",
          "linhas": [
            2497
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2498
            },
            {
              "prop": "align-items",
              "valor": "flex-start",
              "linha": 2499
            },
            {
              "prop": "gap",
              "valor": "12px",
              "linha": 2500
            },
            {
              "prop": "padding",
              "valor": "20px 24px",
              "linha": 2501
            },
            {
              "prop": "background",
              "valor": "#FFFFFF",
              "linha": 2502
            },
            {
              "prop": "border-radius",
              "valor": "8px",
              "linha": 2503
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__icon",
          "alvo": "proprio",
          "linhas": [
            2506
          ],
          "atributos": [
            {
              "prop": "color",
              "valor": "#F59E0B",
              "linha": 2507
            },
            {
              "prop": "font-size",
              "valor": "1.25rem",
              "linha": 2508
            },
            {
              "prop": "margin-top",
              "valor": "2px",
              "linha": 2509
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__text",
          "alvo": "proprio",
          "linhas": [
            2512
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2513
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2514
            },
            {
              "prop": "gap",
              "valor": "4px",
              "linha": 2515
            },
            {
              "prop": "flex",
              "valor": "1",
              "linha": 2516
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__title",
          "alvo": "proprio",
          "linhas": [
            2519
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 2520
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 2521
            },
            {
              "prop": "color",
              "valor": "#1F2937",
              "linha": 2522
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__message",
          "alvo": "proprio",
          "linhas": [
            2525
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2526
            },
            {
              "prop": "color",
              "valor": "#4B5563",
              "linha": 2527
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__actions",
          "alvo": "proprio",
          "linhas": [
            2530
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2531
            },
            {
              "prop": "justify-content",
              "valor": "flex-end",
              "linha": 2532
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2533
            },
            {
              "prop": "margin-top",
              "valor": "16px",
              "linha": 2534
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__cancel.p-button",
          "alvo": "proprio",
          "linhas": [
            2537
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FFFFFF",
              "linha": 2538
            },
            {
              "prop": "color",
              "valor": "#4B5563",
              "linha": 2539
            },
            {
              "prop": "border",
              "valor": "1px solid #D1D5DB",
              "linha": 2540
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2541
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 2542
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 2543
            }
          ]
        },
        {
          "seletor": ".confirm-attachment__accept.p-button",
          "alvo": "proprio",
          "linhas": [
            2546
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#EF4444",
              "linha": 2547
            },
            {
              "prop": "border-color",
              "valor": "#EF4444",
              "linha": 2548
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 2549
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2550
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 2551
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 2552
            }
          ]
        }
      ],
      "linha": 2497
    },
    {
      "chave": ".new-btn-border-blue",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-identica",
          "titulo": "Declarada mais de uma vez (cópias iguais)",
          "texto": "\".new-btn-border-blue .p-button\" aparece 2 vezes (linhas 2564, 2573) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.",
          "linhas": [
            2564,
            2573
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".new-btn-border-blue .p-button",
          "alvo": "interno",
          "linhas": [
            2564,
            2573
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#F0F5FF",
              "linha": 2574,
              "anteriores": [
                {
                  "valor": "#F0F5FF",
                  "linha": 2565,
                  "importante": false
                }
              ]
            },
            {
              "prop": "color",
              "valor": "#1d4ed8",
              "linha": 2575,
              "anteriores": [
                {
                  "valor": "#1d4ed8",
                  "linha": 2566,
                  "importante": false
                }
              ]
            },
            {
              "prop": "border",
              "valor": "1px solid #3B82F6",
              "linha": 2576,
              "anteriores": [
                {
                  "valor": "1px solid #3B82F6",
                  "linha": 2567,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2577,
              "anteriores": [
                {
                  "valor": "14px",
                  "linha": 2568,
                  "importante": false
                }
              ]
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 2578,
              "anteriores": [
                {
                  "valor": "600",
                  "linha": 2569,
                  "importante": false
                }
              ]
            },
            {
              "prop": "height",
              "valor": "30px",
              "linha": 2579,
              "anteriores": [
                {
                  "valor": "30px",
                  "linha": 2570,
                  "importante": false
                }
              ]
            }
          ]
        }
      ],
      "linha": 2564
    },
    {
      "chave": ".page-header",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".page-header",
          "alvo": "proprio",
          "linhas": [
            2582
          ],
          "atributos": [
            {
              "prop": "position",
              "valor": "sticky",
              "linha": 2583
            },
            {
              "prop": "top",
              "valor": "0",
              "linha": 2584
            },
            {
              "prop": "z-index",
              "valor": "2",
              "linha": 2585
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2586
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2587
            },
            {
              "prop": "justify-content",
              "valor": "space-between",
              "linha": 2588
            },
            {
              "prop": "padding",
              "valor": "16px 32px",
              "linha": 2589
            },
            {
              "prop": "background",
              "valor": "#FAFAFA",
              "linha": 2590
            },
            {
              "prop": "border-bottom",
              "valor": "1px solid #E2E8F0",
              "linha": 2591
            }
          ]
        },
        {
          "seletor": ".page-header__title",
          "alvo": "proprio",
          "linhas": [
            2594
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2595
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 2596
            },
            {
              "prop": "line-height",
              "valor": "32px",
              "linha": 2597
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2598
            },
            {
              "prop": "color",
              "valor": "#1F2937",
              "linha": 2599
            },
            {
              "prop": "margin",
              "valor": "0",
              "linha": 2600
            }
          ]
        },
        {
          "seletor": ".page-header__actions",
          "alvo": "proprio",
          "linhas": [
            2603
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2604
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2605
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2606
            }
          ]
        }
      ],
      "linha": 2582
    },
    {
      "chave": ".header-btn",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".header-btn .p-button-icon",
          "alvo": "interno",
          "linhas": [
            2609
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 2610
            }
          ]
        },
        {
          "seletor": ".header-btn.is-active",
          "alvo": "proprio",
          "linhas": [
            2697
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#E9F2FF",
              "linha": 2699
            },
            {
              "prop": "color",
              "valor": "#1d4ed8",
              "linha": 2700
            }
          ]
        }
      ],
      "linha": 2609
    },
    {
      "chave": ".page-content",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".page-content",
          "alvo": "proprio",
          "linhas": [
            2613
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2614
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2615
            },
            {
              "prop": "gap",
              "valor": "16px",
              "linha": 2616
            },
            {
              "prop": "padding",
              "valor": "16px 32px 24px",
              "linha": 2617
            }
          ]
        }
      ],
      "linha": 2613
    },
    {
      "chave": ".list-stack",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".list-stack",
          "alvo": "proprio",
          "linhas": [
            2620
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2621
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2622
            },
            {
              "prop": "gap",
              "valor": "10px",
              "linha": 2623
            }
          ]
        }
      ],
      "linha": 2620
    },
    {
      "chave": ".state-fill",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".state-fill",
          "alvo": "proprio",
          "linhas": [
            2626
          ],
          "atributos": [
            {
              "prop": "flex",
              "valor": "1",
              "linha": 2627
            },
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2628
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2629
            },
            {
              "prop": "justify-content",
              "valor": "center",
              "linha": 2630
            }
          ]
        }
      ],
      "linha": 2626
    },
    {
      "chave": ".req-empty",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".req-empty",
          "alvo": "proprio",
          "linhas": [
            2633
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2634
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2635
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2636
            },
            {
              "prop": "justify-content",
              "valor": "center",
              "linha": 2637
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2638
            },
            {
              "prop": "min-height",
              "valor": "240px",
              "linha": 2639
            },
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2640
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2641
            },
            {
              "prop": "line-height",
              "valor": "21px",
              "linha": 2642
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2643
            },
            {
              "prop": "color",
              "valor": "#6B7280",
              "linha": 2644
            }
          ]
        },
        {
          "seletor": ".req-empty i",
          "alvo": "interno",
          "linhas": [
            2647
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "18px",
              "linha": 2648
            }
          ]
        }
      ],
      "linha": 2633
    },
    {
      "chave": ".load-state",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".load-state",
          "alvo": "proprio",
          "linhas": [
            2651
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2652
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2653
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2654
            },
            {
              "prop": "justify-content",
              "valor": "center",
              "linha": 2655
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2656
            },
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2657
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2658
            },
            {
              "prop": "line-height",
              "valor": "20px",
              "linha": 2659
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2660
            },
            {
              "prop": "color",
              "valor": "#6A7282",
              "linha": 2661
            }
          ]
        }
      ],
      "linha": 2651
    },
    {
      "chave": ".load-state--error",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".load-state--error i",
          "alvo": "interno",
          "linhas": [
            2664
          ],
          "atributos": [
            {
              "prop": "font-size",
              "valor": "20px",
              "linha": 2665
            },
            {
              "prop": "color",
              "valor": "#DC2626",
              "linha": 2666
            }
          ]
        }
      ],
      "linha": 2664
    },
    {
      "chave": ".btn--md",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--md",
          "alvo": "proprio",
          "linhas": [
            2669
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "32px",
              "linha": 2670
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 2671
            }
          ]
        }
      ],
      "linha": 2669
    },
    {
      "chave": ".btn--primary",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--primary",
          "alvo": "proprio",
          "linhas": [
            2674
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#3B82F6",
              "linha": 2675
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 2676
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 2677
            }
          ]
        }
      ],
      "linha": 2674
    },
    {
      "chave": ".btn--secondary",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--secondary",
          "alvo": "proprio",
          "linhas": [
            2680
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#FFFFFF",
              "linha": 2681
            },
            {
              "prop": "color",
              "valor": "#1F2937",
              "linha": 2682
            },
            {
              "prop": "border",
              "valor": "1px solid #D9DCE1",
              "linha": 2683
            }
          ]
        }
      ],
      "linha": 2680
    },
    {
      "chave": ".btn--neutral",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--neutral",
          "alvo": "proprio",
          "linhas": [
            2686
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "transparent",
              "linha": 2687
            },
            {
              "prop": "color",
              "valor": "#6B7280",
              "linha": 2688
            },
            {
              "prop": "border",
              "valor": "1px solid transparent",
              "linha": 2689
            }
          ]
        },
        {
          "seletor": ".btn--neutral.is-active",
          "alvo": "proprio",
          "linhas": [
            2697
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#E9F2FF",
              "linha": 2699
            },
            {
              "prop": "color",
              "valor": "#1d4ed8",
              "linha": 2700
            }
          ]
        }
      ],
      "linha": 2686
    },
    {
      "chave": ".btn--text",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--text",
          "alvo": "proprio",
          "linhas": [
            2692
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "transparent",
              "linha": 2693
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 2694
            }
          ]
        }
      ],
      "linha": 2692
    },
    {
      "chave": ".btn--lg",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--lg",
          "alvo": "proprio",
          "linhas": [
            2703
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "40px",
              "linha": 2704
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 2705
            }
          ]
        }
      ],
      "linha": 2703
    },
    {
      "chave": ".btn--danger",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".btn--danger",
          "alvo": "proprio",
          "linhas": [
            2708
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#DC2626",
              "linha": 2709
            },
            {
              "prop": "color",
              "valor": "#FFFFFF",
              "linha": 2710
            },
            {
              "prop": "border",
              "valor": "none",
              "linha": 2711
            }
          ]
        }
      ],
      "linha": 2708
    },
    {
      "chave": ".t-title-lg",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".t-title-lg",
          "alvo": "proprio",
          "linhas": [
            2714
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2715
            },
            {
              "prop": "font-size",
              "valor": "24px",
              "linha": 2716
            },
            {
              "prop": "line-height",
              "valor": "32px",
              "linha": 2717
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2718
            }
          ]
        }
      ],
      "linha": 2714
    },
    {
      "chave": ".t-label-field",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".t-label-field",
          "alvo": "proprio",
          "linhas": [
            2721
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2722
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2723
            },
            {
              "prop": "line-height",
              "valor": "20px",
              "linha": 2724
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2725
            }
          ]
        }
      ],
      "linha": 2721
    },
    {
      "chave": ".ui-input",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".ui-input",
          "alvo": "proprio",
          "linhas": [
            2728
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2729
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2730
            },
            {
              "prop": "line-height",
              "valor": "21px",
              "linha": 2731
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2732
            }
          ]
        }
      ],
      "linha": 2728
    },
    {
      "chave": ".leave-dialog",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".leave-dialog .p-dialog-header",
          "alvo": "interno",
          "linhas": [
            2735
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "none",
              "linha": 2736
            }
          ]
        },
        {
          "seletor": ".leave-dialog .p-dialog-content",
          "alvo": "interno",
          "linhas": [
            2739
          ],
          "atributos": [
            {
              "prop": "padding-top",
              "valor": "24px",
              "linha": 2740
            },
            {
              "prop": "border-radius",
              "valor": "6px 6px 0 0",
              "linha": 2741
            }
          ]
        }
      ],
      "linha": 2735
    },
    {
      "chave": ".req-tabs",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".req-tabs .p-tabview-nav",
          "alvo": "interno",
          "linhas": [
            2744
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "transparent",
              "linha": 2745
            },
            {
              "prop": "border-color",
              "valor": "#E2E8F0",
              "linha": 2746
            }
          ]
        },
        {
          "seletor": ".req-tabs .p-tabview-nav-link",
          "alvo": "interno",
          "linhas": [
            2749
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2750
            },
            {
              "prop": "font-size",
              "valor": "14px",
              "linha": 2751
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 2752
            },
            {
              "prop": "padding",
              "valor": "10px 16px",
              "linha": 2753
            }
          ]
        },
        {
          "seletor": ".req-tabs .p-tabview-panels",
          "alvo": "interno",
          "linhas": [
            2756
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "transparent",
              "linha": 2757
            },
            {
              "prop": "padding",
              "valor": "16px 0 0",
              "linha": 2758
            }
          ]
        }
      ],
      "linha": 2744
    },
    {
      "chave": ".form-alert",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".form-alert",
          "alvo": "proprio",
          "linhas": [
            2761
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2762
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2763
            },
            {
              "prop": "gap",
              "valor": "8px",
              "linha": 2764
            },
            {
              "prop": "padding",
              "valor": "10px 12px",
              "linha": 2765
            },
            {
              "prop": "border",
              "valor": "1px solid #FECACA",
              "linha": 2766
            },
            {
              "prop": "border-radius",
              "valor": "6px",
              "linha": 2767
            },
            {
              "prop": "background",
              "valor": "#FEF2F2",
              "linha": 2768
            },
            {
              "prop": "color",
              "valor": "#B91C1C",
              "linha": 2769
            },
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2770
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2771
            },
            {
              "prop": "line-height",
              "valor": "20px",
              "linha": 2772
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2773
            }
          ]
        }
      ],
      "linha": 2761
    },
    {
      "chave": ".insumo-layer",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".insumo-layer",
          "alvo": "proprio",
          "linhas": [
            2776
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2777
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2778
            },
            {
              "prop": "gap",
              "valor": "12px",
              "linha": 2779
            },
            {
              "prop": "padding",
              "valor": "16px",
              "linha": 2780
            },
            {
              "prop": "background",
              "valor": "#F1F2F4",
              "linha": 2781
            },
            {
              "prop": "border",
              "valor": "1px solid #E5E7EB",
              "linha": 2782
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 2783
            }
          ]
        },
        {
          "seletor": ".insumo-layer .p-paginator",
          "alvo": "interno",
          "linhas": [
            2786
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2787
            },
            {
              "prop": "border-top",
              "valor": "1px solid #F1F5F9",
              "linha": 2788
            },
            {
              "prop": "border-radius",
              "valor": "0 0 10px 10px",
              "linha": 2789
            },
            {
              "prop": "padding",
              "valor": "6px 12px",
              "linha": 2790
            }
          ]
        }
      ],
      "linha": 2776
    },
    {
      "chave": ".t-title-sm",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".t-title-sm",
          "alvo": "proprio",
          "linhas": [
            2793
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2794
            },
            {
              "prop": "font-size",
              "valor": "16px",
              "linha": 2795
            },
            {
              "prop": "line-height",
              "valor": "24px",
              "linha": 2796
            },
            {
              "prop": "font-weight",
              "valor": "600",
              "linha": 2797
            }
          ]
        }
      ],
      "linha": 2793
    },
    {
      "chave": ".reg-card",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".reg-card",
          "alvo": "proprio",
          "linhas": [
            2800
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#fff",
              "linha": 2801
            },
            {
              "prop": "border",
              "valor": "1px solid #E9EBF2",
              "linha": 2802
            },
            {
              "prop": "border-radius",
              "valor": "10px",
              "linha": 2803
            },
            {
              "prop": "box-shadow",
              "valor": "0 2px 6px rgba(16,24,40,.13)",
              "linha": 2804
            },
            {
              "prop": "column-gap",
              "valor": "16px",
              "linha": 2805
            }
          ]
        }
      ],
      "linha": 2800
    },
    {
      "chave": ".kv",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".kv",
          "alvo": "proprio",
          "linhas": [
            2808
          ],
          "atributos": [
            {
              "prop": "display",
              "valor": "flex",
              "linha": 2809
            },
            {
              "prop": "flex-direction",
              "valor": "column",
              "linha": 2810
            },
            {
              "prop": "gap",
              "valor": "2px",
              "linha": 2811
            }
          ]
        }
      ],
      "linha": 2808
    },
    {
      "chave": ".kv-k",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".kv-k",
          "alvo": "proprio",
          "linhas": [
            2814
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2815
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2816
            },
            {
              "prop": "line-height",
              "valor": "20px",
              "linha": 2817
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2818
            },
            {
              "prop": "color",
              "valor": "#9CA3AF",
              "linha": 2819
            }
          ]
        }
      ],
      "linha": 2814
    },
    {
      "chave": ".kv-v",
      "tipo": "propria",
      "avisos": [],
      "seletores": [
        {
          "seletor": ".kv-v",
          "alvo": "proprio",
          "linhas": [
            2822
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2823
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2824
            },
            {
              "prop": "line-height",
              "valor": "20px",
              "linha": 2825
            },
            {
              "prop": "font-weight",
              "valor": "400",
              "linha": 2826
            },
            {
              "prop": "color",
              "valor": "#212121",
              "linha": 2827
            },
            {
              "prop": "overflow",
              "valor": "hidden",
              "linha": 2828
            },
            {
              "prop": "text-overflow",
              "valor": "ellipsis",
              "linha": 2829
            },
            {
              "prop": "white-space",
              "valor": "nowrap",
              "linha": 2830
            }
          ]
        }
      ],
      "linha": 2822
    },
    {
      "chave": ".filter-panel",
      "tipo": "propria",
      "avisos": [
        {
          "tipo": "duplicada-complementar",
          "titulo": "Declarada em mais de um lugar (sem conflito)",
          "texto": "\".filter-panel__operator .p-dropdown\" aparece 2 vezes (linhas 2843, 2852), cada vez com atributos diferentes. Nada é sobrescrito, mas vale juntar num bloco só.",
          "linhas": [
            2843,
            2852
          ]
        }
      ],
      "seletores": [
        {
          "seletor": ".filter-panel__label",
          "alvo": "proprio",
          "linhas": [
            2833
          ],
          "atributos": [
            {
              "prop": "font-family",
              "valor": "'Geist', sans-serif",
              "linha": 2834
            },
            {
              "prop": "font-size",
              "valor": "11px",
              "linha": 2835
            },
            {
              "prop": "line-height",
              "valor": "16px",
              "linha": 2836
            },
            {
              "prop": "font-weight",
              "valor": "500",
              "linha": 2837
            },
            {
              "prop": "text-transform",
              "valor": "uppercase",
              "linha": 2838
            },
            {
              "prop": "letter-spacing",
              "valor": ".03em",
              "linha": 2839
            },
            {
              "prop": "color",
              "valor": "#6B7280",
              "linha": 2840
            }
          ]
        },
        {
          "seletor": ".filter-panel__operator .p-dropdown",
          "alvo": "interno",
          "linhas": [
            2843,
            2852
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "32px",
              "linha": 2845
            },
            {
              "prop": "border",
              "valor": "1px solid #D9DCE1",
              "linha": 2846
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 2847
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2848
            },
            {
              "prop": "color",
              "valor": "#1F2937",
              "linha": 2849
            },
            {
              "prop": "align-items",
              "valor": "center",
              "linha": 2853
            }
          ]
        },
        {
          "seletor": ".filter-panel__input",
          "alvo": "proprio",
          "linhas": [
            2843
          ],
          "atributos": [
            {
              "prop": "height",
              "valor": "32px",
              "linha": 2845
            },
            {
              "prop": "border",
              "valor": "1px solid #D9DCE1",
              "linha": 2846
            },
            {
              "prop": "border-radius",
              "valor": "4px",
              "linha": 2847
            },
            {
              "prop": "font-size",
              "valor": "13px",
              "linha": 2848
            },
            {
              "prop": "color",
              "valor": "#1F2937",
              "linha": 2849
            }
          ]
        },
        {
          "seletor": ".filter-panel__operator .p-dropdown .p-dropdown-label",
          "alvo": "interno",
          "linhas": [
            2856
          ],
          "atributos": [
            {
              "prop": "padding",
              "valor": "0 8px",
              "linha": 2857
            }
          ]
        },
        {
          "seletor": ".filter-panel__operator .p-dropdown:hover",
          "alvo": "interno",
          "linhas": [
            2860
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#3B82F6",
              "linha": 2864
            },
            {
              "prop": "box-shadow",
              "valor": "0 0 0 3px #EFF6FF",
              "linha": 2865
            }
          ]
        },
        {
          "seletor": ".filter-panel__operator .p-dropdown:focus",
          "alvo": "interno",
          "linhas": [
            2860
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#3B82F6",
              "linha": 2864
            },
            {
              "prop": "box-shadow",
              "valor": "0 0 0 3px #EFF6FF",
              "linha": 2865
            }
          ]
        },
        {
          "seletor": ".filter-panel__input:hover",
          "alvo": "proprio",
          "linhas": [
            2860
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#3B82F6",
              "linha": 2864
            },
            {
              "prop": "box-shadow",
              "valor": "0 0 0 3px #EFF6FF",
              "linha": 2865
            }
          ]
        },
        {
          "seletor": ".filter-panel__input:focus",
          "alvo": "proprio",
          "linhas": [
            2860
          ],
          "atributos": [
            {
              "prop": "border-color",
              "valor": "#3B82F6",
              "linha": 2864
            },
            {
              "prop": "box-shadow",
              "valor": "0 0 0 3px #EFF6FF",
              "linha": 2865
            }
          ]
        },
        {
          "seletor": ".filter-panel__operator-panel .p-dropdown-item.p-highlight",
          "alvo": "interno",
          "linhas": [
            2868
          ],
          "atributos": [
            {
              "prop": "background",
              "valor": "#E9F2FF",
              "linha": 2869
            },
            {
              "prop": "color",
              "valor": "#1d4ed8",
              "linha": 2870
            }
          ]
        }
      ],
      "linha": 2833
    }
  ]
};
