# Convert model steps

1. Scan in Qclone
1. Export obj
1. Unzip obj
1. Clean up texture jpg
   1. Resize, crop, add transparency in preview
   1. Open in affinity designer and add background color that blends
   1. Export resized/compressed jpg and save in new folder alongside geometry
1. Scale down 1/100 (80m becomes 8m) (press N to open tray that shows real unit dimensions)
1. Clean up mesh
1. Export gltf, do not compress
1. Convert with draco compression: gltf-pipeline -i public/static/models/2021/death-by-chocolate-peppermint-cookie.gltf -o public/static/models/2021/dessert2.gltf -d
1. Update desserts.ts accordingly
