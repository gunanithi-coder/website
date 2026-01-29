"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const { x, y } = state.mouse;
    // Interactive rotation based on mouse position
    meshRef.current.rotation.x = y * 0.5;
    meshRef.current.rotation.y = x * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial 
          color="#1e40af" 
          attach="material" 
          distort={0.3} 
          speed={1.5} 
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
        <InteractiveSphere />
      </Canvas>
    </div>
  );
}