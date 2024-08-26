{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs
    nodePackages.pnpm
    nixfmt-rfc-style
    dprint
  ];
}
