let assetsId = [] //put 0 items if you want all assets
let maxPrize = 50

let printAllitems = function(items){
    for(itemId in items){
        let name = (items[itemId][0])
        let prize = (items[itemId][2])
        if (assetsId.length > 0){if (!(assetsId.includes(parseInt(itemId)))){continue}}
        if (!(prize<maxPrize && prize>0)){continue}
        console.log(prize, name)
        
        //do something with item id here
        ///////////////////////////////
        //request your api for buy limited
        fetch(`https://mybuyapi.com/limited?id=${itemId}`)
        .then(response => response.json())
        .then(data => {console.log(data);})
        .catch(error => console.error(error)); 
    }
    console.log("sniper running By snyderDev")
}



generate_item_array_from_item_activity = (e)=> {
    var t, a, i, r, _, s, o, n, l, c = [];
    for (t in e)
        Array.isArray(e[t]) && item_details.hasOwnProperty(t) && !unobtainable_item_ids.includes(parseInt(t)) && (a = e[t][0],
        i = "https://www.roblox.com/catalog/" + t,
        r = 0 < e[t][2] ? e[t][2] : "-",
        s = 0 < (_ = e[t][3]) ? Math.round(r / _ * 100) : 100,
        l = 0 < (o = null == item_details[t][5] ? _ : item_details[t][6]) ? Math.round(r / o * 100) : 100,
        n = e[t][1],
        l = use_value_based_deal_calculation ? 100 - l : 100 - s,
        c.push({
            id: parseInt(t),
            timestamp: n,
            name: a,
            url: i,
            best_price: r,
            rap: _,
            deal_percent: l,
            default_value: o
        }));
    printAllitems(e)
    return c
}
