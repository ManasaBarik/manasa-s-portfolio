import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingOrb = ({ position, color, size = 1, speed = 1, distort = 0.4 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const WireframeGeo = ({ position, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1.2, 1]} position={position}>
        <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
      </Icosahedron>
    </Float>
  );
};

const FloatingRing = ({ position, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[1, 0.02, 16, 100]} position={position}>
        <meshBasicMaterial color={color} transparent opacity={0.12} />
      </Torus>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d4ff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.2} />

        <FloatingOrb position={[-3.5, 2, -2]} color="#00d4ff" size={1.5} speed={0.8} distort={0.3} />
        <FloatingOrb position={[4, -1, -3]} color="#8b5cf6" size={1.2} speed={1.2} distort={0.5} />
        <FloatingOrb position={[0, -3, -4]} color="#f59e0b" size={0.8} speed={0.6} distort={0.2} />

        <WireframeGeo position={[3, 2.5, -2]} color="#00d4ff" />
        <WireframeGeo position={[-4, -2, -3]} color="#8b5cf6" />

        <FloatingRing position={[-2, 0, -3]} color="#00d4ff" />
        <FloatingRing position={[2.5, -2, -4]} color="#8b5cf6" />

        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Scene3D;
