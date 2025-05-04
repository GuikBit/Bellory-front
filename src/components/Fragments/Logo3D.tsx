import { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei';

// Componente que carrega e exibe o modelo GLB
function Model({ isInteracting, scale, ...props }:{isInteracting: boolean, scale: number}) {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF('/logoBarbearia3Dv2.glb');

  // Clone a cena para evitar modificar o cache de useGLTF se o componente for montado várias vezes
  // e ajuste as propriedades do clone.
  const clonedScene = useRef(scene.clone());

  // --- Animações Embutidas (se houver) ---
//   const { actions } = useAnimations(animations, group);

  // --- Efeito para ajustar a posição e rotação inicial ---
  useEffect(() => {
    if (group.current) {
      // --- Ajustar Rotação Inicial ---
      // Você provavelmente precisa girar no eixo Y (para esquerda/direita)
      // Use Math.PI para 180 graus, Math.PI / 2 para 90 graus, etc.
      // Ajuste o valor até que o modelo esteja virado para a frente.
      group.current.rotation.y = Math.PI / 2; // Exemplo: Gira 90 graus no eixo Y
      // group.current.rotation.x = Math.PI / 4; // Exemplo: Gira 45 graus no eixo X se necessário

      // Se preferir definir todas as rotações de uma vez (em radianos):
      // group.current.rotation.set(0, Math.PI / 2, 0); // Rotação (X, Y, Z)

      // --- Ajustar Posição Inicial (se necessário) ---
      // Se o modelo estiver descentralizado ou fora de vista.
      // group.current.position.set(0, 0, 0); // Exemplo: Centraliza na origem

      // --- Ajustar Escala (se necessário, embora você já tenha scale={1.0}) ---
      // group.current.scale.set(1.5, 1.5, 1.5); // Exemplo: Aumenta o tamanho
    }
  }, [group, clonedScene]); // Dependência do group e clonedScene para garantir que roda após o carregamento

  // --- Animação de Oscilação Suave ---
  useFrame((state) => {
    if (group.current && !isInteracting) {
      const t = state.clock.getElapsedTime();

      const amplitudeX = 0.7;
      const amplitudeY = 0.6;

      const speedX = 0.7;
      const speedY = 0.6;

      // Aplica rotação suave *adicional* aos eixos X e Y
      // É importante que essa rotação seja *aplicada em cima* da rotação inicial
      // Se você estiver usando `rotation.set` no useEffect, talvez precise
      // recalcular a rotação total aqui, mas aplicar diretamente assim geralmente funciona
      // para adicionar uma oscilação sobre a pose inicial.

      // Salve a rotação inicial para aplicar a oscilação em cima dela, se necessário
      // Exemplo simplificado, pode precisar de ajuste dependendo de como você define a rotação inicial
       const initialRotationY = Math.PI / 2; // Use o mesmo valor do useEffect
       const initialRotationX = 0; // Use o mesmo valor do useEffect
       group.current.rotation.y = initialRotationY + Math.sin(t * speedX) * amplitudeX;
       group.current.rotation.x = initialRotationX + Math.cos(t * speedY) * amplitudeY;

       // Se a rotação inicial for complexa ou definida de outra forma, talvez precise
       // trabalhar com quaternions ou aplicar a oscilação a um grupo pai do seu modelo.
    }
  });

  return <primitive ref={group} object={clonedScene.current} dispose={null} scale={scale} {...props} />;
}

// Componente principal que configura a cena 3D
export default function Logo3D({scale}:{scale: number}) {
  const [isInteracting, setIsInteracting] = useState(false);

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };

  return (
    <div className="w-100 h-100 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 40, 40]} intensity={5} />

          <Model isInteracting={isInteracting} scale={scale} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            onStart={handleInteractionStart}
            onEnd={handleInteractionEnd}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/logoBarbearia3D.glb');