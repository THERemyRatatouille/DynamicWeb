import React, {useRef, useState, useCallback, forwardRef, useImperativeHandle} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    DiamondPlugin,
    FrameFadePlugin,
    GLTFAnimationPlugin,
    GroundPlugin,
    BloomPlugin,
    TemporalAAPlugin,
    AnisotropyPlugin,
    GammaCorrectionPlugin,
    CanvasSnipperPlugin,

    addBasePlugins,
   

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect } from "react";
import * as THREE from 'three';


function WebgiViewer() {

    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {  // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;
    
        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
        await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)
        // and many more...
    
        // or use this to add all main ones at once.
        await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.
    
        // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        await viewer.addPlugin(CanvasSnipperPlugin)
        
        viewer.renderer.refreshPipeline()
        // Import and add a GLB file.
        const model = await manager.addFromPath("nyc_80s_traffic_light.glb", {
            onLoad: (loadedModel) => {
              // Apply scale to the model
              const scale = 0.1; // Adjust the scale factor as needed
              gsap.to(loadedModel.scene.scale, {
                x: 0.5,  // target scale on the x-axis
                y: 0.5,  // target scale on the y-axis
                z: 0.5,  // target scale on the z-axis
                duration: 1,  // duration of the animation in seconds
                ease: "power1.inOut",  // easing function (you can choose a different one)
              });
            },
          });

        const desiredPosition = new THREE.Vector3(1, 2, 3); // Adjust X, Y, Z coordinates

        // Set the position of the model's scene
        model.scene.position.copy(desiredPosition);
        
        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({controlsEnabled: false});

        window.scrollTo(0,0)
      
        let needsUpdate = true;
        viewer.addEventListener("preFrame", () => {
            if(needsUpdate){
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        })

        // Load an environment map if not set in the glb file
        // await viewer.setEnvironmentMap("./assets/environment.hdr");
    
        // Add some UI for tweak and testing.
       
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);


    return (  
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef}/>
        </div>
    );
}

export default WebgiViewer;