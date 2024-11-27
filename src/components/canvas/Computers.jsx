// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoder from "../Loader";

// const Computers = () => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={1} />
//       <primitive object={computer.scene} />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoder />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           maiPolarAngle={Math.PI / 2}
//         ></OrbitControls>
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default Computers;
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  console.log(isMobile);

  return (
    <group>
      <hemisphereLight
        intensity={2}
        // args={[0xffffff, 0x000000]}
        groundColor="black"
      />
      <pointLight intensity={2} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        intensity={1}
        castShadow
        // shadow-mapSize={1024}
      />
    </group>
  );
};

// Updated CanvasLoader component to render HTML inside the canvas properly using Html from Drei
const CanvasLoader = () => (
  <Html center>
    <div>Loading...</div>
  </Html>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handelMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handelMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [18, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
