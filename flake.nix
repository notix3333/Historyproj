{
  description = "Local Nix development environment for Historyproj";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            git
            nodejs_20
          ];

          shellHook = ''
            export PROJECT_LOCAL_DEPS="$PWD/.local-deps"

            export NPM_CONFIG_CACHE="$PROJECT_LOCAL_DEPS/npm-cache"
            export NPM_CONFIG_PREFIX="$PROJECT_LOCAL_DEPS/npm-global"
            export npm_config_cache="$NPM_CONFIG_CACHE"
            export npm_config_prefix="$NPM_CONFIG_PREFIX"

            export COREPACK_HOME="$PROJECT_LOCAL_DEPS/corepack"
            export PNPM_HOME="$PROJECT_LOCAL_DEPS/pnpm-home"
            export PNPM_STORE_PATH="$PROJECT_LOCAL_DEPS/pnpm-store"
            export YARN_CACHE_FOLDER="$PROJECT_LOCAL_DEPS/yarn-cache"

            export XDG_CACHE_HOME="$PROJECT_LOCAL_DEPS/xdg-cache"
            export XDG_CONFIG_HOME="$PROJECT_LOCAL_DEPS/xdg-config"
            export XDG_DATA_HOME="$PROJECT_LOCAL_DEPS/xdg-data"
            export PLAYWRIGHT_BROWSERS_PATH="$PROJECT_LOCAL_DEPS/ms-playwright"

            mkdir -p \
              "$NPM_CONFIG_CACHE" \
              "$NPM_CONFIG_PREFIX" \
              "$COREPACK_HOME" \
              "$PNPM_HOME" \
              "$PNPM_STORE_PATH" \
              "$YARN_CACHE_FOLDER" \
              "$XDG_CACHE_HOME" \
              "$XDG_CONFIG_HOME" \
              "$XDG_DATA_HOME" \
              "$PLAYWRIGHT_BROWSERS_PATH"

            export PATH="$PWD/node_modules/.bin:$NPM_CONFIG_PREFIX/bin:$PNPM_HOME:${pkgs.nodejs_20}/bin:${pkgs.git}/bin:$PATH"

            if [ -t 1 ]; then
              echo "Nix shell ready. Install deps with: npm ci"
              echo "Start dev server with: npm run dev"
            fi
          '';
        };
      }
    );
}
