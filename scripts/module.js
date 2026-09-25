Hooks.on("diceSoNiceReady", (dice3d) => {
    dice3d.addSystem({ id: "carrion", name: "Carrion", group: "Voyeur Conejo" }, "default");
    dice3d.addSystem({ id: "urik", name: "Urik", group: "Voyeur Conejo" }, "default");
    dice3d.addSystem({ id: "urikV2", name: "UrikV2", group: "Voyeur Conejo" }, "default");

    //CARRION
    dice3d.addDicePreset({                
        type: 'dc',
        modelFile: 'modules/vc-customdices/models/carrion/dc-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd2',
        modelFile: 'modules/vc-customdices/models/carrion/d2-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd4',
        modelFile: 'modules/vc-customdices/models/carrion/d4-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd6',
        modelFile: 'modules/vc-customdices/models/carrion/d6-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd8',
        modelFile: 'modules/vc-customdices/models/carrion/d8-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd10',
        modelFile: 'modules/vc-customdices/models/carrion/d10-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd12',
        modelFile: 'modules/vc-customdices/models/carrion/d12-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd20',
        modelFile: 'modules/vc-customdices/models/carrion/d20-carrion.glb',
        system: 'carrion'
    });
    dice3d.addDicePreset({                
        type: 'd100',
        modelFile: 'modules/vc-customdices/models/carrion/d100-carrion.glb',
        system: 'carrion'
    });

    //URIK
    dice3d.addDicePreset({                
        type: 'dc',
        modelFile: 'modules/vc-customdices/models/urik/dc-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd2',
        modelFile: 'modules/vc-customdices/models/urik/d2-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd4',
        modelFile: 'modules/vc-customdices/models/urik/d4-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd6',
        modelFile: 'modules/vc-customdices/models/urik/d6-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd8',
        modelFile: 'modules/vc-customdices/models/urik/d8-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd10',
        modelFile: 'modules/vc-customdices/models/urik/d10-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd20',
        modelFile: 'modules/vc-customdices/models/urik/d20-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd12',
        modelFile: 'modules/vc-customdices/models/urik/d12-urik.glb',
        system: 'urik'
    });
    dice3d.addDicePreset({                
        type: 'd100',
        modelFile: 'modules/vc-customdices/models/urik/d100-urik.glb',
        system: 'urik'
    });

    //URIKV2
    dice3d.addDicePreset({                
        type: 'dc',
        modelFile: 'modules/vc-customdices/models/urikV2/dc-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd2',
        modelFile: 'modules/vc-customdices/models/urikV2/d2-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd4',
        modelFile: 'modules/vc-customdices/models/urikV2/d4-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd6',
        modelFile: 'modules/vc-customdices/models/urikV2/d6-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd8',
        modelFile: 'modules/vc-customdices/models/urikV2/d8-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd10',
        modelFile: 'modules/vc-customdices/models/urikV2/d10-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd12',
        modelFile: 'modules/vc-customdices/models/urikV2/d12-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd20',
        modelFile: 'modules/vc-customdices/models/urikV2/d20-urikV2.glb',
        system: 'urikV2'
    });
    dice3d.addDicePreset({                
        type: 'd100',
        modelFile: 'modules/vc-customdices/models/urikV2/d100-urikV2.glb',
        system: 'urikV2'
    });
});