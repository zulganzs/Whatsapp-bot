import db from '../../lib/database.js'
export async function before(m) {
    try {
    let user = db.data.users[m.sender]
    if (!user) return !0
    //Health
    if (user.health > 100) {
        user.health = 100;
    }
    if (user.health < 0) {
        user.health = 0;
    }

    //stamina
    if (user.stamina > 100) {
        user.stamina = 100;
    }
    if (user.stamina < 0) {
        user.stamina = 0;
    }

    //money
    if (user.money < 0) {
        user.money = 0;
    }

    //Sword                            
    if (user.sword > 0) {
        if (user.sworddurability < 1) {
            user.sworddurability = 30
            user.sword -= 1
        }
    }
    if (user.sword == 0) {
        user.sworddurability = 0
    }

    //pickaxe
    if (user.pickaxe > 0) {
        if (user.pickaxedurability < 1) {
            user.pickaxedurability = 30
            user.pickaxe -= 1
        }
    }
    if (user.pickaxe == 0) {
        user.pickaxedurability = 0
    }

    //armor
    if (user.armor > 0) {
        if (user.armordurability < 1) {
            user.armordurability = 30
            user.armor -= 1
        }
    }
    if (user.armor == 0) {
        user.armordurability = 0
    }
    //bow
    if (user.bow > 0) {
        if (user.bowdurability < 1) {
            user.bowdurability = 30
            user.bow -= 1
        }
    }
    } catch (e) {
        console.log(e)
    }
}