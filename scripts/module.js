Hooks.on("diceSoNiceReady", (dice3d) => {
    dice3d.addSystem({ id: "voyeur", name: "(+)Voyeur", group: "Voyeur Conejo" }, "default");
    dice3d.addSystem({ id: "artDeco", name: "ArtDeco", group: "Voyeur Conejo" }, "default");
    dice3d.addSystem({ id: "carrion", name: "Carrion", group: "Voyeur Conejo" }, "default");
    dice3d.addDicePreset({                
        type: 'd6',
        modelFile: 'modules/vc-customdices/models/voyeur/d6-voyeur.glb',
        system: 'voyeur'
    });
    dice3d.addDicePreset({                
        type: 'd6',
        modelFile: 'modules/vc-customdices/models/artDeco/d6-artDeco.glb',
        system: 'artDeco'
    });

    //CARRION
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
});