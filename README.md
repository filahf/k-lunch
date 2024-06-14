# K-Lunch R3F

## React App

`npm i`
`npm run dev`

```bash
.
├── public/ # Place external models here. (i.e treat them like any other asset)
├── README.md
└── src/
    ├── app.tsx # our entry point
    ├── components/
    │   ├── html-backdrop.tsx # h1 title
    │   └── klunch-scene.tsx # Camera,Light and Canvas settings
    ├── index.css
    └── main.tsx
```

## Examples

### Box component

Docs: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

```typescript
import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

export function Box(props: MeshProps) {
  const ref = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

   // "Never" set a state within the frame loop
  useFrame((_state, delta) => (ref.current!.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={ref}
      castShadow
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
```

### Turning a glb/gltf model into jsx

Docs: https://github.com/pmndrs/gltfjsx

- Place the model in the `public` folder
- Run the following script (make sure that filename matches your model): `npx gltfjsx your-model.{glb,gltf} --simplify --types --transform --shadows`
- The script will generate a .tsx file. Move that file to your components folder `src/components`
