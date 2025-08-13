# Portal Candeias

Portal Candeias é um aplicativo web moderno para divulgação de lojas, produtos e serviços da cidade de Candeias. Desenvolvido com React, Vite e TypeScript, o projeto tem foco em navegação intuitiva, visual atraente e fácil manutenção.

## Funcionalidades
- Listagem de lojas em destaque
- Visualização de detalhes de cada loja
- Navegação por categorias
- Layout responsivo para desktop e mobile
- Menu de navegação fixo no topo

## Tecnologias Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- Tailwind CSS (classes utilitárias)

## Como executar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Estrutura de Pastas
```
portal-candeias-_-o-shopping-da-sua-cidade/
├── components/        # Componentes reutilizáveis
├── data/              # Dados estáticos (lojas, categorias)
├── pages/             # Páginas do app (ex: StorePage)
├── App.tsx            # Componente principal
├── index.tsx          # Ponto de entrada
├── package.json       # Dependências e scripts
├── tsconfig.json      # Configuração TypeScript
├── vite.config.ts     # Configuração Vite
```

## Personalização
- Para adicionar ou editar lojas, altere o arquivo `data/stores.json`.
- Para editar categorias, altere `data/categories.json`.
- Para modificar estilos, ajuste as classes Tailwind nos componentes.

## Contribuição
Pull requests são bem-vindos! Para sugerir melhorias, abra uma issue ou envie seu PR.

## Licença
Este projeto está sob a licença MIT.
