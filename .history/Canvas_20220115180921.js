

function Canvas() {
    return (
        <>
            <Canvas
                shadowMap
                colorManagement
                camera={{ position: [5, 5, 10], fov: 30 }}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={0, 10, 0}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10} />
                <pointLight position={[-10, 0, 20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={0.5} />

                <group>
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={0, -3, 0}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <shadowMaterial attach='material' opacity='0.3' />
                        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' speed={3} />
                        <SpinningMesh position={[-2, 1, -5]} color='pink' speed={6} />
                        <SpinningMesh position={[5, 1, -2]} color='pink' speed={6} />
                        <OrbitControls />
                    </mesh>
                </group>
            </Canvas>
        </>
    )
}

export default Canvas
