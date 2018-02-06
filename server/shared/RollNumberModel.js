import WinType from './WinType';

class RollNumberModel {

    constructor(num) {
        this.RollNumbers = this.GetRollNumbers(num);
        this.HasBonus = false;
    }

    RandomNumer(max = 6) {
        return Math.floor(Math.random() * max);
    };

    GetRollNumbers(N = 3) {
        return Array.from(new Array(N), () => this.RandomNumer(6));
    }

    GetBonusWin(winChance = 20) {
        return Math.random() < winChance / 100;
    }

    get WinType() {
        const set = new Set(this.RollNumbers);
        this.HasBonus = this.GetBonusWin();
        let WinTypeText = this.HasBonus? WinType.bounsWin + " " : ""
        switch (set.size) {
            case 1:
                WinTypeText += WinType.bigWin;
                break;
            case 2:
                WinTypeText += WinType.smallWin;
                break;
            case 3:
                WinTypeText += WinType.noWin;
                break;
            default:
                WinTypeText += WinType.noWin;
                break;
        }

        return WinTypeText;
    }

    toJson() {
        return {
            RollNumbers: this.RollNumbers,
            WinType: this.WinType,
            HasBonus: this.HasBonus
        }
    }
}

export default RollNumberModel;