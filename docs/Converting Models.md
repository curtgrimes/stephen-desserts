## Converting models

### New process using Polycam

1. Scan with the "photo" mode in Polycam
1. Use settings Detail = full and Use Object Masking = on.
1. Use the crop tool to crop out the table/floor under the dessert
1. Export as gltf and AirDrop it to the computer, but it really exports as glb
1. Install https://gltf-transform.dev/
1. Optimize it: `gltf-transform optimize path-to-input.glb path-to-output.gltf  --compress draco --texture-compress webp`
1. Center it: `gltf-transform center path-to-input.gltf path-to-output.gltf --pivot below`
