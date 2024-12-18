## Converting models

### New process using Polycam

1. Scan with the "photo" mode in Polycam
1. Use settings Detail = full and Use Object Masking = on.
1. Use the crop tool to crop out the table/floor under the dessert
1. Export as gltf and AirDrop it to the computer, but it really exports as glb
1. Convert to gltf and compress: `gltf-pipeline -i path-to-glb.glb -o path-to-gltf.gltf -d`
1. If the file size is too large (>900 KB ish) compress the textures:
   1. `gltf-pipeline -i path-to-glb.glb -o output.gltf --separate`
   1. Compress the separate JPG files but keep them the same dimensions
   1. `gltf-pipeline -i path-to-gltf.gltf -o path-to-gltf.gltf -d`

### Old process using Qclone/Blender

1. Scan in Qclone
1. Export obj
1. Unzip obj
1. Clean up texture jpg
   1. Resize, crop, add transparency in preview
   1. Open in affinity designer and add background color that blends
   1. Export resized/compressed jpg and save in new folder alongside geometry
1. Open model in blender
1. File import obj
1. Scale down 1/10 (80m becomes 8m) (press N to open tray that shows real unit dimensions)
1. move model to origin 0,0,0
1. Clean up mesh
   1. Edit mode > "A" to select all > Mesh > clean up > decimate
   1. Mesh > shading > smooth edges
1. UV editing button at top
   1. Image > Open, open file
   1. hit "A" to select all the UVs
   1. "S" scale, "G" grab, "S" > "Y" scale Y axis
1. Apply the material to the object
   1. Select the object
   1. Material pane
   1. Enable "use nodes" if not already enabled
   1. Color = image texture
   1. Choose file
   1. Metallic = 0, Specular = 0.5
1. Export gltf, do not compress
1. Convert with draco compression: gltf-pipeline -i public/static/models/2021/death-by-chocolate-peppermint-cookie.gltf -o public/static/models/2021/dessert2.gltf -d
1. Update desserts.ts accordingly
