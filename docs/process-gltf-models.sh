#!/usr/bin/env bash

set -euo pipefail

# ---- dependency check -------------------------------------------------------

if ! command -v gltf-transform >/dev/null 2>&1; then
  echo "Error: gltf-transform is not installed or not on PATH."
  echo
  echo "Install it with:"
  echo "  npm install -g @gltf-transform/cli"
  exit 1
fi

# ---- argument validation ----------------------------------------------------

if [[ $# -ne 2 ]]; then
  echo "Usage:"
  echo "  $0 <input-directory> <output-directory>"
  exit 1
fi

INPUT_DIR="$1"
OUTPUT_DIR="$2"
TMP_DIR="$(mktemp -d)"

shopt -s nullglob

# ---- main loop --------------------------------------------------------------

for INPUT_PATH in "$INPUT_DIR"/*.glb; do
  FILE_NAME="$(basename "$INPUT_PATH")"
  BASE_NAME="${FILE_NAME%.glb}"

  DEST_DIR="$OUTPUT_DIR/$BASE_NAME"
  FINAL_OUTPUT="$DEST_DIR/$BASE_NAME.gltf"
  OPTIMIZED_GLTf="$TMP_DIR/$BASE_NAME.optimized.gltf"

  echo "▶ Processing: $FILE_NAME"

  mkdir -p "$DEST_DIR"

  # 1. Optimize (GLB → GLTF)
  gltf-transform optimize \
    "$INPUT_PATH" \
    "$OPTIMIZED_GLTf" \
    --compress draco \
    --texture-compress webp

  # 2. Center (pivot below)
  gltf-transform center \
    "$OPTIMIZED_GLTf" \
    "$FINAL_OUTPUT" \
    --pivot below

  echo "✔ Wrote: $FINAL_OUTPUT"
  echo
done

rm -rf "$TMP_DIR"

echo "🎉 All models processed successfully."