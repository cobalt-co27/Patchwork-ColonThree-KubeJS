ServerEvents.recipes(event => {
    function crusher(input, output, time) {
        event.custom({
            "type": "neepmeat:grinding",
            "input": input,
            "output": output,
            "processtime": time
        })
    }

    event.remove({ id: "ae2:transform/fluix_crystals" })
    event.remove({ id: "ae2:transform/fluix_crystal" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })
    event.remove({ id: "" })

    // Fluix
    event.remove({ id: "spectrum:mod_integration/ae2/fusion_shrine/fluix_crystal" })
    event.custom({
        "type": "lib39:soaking",
        "ingredients": [{ "item": "ae2:charged_certus_quartz_crystal" }],
        "catalyst": { "fluid": "spectrum:mud" },
        "result": { "item": "ae2:fluix_crystal" },
        "time": 10
    })
    event.custom({
        "type": "lib39:soaking",
        "ingredients": [{ "item": "ae2:charged_certus_quartz_crystal" }],
        "catalyst": { "fluid": "neepmeat:pinkdrink" },
        "result": { "item": "ae2:fluix_crystal" },
        "time": 10
    })
    event.custom({
        "type": "lib39:soaking",
        "ingredients": [{ "item": "ae2:charged_certus_quartz_crystal" }],
        "catalyst": { "fluid": "yttr:void" },
        "result": { "item": "ae2:fluix_crystal" },
        "time": 10
    })

    // Meteorite Compass
    event.remove({ output: "ae2:meteorite_compass" })
    event.shaped(
        "ae2:meteorite_compass",
        [
            " S ",
            "SGS",
            " S "
        ],
        {
            S: "minecraft:smooth_stone",
            G: "#patchwork:basic_gem_shards"
        }
    )

    // Machines
    event.remove({ output: "ae2:inscriber" })
    event.shaped(
        "ae2:inscriber",
        [
            "IPI",
            "M G",
            "IPI"
        ],
        {
            I: "yttr:xl_iron_ingot",
            P /* is for peenar */:  "minecraft:sticky_piston",
            M: "neepmeat:meat_steel_component",
            G: "#patchwork:basic_gem_shards"
        }
    )
    event.remove({ output: "ae2things:advanced_inscriber" })
    event.shaped(
        "ae2things:advanced_inscriber",
        [
            "IHI",
            "TXR",
            "IHI"
        ],
        {
            I: "#c:iron_ingots",
            H: "minecraft:hopper",
            T: "#botania:terrasteel_ingots",
            X: "ae2:inscriber",
            R: "spectrum:radiating_ender"
        }
    )
    event.remove({ output: "ae2:charger" })
    event.shaped(
        "ae2:charger",
        [
            "ICI",
            "G  ",
            "ICI"
        ],
        {
            I: "yttr:xl_iron_ingot",
            C: "yttr:cuprosteel_ingot",
            G: "#patchwork:basic_gem_shards"
        }
    )

    // Dusts
    crusher(
        { "resource": "ae2:sky_stone_block", "amount": 1 },
        { "resource": "ae2:sky_dust", "min": 1, "max": 1 },
        20
    )
    crusher(
        { "resource": "ae2:certus_quartz_crystal", "amount": 1 },
        { "resource": "ae2:certus_quartz_dust", "min": 1, "max": 1 },
        20
    )
    crusher(
        { "resource": "ae2:charged_certus_quartz_crystal", "amount": 1 },
        { "resource": "ae2:certus_quartz_dust", "min": 1, "max": 1 },
        20
    )
    crusher(
        { "resource": "ae2:fluix_crystal", "amount": 1 },
        { "resource": "ae2:fluix_dust", "min": 1, "max": 1 },
        20
    )
    crusher(
        { "resource": "neepmeat:crushed_ender_pearl", "amount": 1 },
        { "resource": "ae2:ender_dust", "min": 1, "max": 1 },
        20
    )
})

ServerEvents.tags("item", event => {
    event.add("yttr:void_immune", "ae2:charged_certus_quartz_crystal")
    event.add("yttr:void_immune", "ae2:fluix_crystal")

    event.add("patchwork:basic_gem_shards", ["minecraft:amethyst_shard", "spectrum:topaz_shard", "spectrum:citrine_shard"])
    event.add("patchwork:basic_gem_shards/amethyst", "minecraft:amethyst_shard")
    event.add("patchwork:basic_gem_shards/topaz", "spectrum:topaz_shard")
    event.add("patchwork:basic_gem_shards/citrine", "spectrum:citrine_shard")
})
