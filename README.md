
# Сайт о черных кабинетах

This is a code bundle for Сайт о черных кабинетах. The original project is available at https://www.figma.com/design/YRjrMxxRg7HL7otPZ0qUAx/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BE-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D1%85-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82%D0%B0%D1%85.

## Running with Nix

The repository includes a Nix flake for a local Node/Vite development shell. npm caches, npm global prefix, Corepack, pnpm/yarn caches, XDG caches, and Playwright browser downloads are redirected into `.local-deps/` inside this project.

```sh
nix develop
npm ci
npm run dev
```

If you use `direnv`, run this once:

```sh
direnv allow
```

After that, entering the repository will load the same Nix shell automatically.

## Running without direnv

Use `nix develop` manually before installing dependencies or starting the dev server:

```sh
nix develop -c npm ci
nix develop -c npm run dev
```
