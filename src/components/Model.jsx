import React, { useRef, useEffect, useState } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { DRACOLoader } from 'three-stdlib';


// Main model component
const Model = ({ modelPath, secRef,loadingProgress,setLoadingProgress,gltf,setGltf }) => {
    const [playAnimationIndex, setPlayAnimationIndex] = useState(null);
    const [theme, setTheme] = useState({
        background: "#0d0d0d",
        lights: "white"
    });
    const [modelPosition, setModelPosition] = useState({
        x: 0,
        y: 2,
        z: 0
    });

    // Debugging: Log when Model component mounts
    useEffect(() => {
        console.log("Model component mounted. modelPath:", modelPath);
    }, [modelPath]);


    const handlePlayAnimation = (index) => {
        setPlayAnimationIndex(index);
    };

    const modelposi = (x, y, z) => {
        gsap.to(modelPosition, {
            x: x,
            y: y,
            z: z,
            duration: 2,
            ease: "expo.out",
            onUpdate: () => {
                setModelPosition({
                    x: modelPosition.x,
                    y: modelPosition.y,
                    z: modelPosition.z
                });
            }
        });
    };

    const directionalLightRef = useRef();

    const changeTheme = (newBackground, newLights) => {
        gsap.to("canvas", {
            backgroundColor: newBackground,
            duration: 0.6,
            
        });

        gsap.to(directionalLightRef.current, {
            color: newLights,
            duration: 1,
        });

        setTheme({
            background: newBackground,
            lights: newLights
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === "section1") {
                            modelposi(-0.5, -2.8, 0.3);
                            handlePlayAnimation(2);
                            changeTheme("#0d0d0d", "white");
                        } else if (entry.target.id === "section2") {
                            modelposi(-0.6, -2.5, 0);
                            handlePlayAnimation(4);
                            changeTheme("#0b0000", "red");
                        } else if (entry.target.id === "section3") {
                            modelposi(2.3, -2.8, 0);
                            handlePlayAnimation(1);
                            changeTheme("#00000b", "#3b6cff");
                        } else if (entry.target.id === "section4") {
                            modelposi(-0.7, -4.5, -2.5);
                            handlePlayAnimation(3);
                            changeTheme("#090600", "gold");
                        } else if (entry.target.id === "section5") {
                            modelposi(-1.1, -2.8, 0);
                            handlePlayAnimation(0);
                            changeTheme("#0d0d0d", "#e7fcfe");
                        }
                         else if (entry.target.id === "section6") {
                            modelposi(-1.2, -2.5, -1);
                            handlePlayAnimation(5);
                            changeTheme("#0b0000", "orange");
                        }
                    }
                });
            },
            {
                threshold: 0.49,
            }
        );

        if (secRef.sectionRef1.current) {
            observer.observe(secRef.sectionRef1.current);
        }
        if (secRef.sectionRef2.current) {
            observer.observe(secRef.sectionRef2.current);
        }
        if (secRef.sectionRef3.current) {
            observer.observe(secRef.sectionRef3.current);
        }
        if (secRef.sectionRef4.current) {
            observer.observe(secRef.sectionRef4.current);
        }
        if (secRef.sectionRef5.current) {
            observer.observe(secRef.sectionRef5.current);
        }
        if (secRef.sectionRef6.current) {
            observer.observe(secRef.sectionRef6.current);
        }

        return () => {
            if (secRef.sectionRef1.current) {
                observer.unobserve(secRef.sectionRef1.current);
            }
            if (secRef.sectionRef2.current) {
                observer.unobserve(secRef.sectionRef2.current);
            }
            if (secRef.sectionRef3.current) {
                observer.unobserve(secRef.sectionRef3.current);
            }
            if (secRef.sectionRef4.current) {
                observer.unobserve(secRef.sectionRef4.current);
            }
            if (secRef.sectionRef5.current) {
                observer.unobserve(secRef.sectionRef5.current);
            }
            if (secRef.sectionRef6.current) {
                observer.unobserve(secRef.sectionRef6.current);
            }
        };
    }, [secRef]);


    return (
        <>
            
            <Canvas
                shadows={true}
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundColor: theme.background,
                    position: "fixed",
                }}
            >
                <ambientLight intensity={0.1} />
                <directionalLight
                    position={[0, 2, 0]}
                    intensity={2}
                    color={theme.lights}
                    castShadow={true}
                />
                <spotLight
                    position={[-1, 2, -2]}
                    intensity={1}
                    castShadow={true}
                />
                <spotLight
                    position={[2, 2, -2]}
                    intensity={1}
                    castShadow={true}
                />
                <AnimatedModel 
                    modelPath={modelPath} 
                    gltf={gltf} 
                    setGltf={setGltf} 
                    playAnimationIndex={playAnimationIndex} 
                    modelPosition={modelPosition} 
                    setLoadingProgress={setLoadingProgress} 
                    loadingProgress={loadingProgress} 
                />
            </Canvas>
        </>
    );
};

export default Model;



// Animated model component
const AnimatedModel = ({ gltf,setGltf,modelPath, playAnimationIndex, modelPosition, setLoadingProgress, loadingProgress }) => {
    const modelRef = useRef();
    const mixerRef = useRef();
    const [animations, setAnimations] = useState([]);

    // Debugging: Log when AnimatedModel mounts and modelPath changes
    useEffect(() => {
        console.log("AnimatedModel component mounted. Loading model from:", modelPath);
        const loader = new GLTFLoader();

        // Set up Draco Loader
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        console.log("DracoLoader decoder path set to:", 'https://www.gstatic.com/draco/v1/decoders/');

        loader.setDRACOLoader(dracoLoader); 

        loader.load(
            modelPath,
            (gltfData) => {
                console.log("Model loaded successfully!", gltfData);
                gltfData.scene.rotation.y = Math.PI; // Rotate 180° globally
                setGltf(gltfData);
                console.log("gltf state updated with loaded model.");
            },
            (progress) => {
                // Handle progress here
                if (progress.total > 0) {
                    const loadProgress = (progress.loaded / progress.total) * 100; // Progress as percentage
                    setLoadingProgress(loadProgress);  // Update progress state
                    // console.log(`Loading progress: ${loadProgress.toFixed(2)}%`); // Log progress
                } else {
                    console.log("Loading progress: total is 0, loaded:", progress.loaded);
                }
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        // Cleanup function for GLTFLoader (optional, but good practice if component unmounts quickly)
        return () => {
            // You might want to dispose of the loader or any loaded assets here if necessary
            // For now, simple console log for unmount
            console.log("AnimatedModel component unmounted or modelPath changed, cleaning up loader.");
        };

    }, [modelPath, setLoadingProgress, setGltf]); // Added setGltf to dependencies

    // Debugging: Log when gltf state changes
    useEffect(() => {
        if (gltf) {
            console.log("gltf state in AnimatedModel changed:", gltf);
            if (gltf.animations && gltf.animations.length) {
                mixerRef.current = new AnimationMixer(gltf.scene);
                const loadedAnimations = gltf.animations.map((clip) => {
                    const action = mixerRef.current.clipAction(clip);
                    action.setLoop(THREE.LoopRepeat, Infinity);
                    return action;
                });
                setAnimations(loadedAnimations);  // Store the animation actions
                console.log("Animations initialized:", loadedAnimations.length, "animations found.");
            } else {
                console.log("No animations found in GLTF data.");
            }
        } else {
            console.log("gltf state is null in AnimatedModel.");
        }
    }, [gltf]);

    useFrame((state, delta) => {
        if (mixerRef.current) {
            mixerRef.current.update(delta); 
        }
        // Debugging: Log model position and rotation if needed
        // if (modelRef.current) {
        //     console.log("Model position:", modelRef.current.position.x, modelRef.current.position.y, modelRef.current.position.z);
        // }
    });

    // Debugging: Log when animations or playAnimationIndex changes
    useEffect(() => {
        if (animations.length > 0 && playAnimationIndex !== null) {
            console.log(`Attempting to play animation index: ${playAnimationIndex}`);
            animations.forEach((action) => action.stop());
            const selectedAnimation = animations[playAnimationIndex];
            if (selectedAnimation) {
                selectedAnimation.play();
                console.log(`Animation ${playAnimationIndex} started.`);
            } else {
                console.warn(`Animation at index ${playAnimationIndex} not found.`);
            }
        } else if (animations.length === 0) {
            console.log("No animations available to play yet.");
        } else if (playAnimationIndex === null) {
            console.log("playAnimationIndex is null, no animation triggered.");
        }
    }, [animations, playAnimationIndex]);

    // Debugging: Log render condition
    console.log("Rendering primitive? gltf:", !!gltf, "loadingProgress:", loadingProgress);


    return (
        <>
            {(gltf && loadingProgress >= 99.99) && ( // Changed to >= 99.99 for robustness
                <primitive
                    ref={modelRef}
                    object={gltf.scene}
                    scale={1.99}
                    position={[modelPosition.x, modelPosition.y, modelPosition.z]}
                    castShadow={true}
                    receiveShadow={true}
                />
            )}
            <OrbitControls enabled={false} />
        </>
    );
};
