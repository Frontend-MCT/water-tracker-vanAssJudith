class ProgressTracker {
    constructor(options) {
        this.options = options;

        this.currentProgress = []; //dataAccess[this.options.mode].getProgressOfToday() || [];

        this.timerId = null;

        this.percentageRatio = 100 / this.options.dailyGoal;

        this.percentage = document.querySelector(`.${this.options.domRefs.percentage}`);
        this.timeStampHolder = document.querySelector(`.${this.options.domRefs.timeStampHolder}`);
        this.addButton = document.querySelector(`.${this.options.domRefs.addButton}`);

        this.currentGoalHolders = document.querySelectorAll(`.${this.options.domRefs.currentGoal}`);
        this.currentUnitsHolders = document.querySelectorAll(`.${this.options.domRefs.currentUnits}`);

        this.showUserOptions();
        this.updateProgress();

        // afterUpdate: ƒ (newPercentage)
        // dailyGoal: 1539
        // mode: "local"
        // units: "ml"
    }

    updateProgress(newLogging = [null, 900]) {
        this.currentProgress.push(newLogging);
        // this.showTimeStamp(newLogging[0]);

        const oldProgress = Number(this.percentage.innerText),
            newProgress = oldProgress + newLogging[1] * this.percentageRatio;
        
        console.log(newProgress);
        
        let v = oldProgress;
        this.timerId = setInterval(() => {
            this.percentage.innerText = v;
            if (v >= newProgress) {
                clearInterval(this.timerId);
            }
            v++;
        }, 16); // 1000ms / 60 frames (/s) = 16ms/fr
    }

    showUserOptions() {
        for (const g of this.currentGoalHolders) {
            g.innerHTML = this.options.dailyGoal;
        }
        for (const u of this.currentUnitsHolders) {
            u.innerHTML = this.options.units;
        } 
    }
}